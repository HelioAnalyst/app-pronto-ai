"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft, Clock, Eye, Share2, Bookmark, ThumbsUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Dados completos dos artigos
const articlesData: { [key: string]: any } = {
  // PRIMEIROS PASSOS
  "como-criar-uma-conta": {
    title: "Como criar uma conta",
    category: "Primeiros Passos",
    readTime: "3 min",
    views: "8.5k",
    lastUpdated: "15 de Janeiro, 2024",
    content: [
      {
        type: "intro",
        text: "Criar sua conta no ProntoAI é rápido e simples. Em menos de 2 minutos você estará pronto para começar a receber sugestões inteligentes para suas conversas."
      },
      {
        type: "heading",
        text: "Métodos de Cadastro"
      },
      {
        type: "paragraph",
        text: "Você pode criar sua conta de três formas diferentes:"
      },
      {
        type: "list",
        items: [
          "📧 Email e senha - método tradicional e seguro",
          "🔵 Conta Google - cadastro em um clique",
          "📱 Conta Apple - rápido e privado"
        ]
      },
      {
        type: "heading",
        text: "Passo a Passo - Cadastro por Email"
      },
      {
        type: "steps",
        items: [
          "Acesse o site ProntoAI.com ou baixe o app na App Store/Google Play",
          "Clique no botão 'Criar Conta' na tela inicial",
          "Preencha seu nome completo, email e crie uma senha forte (mínimo 8 caracteres)",
          "Aceite os Termos de Uso e Política de Privacidade",
          "Clique em 'Criar Conta' e aguarde o email de confirmação",
          "Abra seu email e clique no link de verificação",
          "Pronto! Sua conta está ativa e você pode fazer login"
        ]
      }
    ],
    relatedArticles: []
  },

  "metodos-pagamento": {
    title: "Métodos de pagamento aceitos",
    category: "Planos e Pagamentos",
    readTime: "5 min",
    views: "7.8k",
    lastUpdated: "10 de Janeiro, 2024",
    content: [
      {
        type: "intro",
        text: "O ProntoAI aceita diversos métodos de pagamento para sua conveniência. Escolha a opção que melhor se adapta às suas necessidades."
      },
      {
        type: "heading",
        text: "💳 Cartão de Crédito"
      },
      {
        type: "paragraph",
        text: "Aceito em todos os países:"
      },
      {
        type: "list",
        items: [
          "✅ Visa, Mastercard, American Express, Elo",
          "✅ Cobrança recorrente automática",
          "✅ Aprovação instantânea",
          "✅ Parcelamento disponível no plano anual (até 12x)",
          "✅ Seguro com criptografia SSL",
          "✅ Possibilidade de alterar cartão a qualquer momento"
        ]
      },
      {
        type: "heading",
        text: "📱 PIX (Apenas Brasil)"
      },
      {
        type: "list",
        items: [
          "✅ Aprovação instantânea",
          "✅ QR Code ou Pix Copia e Cola",
          "✅ Válido por 15 minutos",
          "✅ Confirmação automática após pagamento",
          "✅ Sem taxas adicionais",
          "✅ Disponível 24/7"
        ]
      },
      {
        type: "heading",
        text: "🧾 Boleto Bancário (Apenas Brasil)"
      },
      {
        type: "list",
        items: [
          "✅ Aprovação em 1-3 dias úteis",
          "✅ Válido por 3 dias",
          "✅ Receba por email e pode imprimir",
          "✅ Acesso liberado após compensação",
          "✅ Código de barras e linha digitável"
        ]
      },
      {
        type: "heading",
        text: "🌐 PayPal"
      },
      {
        type: "list",
        items: [
          "✅ Aceito internacionalmente",
          "✅ Seguro e confiável",
          "✅ Aprovação instantânea",
          "✅ Gerenciamento fácil de assinatura",
          "✅ Proteção ao comprador"
        ]
      },
      {
        type: "heading",
        text: "🍎 Apple Pay / 🤖 Google Pay"
      },
      {
        type: "list",
        items: [
          "✅ Pagamento em um toque",
          "✅ Máxima segurança",
          "✅ Aprovação instantânea",
          "✅ Disponível apenas no app mobile",
          "✅ Biometria para confirmação"
        ]
      },
      {
        type: "heading",
        text: "Segurança dos Pagamentos"
      },
      {
        type: "list",
        items: [
          "🔒 Criptografia SSL de 256 bits",
          "🔒 Certificação PCI DSS Level 1",
          "🔒 Não armazenamos dados completos do cartão",
          "🔒 Processamento via Stripe (líder mundial)",
          "🔒 Proteção contra fraudes"
        ]
      }
    ],
    relatedArticles: []
  },

  "protecao-conversas": {
    title: "Proteção de conversas",
    category: "Privacidade e Segurança",
    readTime: "6 min",
    views: "9.2k",
    lastUpdated: "8 de Janeiro, 2024",
    content: [
      {
        type: "intro",
        text: "Sua privacidade é nossa prioridade máxima. Veja como protegemos suas conversas e dados pessoais."
      },
      {
        type: "heading",
        text: "🔐 Criptografia de Ponta a Ponta"
      },
      {
        type: "list",
        items: [
          "✅ Todas as conversas são criptografadas em trânsito (TLS 1.3)",
          "✅ Dados armazenados com criptografia AES-256",
          "✅ Chaves de criptografia únicas por usuário",
          "✅ Impossível acessar suas conversas sem sua senha"
        ]
      },
      {
        type: "heading",
        text: "🗑️ Exclusão Automática"
      },
      {
        type: "list",
        items: [
          "✅ Screenshots são excluídos após análise (não armazenamos imagens)",
          "✅ Apenas texto extraído é mantido temporariamente",
          "✅ Histórico pode ser excluído a qualquer momento",
          "✅ Exclusão permanente e irreversível quando solicitada"
        ]
      },
      {
        type: "heading",
        text: "👁️ Quem Pode Ver Suas Conversas?"
      },
      {
        type: "paragraph",
        text: "Apenas VOCÊ tem acesso às suas conversas:"
      },
      {
        type: "list",
        items: [
          "❌ Equipe ProntoAI NÃO tem acesso",
          "❌ Não vendemos dados para terceiros",
          "❌ Não usamos para treinamento de IA sem consentimento",
          "✅ Você controla 100% dos seus dados"
        ]
      },
      {
        type: "heading",
        text: "🛡️ Conformidade e Certificações"
      },
      {
        type: "list",
        items: [
          "✅ LGPD (Lei Geral de Proteção de Dados - Brasil)",
          "✅ GDPR (General Data Protection Regulation - Europa)",
          "✅ CCPA (California Consumer Privacy Act - EUA)",
          "✅ ISO 27001 (Segurança da Informação)",
          "✅ SOC 2 Type II (Auditoria de segurança)"
        ]
      },
      {
        type: "tip",
        text: "💡 Dica: Você pode ativar a exclusão automática de histórico após 7, 30 ou 90 dias nas configurações de privacidade."
      }
    ],
    relatedArticles: []
  },

  "politica-privacidade": {
    title: "Política de privacidade",
    category: "Privacidade e Segurança",
    readTime: "8 min",
    views: "6.5k",
    lastUpdated: "5 de Janeiro, 2024",
    content: [
      {
        type: "intro",
        text: "Nossa política de privacidade explica como coletamos, usamos e protegemos seus dados pessoais."
      },
      {
        type: "heading",
        text: "📊 Dados Que Coletamos"
      },
      {
        type: "subheading",
        text: "Dados de Cadastro"
      },
      {
        type: "list",
        items: [
          "Nome completo",
          "Endereço de email",
          "Senha (criptografada)",
          "Foto de perfil (opcional)"
        ]
      },
      {
        type: "subheading",
        text: "Dados de Uso"
      },
      {
        type: "list",
        items: [
          "Texto extraído de screenshots (não armazenamos imagens)",
          "Sugestões geradas",
          "Preferências de tom e configurações",
          "Histórico de análises",
          "Dados de navegação (cookies)"
        ]
      },
      {
        type: "heading",
        text: "🎯 Como Usamos Seus Dados"
      },
      {
        type: "list",
        items: [
          "✅ Fornecer sugestões de resposta personalizadas",
          "✅ Melhorar nossos algoritmos de IA",
          "✅ Enviar notificações importantes sobre sua conta",
          "✅ Processar pagamentos e gerenciar assinaturas",
          "✅ Prevenir fraudes e abusos",
          "❌ NUNCA vendemos seus dados para terceiros",
          "❌ NUNCA compartilhamos conversas com anunciantes"
        ]
      },
      {
        type: "heading",
        text: "🔒 Como Protegemos Seus Dados"
      },
      {
        type: "list",
        items: [
          "Criptografia AES-256 para dados armazenados",
          "TLS 1.3 para dados em trânsito",
          "Autenticação de dois fatores (2FA) disponível",
          "Monitoramento 24/7 de segurança",
          "Backups criptografados diários",
          "Acesso restrito apenas a pessoal autorizado"
        ]
      },
      {
        type: "heading",
        text: "👤 Seus Direitos (LGPD/GDPR)"
      },
      {
        type: "list",
        items: [
          "✅ Acessar todos os seus dados",
          "✅ Corrigir informações incorretas",
          "✅ Excluir sua conta e dados permanentemente",
          "✅ Exportar seus dados (portabilidade)",
          "✅ Revogar consentimentos",
          "✅ Opor-se ao processamento de dados"
        ]
      },
      {
        type: "heading",
        text: "🍪 Cookies e Rastreamento"
      },
      {
        type: "list",
        items: [
          "Cookies essenciais (necessários para funcionamento)",
          "Cookies de preferências (salvar configurações)",
          "Cookies analíticos (melhorar experiência)",
          "Você pode desativar cookies não essenciais"
        ]
      },
      {
        type: "heading",
        text: "📧 Contato do Encarregado de Dados"
      },
      {
        type: "paragraph",
        text: "Para exercer seus direitos ou tirar dúvidas sobre privacidade:"
      },
      {
        type: "list",
        items: [
          "Email: privacidade@prontoai.com",
          "Resposta em até 48 horas",
          "Atendimento em português, inglês e espanhol"
        ]
      }
    ],
    relatedArticles: []
  },

  "seguranca-dados": {
    title: "Segurança de dados",
    category: "Privacidade e Segurança",
    readTime: "7 min",
    views: "8.1k",
    lastUpdated: "3 de Janeiro, 2024",
    content: [
      {
        type: "intro",
        text: "Implementamos as melhores práticas de segurança da indústria para proteger seus dados."
      },
      {
        type: "heading",
        text: "🔐 Infraestrutura de Segurança"
      },
      {
        type: "list",
        items: [
          "Servidores em data centers certificados ISO 27001",
          "Firewall de aplicação web (WAF)",
          "Proteção DDoS avançada",
          "Rede privada virtual (VPN) para acesso interno",
          "Segregação de ambientes (produção/desenvolvimento)"
        ]
      },
      {
        type: "heading",
        text: "🔑 Autenticação e Acesso"
      },
      {
        type: "list",
        items: [
          "Autenticação de dois fatores (2FA) disponível",
          "Senhas criptografadas com bcrypt",
          "Sessões com timeout automático",
          "Detecção de login suspeito",
          "Notificação de novos dispositivos"
        ]
      },
      {
        type: "heading",
        text: "💾 Backup e Recuperação"
      },
      {
        type: "list",
        items: [
          "Backups automáticos diários",
          "Retenção de 30 dias",
          "Backups criptografados",
          "Testes regulares de recuperação",
          "Redundância geográfica"
        ]
      },
      {
        type: "heading",
        text: "🔍 Monitoramento e Auditoria"
      },
      {
        type: "list",
        items: [
          "Monitoramento 24/7 de segurança",
          "Logs de auditoria completos",
          "Alertas automáticos de atividades suspeitas",
          "Revisões de segurança trimestrais",
          "Testes de penetração anuais"
        ]
      },
      {
        type: "heading",
        text: "🚨 Resposta a Incidentes"
      },
      {
        type: "paragraph",
        text: "Em caso de incidente de segurança:"
      },
      {
        type: "list",
        items: [
          "Notificação imediata aos usuários afetados",
          "Investigação completa em até 24 horas",
          "Relatório detalhado do incidente",
          "Medidas corretivas implementadas",
          "Transparência total no processo"
        ]
      },
      {
        type: "tip",
        text: "💡 Dica de Segurança: Ative a autenticação de dois fatores (2FA) nas configurações de segurança para máxima proteção da sua conta."
      }
    ],
    relatedArticles: []
  },

  "historico-uso": {
    title: "Histórico de uso",
    category: "Conta e Configurações",
    readTime: "4 min",
    views: "5.7k",
    lastUpdated: "28 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Acompanhe todas as suas análises e sugestões geradas no histórico completo do ProntoAI."
      },
      {
        type: "heading",
        text: "📊 Acessando Seu Histórico"
      },
      {
        type: "steps",
        items: [
          "Abra o app ProntoAI ou acesse o site",
          "Clique no ícone de perfil no canto superior direito",
          "Selecione 'Histórico' no menu",
          "Navegue pelas suas análises anteriores"
        ]
      },
      {
        type: "heading",
        text: "🔍 Filtros e Busca"
      },
      {
        type: "list",
        items: [
          "Buscar por palavra-chave",
          "Filtrar por data (hoje, semana, mês, ano)",
          "Filtrar por tom usado",
          "Filtrar por app de origem (WhatsApp, Instagram, etc.)",
          "Ordenar por mais recentes ou mais antigas"
        ]
      },
      {
        type: "heading",
        text: "💾 Salvando Favoritas"
      },
      {
        type: "list",
        items: [
          "Clique no ícone de estrela em qualquer análise",
          "Acesse suas favoritas em 'Salvos'",
          "Organize com tags personalizadas",
          "Acesso rápido às respostas mais usadas"
        ]
      },
      {
        type: "heading",
        text: "🗑️ Gerenciando Histórico"
      },
      {
        type: "list",
        items: [
          "Excluir análises individuais",
          "Limpar histórico completo",
          "Exportar histórico (formato JSON ou CSV)",
          "Configurar exclusão automática (7, 30 ou 90 dias)"
        ]
      },
      {
        type: "heading",
        text: "📈 Estatísticas de Uso"
      },
      {
        type: "paragraph",
        text: "Usuários Premium têm acesso a estatísticas detalhadas:"
      },
      {
        type: "list",
        items: [
          "Total de análises realizadas",
          "Tons mais utilizados",
          "Apps mais analisados",
          "Horários de maior uso",
          "Gráficos de evolução mensal"
        ]
      }
    ],
    relatedArticles: []
  },

  "configuracoes-conta": {
    title: "Configurações de conta",
    category: "Conta e Configurações",
    readTime: "5 min",
    views: "7.3k",
    lastUpdated: "25 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Personalize sua conta do ProntoAI de acordo com suas preferências e necessidades."
      },
      {
        type: "heading",
        text: "👤 Informações Pessoais"
      },
      {
        type: "list",
        items: [
          "Alterar nome de exibição",
          "Atualizar email",
          "Trocar foto de perfil",
          "Adicionar biografia (opcional)",
          "Configurar idioma preferido"
        ]
      },
      {
        type: "heading",
        text: "🔐 Segurança"
      },
      {
        type: "list",
        items: [
          "Alterar senha",
          "Ativar autenticação de dois fatores (2FA)",
          "Gerenciar dispositivos conectados",
          "Ver histórico de login",
          "Revogar sessões ativas"
        ]
      },
      {
        type: "heading",
        text: "🔔 Notificações"
      },
      {
        type: "list",
        items: [
          "Notificações push (mobile)",
          "Notificações por email",
          "Alertas de segurança",
          "Novidades e atualizações",
          "Ofertas e promoções"
        ]
      },
      {
        type: "heading",
        text: "🎨 Aparência"
      },
      {
        type: "list",
        items: [
          "Tema claro/escuro/automático",
          "Tamanho da fonte",
          "Densidade de informações",
          "Animações (ativar/desativar)"
        ]
      },
      {
        type: "heading",
        text: "💳 Assinatura e Pagamento"
      },
      {
        type: "list",
        items: [
          "Ver plano atual",
          "Fazer upgrade/downgrade",
          "Alterar método de pagamento",
          "Ver histórico de pagamentos",
          "Baixar notas fiscais",
          "Cancelar assinatura"
        ]
      },
      {
        type: "heading",
        text: "🗑️ Excluir Conta"
      },
      {
        type: "paragraph",
        text: "Para excluir permanentemente sua conta:"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Conta",
          "Role até o final e clique em 'Excluir Conta'",
          "Leia os avisos sobre exclusão permanente",
          "Digite sua senha para confirmar",
          "Clique em 'Excluir Permanentemente'",
          "Você receberá um email de confirmação"
        ]
      },
      {
        type: "tip",
        text: "⚠️ Atenção: A exclusão da conta é permanente e irreversível. Todos os seus dados serão apagados em até 30 dias."
      }
    ],
    relatedArticles: []
  },

  "preferencias-resposta": {
    title: "Preferências de resposta",
    category: "Conta e Configurações",
    readTime: "6 min",
    views: "9.8k",
    lastUpdated: "20 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Configure como o ProntoAI gera sugestões de resposta para combinar perfeitamente com seu estilo."
      },
      {
        type: "heading",
        text: "🎭 Tom Padrão"
      },
      {
        type: "paragraph",
        text: "Escolha o tom que será usado por padrão em todas as análises:"
      },
      {
        type: "list",
        items: [
          "😊 Casual - Descontraído e amigável",
          "💼 Formal - Profissional e respeitoso",
          "😄 Engraçado - Com humor e leveza",
          "❤️ Romântico - Carinhoso e charmoso",
          "🎯 Profissional - Objetivo e direto",
          "🤝 Empático - Compreensivo e acolhedor",
          "💪 Assertivo - Confiante e decidido"
        ]
      },
      {
        type: "heading",
        text: "📏 Tamanho das Respostas"
      },
      {
        type: "list",
        items: [
          "Curtas (1-2 frases) - Rápidas e diretas",
          "Médias (3-5 frases) - Balanceadas",
          "Longas (6+ frases) - Detalhadas e completas"
        ]
      },
      {
        type: "heading",
        text: "😀 Uso de Emojis"
      },
      {
        type: "list",
        items: [
          "Nunca - Sem emojis",
          "Raramente - 1 emoji ocasional",
          "Às vezes - 2-3 emojis",
          "Frequentemente - 4+ emojis"
        ]
      },
      {
        type: "heading",
        text: "🎨 Nível de Criatividade"
      },
      {
        type: "paragraph",
        text: "Controle o quão criativas e únicas serão as sugestões:"
      },
      {
        type: "list",
        items: [
          "Conservador (1-3) - Respostas seguras e previsíveis",
          "Balanceado (4-7) - Mix de segurança e criatividade",
          "Criativo (8-10) - Respostas únicas e ousadas"
        ]
      },
      {
        type: "heading",
        text: "💬 Estilo de Comunicação"
      },
      {
        type: "list",
        items: [
          "Fazer perguntas (Raramente → Frequentemente)",
          "Usar gírias (Evitar → Usar frequentemente)",
          "Expressividade (Neutro → Muito expressivo)",
          "Assertividade (Suave → Direto)"
        ]
      },
      {
        type: "heading",
        text: "🎯 Tons Personalizados (Premium)"
      },
      {
        type: "paragraph",
        text: "Usuários Premium podem criar tons customizados:"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Preferências de Resposta",
          "Clique em 'Criar Tom Personalizado'",
          "Dê um nome ao seu tom",
          "Ajuste todos os parâmetros",
          "Adicione palavras/frases que você usa",
          "Adicione palavras/frases que você evita",
          "Salve e teste"
        ]
      },
      {
        type: "tip",
        text: "💡 Dica Pro: Crie tons diferentes para contextos específicos (trabalho, amigos, família, paquera) e alterne conforme necessário!"
      }
    ],
    relatedArticles: []
  },

  "notificacoes": {
    title: "Notificações",
    category: "Conta e Configurações",
    readTime: "4 min",
    views: "4.9k",
    lastUpdated: "18 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Configure quando e como você quer receber notificações do ProntoAI."
      },
      {
        type: "heading",
        text: "📱 Notificações Push (Mobile)"
      },
      {
        type: "list",
        items: [
          "Análise concluída",
          "Novas sugestões disponíveis",
          "Limite de análises atingido (plano gratuito)",
          "Renovação de assinatura próxima",
          "Novos recursos disponíveis"
        ]
      },
      {
        type: "heading",
        text: "📧 Notificações por Email"
      },
      {
        type: "list",
        items: [
          "Resumo semanal de uso",
          "Alertas de segurança",
          "Confirmação de pagamento",
          "Novidades e atualizações",
          "Ofertas especiais"
        ]
      },
      {
        type: "heading",
        text: "🔔 Configurar Notificações"
      },
      {
        type: "steps",
        items: [
          "Abra Configurações no app",
          "Selecione 'Notificações'",
          "Ative/desative cada tipo de notificação",
          "Configure horários de silêncio (opcional)",
          "Salve as alterações"
        ]
      },
      {
        type: "heading",
        text: "🌙 Modo Não Perturbe"
      },
      {
        type: "list",
        items: [
          "Configure horários para silenciar notificações",
          "Exemplo: 22h às 8h (horário de sono)",
          "Notificações críticas ainda serão enviadas",
          "Disponível no app mobile"
        ]
      },
      {
        type: "heading",
        text: "🚨 Notificações Críticas"
      },
      {
        type: "paragraph",
        text: "Estas notificações não podem ser desativadas:"
      },
      {
        type: "list",
        items: [
          "Alertas de segurança (login suspeito)",
          "Problemas com pagamento",
          "Violação de termos de uso",
          "Manutenção programada crítica"
        ]
      }
    ],
    relatedArticles: []
  },

  "contextos-personalizados": {
    title: "Contextos personalizados",
    category: "Recursos Avançados",
    readTime: "7 min",
    views: "6.4k",
    lastUpdated: "15 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Crie contextos personalizados para que o ProntoAI entenda melhor suas situações específicas e gere sugestões mais precisas."
      },
      {
        type: "heading",
        text: "🎯 O Que São Contextos?"
      },
      {
        type: "paragraph",
        text: "Contextos são informações adicionais que você fornece para melhorar as sugestões:"
      },
      {
        type: "list",
        items: [
          "Relacionamento com a pessoa (amigo, colega, chefe, interesse romântico)",
          "Objetivo da conversa (vender, negociar, paquerar, apoiar)",
          "Tom desejado para essa conversa específica",
          "Informações de background relevantes"
        ]
      },
      {
        type: "heading",
        text: "✨ Criando Contextos Personalizados"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Contextos Personalizados",
          "Clique em 'Criar Novo Contexto'",
          "Dê um nome (ex: 'Negociação com Cliente')",
          "Defina o tom padrão para esse contexto",
          "Adicione informações relevantes",
          "Salve o contexto"
        ]
      },
      {
        type: "heading",
        text: "📋 Exemplos de Contextos Úteis"
      },
      {
        type: "subheading",
        text: "Trabalho - Negociação com Cliente"
      },
      {
        type: "list",
        items: [
          "Tom: Profissional e persuasivo",
          "Objetivo: Fechar venda",
          "Estilo: Assertivo mas amigável",
          "Evitar: Gírias, emojis excessivos"
        ]
      },
      {
        type: "subheading",
        text: "Pessoal - Paquera no Tinder"
      },
      {
        type: "list",
        items: [
          "Tom: Romântico e engraçado",
          "Objetivo: Quebrar o gelo",
          "Estilo: Descontraído e charmoso",
          "Incluir: Humor, emojis, perguntas"
        ]
      },
      {
        type: "subheading",
        text: "Família - Conversa com Pais"
      },
      {
        type: "list",
        items: [
          "Tom: Respeitoso e carinhoso",
          "Objetivo: Manter conexão",
          "Estilo: Caloroso e atencioso",
          "Evitar: Gírias, linguagem informal demais"
        ]
      },
      {
        type: "heading",
        text: "🔄 Usando Contextos nas Análises"
      },
      {
        type: "steps",
        items: [
          "Ao enviar um screenshot, clique em 'Adicionar Contexto'",
          "Selecione um contexto salvo ou crie um novo",
          "O ProntoAI usará essas informações para gerar sugestões",
          "As sugestões serão mais precisas e adequadas"
        ]
      },
      {
        type: "heading",
        text: "💡 Dicas para Contextos Eficazes"
      },
      {
        type: "list",
        items: [
          "Seja específico sobre o objetivo da conversa",
          "Mencione o relacionamento com a pessoa",
          "Indique o nível de formalidade desejado",
          "Adicione informações de background relevantes",
          "Atualize contextos conforme necessário"
        ]
      },
      {
        type: "tip",
        text: "💡 Dica Pro: Crie contextos para suas situações mais frequentes e economize tempo nas próximas análises!"
      }
    ],
    relatedArticles: []
  },

  "dicas-respostas-melhores": {
    title: "10 dicas para respostas melhores",
    category: "Recursos Avançados",
    readTime: "8 min",
    views: "12.1k",
    lastUpdated: "10 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Aprenda a extrair o máximo do ProntoAI com estas dicas práticas para obter sugestões ainda melhores."
      },
      {
        type: "heading",
        text: "1. 📸 Inclua Contexto Suficiente"
      },
      {
        type: "paragraph",
        text: "Sempre envie as últimas 3-5 mensagens da conversa, não apenas a última. Quanto mais contexto, melhores as sugestões."
      },
      {
        type: "heading",
        text: "2. 🎯 Use Contextos Personalizados"
      },
      {
        type: "paragraph",
        text: "Crie e use contextos para situações específicas. Isso ajuda a IA a entender melhor o objetivo da conversa."
      },
      {
        type: "heading",
        text: "3. 🎭 Escolha o Tom Adequado"
      },
      {
        type: "paragraph",
        text: "Não use sempre o mesmo tom. Adapte conforme a situação: formal para trabalho, casual para amigos, romântico para paquera."
      },
      {
        type: "heading",
        text: "4. ✏️ Personalize as Sugestões"
      },
      {
        type: "paragraph",
        text: "Use as sugestões como base, mas adicione seu toque pessoal. Combine elementos de diferentes sugestões."
      },
      {
        type: "heading",
        text: "5. 💾 Salve Suas Favoritas"
      },
      {
        type: "paragraph",
        text: "Quando encontrar uma resposta perfeita, salve como favorita. Você pode reutilizá-la em situações similares."
      },
      {
        type: "heading",
        text: "6. 🔄 Gere Novas Sugestões"
      },
      {
        type: "paragraph",
        text: "Se nenhuma sugestão te agradou, clique em 'Gerar Novas'. Você receberá opções completamente diferentes."
      },
      {
        type: "heading",
        text: "7. 📊 Analise Múltiplos Screenshots"
      },
      {
        type: "paragraph",
        text: "Para conversas longas, envie múltiplos screenshots em sequência. O ProntoAI analisará tudo junto."
      },
      {
        type: "heading",
        text: "8. ⚙️ Ajuste as Preferências"
      },
      {
        type: "paragraph",
        text: "Configure tamanho de resposta, uso de emojis e criatividade nas preferências para resultados mais alinhados."
      },
      {
        type: "heading",
        text: "9. 🎨 Experimente Tons Diferentes"
      },
      {
        type: "paragraph",
        text: "Teste tons que você normalmente não usaria. Você pode se surpreender com os resultados!"
      },
      {
        type: "heading",
        text: "10. 📈 Aprenda com o Histórico"
      },
      {
        type: "paragraph",
        text: "Revise seu histórico e veja quais sugestões funcionaram melhor. Isso ajuda a refinar suas preferências."
      },
      {
        type: "tip",
        text: "💡 Dica Bônus: Combine estas técnicas! Use contexto + tom adequado + personalização para resultados incríveis."
      }
    ],
    relatedArticles: []
  },

  "usar-tinder-dating": {
    title: "Usando no Tinder e apps de paquera",
    category: "Casos de Uso",
    readTime: "9 min",
    views: "15.7k",
    lastUpdated: "5 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "O ProntoAI é perfeito para apps de paquera! Aprenda a criar conversas envolventes e conseguir mais matches."
      },
      {
        type: "heading",
        text: "💘 Por Que Usar no Tinder?"
      },
      {
        type: "list",
        items: [
          "✅ Quebre o gelo com mensagens criativas",
          "✅ Mantenha conversas interessantes",
          "✅ Evite respostas sem graça",
          "✅ Demonstre interesse genuíno",
          "✅ Consiga mais encontros"
        ]
      },
      {
        type: "heading",
        text: "🎯 Primeira Mensagem Perfeita"
      },
      {
        type: "paragraph",
        text: "Dicas para a primeira mensagem após o match:"
      },
      {
        type: "list",
        items: [
          "📸 Tire screenshot do perfil da pessoa (bio, fotos)",
          "🎭 Use tom 'Romântico' ou 'Engraçado'",
          "💬 Mencione algo específico do perfil dela",
          "❓ Faça uma pergunta interessante",
          "😊 Use emojis com moderação"
        ]
      },
      {
        type: "heading",
        text: "✨ Exemplos de Primeiras Mensagens"
      },
      {
        type: "subheading",
        text: "Se ela gosta de viajar:"
      },
      {
        type: "paragraph",
        text: "\"Vi que você ama viajar! Qual foi a viagem mais incrível que você já fez? Estou planejando minha próxima aventura 🌍✈️\""
      },
      {
        type: "subheading",
        text: "Se ela tem um cachorro:"
      },
      {
        type: "paragraph",
        text: "\"Seu cachorro é muito fofo! Qual o nome dele? Sou suspeito pra falar, mas cachorros são os melhores 🐕❤️\""
      },
      {
        type: "subheading",
        text: "Se ela gosta de séries:"
      },
      {
        type: "paragraph",
        text: "\"Vi que você curte [série]. Já viu a nova temporada? Sem spoilers! 😄📺\""
      },
      {
        type: "heading",
        text: "🔥 Mantendo a Conversa Interessante"
      },
      {
        type: "list",
        items: [
          "Faça perguntas abertas (não apenas sim/não)",
          "Compartilhe histórias pessoais",
          "Use humor quando apropriado",
          "Demonstre interesse genuíno",
          "Evite interrogatório (não faça 5 perguntas seguidas)"
        ]
      },
      {
        type: "heading",
        text: "⚠️ O Que Evitar"
      },
      {
        type: "list",
        items: [
          "❌ Mensagens genéricas ('Oi, tudo bem?')",
          "❌ Comentários apenas sobre aparência física",
          "❌ Ser muito direto/sexual logo de cara",
          "❌ Respostas de uma palavra só",
          "❌ Demorar dias para responder"
        ]
      },
      {
        type: "heading",
        text: "📱 Quando Pedir o Número/Instagram"
      },
      {
        type: "paragraph",
        text: "Sinais de que é hora de sair do app:"
      },
      {
        type: "list",
        items: [
          "Vocês já trocaram 10-15 mensagens",
          "A conversa está fluindo naturalmente",
          "Há interesse mútuo claro",
          "Vocês têm coisas em comum",
          "Ela também está engajada na conversa"
        ]
      },
      {
        type: "heading",
        text: "💬 Como Pedir o Número"
      },
      {
        type: "paragraph",
        text: "Exemplos de como fazer a transição:"
      },
      {
        type: "list",
        items: [
          "\"Adorei nossa conversa! Que tal continuarmos no WhatsApp? É mais fácil 😊\"",
          "\"Você parece ser muito legal! Posso te chamar no Instagram?\"",
          "\"Estou curtindo muito conversar com você. Quer trocar número?\"",
          "\"Não uso muito o Tinder. Me passa seu número? Prometo não ser chato 😄\""
        ]
      },
      {
        type: "heading",
        text: "🎯 Marcando o Encontro"
      },
      {
        type: "paragraph",
        text: "Dicas para propor o primeiro encontro:"
      },
      {
        type: "list",
        items: [
          "Seja específico (dia, horário, lugar)",
          "Sugira algo casual (café, drink, caminhada)",
          "Escolha lugar público e seguro",
          "Dê opções ('Sábado ou domingo?')",
          "Seja confiante mas respeitoso"
        ]
      },
      {
        type: "heading",
        text: "✨ Exemplo de Convite"
      },
      {
        type: "paragraph",
        text: "\"Que tal a gente se conhecer pessoalmente? Conheço uma cafeteria incrível no [bairro]. Você está livre sábado à tarde? ☕😊\""
      },
      {
        type: "tip",
        text: "💡 Dica de Ouro: Seja você mesmo! Use o ProntoAI como inspiração, mas adicione sua personalidade. Autenticidade é atraente."
      }
    ],
    relatedArticles: []
  },

  "situacoes-dificeis": {
    title: "Lidando com situações difíceis",
    category: "Casos de Uso",
    readTime: "10 min",
    views: "8.9k",
    lastUpdated: "1 de Dezembro, 2023",
    content: [
      {
        type: "intro",
        text: "Aprenda a usar o ProntoAI para navegar conversas delicadas e situações desafiadoras com empatia e assertividade."
      },
      {
        type: "heading",
        text: "😔 Conversas Emocionalmente Difíceis"
      },
      {
        type: "subheading",
        text: "Quando alguém está triste ou passando por dificuldades:"
      },
      {
        type: "list",
        items: [
          "🎭 Use tom 'Empático'",
          "💬 Valide os sentimentos da pessoa",
          "🤝 Ofereça apoio sem minimizar o problema",
          "👂 Demonstre que está ouvindo",
          "❤️ Seja genuíno e presente"
        ]
      },
      {
        type: "heading",
        text: "💼 Conversas Profissionais Delicadas"
      },
      {
        type: "subheading",
        text: "Negando um pedido:"
      },
      {
        type: "paragraph",
        text: "\"Agradeço muito seu interesse, mas infelizmente não poderei [aceitar/fazer] isso no momento. [Explicação breve]. Espero que compreenda.\""
      },
      {
        type: "subheading",
        text: "Dando feedback negativo:"
      },
      {
        type: "paragraph",
        text: "\"Gostaria de conversar sobre [situação]. Percebi que [problema específico]. Como podemos melhorar isso juntos?\""
      },
      {
        type: "heading",
        text: "🚫 Estabelecendo Limites"
      },
      {
        type: "list",
        items: [
          "💪 Use tom 'Assertivo'",
          "🎯 Seja claro e direto",
          "🤝 Mantenha respeito",
          "❌ Não se justifique excessivamente",
          "✅ Ofereça alternativas quando possível"
        ]
      },
      {
        type: "heading",
        text: "💔 Terminando Relacionamentos"
      },
      {
        type: "paragraph",
        text: "Dicas para conversas de término:"
      },
      {
        type: "list",
        items: [
          "Seja honesto mas gentil",
          "Evite culpar a outra pessoa",
          "Explique seus motivos claramente",
          "Não deixe falsas esperanças",
          "Respeite os sentimentos dela"
        ]
      },
      {
        type: "heading",
        text: "😤 Lidando com Conflitos"
      },
      {
        type: "list",
        items: [
          "Mantenha a calma",
          "Use 'eu sinto' em vez de 'você fez'",
          "Foque no problema, não na pessoa",
          "Busque soluções, não culpados",
          "Saiba quando pausar a conversa"
        ]
      },
      {
        type: "heading",
        text: "🙅 Recusando Convites"
      },
      {
        type: "paragraph",
        text: "Formas educadas de dizer não:"
      },
      {
        type: "list",
        items: [
          "\"Obrigado pelo convite, mas não vou conseguir dessa vez.\"",
          "\"Agradeço muito, mas tenho outros compromissos.\"",
          "\"Adoraria, mas estou precisando de um tempo para mim.\"",
          "\"Não vai dar dessa vez, mas obrigado por pensar em mim!\""
        ]
      },
      {
        type: "heading",
        text: "⚠️ Situações de Assédio ou Desrespeito"
      },
      {
        type: "list",
        items: [
          "Seja firme e direto",
          "Não se sinta obrigado a ser educado",
          "Bloqueie se necessário",
          "Documente se for grave",
          "Busque ajuda se sentir ameaçado"
        ]
      },
      {
        type: "tip",
        text: "💡 Lembre-se: Você não deve nada a ninguém. Sua saúde mental e bem-estar vêm primeiro."
      }
    ],
    relatedArticles: []
  },

  "app-nao-abre": {
    title: "App não abre ou trava",
    category: "Solução de Problemas",
    readTime: "5 min",
    views: "4.2k",
    lastUpdated: "28 de Novembro, 2023",
    content: [
      {
        type: "intro",
        text: "Se o app ProntoAI não está abrindo ou travando, siga estas soluções para resolver o problema."
      },
      {
        type: "heading",
        text: "🔄 Soluções Rápidas"
      },
      {
        type: "steps",
        items: [
          "Force o fechamento do app",
          "Aguarde 10 segundos",
          "Abra o app novamente",
          "Se não funcionar, continue para próximas soluções"
        ]
      },
      {
        type: "heading",
        text: "📱 iPhone/iPad"
      },
      {
        type: "subheading",
        text: "Forçar fechamento:"
      },
      {
        type: "list",
        items: [
          "Deslize para cima e pause no meio da tela",
          "Encontre o ProntoAI",
          "Deslize para cima para fechar"
        ]
      },
      {
        type: "subheading",
        text: "Reiniciar dispositivo:"
      },
      {
        type: "list",
        items: [
          "iPhone X ou superior: Volume + e Lateral",
          "iPhone 8 ou anterior: Botão Superior/Lateral"
        ]
      },
      {
        type: "heading",
        text: "🤖 Android"
      },
      {
        type: "subheading",
        text: "Forçar fechamento:"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Apps",
          "Encontre ProntoAI",
          "Toque em 'Forçar parada'",
          "Confirme"
        ]
      },
      {
        type: "subheading",
        text: "Limpar cache:"
      },
      {
        type: "steps",
        items: [
          "Configurações → Apps → ProntoAI",
          "Armazenamento",
          "Limpar cache (NÃO limpar dados)"
        ]
      },
      {
        type: "heading",
        text: "🔄 Atualizar o App"
      },
      {
        type: "list",
        items: [
          "Abra App Store (iOS) ou Google Play (Android)",
          "Busque por 'ProntoAI'",
          "Se houver atualização disponível, instale",
          "Reinicie o dispositivo após atualizar"
        ]
      },
      {
        type: "heading",
        text: "🗑️ Reinstalar o App"
      },
      {
        type: "paragraph",
        text: "Se nada funcionou, tente reinstalar:"
      },
      {
        type: "steps",
        items: [
          "Desinstale o ProntoAI",
          "Reinicie o dispositivo",
          "Reinstale o app da loja",
          "Faça login novamente"
        ]
      },
      {
        type: "tip",
        text: "⚠️ Seus dados estão salvos na nuvem. Reinstalar não apaga seu histórico ou configurações."
      },
      {
        type: "heading",
        text: "📞 Ainda Não Resolveu?"
      },
      {
        type: "paragraph",
        text: "Entre em contato com nosso suporte:"
      },
      {
        type: "list",
        items: [
          "Email: suporte@prontoai.com",
          "Inclua: modelo do dispositivo, versão do sistema, descrição do problema",
          "Resposta em até 24 horas"
        ]
      }
    ],
    relatedArticles: []
  },

  "analise-nao-funciona": {
    title: "Análise não funciona",
    category: "Solução de Problemas",
    readTime: "6 min",
    views: "5.8k",
    lastUpdated: "25 de Novembro, 2023",
    content: [
      {
        type: "intro",
        text: "Se a análise de conversas não está funcionando, veja as causas comuns e soluções."
      },
      {
        type: "heading",
        text: "❌ Problemas Comuns"
      },
      {
        type: "subheading",
        text: "1. Screenshot não é reconhecido"
      },
      {
        type: "list",
        items: [
          "Causa: Imagem muito escura ou borrada",
          "Solução: Tire novo screenshot com boa iluminação",
          "Dica: Aumente o brilho da tela antes de capturar"
        ]
      },
      {
        type: "subheading",
        text: "2. Texto não é extraído"
      },
      {
        type: "list",
        items: [
          "Causa: Idioma não suportado",
          "Solução: Verifique se o texto está em português, inglês ou espanhol",
          "Causa: Fonte muito estilizada",
          "Solução: Use apps com fontes padrão"
        ]
      },
      {
        type: "subheading",
        text: "3. Análise demora muito"
      },
      {
        type: "list",
        items: [
          "Causa: Conexão lenta",
          "Solução: Verifique sua internet (mínimo 1 Mbps)",
          "Causa: Servidor sobrecarregado",
          "Solução: Aguarde alguns minutos e tente novamente"
        ]
      },
      {
        type: "heading",
        text: "✅ Checklist de Qualidade"
      },
      {
        type: "paragraph",
        text: "Antes de enviar, verifique:"
      },
      {
        type: "list",
        items: [
          "☑️ Texto está completamente legível?",
          "☑️ Screenshot inclui 3-5 mensagens?",
          "☑️ Iluminação está adequada?",
          "☑️ Não há elementos cobrindo o texto?",
          "☑️ Idioma é suportado?",
          "☑️ Conexão com internet está boa?"
        ]
      },
      {
        type: "heading",
        text: "🔧 Soluções Técnicas"
      },
      {
        type: "subheading",
        text: "Limpar cache do app:"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações do app",
          "Selecione 'Armazenamento'",
          "Toque em 'Limpar Cache'",
          "Tente a análise novamente"
        ]
      },
      {
        type: "subheading",
        text: "Verificar permissões:"
      },
      {
        type: "list",
        items: [
          "iOS: Configurações → ProntoAI → Fotos (ativar)",
          "Android: Configurações → Apps → ProntoAI → Permissões → Armazenamento (ativar)"
        ]
      },
      {
        type: "heading",
        text: "📊 Limites de Uso"
      },
      {
        type: "paragraph",
        text: "Plano Gratuito:"
      },
      {
        type: "list",
        items: [
          "10 análises por mês",
          "Se atingiu o limite, faça upgrade para Premium",
          "Limite renova no dia 1º de cada mês"
        ]
      },
      {
        type: "heading",
        text: "🆘 Suporte Técnico"
      },
      {
        type: "paragraph",
        text: "Se o problema persistir:"
      },
      {
        type: "list",
        items: [
          "Email: suporte@prontoai.com",
          "Inclua: screenshot do erro, descrição do problema",
          "Anexe o screenshot que não funcionou",
          "Resposta em até 24 horas (12h para Premium)"
        ]
      }
    ],
    relatedArticles: []
  },

  "problemas-pagamento": {
    title: "Problemas com pagamento",
    category: "Solução de Problemas",
    readTime: "7 min",
    views: "3.9k",
    lastUpdated: "20 de Novembro, 2023",
    content: [
      {
        type: "intro",
        text: "Soluções para os problemas mais comuns relacionados a pagamentos e assinaturas."
      },
      {
        type: "heading",
        text: "💳 Cartão Recusado"
      },
      {
        type: "subheading",
        text: "Possíveis causas:"
      },
      {
        type: "list",
        items: [
          "Saldo ou limite insuficiente",
          "Dados do cartão incorretos",
          "Cartão vencido",
          "Bloqueio por segurança do banco",
          "Cartão não habilitado para compras online"
        ]
      },
      {
        type: "subheading",
        text: "Soluções:"
      },
      {
        type: "steps",
        items: [
          "Verifique saldo/limite disponível",
          "Confirme se os dados estão corretos",
          "Entre em contato com seu banco",
          "Tente outro cartão",
          "Use método alternativo (PIX, boleto)"
        ]
      },
      {
        type: "heading",
        text: "🔄 Cobrança Duplicada"
      },
      {
        type: "paragraph",
        text: "Se você foi cobrado duas vezes:"
      },
      {
        type: "steps",
        items: [
          "Verifique se não são cobranças de períodos diferentes",
          "Uma pode ser pré-autorização (será estornada automaticamente)",
          "Aguarde 3 dias úteis para compensação",
          "Se persistir, entre em contato com suporte",
          "Envie comprovantes das duas cobranças"
        ]
      },
      {
        type: "heading",
        text: "❌ Upgrade Não Ativado"
      },
      {
        type: "list",
        items: [
          "Aguarde até 5 minutos (processamento)",
          "Faça logout e login novamente",
          "Verifique email de confirmação",
          "Verifique se pagamento foi aprovado",
          "Entre em contato com suporte se não resolver"
        ]
      },
      {
        type: "heading",
        text: "📱 Problemas com PIX"
      },
      {
        type: "list",
        items: [
          "QR Code expirou (válido por 15 min): Gere novo",
          "Pagamento não confirmado: Aguarde até 5 minutos",
          "Erro ao escanear: Use Pix Copia e Cola",
          "Valor incorreto: Não altere o valor do PIX"
        ]
      },
      {
        type: "heading",
        text: "🧾 Problemas com Boleto"
      },
      {
        type: "list",
        items: [
          "Boleto vencido: Solicite novo boleto",
          "Pagamento não compensou: Aguarde 1-3 dias úteis",
          "Não recebi boleto: Verifique spam/lixeira",
          "Erro ao gerar: Tente outro navegador"
        ]
      },
      {
        type: "heading",
        text: "💰 Solicitando Reembolso"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Assinatura",
          "Clique em 'Solicitar Reembolso'",
          "Selecione o motivo",
          "Confirme a solicitação",
          "Reembolso processado em 5-7 dias úteis"
        ]
      },
      {
        type: "heading",
        text: "📧 Nota Fiscal"
      },
      {
        type: "paragraph",
        text: "Para baixar nota fiscal:"
      },
      {
        type: "steps",
        items: [
          "Vá em Configurações → Assinatura",
          "Clique em 'Histórico de Pagamentos'",
          "Selecione o pagamento",
          "Clique em 'Baixar Nota Fiscal'",
          "PDF será enviado para seu email"
        ]
      },
      {
        type: "heading",
        text: "🆘 Contato Financeiro"
      },
      {
        type: "paragraph",
        text: "Para problemas não resolvidos:"
      },
      {
        type: "list",
        items: [
          "Email: financeiro@prontoai.com",
          "Inclua: número do pedido, comprovante de pagamento",
          "Descreva o problema detalhadamente",
          "Resposta em até 24 horas"
        ]
      }
    ],
    relatedArticles: []
  }
};

export default function ArtigoPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Buscar artigo pelos dados
  const article = articlesData[slug];

  // Se artigo não existe, mostrar 404
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link href="/ajuda">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
              Voltar para Central de Ajuda
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link>
          <span>→</span>
          <Link href="/ajuda" className="hover:text-blue-600 transition-colors">Central de Ajuda</Link>
          <span>→</span>
          <span className="text-gray-900 font-medium">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/ajuda" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium">
            <ArrowLeft size={20} />
            Voltar para Central de Ajuda
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Category Badge */}
            <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime} de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{article.views} visualizações</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Atualizado em {article.lastUpdated}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((section: any, index: number) => {
                switch (section.type) {
                  case "intro":
                    return (
                      <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                        <p className="text-lg text-gray-800 leading-relaxed">{section.text}</p>
                      </div>
                    );
                  
                  case "heading":
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                        {section.text}
                      </h2>
                    );
                  
                  case "subheading":
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">
                        {section.text}
                      </h3>
                    );
                  
                  case "paragraph":
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-6">
                        {section.text}
                      </p>
                    );
                  
                  case "list":
                    return (
                      <ul key={index} className="space-y-3 mb-8">
                        {section.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  
                  case "steps":
                    return (
                      <ol key={index} className="space-y-4 mb-8">
                        {section.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </span>
                            <span className="text-gray-700 pt-1">{item}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  
                  case "tip":
                    return (
                      <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                        <p className="text-gray-800 font-medium">{section.text}</p>
                      </div>
                    );
                  
                  default:
                    return null;
                }
              })}
            </div>

            {/* Article Actions */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200">
              <Button variant="outline" className="flex items-center gap-2">
                <ThumbsUp size={18} />
                Útil
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark size={18} />
                Salvar
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={18} />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Help CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center shadow-2xl">
          <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Este artigo foi útil?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Se você ainda tem dúvidas ou precisa de ajuda adicional, nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-6">
                Entrar em Contato
              </Button>
            </Link>
            <Link href="/ajuda">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                Ver Mais Artigos
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
