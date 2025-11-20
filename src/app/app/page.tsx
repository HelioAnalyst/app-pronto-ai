"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Sparkles, AlertCircle, Check, Crown, Settings, Copy, Image as ImageIcon, Type, Wand2, User, CreditCard, Bell, DollarSign, Lock } from "lucide-react";
import { checkUserLimit, incrementResponseUsage } from "@/lib/subscription";
import Link from "next/link";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase";
import { Navbar } from "@/components/custom/navbar";

// Definir interface Plan localmente
interface Plan {
  id: string;
  name: string;
  price_usd: number;
  price_gbp: number;
  price_eur: number;
  price_brl: number;
  features: string[];
}

// Interface para Tester
interface Tester {
  id: string;
  email: string;
  name: string;
  status: string;
  access_level: string;
  usage_count: number;
  invited_at: string;
  expires_at?: string;
}

// Interface para User
interface UserData {
  id: string;
  email: string;
  name?: string;
  created_at?: string;
}

// Planos estáticos com múltiplas moedas
const STATIC_PLANS: Plan[] = [
  {
    id: "trial",
    name: "Gratuito",
    price_usd: 0,
    price_gbp: 0,
    price_eur: 0,
    price_brl: 0,
    features: [
      "5 respostas gratuitas",
      "Todos os estilos de tom",
      "Suporte básico"
    ]
  },
  {
    id: "basic",
    name: "Básico",
    price_usd: 9.99,
    price_gbp: 7.99,
    price_eur: 8.99,
    price_brl: 49.99,
    features: [
      "50 respostas/mês",
      "Todos os estilos",
      "Suporte prioritário",
      "Sem anúncios"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price_usd: 19.99,
    price_gbp: 15.99,
    price_eur: 17.99,
    price_brl: 99.99,
    features: [
      "Respostas ilimitadas",
      "Todos os estilos de tom",
      "Suporte prioritário VIP",
      "Sem anúncios",
      "Análise avançada"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price_usd: 29.99,
    price_gbp: 23.99,
    price_eur: 26.99,
    price_brl: 149.99,
    features: [
      "Respostas ilimitadas",
      "IA especializada",
      "Suporte 24/7",
      "Sem anúncios",
      "Recursos exclusivos"
    ]
  }
];

const TONE_STYLES = [
  { id: "friendly", name: "Amigável", icon: "😊" },
  { id: "professional", name: "Profissional", icon: "💼" },
  { id: "romantic", name: "Romântico", icon: "❤️" },
  { id: "funny", name: "Engraçado", icon: "😄" },
  { id: "casual", name: "Casual", icon: "👋" },
  { id: "formal", name: "Formal", icon: "🎩" },
];

const CURRENCIES = [
  { code: "USD", symbol: "$", name: "Dólar Americano" },
  { code: "GBP", symbol: "£", name: "Libra Esterlina" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "BRL", symbol: "R$", name: "Real Brasileiro" },
];

const PAYMENT_METHODS = [
  { id: "card", name: "Cartão de Crédito", icon: "💳" },
  { id: "paypal", name: "PayPal", icon: "🅿️" },
  { id: "pix", name: "PIX (Brasil)", icon: "🇧🇷" },
  { id: "bank", name: "Transferência Bancária", icon: "🏦" },
];

// Lista de emails de tester conhecidos
const TESTER_EMAILS = ["helio@test.com", "led@test.com"];

export default function AppPage() {
  const [userId, setUserId] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [subscription, setSubscription] = useState<any>(null);
  const [testerData, setTesterData] = useState<Tester | null>(null);
  const [isTester, setIsTester] = useState<boolean>(false);
  const [plans] = useState<Plan[]>(STATIC_PLANS);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("card");
  
  // Input modes
  const [inputMode, setInputMode] = useState<"image" | "text">("image");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  
  // Response settings
  const [selectedTone, setSelectedTone] = useState<string>("friendly");
  const [responseLength, setResponseLength] = useState<"short" | "medium" | "long">("medium");
  
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  
  // Modals
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  useEffect(() => {
    loadUserFromDatabase();
  }, []);

  async function loadUserFromDatabase() {
    try {
      // PRIMEIRO: Verificar localStorage para sessão persistente
      const storedEmail = localStorage.getItem("userEmail");
      const storedUserId = localStorage.getItem("userId");
      const storedIsTester = localStorage.getItem("isTester") === "true";
      
      console.log("🔍 Verificando localStorage:", { storedEmail, storedUserId, storedIsTester });

      // Se há dados no localStorage E é um email de tester conhecido
      if (storedEmail && TESTER_EMAILS.includes(storedEmail)) {
        console.log("✅ Email de tester detectado no localStorage:", storedEmail);
        
        // Criar dados de tester mock
        const mockTesterData: Tester = {
          id: storedUserId || `tester-${storedEmail.split('@')[0]}`,
          email: storedEmail,
          name: storedEmail.split('@')[0].charAt(0).toUpperCase() + storedEmail.split('@')[0].slice(1),
          status: "active",
          access_level: "premium",
          usage_count: 0,
          invited_at: new Date().toISOString()
        };

        setIsTester(true);
        setTesterData(mockTesterData);
        setUserId(mockTesterData.id);
        setUserEmail(mockTesterData.email);
        setUserName(mockTesterData.name);
        
        // Criar subscription mock para tester
        const testerSubscription = {
          id: `tester-sub-${mockTesterData.id}`,
          user_id: mockTesterData.id,
          plan_id: "premium",
          status: "active",
          responses_used: 0,
          responses_limit: -1, // Ilimitado
          started_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        setSubscription(testerSubscription);
        
        console.log("✅ Tester configurado com sucesso:", mockTesterData);
        return; // RETORNAR AQUI - NÃO FAZER MAIS NENHUMA CHAMADA AO SUPABASE
      }

      // SEGUNDO: Tentar Supabase APENAS se não for tester
      const supabaseClient = createClient();
      
      if (!supabaseClient) {
        console.log("⚠️ Supabase não configurado, usando dados locais");
        setFallbackUser();
        return;
      }
      
      // Buscar usuário autenticado
      const { data: authData, error: authError } = await supabaseClient.auth.getUser();
      
      let currentUserEmail = "";
      let currentUserId = "";
      
      if (authError || !authData.user) {
        console.log("⚠️ Usuário não autenticado via Supabase Auth");
        
        if (storedEmail && storedUserId) {
          currentUserEmail = storedEmail;
          currentUserId = storedUserId;
          console.log("📦 Usando dados do localStorage:", currentUserEmail);
        } else {
          console.log("⚠️ Nenhum usuário encontrado, usando fallback");
          setFallbackUser();
          return;
        }
      } else {
        currentUserEmail = authData.user.email || "";
        currentUserId = authData.user.id;
      }

      // Verificar se o email é de tester ANTES de consultar banco
      if (TESTER_EMAILS.includes(currentUserEmail)) {
        console.log("✅ Email de tester detectado:", currentUserEmail);
        
        const mockTesterData: Tester = {
          id: currentUserId || `tester-${currentUserEmail.split('@')[0]}`,
          email: currentUserEmail,
          name: currentUserEmail.split('@')[0].charAt(0).toUpperCase() + currentUserEmail.split('@')[0].slice(1),
          status: "active",
          access_level: "premium",
          usage_count: 0,
          invited_at: new Date().toISOString()
        };

        setIsTester(true);
        setTesterData(mockTesterData);
        setUserId(mockTesterData.id);
        setUserEmail(mockTesterData.email);
        setUserName(mockTesterData.name);
        
        const testerSubscription = {
          id: `tester-sub-${mockTesterData.id}`,
          user_id: mockTesterData.id,
          plan_id: "premium",
          status: "active",
          responses_used: 0,
          responses_limit: -1,
          started_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        setSubscription(testerSubscription);
        
        // Salvar no localStorage
        localStorage.setItem("userEmail", mockTesterData.email);
        localStorage.setItem("userId", mockTesterData.id);
        localStorage.setItem("isTester", "true");
        
        console.log("✅ Tester configurado e salvo no localStorage");
        return; // RETORNAR AQUI - NÃO FAZER MAIS NENHUMA CHAMADA AO SUPABASE
      }

      // Verificar se o usuário é um tester no banco (APENAS se não for email conhecido)
      try {
        const { data: testerInfo, error: testerError } = await supabaseClient
          .from('testers')
          .select('*')
          .eq('email', currentUserEmail)
          .single();

        if (testerInfo && !testerError) {
          console.log("✅ Usuário TESTER identificado no banco:", testerInfo);
          
          setIsTester(true);
          setTesterData(testerInfo);
          setUserId(testerInfo.id);
          setUserEmail(testerInfo.email);
          setUserName(testerInfo.name || testerInfo.email.split('@')[0]);
          
          const testerSubscription = {
            id: `tester-${testerInfo.id}`,
            user_id: testerInfo.id,
            plan_id: testerInfo.access_level || 'premium',
            status: testerInfo.status === 'active' ? 'active' : 'trial',
            responses_used: testerInfo.usage_count || 0,
            responses_limit: -1,
            started_at: testerInfo.invited_at,
            expires_at: testerInfo.expires_at,
            created_at: testerInfo.invited_at,
            updated_at: testerInfo.invited_at
          };
          
          setSubscription(testerSubscription);
          
          localStorage.setItem("userEmail", testerInfo.email);
          localStorage.setItem("userId", testerInfo.id);
          localStorage.setItem("isTester", "true");
          
          return; // RETORNAR AQUI
        }
      } catch (testerFetchError) {
        console.warn("⚠️ Erro ao verificar tester no banco (ignorado):", testerFetchError);
        // Continuar como usuário normal
      }
      
      // Se não for tester, buscar como usuário normal
      setUserId(currentUserId);
      setUserEmail(currentUserEmail);
      
      try {
        const { data: userData, error: userError } = await supabaseClient
          .from('users')
          .select('name')
          .eq('id', currentUserId)
          .single();
        
        if (userData && !userError) {
          setUserName(userData.name || currentUserEmail.split('@')[0] || "Usuário");
        } else {
          setUserName(currentUserEmail.split('@')[0] || "Usuário");
        }
      } catch (userFetchError) {
        console.warn("⚠️ Erro ao buscar nome do usuário (ignorado):", userFetchError);
        setUserName(currentUserEmail.split('@')[0] || "Usuário");
      }
      
      try {
        const { data: subData, error: subError } = await supabaseClient
          .from('subscriptions')
          .select('*')
          .eq('user_id', currentUserId)
          .single();

        if (subData && !subError) {
          setSubscription(subData);
        } else {
          // Fallback local sem fazer mais chamadas
          const fallbackSub = {
            id: `local-sub-${currentUserId}`,
            user_id: currentUserId,
            plan_id: "trial",
            status: "trial",
            responses_used: 0,
            responses_limit: 5,
            started_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          setSubscription(fallbackSub);
        }
      } catch (subFetchError) {
        console.warn("⚠️ Erro ao buscar subscription (usando fallback local):", subFetchError);
        // Fallback local
        const fallbackSub = {
          id: `local-sub-${currentUserId}`,
          user_id: currentUserId,
          plan_id: "trial",
          status: "trial",
          responses_used: 0,
          responses_limit: 5,
          started_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setSubscription(fallbackSub);
      }
      
      localStorage.setItem("userEmail", currentUserEmail);
      localStorage.setItem("userId", currentUserId);
      localStorage.setItem("isTester", "false");
      
    } catch (error) {
      console.error("❌ Erro geral ao carregar dados (usando fallback):", error);
      setFallbackUser();
    }
  }

  function setFallbackUser() {
    const mockUserId = "demo-user-123";
    setUserId(mockUserId);
    setUserEmail("demo@prontoai.com");
    setUserName("Usuário Demo");
    
    // Criar subscription local sem chamar Supabase
    const fallbackSub = {
      id: `local-sub-${mockUserId}`,
      user_id: mockUserId,
      plan_id: "trial",
      status: "trial",
      responses_used: 0,
      responses_limit: 5,
      started_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setSubscription(fallbackSub);
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleGenerateResponse() {
    if (inputMode === "image" && !imageFile) {
      toast.error("Por favor, envie uma imagem primeiro!");
      return;
    }

    if (inputMode === "text" && !textInput.trim()) {
      toast.error("Por favor, digite o texto da conversa!");
      return;
    }

    // Verificar limite (testers têm ilimitado)
    if (!isTester) {
      // Verificação local primeiro
      if (subscription && subscription.responses_limit !== -1) {
        const remaining = subscription.responses_limit - subscription.responses_used;
        if (remaining <= 0) {
          toast.error("Limite de respostas atingido!");
          setShowUpgradeModal(true);
          return;
        }
      }
    }

    setLoading(true);

    try {
      // Simular análise de IA (em produção, usar OpenAI Vision API)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mockResponses = {
        friendly: [
          "Oi! Tudo bem? Desculpa a demora, estava ocupado. Como você está? 😊",
          "Que legal! Adorei saber disso. Quando podemos nos encontrar?",
          "Haha, muito engraçado! Você sempre me faz rir 😄",
        ],
        professional: [
          "Bom dia. Agradeço pelo contato. Estou à disposição para discutir este assunto.",
          "Entendo sua situação. Vamos agendar uma reunião para tratar disso adequadamente.",
          "Obrigado pela mensagem. Retornarei em breve com uma resposta detalhada.",
        ],
        romantic: [
          "Oi amor! Estava pensando em você agora mesmo ❤️",
          "Você ilumina meu dia! Mal posso esperar para te ver 💕",
          "Cada mensagem sua me faz sorrir. Te amo! 😍",
        ],
        funny: [
          "Hahaha! Você é hilário(a)! 😂 Conta mais!",
          "Isso foi épico! 🤣 Me lembrou daquela vez que...",
          "Você deveria fazer stand-up! Muito bom! 😄",
        ],
        casual: [
          "E aí! Beleza? Tô aqui de boa, e você?",
          "Opa! Valeu pela mensagem. Bora marcar algo?",
          "Fala! Tudo certo por aí? 👊",
        ],
        formal: [
          "Prezado(a), agradeço imensamente pelo contato.",
          "Senhor(a), estou à disposição para quaisquer esclarecimentos.",
          "Cordialmente, retornarei em breve com as informações solicitadas.",
        ],
      };

      const toneResponses = mockResponses[selectedTone as keyof typeof mockResponses] || mockResponses.friendly;
      let randomResponse = toneResponses[Math.floor(Math.random() * toneResponses.length)];

      // Ajustar tamanho da resposta
      if (responseLength === "short") {
        randomResponse = randomResponse.split(".")[0] + ".";
      } else if (responseLength === "long") {
        randomResponse += " Espero que esteja tudo bem com você também. Vamos conversar mais sobre isso em breve!";
      }

      setResponse(randomResponse);

      // Incrementar uso apenas para não-testers
      if (!isTester) {
        // Atualizar localmente
        if (subscription) {
          setSubscription({
            ...subscription,
            responses_used: subscription.responses_used + 1
          });
        }
      } else {
        // Para testers, incrementar usage_count localmente
        if (testerData) {
          setTesterData({
            ...testerData,
            usage_count: (testerData.usage_count || 0) + 1
          });
        }
      }

      toast.success("Resposta gerada com sucesso!");
    } catch (error) {
      toast.error("Erro ao gerar resposta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard(text: string) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => toast.success("Resposta copiada!"))
        .catch(() => {
          fallbackCopy(text);
        });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      toast.success("Resposta copiada!");
    } catch (err) {
      toast.error("Não foi possível copiar. Selecione manualmente.");
    }
    document.body.removeChild(textArea);
  }

  function getPriceForCurrency(plan: Plan): number {
    switch (selectedCurrency) {
      case "USD":
        return plan.price_usd;
      case "GBP":
        return plan.price_gbp;
      case "EUR":
        return plan.price_eur;
      case "BRL":
        return plan.price_brl;
      default:
        return plan.price_usd;
    }
  }

  function getCurrencySymbol(): string {
    return CURRENCIES.find(c => c.code === selectedCurrency)?.symbol || "$";
  }

  function handleUpgradeClick() {
    if (isTester) {
      toast.info("Você é um usuário tester e já tem acesso completo! 🎉");
      return;
    }
    setShowUpgradeModal(true);
  }

  const responsesRemaining = subscription
    ? subscription.responses_limit === -1
      ? "Ilimitado"
      : subscription.responses_limit - subscription.responses_used
    : 0;

  const planDisplayName = isTester && testerData 
    ? `${testerData.access_level.charAt(0).toUpperCase() + testerData.access_level.slice(1)} (Tester)`
    : subscription?.status === "trial" 
      ? "Gratuito" 
      : subscription?.plan_id 
        ? STATIC_PLANS.find(p => p.id === subscription.plan_id)?.name || "Pro"
        : "Pro";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black">
      {/* Header */}
      <Navbar
        responsesRemaining={responsesRemaining}
        isTester={isTester}
        isTrialUser={subscription?.status === "trial"}
        onSettingsClick={() => setShowSettingsModal(true)}
        onUpgradeClick={handleUpgradeClick}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Tester Banner */}
          {isTester && (
            <Card className="p-4 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Check className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold text-green-200">Conta Tester Ativa</h3>
                  <p className="text-sm text-green-300">
                    Você tem acesso completo ao plano {testerData?.access_level} com respostas ilimitadas. 
                    {testerData?.expires_at && ` Acesso válido até ${new Date(testerData.expires_at).toLocaleDateString()}.`}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Trial Banner */}
          {!isTester && subscription?.status === "trial" && (
            <Card className="p-4 bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-amber-600/50 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-200">Período de Teste</h3>
                  <p className="text-sm text-amber-300">
                    Você tem {responsesRemaining} respostas gratuitas restantes. Faça upgrade para
                    continuar usando!
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={handleUpgradeClick}
                  className="bg-amber-600 hover:bg-amber-700 flex-shrink-0"
                >
                  Ver Planos
                </Button>
              </div>
            </Card>
          )}

          {/* Input Mode Selector */}
          <Card className="p-6 bg-zinc-950/80 backdrop-blur-sm border-zinc-900">
            <h2 className="text-xl font-bold mb-4 text-gray-200">Como você quer enviar?</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setInputMode("image")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  inputMode === "image"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-800 bg-black hover:border-zinc-700"
                }`}
              >
                <ImageIcon className={`mx-auto mb-3 ${inputMode === "image" ? "text-blue-400" : "text-gray-500"}`} size={32} />
                <p className={`font-semibold ${inputMode === "image" ? "text-blue-400" : "text-gray-400"}`}>
                  Screenshot
                </p>
                <p className="text-xs text-gray-500 mt-1">Envie uma imagem da conversa</p>
              </button>

              <button
                onClick={() => setInputMode("text")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  inputMode === "text"
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-zinc-800 bg-black hover:border-zinc-700"
                }`}
              >
                <Type className={`mx-auto mb-3 ${inputMode === "text" ? "text-cyan-400" : "text-gray-500"}`} size={32} />
                <p className={`font-semibold ${inputMode === "text" ? "text-cyan-400" : "text-gray-400"}`}>
                  Texto
                </p>
                <p className="text-xs text-gray-500 mt-1">Cole ou digite o texto</p>
              </button>
            </div>
          </Card>

          {/* Input Section */}
          <Card className="p-8 bg-zinc-950/80 backdrop-blur-sm border-zinc-900">
            <h2 className="text-2xl font-bold mb-6 text-gray-200">
              {inputMode === "image" ? "Envie sua conversa" : "Cole o texto da conversa"}
            </h2>

            <div className="space-y-6">
              {inputMode === "image" ? (
                <div className="border-2 border-dashed border-zinc-800 rounded-xl p-8 text-center hover:border-blue-500 transition-colors bg-black">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-64 mx-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500">Clique para trocar a imagem</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="mx-auto text-gray-600" size={48} />
                        <div>
                          <p className="text-lg font-medium text-gray-300">
                            Clique para enviar screenshot
                          </p>
                          <p className="text-sm text-gray-500">
                            WhatsApp, Instagram, Tinder ou SMS
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              ) : (
                <Textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Cole aqui o texto da conversa que você recebeu..."
                  className="min-h-[200px] bg-black border-zinc-800 text-gray-200 placeholder:text-gray-600"
                />
              )}

              {/* Tone Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-200 flex items-center gap-2">
                  <Wand2 size={20} className="text-purple-400" />
                  Escolha o tom da resposta
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {TONE_STYLES.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedTone(tone.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedTone === tone.id
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-zinc-800 bg-black hover:border-zinc-700"
                      }`}
                    >
                      <div className="text-2xl mb-1">{tone.icon}</div>
                      <p className={`text-xs font-medium ${
                        selectedTone === tone.id ? "text-purple-400" : "text-gray-400"
                      }`}>
                        {tone.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Response Length */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Tamanho da resposta</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "short", label: "Curta" },
                    { id: "medium", label: "Média" },
                    { id: "long", label: "Longa" },
                  ].map((length) => (
                    <button
                      key={length.id}
                      onClick={() => setResponseLength(length.id as any)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        responseLength === length.id
                          ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                          : "border-zinc-800 bg-black text-gray-400 hover:border-zinc-700"
                      }`}
                    >
                      {length.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerateResponse}
                disabled={loading || (inputMode === "image" ? !imageFile : !textInput.trim())}
                className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 hover:from-blue-700 hover:via-cyan-600 hover:to-purple-600 text-white py-6 text-lg font-semibold shadow-lg shadow-cyan-500/20"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 animate-spin" size={20} />
                    Gerando resposta mágica...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} />
                    Gerar Resposta Perfeita
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Response Section */}
          {response && (
            <Card className="p-8 bg-gradient-to-br from-blue-900/40 via-cyan-900/40 to-purple-900/40 backdrop-blur-sm border-blue-700/50 shadow-xl shadow-cyan-500/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-200">
                <Sparkles className="text-cyan-400" size={24} />
                Sua resposta sugerida
              </h3>
              <div className="bg-zinc-950 p-6 rounded-xl shadow-lg border border-zinc-900">
                <p className="text-lg text-gray-200 leading-relaxed">{response}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  onClick={() => copyToClipboard(response)}
                  className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600"
                >
                  <Copy className="mr-2" size={16} />
                  Copiar Resposta
                </Button>
                <Button
                  onClick={() => {
                    setResponse("");
                    setImageFile(null);
                    setImagePreview("");
                    setTextInput("");
                  }}
                  variant="outline"
                  className="border-zinc-800 text-gray-300 hover:bg-zinc-900"
                >
                  Nova Análise
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 bg-zinc-950 border-zinc-900">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-200 flex items-center gap-3">
                <Settings className="text-cyan-400" />
                Configurações
              </h2>
              <Button 
                variant="ghost" 
                onClick={() => setShowSettingsModal(false)}
                className="text-gray-400 hover:text-gray-200 hover:bg-zinc-900"
              >
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              {/* User Info */}
              <div className="p-6 bg-black rounded-xl border border-zinc-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">
                      {userName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {userEmail}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-zinc-900 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Plano Atual</p>
                    <p className="text-lg font-bold text-cyan-400">{planDisplayName}</p>
                  </div>
                  <div className="p-4 bg-zinc-900 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Respostas Restantes</p>
                    <p className="text-lg font-bold text-purple-400">{responsesRemaining}</p>
                  </div>
                </div>
              </div>

              {/* Subscription Management */}
              <div className="p-6 bg-black rounded-xl border border-zinc-900">
                <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <CreditCard className="text-green-400" size={20} />
                  Gerenciar Assinatura
                </h3>
                
                {isTester ? (
                  <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <div className="flex items-start gap-3">
                      <Lock className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-green-300 mb-1">
                          Conta Tester - Acesso Completo
                        </p>
                        <p className="text-xs text-green-400">
                          Como usuário tester, você já tem acesso ao plano {testerData?.access_level} com todos os recursos desbloqueados. 
                          Métodos de pagamento e upgrade não estão disponíveis para contas de teste.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-400 mb-4">
                      {subscription?.status === "trial" 
                        ? "Você está no plano gratuito. Faça upgrade para desbloquear recursos ilimitados!"
                        : "Gerencie sua assinatura e métodos de pagamento."}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => {
                          setShowSettingsModal(false);
                          handleUpgradeClick();
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                      >
                        <Crown className="mr-2" size={16} />
                        {subscription?.status === "trial" ? "Fazer Upgrade" : "Mudar Plano"}
                      </Button>
                      {subscription?.status !== "trial" && (
                        <Button
                          variant="outline"
                          className="border-zinc-800 text-gray-300 hover:bg-zinc-900"
                          onClick={() => toast.info("Gerenciamento de pagamento em breve!")}
                        >
                          Gerenciar Pagamento
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Notifications */}
              <div className="p-6 bg-black rounded-xl border border-zinc-900">
                <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <Bell className="text-yellow-400" size={20} />
                  Notificações
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-gray-400">Alertas de limite de uso</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-zinc-700 bg-zinc-900" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-gray-400">Novos recursos e atualizações</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-zinc-700 bg-zinc-900" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-gray-400">Dicas e tutoriais</span>
                    <input type="checkbox" className="w-5 h-5 rounded border-zinc-700 bg-zinc-900" />
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 bg-zinc-950 border-zinc-900">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-200 mb-2">Escolha seu plano</h2>
                <p className="text-gray-400">Desbloqueie todo o potencial do ProntoAI</p>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setShowUpgradeModal(false)}
                className="text-gray-400 hover:text-gray-200 hover:bg-zinc-900"
              >
                ✕
              </Button>
            </div>

            {isTester && (
              <div className="mb-6 p-4 bg-green-900/20 rounded-xl border border-green-500/30">
                <div className="flex items-start gap-3">
                  <Lock className="text-green-400 mt-0.5 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-green-300 mb-1">
                      Você já tem acesso completo!
                    </h3>
                    <p className="text-sm text-green-400">
                      Como usuário tester com plano {testerData?.access_level}, você já possui todos os recursos desbloqueados. 
                      Upgrade e métodos de pagamento não estão disponíveis para contas de teste.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Currency Selector */}
            <div className={`mb-6 p-4 bg-black rounded-xl border border-zinc-900 ${isTester ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="text-green-400" size={20} />
                <h3 className="text-lg font-semibold text-gray-200">Escolha sua moeda</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CURRENCIES.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => !isTester && setSelectedCurrency(currency.code)}
                    disabled={isTester}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedCurrency === currency.code
                        ? "border-green-500 bg-green-500/10"
                        : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <p className={`font-bold ${
                      selectedCurrency === currency.code ? "text-green-400" : "text-gray-400"
                    }`}>
                      {currency.symbol} {currency.code}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{currency.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Plans Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ${isTester ? 'opacity-50' : ''}`}>
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`p-6 bg-black backdrop-blur-sm transition-all ${
                    !isTester && 'hover:scale-105'
                  } ${
                    plan.id === "pro"
                      ? "border-2 border-blue-500 shadow-xl shadow-blue-500/20"
                      : "border border-zinc-900"
                  }`}
                >
                  {plan.id === "pro" && (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      MAIS POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-gray-200">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-200">
                      {getCurrencySymbol()}{getPriceForCurrency(plan).toFixed(2)}
                    </span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    disabled={isTester}
                    className={`w-full ${
                      plan.id === "pro"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        : "bg-zinc-900 hover:bg-zinc-800 text-gray-200"
                    } ${isTester ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => {
                      if (!isTester) {
                        toast.success(`Plano ${plan.name} selecionado! Escolha o método de pagamento abaixo.`);
                      }
                    }}
                  >
                    {isTester ? <><Lock className="mr-2" size={16} />Bloqueado</> : `Escolher ${plan.name}`}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            <div className={`p-6 bg-black rounded-xl border border-zinc-900 ${isTester ? 'opacity-50 pointer-events-none' : ''}`}>
              <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <CreditCard className="text-blue-400" size={20} />
                Método de Pagamento
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => {
                      if (!isTester) {
                        setSelectedPaymentMethod(method.id);
                        toast.success(`${method.name} selecionado!`);
                      }
                    }}
                    disabled={isTester}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPaymentMethod === method.id
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="text-3xl mb-2">{method.icon}</div>
                    <p className={`text-sm font-medium ${
                      selectedPaymentMethod === method.id ? "text-blue-400" : "text-gray-400"
                    }`}>
                      {method.name}
                    </p>
                  </button>
                ))}
              </div>
              <Button
                disabled={isTester}
                className={`w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 text-lg font-semibold ${
                  isTester ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => {
                  if (!isTester) {
                    toast.success("Redirecionando para pagamento seguro...");
                    setTimeout(() => {
                      setShowUpgradeModal(false);
                    }, 1500);
                  }
                }}
              >
                {isTester ? <><Lock className="mr-2" size={20} />Bloqueado para Testers</> : 'Finalizar Assinatura'}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
