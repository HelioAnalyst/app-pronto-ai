"use client"

import { useState, useEffect } from "react"
import { X, Check, Crown, Zap, Star, Sparkles, CreditCard, Smartphone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

type Currency = "USD" | "EUR" | "BRL" | "GBP"
type PlanPeriod = "Weekly" | "Annual"
type PaymentMethod = "card" | "pix" | "mbway" | "paypal" | "applepay" | "googlepay"

interface SubscriptionPlan {
  id: string
  name: string
  period: PlanPeriod
  priceUSD: number
  priceEUR: number
  priceBRL: number
  priceGBP: number
  features: string[]
  popular?: boolean
  limitedOffer?: boolean
  icon: React.ReactNode
}

const plans: SubscriptionPlan[] = [
  {
    id: "premium-weekly",
    name: "Premium",
    period: "Weekly",
    priceUSD: 6.99,
    priceEUR: 6.49,
    priceBRL: 34.99,
    priceGBP: 5.49,
    features: [
      "Respostas ilimitadas",
      "Todos os estilos de tom",
      "Suporte prioritário",
      "Sem anúncios"
    ],
    icon: <Crown className="w-6 h-6" />,
    popular: true
  },
  {
    id: "rizzgpt-weekly",
    name: "RizzGPT",
    period: "Weekly",
    priceUSD: 6.99,
    priceEUR: 6.49,
    priceBRL: 34.99,
    priceGBP: 5.49,
    features: [
      "IA especializada em conquista",
      "Respostas românticas avançadas",
      "Análise de personalidade",
      "Dicas personalizadas"
    ],
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "unlimited-weekly",
    name: "Ilimitado Semanal",
    period: "Weekly",
    priceUSD: 4.99,
    priceEUR: 4.59,
    priceBRL: 24.99,
    priceGBP: 3.99,
    features: [
      "Respostas ilimitadas",
      "Todos os contextos",
      "Histórico completo",
      "Múltiplas conversas"
    ],
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "premium-25-weekly",
    name: "Premium - 25 Respostas",
    period: "Weekly",
    priceUSD: 5.99,
    priceEUR: 5.49,
    priceBRL: 29.99,
    priceGBP: 4.79,
    features: [
      "25 respostas por semana",
      "Todos os estilos",
      "Suporte padrão",
      "Sem anúncios"
    ],
    icon: <Star className="w-6 h-6" />
  },
  {
    id: "limited-offer-weekly",
    name: "Oferta Limitada",
    period: "Weekly",
    priceUSD: 6.99,
    priceEUR: 6.49,
    priceBRL: 34.99,
    priceGBP: 5.49,
    features: [
      "Acesso completo temporário",
      "Todos os recursos Premium",
      "Bônus exclusivos",
      "Válido por tempo limitado"
    ],
    icon: <Crown className="w-6 h-6" />,
    limitedOffer: true
  },
  {
    id: "unlimited-annual",
    name: "Ilimitado Anual",
    period: "Annual",
    priceUSD: 59.99,
    priceEUR: 54.99,
    priceBRL: 299.99,
    priceGBP: 47.99,
    features: [
      "Economia de 30%",
      "Respostas ilimitadas",
      "Todos os recursos",
      "Suporte prioritário VIP",
      "Atualizações gratuitas"
    ],
    icon: <Crown className="w-6 h-6" />,
    popular: true
  },
  {
    id: "unlimited-annual-br",
    name: "Ilimitado Anual BR",
    period: "Annual",
    priceUSD: 49.99,
    priceEUR: 45.99,
    priceBRL: 249.99,
    priceGBP: 39.99,
    features: [
      "Melhor custo-benefício",
      "Respostas ilimitadas",
      "Todos os recursos Premium",
      "Suporte em português",
      "12 meses de acesso"
    ],
    icon: <Zap className="w-6 h-6" />
  }
]

interface PaymentMethodOption {
  id: PaymentMethod
  name: string
  icon: React.ReactNode
  availableFor: Currency[]
  description: string
}

const paymentMethods: PaymentMethodOption[] = [
  {
    id: "card",
    name: "Cartão de Crédito/Débito",
    icon: <CreditCard className="w-5 h-5" />,
    availableFor: ["USD", "EUR", "BRL", "GBP"],
    description: "Visa, Mastercard, Amex"
  },
  {
    id: "pix",
    name: "PIX",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L3 12l9 9 9-9-9-9zm0 2.83L17.17 12 12 17.17 6.83 12 12 5.83z"/>
      </svg>
    ),
    availableFor: ["BRL"],
    description: "Pagamento instantâneo"
  },
  {
    id: "mbway",
    name: "MB WAY",
    icon: <Smartphone className="w-5 h-5" />,
    availableFor: ["EUR"],
    description: "Pagamento móvel PT"
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.01-.3.06-.44l2.38-6.5a.55.55 0 0 1 .52-.36h3.95c2.4 0 4.15-1.61 4.37-4.05.22-2.44-1.37-4.3-3.77-4.3H8.13a.55.55 0 0 0-.52.36L4.23 16.9a.546.546 0 0 0 .52.73h2.95l.62-1.69z"/>
      </svg>
    ),
    availableFor: ["USD", "EUR", "GBP"],
    description: "Pagamento seguro online"
  },
  {
    id: "applepay",
    name: "Apple Pay",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
    availableFor: ["USD", "EUR", "GBP"],
    description: "Pagamento rápido Apple"
  },
  {
    id: "googlepay",
    name: "Google Pay",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-3h3v3h-3zm0-4.5v-6h3v6h-3z"/>
      </svg>
    ),
    availableFor: ["USD", "EUR", "GBP", "BRL"],
    description: "Pagamento rápido Google"
  }
]

interface SubscriptionModalProps {
  open: boolean
  onClose: () => void
}

export function SubscriptionModal({ open, onClose }: SubscriptionModalProps) {
  const [currency, setCurrency] = useState<Currency>("USD")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null)
  const [showPaymentMethods, setShowPaymentMethods] = useState(false)

  useEffect(() => {
    // Detect user location/language for currency
    const userLang = navigator.language.toLowerCase()
    if (userLang.includes("pt-br") || userLang.includes("br")) {
      setCurrency("BRL")
    } else if (userLang.includes("pt") || userLang.includes("pt-pt")) {
      setCurrency("EUR")
    } else if (userLang.includes("en-gb") || userLang.includes("gb")) {
      setCurrency("GBP")
    } else if (userLang.includes("en-us") || userLang.includes("us")) {
      setCurrency("USD")
    }
  }, [])

  const formatPrice = (plan: SubscriptionPlan) => {
    const prices = {
      USD: `$${plan.priceUSD.toFixed(2)}`,
      EUR: `€${plan.priceEUR.toFixed(2)}`,
      BRL: `R$ ${plan.priceBRL.toFixed(2)}`,
      GBP: `£${plan.priceGBP.toFixed(2)}`
    }
    return prices[currency]
  }

  const getCurrencySymbol = () => {
    const symbols = { USD: "$", EUR: "€", BRL: "R$", GBP: "£" }
    return symbols[currency]
  }

  const availablePaymentMethods = paymentMethods.filter(method => 
    method.availableFor.includes(currency)
  )

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    setShowPaymentMethods(true)
    setSelectedPaymentMethod(null)
  }

  const handlePayment = () => {
    if (!selectedPaymentMethod || !selectedPlan) return

    const plan = plans.find(p => p.id === selectedPlan)
    const paymentMethod = paymentMethods.find(pm => pm.id === selectedPaymentMethod)
    
    toast.success(`Processando pagamento via ${paymentMethod?.name}...`)
    
    // Aqui você integraria com Stripe, PayPal, PIX, MB WAY, etc.
    setTimeout(() => {
      toast.info("Integração de pagamento será implementada em breve!")
      setSelectedPlan(null)
      setSelectedPaymentMethod(null)
      setShowPaymentMethods(false)
    }, 2000)
  }

  const handleBackToPlans = () => {
    setShowPaymentMethods(false)
    setSelectedPlan(null)
    setSelectedPaymentMethod(null)
  }

  const weeklyPlans = plans.filter(p => p.period === "Weekly")
  const annualPlans = plans.filter(p => p.period === "Annual")

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border-[#23D4C3]/20 text-white p-0">
        <DialogHeader className="sticky top-0 bg-[#0F172A] border-b border-[#23D4C3]/20 p-4 sm:p-6 z-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] bg-clip-text text-transparent">
              {showPaymentMethods ? "Escolha o Método de Pagamento" : "Escolha seu Plano Premium"}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-[#23D4C3]/10"
            >
              <X className="w-5 h-5 text-[#23D4C3]" />
            </Button>
          </div>
          
          {!showPaymentMethods && (
            <div className="flex gap-2 mt-4 flex-wrap">
              {(([
                { code: "USD", flag: "🇺🇸", label: "USD" },
                { code: "EUR", flag: "🇵🇹", label: "EUR" },
                { code: "BRL", flag: "🇧🇷", label: "BRL" },
                { code: "GBP", flag: "🇬🇧", label: "GBP" }
              ] as const)).map((curr) => (
                <Button
                  key={curr.code}
                  variant={currency === curr.code ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrency(curr.code)}
                  className={`text-xs ${
                    currency === curr.code
                      ? "bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] text-white"
                      : "border-[#23D4C3]/30 text-[#94A3B8] hover:border-[#23D4C3]"
                  }`}
                >
                  {curr.flag} {curr.label}
                </Button>
              ))}
            </div>
          )}
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-8">
          {!showPaymentMethods ? (
            <>
              {/* Weekly Plans */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5 text-[#23D4C3]" />
                  Planos Semanais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weeklyPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`relative p-4 sm:p-6 bg-[#1E293B] border-2 transition-all duration-300 hover:shadow-xl ${
                        plan.popular
                          ? "border-[#3A7BFF] shadow-lg shadow-[#3A7BFF]/20"
                          : plan.limitedOffer
                          ? "border-[#F59E0B] shadow-lg shadow-[#F59E0B]/20"
                          : "border-[#23D4C3]/20 hover:border-[#23D4C3]/50"
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] text-white border-0">
                          Mais Popular
                        </Badge>
                      )}
                      {plan.limitedOffer && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white border-0">
                          Oferta Limitada
                        </Badge>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#3A7BFF]/20 to-[#23D4C3]/20 text-[#23D4C3]">
                          {plan.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-base sm:text-lg text-white">{plan.name}</h4>
                          <p className="text-xs text-[#94A3B8]">{plan.period}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] bg-clip-text text-transparent">
                            {formatPrice(plan)}
                          </span>
                          <span className="text-sm text-[#94A3B8]">/semana</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Check className="w-4 h-4 text-[#23D4C3] shrink-0 mt-0.5" />
                            <span className="text-[#94A3B8]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleSelectPlan(plan.id)}
                        className={`w-full ${
                          plan.popular || plan.limitedOffer
                            ? "bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] hover:from-[#3A7BFF]/90 hover:to-[#23D4C3]/90"
                            : "bg-[#23D4C3] hover:bg-[#23D4C3]/90"
                        } text-white shadow-lg transition-all duration-300`}
                      >
                        Assinar Agora
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Annual Plans */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <Crown className="w-5 h-5 text-[#F59E0B]" />
                  Planos Anuais - Melhor Valor
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {annualPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`relative p-4 sm:p-6 bg-[#1E293B] border-2 transition-all duration-300 hover:shadow-xl ${
                        plan.popular
                          ? "border-[#F59E0B] shadow-lg shadow-[#F59E0B]/20"
                          : "border-[#23D4C3]/20 hover:border-[#23D4C3]/50"
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white border-0">
                          Melhor Valor
                        </Badge>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#F59E0B]/20 to-[#EF4444]/20 text-[#F59E0B]">
                          {plan.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-base sm:text-lg text-white">{plan.name}</h4>
                          <p className="text-xs text-[#94A3B8]">{plan.period}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">
                            {formatPrice(plan)}
                          </span>
                          <span className="text-sm text-[#94A3B8]">/ano</span>
                        </div>
                        <p className="text-xs text-[#23D4C3] mt-1">
                          Equivale a {getCurrencySymbol()}{(plan[`price${currency}` as keyof SubscriptionPlan] as number / 12).toFixed(2)}/mês
                        </p>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Check className="w-4 h-4 text-[#23D4C3] shrink-0 mt-0.5" />
                            <span className="text-[#94A3B8]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleSelectPlan(plan.id)}
                        className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:from-[#F59E0B]/90 hover:to-[#EF4444]/90 text-white shadow-lg transition-all duration-300"
                      >
                        Assinar Agora
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-[#23D4C3]/20">
                <h3 className="text-lg font-semibold mb-4 text-white">Por que assinar o ProntoAI Premium?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#3A7BFF]/20">
                      <Sparkles className="w-5 h-5 text-[#3A7BFF]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">IA Avançada</h4>
                      <p className="text-xs text-[#94A3B8]">Respostas mais inteligentes e personalizadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#23D4C3]/20">
                      <Zap className="w-5 h-5 text-[#23D4C3]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Sem Limites</h4>
                      <p className="text-xs text-[#94A3B8]">Use quantas vezes quiser, sem restrições</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#F59E0B]/20">
                      <Crown className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Recursos Exclusivos</h4>
                      <p className="text-xs text-[#94A3B8]">Acesso a funcionalidades premium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#EF4444]/20">
                      <Star className="w-5 h-5 text-[#EF4444]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Suporte Prioritário</h4>
                      <p className="text-xs text-[#94A3B8]">Atendimento rápido e dedicado</p>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            /* Payment Methods Selection */
            <div className="space-y-6">
              <Button
                variant="ghost"
                onClick={handleBackToPlans}
                className="text-[#23D4C3] hover:text-[#23D4C3]/80 hover:bg-[#23D4C3]/10"
              >
                ← Voltar aos Planos
              </Button>

              {selectedPlan && (
                <Card className="p-4 sm:p-6 bg-[#1E293B] border-[#23D4C3]/20">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Plano Selecionado: {plans.find(p => p.id === selectedPlan)?.name}
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] bg-clip-text text-transparent">
                    {formatPrice(plans.find(p => p.id === selectedPlan)!)}
                  </p>
                </Card>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#23D4C3]" />
                  Métodos de Pagamento Disponíveis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availablePaymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`p-4 cursor-pointer transition-all duration-300 ${
                        selectedPaymentMethod === method.id
                          ? "bg-gradient-to-br from-[#3A7BFF]/20 to-[#23D4C3]/20 border-2 border-[#23D4C3] shadow-lg shadow-[#23D4C3]/20"
                          : "bg-[#1E293B] border-2 border-[#23D4C3]/20 hover:border-[#23D4C3]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${
                          selectedPaymentMethod === method.id
                            ? "bg-[#23D4C3]/30 text-[#23D4C3]"
                            : "bg-[#23D4C3]/10 text-[#94A3B8]"
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-white">{method.name}</h4>
                          <p className="text-xs text-[#94A3B8]">{method.description}</p>
                        </div>
                        {selectedPaymentMethod === method.id && (
                          <Check className="w-5 h-5 text-[#23D4C3]" />
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Payment Security Info */}
              <Card className="p-4 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-[#23D4C3]/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#23D4C3]/20">
                    <Building2 className="w-5 h-5 text-[#23D4C3]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-white mb-1">Pagamento 100% Seguro</h4>
                    <p className="text-xs text-[#94A3B8]">
                      Seus dados são protegidos com criptografia de ponta. Não armazenamos informações de cartão.
                    </p>
                  </div>
                </div>
              </Card>

              <Button
                onClick={handlePayment}
                disabled={!selectedPaymentMethod}
                className="w-full bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] hover:from-[#3A7BFF]/90 hover:to-[#23D4C3]/90 text-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-6 text-lg"
              >
                {selectedPaymentMethod ? "Finalizar Pagamento" : "Selecione um Método de Pagamento"}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
