"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TermosPage() {
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
            <FileText size={16} />
            <span>Última atualização: Janeiro 2024</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Termos de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Uso
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Leia atentamente os termos e condições de uso do ProntoAI
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Permitido</h3>
            <p className="text-gray-600 text-sm">
              Use o ProntoAI para gerar sugestões de respostas para suas conversas pessoais de forma ética e responsável
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <AlertCircle className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Proibido</h3>
            <p className="text-gray-600 text-sm">
              Não use para spam, assédio, fraude, ou qualquer atividade ilegal ou prejudicial a terceiros
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="text-blue-600" size={28} />
              1. Aceitação dos Termos
            </h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Ao acessar e usar o ProntoAI, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças significativas serão notificadas por email ou através de aviso no aplicativo.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Descrição do Serviço</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                O ProntoAI é uma ferramenta de inteligência artificial que analisa screenshots de conversas e gera sugestões de respostas. O serviço é fornecido "como está" e pode ser modificado, suspenso ou descontinuado a qualquer momento.
              </p>
              <p>
                Não garantimos que o serviço será ininterrupto, livre de erros ou completamente seguro, embora façamos nossos melhores esforços nesse sentido.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Conta de Usuário</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Para usar o ProntoAI, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Garantir que tem pelo menos 18 anos de idade</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Uso Aceitável</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p className="font-semibold text-gray-900">Você concorda em NÃO usar o ProntoAI para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enviar spam, assédio ou conteúdo ofensivo</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Realizar atividades ilegais ou fraudulentas</li>
                <li>Tentar hackear, sobrecarregar ou prejudicar o sistema</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
                <li>Usar o serviço para prejudicar, enganar ou manipular terceiros</li>
                <li>Revender ou redistribuir o serviço sem autorização</li>
              </ul>
              <p className="font-semibold text-red-600">
                Violações destes termos podem resultar em suspensão ou encerramento imediato da conta.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Propriedade Intelectual</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Todo o conteúdo, recursos e tecnologia do ProntoAI são propriedade exclusiva da empresa e protegidos por leis de propriedade intelectual.
              </p>
              <p>
                As sugestões de resposta geradas pela IA são fornecidas para seu uso pessoal. Você mantém os direitos sobre o conteúdo que envia (screenshots), mas nos concede licença temporária para processá-lo.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Pagamentos e Assinaturas</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                <strong>Planos Pagos:</strong> Ao assinar um plano pago, você concorda em pagar as taxas aplicáveis. Os pagamentos são processados de forma segura por processadores terceirizados.
              </p>
              <p>
                <strong>Renovação Automática:</strong> Assinaturas são renovadas automaticamente. Você pode cancelar a qualquer momento através das configurações da conta.
              </p>
              <p>
                <strong>Reembolsos:</strong> Oferecemos garantia de 7 dias. Após este período, reembolsos são avaliados caso a caso.
              </p>
              <p>
                <strong>Alterações de Preço:</strong> Podemos alterar preços com aviso prévio de 30 dias. Alterações não afetam assinaturas ativas até a renovação.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitação de Responsabilidade</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                O ProntoAI é uma ferramenta de sugestão. Você é totalmente responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Revisar e aprovar qualquer resposta antes de enviá-la</li>
                <li>Consequências das mensagens que você envia</li>
                <li>Uso ético e responsável das sugestões geradas</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Não nos responsabilizamos por mal-entendidos, conflitos ou problemas resultantes do uso de nossas sugestões. O serviço é fornecido "como está" sem garantias de qualquer tipo.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Privacidade</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Seu uso do ProntoAI também é regido por nossa <Link href="/privacidade" className="text-blue-600 hover:underline">Política de Privacidade</Link>. Processamos screenshots temporariamente e nunca armazenamos o conteúdo de suas conversas.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Encerramento</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Podemos suspender ou encerrar sua conta se você violar estes termos, usar o serviço de forma inadequada, ou por qualquer outro motivo a nosso critério.
              </p>
              <p>
                Você pode encerrar sua conta a qualquer momento através das configurações. Após o encerramento, seus dados serão excluídos conforme nossa Política de Privacidade.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Lei Aplicável</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <p>
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contato</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="font-semibold text-gray-900 mb-2">Email Legal:</p>
                <a href="mailto:legal@prontoai.com" className="text-blue-600 hover:underline text-lg">
                  legal@prontoai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ao criar sua conta, você concorda com estes Termos de Uso e nossa Política de Privacidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Criar Conta Gratuita
              </Button>
            </Link>
            <Link href="/privacidade">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Ver Política de Privacidade
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
