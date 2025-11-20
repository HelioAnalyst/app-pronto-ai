"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Upload, MessageSquare, Sparkles, Zap, Shield, Users, Image as ImageIcon, Settings, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RecursosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link href="/recursos" className="text-blue-600 font-semibold">
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
                className="block px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-semibold"
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
            <Sparkles size={16} />
            <span>Recursos Poderosos</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              conversas perfeitas
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como o ProntoAI pode transformar suas conversas com tecnologia de IA avançada
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Upload className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload de Screenshots</h3>
            <p className="text-gray-600 mb-4">
              Envie screenshots de conversas de qualquer plataforma - WhatsApp, Instagram, Tinder ou SMS. Nossa IA processa a imagem e extrai o contexto automaticamente.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Processamento instantâneo de imagens</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Suporte para múltiplos formatos</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Reconhecimento de texto avançado</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IA Contextual Avançada</h3>
            <p className="text-gray-600 mb-4">
              Nossa IA não apenas lê as mensagens - ela entende o contexto, tom, emoções e intenções para gerar respostas verdadeiramente relevantes.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Análise de sentimento e tom</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Compreensão de contexto histórico</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Adaptação ao estilo da conversa</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MessageSquare className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Múltiplas Sugestões</h3>
            <p className="text-gray-600 mb-4">
              Receba várias opções de resposta para cada situação. Escolha a que melhor se encaixa ou use como inspiração para criar sua própria mensagem.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>3-5 sugestões por contexto</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Variações de tom e estilo</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Opções criativas e conservadoras</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Settings className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalização de Estilo</h3>
            <p className="text-gray-600 mb-4">
              Ajuste o tom, formalidade e estilo das respostas para diferentes contextos - trabalho, amigos, relacionamentos ou situações casuais.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Tons: casual, formal, flerte, profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Ajuste de criatividade e humor</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Perfis salvos para diferentes contatos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mais recursos incríveis
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Funcionalidades adicionais para uma experiência completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Shield className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Privacidade Total</h3>
              <p className="text-blue-100">
                Suas conversas são processadas de forma segura e nunca são armazenadas em nossos servidores
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Smartphone className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Multi-Plataforma</h3>
              <p className="text-blue-100">
                Funciona com WhatsApp, Instagram, Tinder, SMS e qualquer app de mensagens
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Users className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Interface Intuitiva</h3>
              <p className="text-blue-100">
                Design simples e fácil de usar - gere respostas em segundos sem complicação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para experimentar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Comece a usar o ProntoAI hoje e transforme suas conversas digitais
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Começar Gratuitamente
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
