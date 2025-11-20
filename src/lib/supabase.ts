import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Verificar se as credenciais estão configuradas
const hasCredentials = supabaseUrl && supabaseAnonKey;

// Criar cliente apenas se as credenciais existirem
export const supabase = hasCredentials 
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null;

// Função para criar cliente com verificação
export function createClient() {
  if (!hasCredentials) {
    console.warn('Supabase credentials not configured. Using mock data.');
    return null;
  }
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// Tipos do banco de dados
export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
  updated_at: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  responses_limit: number;
  features: string[];
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'trial' | 'active' | 'expired' | 'cancelled';
  responses_used: number;
  responses_limit: number;
  started_at: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface ResponseHistory {
  id: string;
  user_id: string;
  subscription_id: string;
  image_url?: string;
  response_text: string;
  created_at: string;
}
