"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacidadePage() {
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
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            <span>Última atualização: Janeiro 2024</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Política de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Privacidade
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Sua privacidade é nossa prioridade. Veja como protegemos seus dados.
          </p>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <Lock className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Dados Criptografados</h3>
            <p className="text-gray-600 text-sm">
              Todas as comunicações são protegidas com criptografia de ponta a ponta
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sem Armazenamento</h3>
            <p className="text-gray-600 text-sm">
              Suas conversas nunca são armazenadas em nossos servidores
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
              <UserCheck className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Controle Total</h3>
            <p className="text-gray-600 text-sm">
              Você tem controle completo sobre seus dados a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Database className="text-blue-600" size={28} />
              1. Informações que Coletamos
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                <strong>Informações de Conta:</strong> Nome, email e informações de pagamento necessárias para criar e gerenciar sua conta.
              </p>
              <p>
                <strong>Dados de Uso:</strong> Informações sobre como você usa o ProntoAI, incluindo frequência de uso e recursos acessados.
              </p>
              <p>
                <strong>Screenshots Temporários:</strong> As imagens que você envia são processadas em tempo real e <strong>NUNCA são armazenadas</strong> após o processamento.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="text-blue-600" size={28} />
              2. Como Usamos Suas Informações
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>Utilizamos suas informações exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos e gerenciar assinaturas</li>
                <li>Enviar atualizações importantes sobre o serviço</li>
                <li>Responder suas dúvidas e fornecer suporte</li>
                <li>Garantir a segurança e prevenir fraudes</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Nunca vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lock className="text-blue-600" size={28} />
              3. Proteção de Dados
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>Implementamos medidas de segurança rigorosas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia SSL/TLS para todas as comunicações</li>
                <li>Servidores seguros com proteção contra invasões</li>
                <li>Processamento temporário de screenshots (sem armazenamento)</li>
                <li>Acesso restrito aos dados apenas para equipe autorizada</li>
                <li>Auditorias regulares de segurança</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="text-blue-600" size={28} />
              4. Seus Direitos
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>Você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acessar</strong> seus dados pessoais a qualquer momento</li>
                <li><strong>Corrigir</strong> informações incorretas ou desatualizadas</li>
                <li><strong>Excluir</strong> sua conta e dados associados</li>
                <li><strong>Exportar</strong> seus dados em formato legível</li>
                <li><strong>Optar por não receber</strong> comunicações de marketing</li>
              </ul>
              <p>
                Para exercer qualquer destes direitos, entre em contato através do email: <a href="mailto:privacidade@prontoai.com" className="text-blue-600 hover:underline">privacidade@prontoai.com</a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="text-blue-600" size={28} />
              5. Cookies e Tecnologias Similares
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar sua experiência. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Compartilhamento de Dados</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>Compartilhamos dados apenas quando:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Necessário para processar pagamentos (processadores seguros)</li>
                <li>Exigido por lei ou ordem judicial</li>
                <li>Necessário para proteger nossos direitos legais</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Nunca compartilhamos o conteúdo das suas conversas com terceiros.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Retenção de Dados</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Mantemos suas informações de conta enquanto sua conta estiver ativa. Screenshots são processados em tempo real e descartados imediatamente. Após exclusão da conta, seus dados são permanentemente removidos em até 30 dias.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Alterações nesta Política</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas por email ou através de aviso no aplicativo. A data da última atualização está sempre indicada no topo desta página.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contato</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Para dúvidas sobre esta política de privacidade ou sobre como tratamos seus dados, entre em contato:
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="font-semibold text-gray-900 mb-2">Email de Privacidade:</p>
                <a href="mailto:privacidade@prontoai.com" className="text-blue-600 hover:underline text-lg">
                  privacidade@prontoai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua privacidade está protegida
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Use o ProntoAI com tranquilidade sabendo que seus dados estão seguros
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Começar Agora
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
