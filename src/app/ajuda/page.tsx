"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Book, Smartphone, Shield, CreditCard, Settings, MessageSquare, HelpCircle, Zap, Users, Globe, Lock, Bell, Star, TrendingUp, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AjudaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (categoryTitle: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  const categories = [
    {
      icon: Smartphone,
      title: "Primeiros Passos",
      description: "Aprenda a usar o ProntoAI do zero",
      color: "from-blue-500 to-cyan-400",
      summary: [
        "✓ Crie sua conta em menos de 2 minutos usando email ou redes sociais",
        "✓ Tire um screenshot da conversa que deseja responder",
        "✓ Envie para o ProntoAI e receba 3-5 sugestões de resposta instantâneas",
        "✓ Escolha a resposta que mais combina com você e personalize se necessário",
        "✓ Configure o tom (casual, formal, engraçado) nas preferências"
      ],
      articles: [
        {
          title: "Como criar uma conta",
          description: "Guia completo para criar sua conta e começar a usar o ProntoAI",
          slug: "como-criar-uma-conta"
        },
        {
          title: "Como enviar seu primeiro screenshot",
          description: "Aprenda a capturar e enviar conversas para análise",
          slug: "como-enviar-primeiro-screenshot"
        },
        {
          title: "Entendendo as sugestões de resposta",
          description: "Como interpretar e usar as respostas geradas pela IA",
          slug: "entendendo-sugestoes-resposta"
        },
        {
          title: "Personalizando o tom das respostas",
          description: "Configure o estilo de comunicação que combina com você",
          slug: "personalizando-tom-respostas"
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Usando o ProntoAI",
      description: "Guias de uso avançado e dicas práticas",
      color: "from-purple-500 to-pink-400",
      summary: [
        "✓ Capture screenshots com boa iluminação e texto legível",
        "✓ Inclua contexto suficiente da conversa (últimas 3-5 mensagens)",
        "✓ Funciona com WhatsApp, Instagram, Tinder, LinkedIn e todos os apps",
        "✓ Use em conversas profissionais ajustando o tom para 'formal'",
        "✓ Salve suas respostas favoritas para reutilizar depois"
      ],
      articles: [
        {
          title: "Melhores práticas para screenshots",
          description: "Dicas para obter as melhores sugestões de resposta",
          slug: "melhores-praticas-screenshots"
        },
        {
          title: "Como escolher a resposta ideal",
          description: "Critérios para selecionar a melhor sugestão",
          slug: "como-escolher-resposta-ideal"
        },
        {
          title: "Usando em diferentes apps",
          description: "ProntoAI funciona com todos os apps de mensagem",
          slug: "usando-diferentes-apps"
        },
        {
          title: "Dicas para conversas profissionais",
          description: "Como usar o ProntoAI em contextos de trabalho",
          slug: "dicas-conversas-profissionais"
        },
        {
          title: "Salvando e reutilizando respostas",
          description: "Como criar uma biblioteca de respostas favoritas",
          slug: "salvando-reutilizando-respostas"
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Planos e Pagamentos",
      description: "Informações sobre assinaturas e cobranças",
      color: "from-green-500 to-emerald-400",
      summary: [
        "✓ Plano Gratuito: 10 análises/mês, recursos básicos",
        "✓ Premium Mensal: R$ 19,90 - análises ilimitadas + recursos avançados",
        "✓ Premium Anual: R$ 179,90 (economize 25%) - melhor custo-benefício",
        "✓ Aceitamos cartão de crédito, PIX, PayPal e boleto",
        "✓ Garantia de 7 dias - reembolso total sem perguntas"
      ],
      articles: [
        {
          title: "Planos disponíveis",
          description: "Conheça todos os planos do ProntoAI",
          slug: "planos-disponiveis"
        },
        {
          title: "Como fazer upgrade",
          description: "Passo a passo para mudar de plano",
          slug: "como-fazer-upgrade"
        },
        {
          title: "Métodos de pagamento aceitos",
          description: "Formas de pagamento disponíveis",
          slug: "metodos-pagamento"
        },
        {
          title: "Política de reembolso",
          description: "Como solicitar reembolso",
          slug: "politica-reembolso"
        },
        {
          title: "Cancelamento de assinatura",
          description: "Como cancelar seu plano",
          slug: "cancelamento-assinatura"
        }
      ]
    },
    {
      icon: Shield,
      title: "Privacidade e Segurança",
      description: "Como protegemos seus dados",
      color: "from-red-500 to-orange-400",
      summary: [
        "✓ Criptografia de ponta a ponta em todas as conversas",
        "✓ Seus screenshots são deletados automaticamente após 24h",
        "✓ Não compartilhamos seus dados com terceiros",
        "✓ Servidores seguros certificados ISO 27001",
        "✓ Autenticação de dois fatores (2FA) disponível para proteção extra"
      ],
      articles: [
        {
          title: "Como protegemos suas conversas",
          description: "Medidas de segurança implementadas",
          slug: "protecao-conversas"
        },
        {
          title: "Política de privacidade",
          description: "O que coletamos e por quê",
          slug: "politica-privacidade"
        },
        {
          title: "Segurança dos dados",
          description: "Como seus dados são protegidos",
          slug: "seguranca-dados"
        },
        {
          title: "Exclusão de conta",
          description: "Como deletar permanentemente sua conta",
          slug: "exclusao-conta"
        },
        {
          title: "Autenticação de dois fatores (2FA)",
          description: "Adicione uma camada extra de segurança",
          slug: "autenticacao-2fa"
        }
      ]
    },
    {
      icon: Settings,
      title: "Configurações",
      description: "Personalize sua experiência",
      color: "from-indigo-500 to-purple-400",
      summary: [
        "✓ Altere nome, email, foto de perfil e senha a qualquer momento",
        "✓ Configure o tom padrão: casual, formal, engraçado, romântico ou profissional",
        "✓ Ative/desative notificações push, email e SMS",
        "✓ Gerencie sua assinatura, forma de pagamento e histórico de cobranças",
        "✓ Escolha entre tema claro, escuro ou automático"
      ],
      articles: [
        {
          title: "Configurações de conta",
          description: "Gerencie suas informações pessoais",
          slug: "configuracoes-conta"
        },
        {
          title: "Preferências de resposta",
          description: "Customize o estilo das sugestões",
          slug: "preferencias-resposta"
        },
        {
          title: "Notificações",
          description: "Controle quando e como ser notificado",
          slug: "notificacoes"
        },
        {
          title: "Gerenciar assinatura",
          description: "Controle seu plano e pagamentos",
          slug: "gerenciar-assinatura"
        },
        {
          title: "Tema e aparência",
          description: "Personalize a interface do app",
          slug: "tema-aparencia"
        }
      ]
    },
    {
      icon: Book,
      title: "Recursos Avançados",
      description: "Tire o máximo do ProntoAI",
      color: "from-cyan-500 to-blue-400",
      summary: [
        "✓ Crie perfis personalizados para trabalho, amigos, família e paquera",
        "✓ Salve respostas favoritas e acesse rapidamente quando precisar",
        "✓ Veja histórico completo de análises e respostas usadas",
        "✓ Integre com Zapier, IFTTT e outros apps de automação",
        "✓ Use atalhos de teclado e gestos para navegar mais rápido",
        "✓ Modo offline: acesse respostas salvas sem internet"
      ],
      articles: [
        {
          title: "Contextos personalizados",
          description: "Crie perfis para diferentes situações",
          slug: "contextos-personalizados"
        },
        {
          title: "Salvando respostas favoritas",
          description: "Crie sua biblioteca de respostas",
          slug: "salvando-favoritas"
        },
        {
          title: "Histórico de uso",
          description: "Acompanhe suas análises anteriores",
          slug: "historico-uso"
        },
        {
          title: "Integrações disponíveis",
          description: "Conecte o ProntoAI com outros apps",
          slug: "integracoes-disponiveis"
        },
        {
          title: "Atalhos e gestos",
          description: "Navegue mais rápido no app",
          slug: "atalhos-gestos"
        },
        {
          title: "Modo offline",
          description: "Use recursos básicos sem internet",
          slug: "modo-offline"
        }
      ]
    },
    {
      icon: HelpCircle,
      title: "Solução de Problemas",
      description: "Resolva problemas comuns rapidamente",
      color: "from-yellow-500 to-orange-400",
      summary: [
        "✓ App travando? Limpe o cache ou reinstale a versão mais recente",
        "✓ Análise não funciona? Verifique conexão com internet e qualidade do screenshot",
        "✓ Problemas com pagamento? Verifique dados do cartão ou tente outro método",
        "✓ Não recebeu email? Confira spam/lixeira ou reenvie pela tela de login",
        "✓ Perdeu acesso? Use 'Restaurar Compras' nas configurações"
      ],
      articles: [
        {
          title: "App não abre ou trava",
          description: "Soluções para problemas de inicialização",
          slug: "app-nao-abre"
        },
        {
          title: "Análise não funciona",
          description: "O que fazer quando a análise falha",
          slug: "analise-nao-funciona"
        },
        {
          title: "Problemas com pagamento",
          description: "Resolvendo questões de cobrança",
          slug: "problemas-pagamento"
        },
        {
          title: "Não recebi email de confirmação",
          description: "Problemas com emails do sistema",
          slug: "email-confirmacao"
        },
        {
          title: "Restaurar compras",
          description: "Como recuperar sua assinatura",
          slug: "restaurar-compras"
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Dicas e Truques",
      description: "Aproveite ao máximo o ProntoAI",
      color: "from-pink-500 to-rose-400",
      summary: [
        "✓ Sempre inclua contexto da conversa para respostas mais precisas",
        "✓ No Tinder: use tom 'engraçado' ou 'casual' para melhores resultados",
        "✓ Em situações difíceis: escolha tom 'empático' ou 'diplomático'",
        "✓ Produtividade: salve respostas frequentes como favoritas",
        "✓ Networking: use tom 'profissional' e personalize com detalhes específicos"
      ],
      articles: [
        {
          title: "10 dicas para respostas melhores",
          description: "Otimize suas sugestões de resposta",
          slug: "dicas-respostas-melhores"
        },
        {
          title: "Como usar no Tinder e apps de dating",
          description: "Dicas específicas para paquera",
          slug: "usar-tinder-dating"
        },
        {
          title: "Respostas para situações difíceis",
          description: "Como lidar com conversas complicadas",
          slug: "situacoes-dificeis"
        },
        {
          title: "Produtividade: responda mais rápido",
          description: "Economize tempo nas suas conversas",
          slug: "produtividade"
        },
        {
          title: "Networking profissional",
          description: "Use o ProntoAI para crescer sua rede",
          slug: "networking-profissional"
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "Como tirar o melhor screenshot para análise",
      description: "Aprenda as melhores práticas para capturar conversas e obter sugestões mais precisas",
      category: "Usando o ProntoAI",
      views: "15.2k visualizações",
      slug: "melhores-praticas-screenshots"
    },
    {
      title: "Personalizando o tom das respostas",
      description: "Configure o ProntoAI para gerar respostas que combinam com seu estilo",
      category: "Configurações",
      views: "12.8k visualizações",
      slug: "personalizando-tom-respostas"
    },
    {
      title: "Usando em conversas profissionais",
      description: "Dicas para usar o ProntoAI em contextos de trabalho e networking",
      category: "Dicas e Truques",
      views: "10.5k visualizações",
      slug: "dicas-conversas-profissionais"
    },
    {
      title: "Entendendo a privacidade dos seus dados",
      description: "Como garantimos que suas conversas permanecem privadas e seguras",
      category: "Privacidade e Segurança",
      views: "9.3k visualizações",
      slug: "protecao-conversas"
    },
    {
      title: "10 dicas para respostas melhores",
      description: "Otimize suas sugestões e aproveite ao máximo o ProntoAI",
      category: "Dicas e Truques",
      views: "8.7k visualizações",
      slug: "dicas-respostas-melhores"
    },
    {
      title: "Como usar no Tinder e apps de dating",
      description: "Estratégias específicas para melhorar suas conversas em apps de paquera",
      category: "Dicas e Truques",
      views: "7.9k visualizações",
      slug: "usar-tinder-dating"
    }
  ];

  const quickLinks = [
    { icon: Zap, title: "Início Rápido", description: "Comece em 5 minutos", link: "/ajuda/artigos/como-criar-uma-conta" },
    { icon: Star, title: "Recursos Premium", description: "Conheça os benefícios", link: "/ajuda/artigos/planos-disponiveis" },
    { icon: Users, title: "Comunidade", description: "Junte-se ao Discord", link: "/contato" },
    { icon: Globe, title: "Blog", description: "Dicas e novidades", link: "/sobre" }
  ];

  const filteredCategories = selectedCategory
    ? categories.filter(cat => cat.title === selectedCategory)
    : categories;

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

      {/* Hero Section with Search */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle size={16} />
            <span>Mais de 500 artigos de ajuda disponíveis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Central de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ajuda
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre guias detalhados, tutoriais passo a passo e respostas para todas as suas dúvidas sobre o ProntoAI
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar artigos, tutoriais, guias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Exemplos: "como criar conta", "planos disponíveis", "privacidade"
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.link}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <Icon className="text-blue-600 mb-2 mx-auto" size={24} />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{link.title}</h3>
                  <p className="text-xs text-gray-600">{link.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              !selectedCategory
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            Todas as Categorias
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.title
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </section>

      {/* Categories Grid with Dropdowns */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedCards[category.title];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                {/* Dropdown Toggle Button */}
                <button
                  onClick={() => toggleCard(category.title)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 px-4 py-3 rounded-lg transition-all duration-300 mb-4"
                >
                  <span className="text-sm font-semibold text-blue-700">
                    {isExpanded ? "Ocultar informações" : "Ver informações rápidas"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="text-blue-600" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-600" size={20} />
                  )}
                </button>

                {/* Dropdown Content - Summary */}
                {isExpanded && (
                  <div className="mb-6 space-y-2 bg-gray-50 p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    {category.summary.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                {/* Articles Links */}
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Artigos Detalhados
                  </p>
                  {category.articles.slice(0, 3).map((article, articleIndex) => (
                    <Link
                      key={articleIndex}
                      href={`/ajuda/artigos/${article.slug}`}
                      className="block text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
                    >
                      → {article.title}
                    </Link>
                  ))}
                  {category.articles.length > 3 && (
                    <p className="text-xs text-gray-500 mt-2">
                      +{category.articles.length - 3} artigos adicionais
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{category.articles.length} artigos disponíveis</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artigos Mais{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Populares
              </span>
            </h2>
            <p className="text-gray-600">Os guias mais acessados pela nossa comunidade</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href={`/ajuda/artigos/${article.slug}`}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.views}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span>Ler artigo</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tutoriais em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Vídeo
              </span>
            </h2>
            <p className="text-gray-600">Aprenda visualmente com nossos guias em vídeo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Primeiros Passos", duration: "3:45", thumbnail: "🎬", link: "/ajuda/artigos/como-criar-uma-conta" },
              { title: "Recursos Avançados", duration: "5:20", thumbnail: "🚀", link: "/ajuda/artigos/contextos-personalizados" },
              { title: "Dicas de Produtividade", duration: "4:15", thumbnail: "⚡", link: "/ajuda/artigos/produtividade" }
            ].map((video, index) => (
              <Link
                key={index}
                href={video.link}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 h-40 flex items-center justify-center text-6xl">
                  {video.thumbnail}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Duração: {video.duration}</span>
                    <span className="text-blue-600 font-medium">Assistir →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Artigos de Ajuda</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Usuários Ajudados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Suporte Disponível</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe de suporte está pronta para responder suas perguntas e resolver qualquer problema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Entrar em Contato
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 transition-all duration-300">
                Ver FAQ
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Resposta em até 24h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Suporte em Português
            </span>
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
                <li><Link href="/suporte" className="hover:text-white transition-colors">Suporte Técnico</Link></li>
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
