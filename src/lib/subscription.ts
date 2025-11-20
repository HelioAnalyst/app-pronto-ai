import { supabase, Subscription } from './supabase';

export async function checkUserLimit(userId: string): Promise<{
  canUse: boolean;
  subscription: Subscription | null;
  message?: string;
}> {
  try {
    // Buscar assinatura ativa do usuário
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'trial')
      .or('status.eq.active')
      .single();

    if (error || !subscription) {
      return {
        canUse: false,
        subscription: null,
        message: 'Nenhuma assinatura encontrada. Por favor, faça upgrade.',
      };
    }

    // Verificar se ainda tem respostas disponíveis
    if (subscription.responses_limit === -1) {
      // Plano ilimitado
      return {
        canUse: true,
        subscription,
      };
    }

    if (subscription.responses_used >= subscription.responses_limit) {
      return {
        canUse: false,
        subscription,
        message: `Você atingiu o limite de ${subscription.responses_limit} respostas. Faça upgrade para continuar!`,
      };
    }

    return {
      canUse: true,
      subscription,
    };
  } catch (error) {
    console.error('Erro ao verificar limite:', error);
    return {
      canUse: false,
      subscription: null,
      message: 'Erro ao verificar limite. Tente novamente.',
    };
  }
}

export async function incrementResponseUsage(subscriptionId: string): Promise<boolean> {
  try {
    const { error } = await supabase.rpc('increment_response_usage', {
      sub_id: subscriptionId,
    });

    if (error) {
      // Se a função RPC não existir, usar UPDATE direto
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('responses_used')
        .eq('id', subscriptionId)
        .single();

      if (subscription) {
        await supabase
          .from('subscriptions')
          .update({ 
            responses_used: subscription.responses_used + 1,
            updated_at: new Date().toISOString()
          })
          .eq('id', subscriptionId);
      }
    }

    return true;
  } catch (error) {
    console.error('Erro ao incrementar uso:', error);
    return false;
  }
}

export async function createTrialSubscription(userId: string): Promise<Subscription | null> {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .insert({
        user_id: userId,
        plan_id: 'trial',
        status: 'trial',
        responses_used: 0,
        responses_limit: 3,
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar trial:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Erro ao criar trial:', error);
    return null;
  }
}

export async function upgradeSubscription(
  userId: string,
  planId: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Buscar o plano
    const { data: plan, error: planError } = await supabase
      .from('plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError || !plan) {
      return {
        success: false,
        message: 'Plano não encontrado.',
      };
    }

    // Buscar assinatura atual
    const { data: currentSub } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (currentSub) {
      // Atualizar assinatura existente
      const { error: updateError } = await supabase
        .from('subscriptions')
        .update({
          plan_id: planId,
          status: 'active',
          responses_used: 0,
          responses_limit: plan.responses_limit,
          updated_at: new Date().toISOString(),
        })
        .eq('id', currentSub.id);

      if (updateError) {
        return {
          success: false,
          message: 'Erro ao atualizar assinatura.',
        };
      }
    } else {
      // Criar nova assinatura
      const { error: insertError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: userId,
          plan_id: planId,
          status: 'active',
          responses_used: 0,
          responses_limit: plan.responses_limit,
        });

      if (insertError) {
        return {
          success: false,
          message: 'Erro ao criar assinatura.',
        };
      }
    }

    return {
      success: true,
      message: `Upgrade para o plano ${plan.name} realizado com sucesso!`,
    };
  } catch (error) {
    console.error('Erro ao fazer upgrade:', error);
    return {
      success: false,
      message: 'Erro ao processar upgrade.',
    };
  }
}
