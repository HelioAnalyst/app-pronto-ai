"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Check, Zap, Crown, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Currency = "USD" | "EUR" | "BRL" | "GBP";

interface PricingPlan {
  id: string;
  name: string;
  period: "Semanal" | "Anual";
  priceUSD: number;
  priceEUR: number;
  priceBRL: number;
  priceGBP: number;
  features: string[];
  popular?: boolean;
  limitedOffer?: boolean;
  icon: React.ReactNode;
}

export default function PrecosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("BRL");

  const plans: PricingPlan[] = [
    {
      id: "premium-weekly",
      name: "Premium",
      period: "Semanal",
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
      period: "Semanal",
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
      period: "Semanal",
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
      period: "Semanal",
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
      period: "Semanal",
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
      period: "Anual",
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
      period: "Anual",
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
  ];

  const formatPrice = (plan: PricingPlan) => {
    const prices = {
      USD: `$${plan.priceUSD.toFixed(2)}`,
      EUR: `€${plan.priceEUR.toFixed(2)}`,
      BRL: `R$ ${plan.priceBRL.toFixed(2)}`,
      GBP: `£${plan.priceGBP.toFixed(2)}`
    };
    return prices[currency];
  };

  const getCurrencySymbol = () => {
    const symbols = { USD: "$", EUR: "€", BRL: "R$", GBP: "£" };
    return symbols[currency];
  };

  const weeklyPlans = plans.filter(p => p.period === "Semanal");
  const annualPlans = plans.filter(p => p.period === "Anual");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                <Image 
                  src="/icon.svg" 
                  alt="ProntoAI Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ProntoAI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/recursos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Recursos
              </Link>
              <Link href="/precos" className="text-blue-600 font-semibold">
                Preços
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </Link>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Entrar
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
              <Link
                href="/recursos"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="/precos"
                className="block px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preços
              </Link>
              <Link
                href="/sobre"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  Entrar
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Planos para todos os{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              seus objetivos
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades. Sem taxas ocultas, sem surpresas.
          </p>

          {/* Currency Selector */}
          <div className="flex gap-2 justify-center flex-wrap pt-4">
            {[
              { code: "USD" as Currency, flag: "🇺🇸", label: "USD" },
              { code: "EUR" as Currency, flag: "🇵🇹", label: "EUR" },
              { code: "BRL" as Currency, flag: "🇧🇷", label: "BRL" },
              { code: "GBP" as Currency, flag: "🇬🇧", label: "GBP" }
            ].map((curr) => (
              <Button
                key={curr.code}
                variant={currency === curr.code ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrency(curr.code)}
                className={`text-sm ${
                  currency === curr.code
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                    : "border-blue-600/30 text-gray-700 hover:border-blue-600"
                }`}
              >
                {curr.flag} {curr.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Plans */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            Planos Semanais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {weeklyPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-600 shadow-blue-600/20"
                    : plan.limitedOffer
                    ? "border-orange-500 shadow-orange-500/20"
                    : "border-gray-200 hover:border-blue-600/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                {plan.limitedOffer && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      OFERTA LIMITADA
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${
                    plan.popular || plan.limitedOffer
                      ? "bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.period}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{formatPrice(plan)}</span>
                    <span className="text-gray-600">/semana</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/login">
                  <Button className={`w-full ${
                    plan.popular || plan.limitedOffer
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                    Assinar Agora
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Annual Plans */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-orange-500" />
            Planos Anuais - Melhor Valor
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {annualPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? "border-orange-500 shadow-orange-500/20"
                    : "border-gray-200 hover:border-orange-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      MELHOR VALOR
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-400/20 text-orange-600">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.period}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{formatPrice(plan)}</span>
                    <span className="text-gray-600">/ano</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-2">
                    Equivale a {getCurrencySymbol()}{(plan[`price${currency}` as keyof PricingPlan] as number / 12).toFixed(2)}/mês
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/login">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Assinar Agora
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Seu acesso continuará até o fim do período pago.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Minhas conversas são privadas?
              </h3>
              <p className="text-gray-600">
                Absolutamente! Suas conversas são processadas de forma segura e nunca são armazenadas em nossos servidores. Levamos sua privacidade muito a sério.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso mudar de plano depois?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Há garantia de reembolso?
              </h3>
              <p className="text-gray-600">
                Oferecemos garantia de reembolso de 7 dias para todos os planos pagos. Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quais métodos de pagamento são aceitos?
              </h3>
              <p className="text-gray-600">
                Aceitamos cartões de crédito/débito (Visa, Mastercard, Amex), PIX (Brasil), MB WAY (Portugal), PayPal, Apple Pay e Google Pay, dependendo da sua região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experimente o ProntoAI e veja como ele pode transformar suas conversas
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Começar Agora
              <Zap className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image 
                    src="/icon.svg" 
                    alt="ProntoAI Logo" 
                    width={32} 
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xl font-bold text-white">ProntoAI</span>
              </div>
              <p className="text-sm text-gray-400">
                Respostas inteligentes para suas conversas digitais
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/recursos" className="hover:text-white transition-colors">Recursos</Link></li>
                <li><Link href="/precos" className="hover:text-white transition-colors">Preços</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ajuda" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ProntoAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
