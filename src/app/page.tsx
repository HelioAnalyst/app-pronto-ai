"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Upload, MessageSquare, Sparkles, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Respostas inteligentes com IA</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Sua resposta perfeita está a um{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              clique de distância
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Envie screenshots de conversas do WhatsApp, Instagram, Tinder ou SMS e receba sugestões de respostas inteligentes e personalizadas geradas por IA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Começar Agora
                <Zap className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/recursos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                Ver Recursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Três passos simples para respostas perfeitas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Upload className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Envie o Screenshot</h3>
            <p className="text-gray-600">
              Tire um print da conversa no WhatsApp, Instagram, Tinder ou SMS e envie para o ProntoAI
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. IA Analisa o Contexto</h3>
            <p className="text-gray-600">
              Nossa IA avançada entende o contexto, tom e intenção da conversa para gerar respostas adequadas
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <MessageSquare className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Escolha e Responda</h3>
            <p className="text-gray-600">
              Receba múltiplas sugestões personalizadas e escolha a resposta perfeita para sua situação
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher o ProntoAI?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              A solução completa para suas conversas digitais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Respostas Instantâneas</h3>
              <p className="text-blue-100">
                Gere respostas em segundos e nunca mais fique sem saber o que dizer
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Privado</h3>
              <p className="text-blue-100">
                Suas conversas são processadas com segurança e nunca são armazenadas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalização Total</h3>
              <p className="text-blue-100">
                Adapte o tom e estilo das respostas para diferentes contextos e pessoas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar suas conversas?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão usando o ProntoAI para ter conversas mais inteligentes
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
