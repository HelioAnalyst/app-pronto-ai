"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Geral",
      questions: [
        {
          q: "O que é o ProntoAI?",
          a: "ProntoAI é uma ferramenta de inteligência artificial que analisa screenshots de conversas do WhatsApp, Instagram, Tinder e SMS para gerar sugestões de respostas inteligentes e personalizadas."
        },
        {
          q: "Como funciona o ProntoAI?",
          a: "Simples: tire um screenshot da sua conversa, envie para o ProntoAI, e nossa IA analisa o contexto e gera múltiplas sugestões de resposta adequadas ao tom e situação da conversa."
        },
        {
          q: "Quais aplicativos são suportados?",
          a: "O ProntoAI funciona com qualquer aplicativo de mensagens: WhatsApp, Instagram, Tinder, SMS, Telegram, Facebook Messenger e muito mais. Basta enviar o screenshot!"
        },
        {
          q: "Preciso instalar algum aplicativo?",
          a: "Não! O ProntoAI funciona 100% online através do navegador. Você pode acessar de qualquer dispositivo sem precisar instalar nada."
        }
      ]
    },
    {
      category: "Privacidade e Segurança",
      questions: [
        {
          q: "Minhas conversas são privadas?",
          a: "Sim! Levamos sua privacidade muito a sério. Processamos os screenshots de forma segura e NUNCA armazenamos suas mensagens ou conversas. Tudo é processado em tempo real e descartado imediatamente após gerar as sugestões."
        },
        {
          q: "Vocês compartilham meus dados com terceiros?",
          a: "Não. Seus dados nunca são compartilhados, vendidos ou usados para qualquer outro propósito além de gerar suas sugestões de resposta. Veja nossa Política de Privacidade para mais detalhes."
        },
        {
          q: "Como vocês protegem minhas informações?",
          a: "Utilizamos criptografia de ponta a ponta, servidores seguros e seguimos as melhores práticas de segurança da indústria. Seus screenshots são processados de forma temporária e nunca são armazenados."
        }
      ]
    },
    {
      category: "Planos e Pagamentos",
      questions: [
        {
          q: "Quais planos estão disponíveis?",
          a: "Oferecemos diversos planos: Premium Semanal (R$ 19,90), RizzGPT Semanal (R$ 29,90), Ilimitado Anual (R$ 299,90), entre outros. Todos com recursos completos e suporte prioritário."
        },
        {
          q: "Posso cancelar a qualquer momento?",
          a: "Sim! Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. Não há taxas de cancelamento e você continuará tendo acesso até o fim do período pago."
        },
        {
          q: "Quais formas de pagamento são aceitas?",
          a: "Aceitamos cartões de crédito (Visa, Mastercard, American Express), PIX e boleto bancário. Todos os pagamentos são processados de forma segura."
        },
        {
          q: "Há reembolso?",
          a: "Sim, oferecemos garantia de 7 dias. Se não estiver satisfeito, entre em contato e faremos o reembolso integral, sem perguntas."
        }
      ]
    },
    {
      category: "Uso e Funcionalidades",
      questions: [
        {
          q: "Como tirar um bom screenshot?",
          a: "Certifique-se de que a conversa está visível e legível. Inclua contexto suficiente (últimas 3-5 mensagens) para que a IA entenda a situação. Evite screenshots muito escuros ou com texto cortado."
        },
        {
          q: "Posso personalizar o tom das respostas?",
          a: "Sim! Você pode ajustar o tom das sugestões (formal, casual, amigável, profissional, etc.) nas configurações para que as respostas combinem com seu estilo."
        },
        {
          q: "Quantas sugestões recebo por screenshot?",
          a: "Geralmente geramos 3-5 sugestões diferentes para cada screenshot, dando a você várias opções para escolher a resposta perfeita."
        },
        {
          q: "O ProntoAI funciona em outros idiomas?",
          a: "Atualmente focamos em português brasileiro, mas estamos trabalhando para adicionar suporte a inglês, espanhol e outros idiomas em breve."
        }
      ]
    },
    {
      category: "Problemas Técnicos",
      questions: [
        {
          q: "O que fazer se o screenshot não for reconhecido?",
          a: "Certifique-se de que a imagem está clara e legível. Tente tirar um novo screenshot com melhor iluminação e resolução. Se o problema persistir, entre em contato com nosso suporte."
        },
        {
          q: "Por que as sugestões não aparecem?",
          a: "Verifique sua conexão com a internet e tente novamente. Se o problema continuar, limpe o cache do navegador ou tente usar outro navegador. Nosso suporte está disponível para ajudar."
        },
        {
          q: "O ProntoAI funciona em dispositivos móveis?",
          a: "Sim! O ProntoAI é totalmente responsivo e funciona perfeitamente em smartphones e tablets de qualquer sistema operacional."
        }
      ]
    }
  ];

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
              <Link href="/precos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
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
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <HelpCircle size={16} />
            <span>Perguntas Frequentes</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Tire suas{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              dúvidas
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Respostas rápidas para as perguntas mais comuns sobre o ProntoAI
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe de suporte está pronta para ajudar você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Entrar em Contato
              </Button>
            </Link>
            <Link href="/ajuda">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Central de Ajuda
              </Button>
            </Link>
          </div>
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
