"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { LogoWithText } from "@/components/custom/logo"
import { Mail, Lock, Sparkles, MessageSquare, Zap, Shield } from "lucide-react"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error("Preencha todos os campos!")
      return
    }

    setIsLoading(true)
    
    // Check for admin credentials
    if (email === "admin@prontoai.com" && password === "admin123") {
      localStorage.setItem("prontoai-admin", "true")
      localStorage.setItem("prontoai-logged-in", "true")
      toast.success("Login de administrador realizado!")
      router.push("/admin")
      return
    }
    
    // Simulate regular login
    setTimeout(() => {
      localStorage.setItem("prontoai-logged-in", "true")
      toast.success("Login realizado com sucesso!")
      router.push("/app")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MessageSquare className="absolute top-20 left-20 w-8 h-8 text-cyan-500/30 animate-float" />
        <Sparkles className="absolute top-40 right-32 w-6 h-6 text-blue-500/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Zap className="absolute bottom-32 left-40 w-7 h-7 text-indigo-500/30 animate-float" style={{ animationDelay: '1s' }} />
        <Shield className="absolute bottom-20 right-20 w-8 h-8 text-cyan-500/30 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <LogoWithText className="scale-125" />
        </div>

        {/* Login Card */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-8 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Bem-vindo de volta!
            </h1>
            <p className="text-sm text-slate-400">
              Entre para continuar gerando respostas perfeitas
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 bg-slate-950 border-cyan-500/30 text-white placeholder:text-slate-500 focus:ring-cyan-500 focus:border-cyan-500 h-12 transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-slate-300">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 bg-slate-950 border-cyan-500/30 text-white placeholder:text-slate-500 focus:ring-cyan-500 focus:border-cyan-500 h-12 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-slate-300 transition-colors duration-200">
                <input type="checkbox" className="w-4 h-4 rounded border-cyan-500/30 bg-slate-950 text-cyan-500 focus:ring-cyan-500" />
                Lembrar-me
              </label>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                Esqueceu a senha?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Entrando...
                </div>
              ) : (
                "Entrar"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Não tem uma conta?{" "}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200">
                Criar conta
              </a>
            </p>
          </div>

          {/* Admin Hint */}
          <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-xs text-amber-400 text-center flex items-center justify-center gap-2">
              <Shield className="w-3 h-3" />
              Admin: admin@prontoai.com / admin123
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-cyan-500/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/30 hover:scale-110">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-400">Múltiplas Conversas</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-blue-600/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600/30 hover:scale-110">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-xs text-slate-400">IA Avançada</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-indigo-600/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-indigo-600/30 hover:scale-110">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <p className="text-xs text-slate-400">Respostas Rápidas</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
