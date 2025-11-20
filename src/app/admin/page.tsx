"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LogoWithText } from "@/components/custom/logo"
import { 
  Users, 
  Ticket, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Shield, 
  LogOut,
  Search,
  Filter,
  Download,
  Mail,
  Calendar,
  Percent,
  Crown,
  Eye,
  EyeOff,
  RefreshCw
} from "lucide-react"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase"

interface DiscountCode {
  id: string
  code: string
  discount: number
  type: "percentage" | "fixed"
  maxUses: number
  currentUses: number
  expiresAt: Date | null
  createdAt: Date
  active: boolean
}

interface TesterUser {
  id: string
  email: string
  name: string
  password: string
  status: "pending" | "active" | "expired"
  accessLevel: "basic" | "premium" | "unlimited"
  invitedAt: Date
  expiresAt: Date | null
  usageCount: number
}

export default function AdminPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({})
  const [loadingTester, setLoadingTester] = useState<string | null>(null)
  
  // Discount Codes State
  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([])
  const [newCodeValue, setNewCodeValue] = useState("")
  const [newCodeDiscount, setNewCodeDiscount] = useState("10")
  const [newCodeType, setNewCodeType] = useState<"percentage" | "fixed">("percentage")
  const [newCodeMaxUses, setNewCodeMaxUses] = useState("100")
  const [newCodeExpiry, setNewCodeExpiry] = useState("")
  
  // Testers State
  const [testers, setTesters] = useState<TesterUser[]>([])
  const [newTesterEmail, setNewTesterEmail] = useState("")
  const [newTesterName, setNewTesterName] = useState("")
  const [newTesterPassword, setNewTesterPassword] = useState("")
  const [newTesterAccess, setNewTesterAccess] = useState<"basic" | "premium" | "unlimited">("premium")
  const [newTesterDuration, setNewTesterDuration] = useState("30")
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "expired">("all")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check admin authentication
    const adminAuth = localStorage.getItem("prontoai-admin")
    if (!adminAuth) {
      router.push("/login")
      return
    }
    setIsAdmin(true)
    
    // Load data
    loadDiscountCodes()
    loadTesters()
  }, [router])

  // Load discount codes from localStorage
  const loadDiscountCodes = () => {
    const savedCodes = localStorage.getItem("prontoai-discount-codes")
    if (savedCodes) {
      const codes = JSON.parse(savedCodes).map((code: any) => ({
        ...code,
        createdAt: new Date(code.createdAt),
        expiresAt: code.expiresAt ? new Date(code.expiresAt) : null
      }))
      setDiscountCodes(codes)
    }
  }

  // Load testers from Supabase
  const loadTesters = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('testers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erro ao carregar testers:', error)
        toast.error('Erro ao carregar testers do banco de dados')
        setLoading(false)
        return
      }

      if (data && data.length > 0) {
        const testersData = data.map((tester: any) => ({
          id: tester.id,
          email: tester.email,
          name: tester.name,
          password: tester.password,
          status: tester.status as "pending" | "active" | "expired",
          accessLevel: tester.access_level as "basic" | "premium" | "unlimited",
          invitedAt: new Date(tester.invited_at),
          expiresAt: tester.expires_at ? new Date(tester.expires_at) : null,
          usageCount: tester.usage_count || 0
        }))
        setTesters(testersData)
        console.log('Testers carregados:', testersData.length)
        toast.success(`${testersData.length} testers carregados com sucesso!`)
      } else {
        console.log('Nenhum tester encontrado no banco')
        setTesters([])
        toast.info('Nenhum tester encontrado no banco de dados')
      }
    } catch (error) {
      console.error('Erro ao carregar testers:', error)
      toast.error('Erro ao carregar testers')
    } finally {
      setLoading(false)
    }
  }

  // Reload single tester
  const reloadSingleTester = async (id: string, name: string) => {
    try {
      setLoadingTester(id)
      const { data, error } = await supabase
        .from('testers')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Erro ao recarregar tester:', error)
        toast.error(`Erro ao recarregar ${name}`)
        return
      }

      if (data) {
        const updatedTester: TesterUser = {
          id: data.id,
          email: data.email,
          name: data.name,
          password: data.password,
          status: data.status as "pending" | "active" | "expired",
          accessLevel: data.access_level as "basic" | "premium" | "unlimited",
          invitedAt: new Date(data.invited_at),
          expiresAt: data.expires_at ? new Date(data.expires_at) : null,
          usageCount: data.usage_count || 0
        }

        setTesters(prev => prev.map(t => t.id === id ? updatedTester : t))
        toast.success(`${name} recarregado com sucesso!`)
      }
    } catch (error) {
      console.error('Erro ao recarregar tester:', error)
      toast.error(`Erro ao recarregar ${name}`)
    } finally {
      setLoadingTester(null)
    }
  }

  // Save discount codes to localStorage
  useEffect(() => {
    if (discountCodes.length > 0) {
      localStorage.setItem("prontoai-discount-codes", JSON.stringify(discountCodes))
    }
  }, [discountCodes])

  const handleLogout = () => {
    localStorage.removeItem("prontoai-admin")
    toast.success("Logout realizado com sucesso!")
    router.push("/login")
  }

  // Discount Code Functions
  const generateRandomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let code = ""
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setNewCodeValue(code)
  }

  const createDiscountCode = () => {
    if (!newCodeValue.trim()) {
      toast.error("Digite um código válido!")
      return
    }

    const newCode: DiscountCode = {
      id: Date.now().toString(),
      code: newCodeValue.toUpperCase(),
      discount: parseFloat(newCodeDiscount),
      type: newCodeType,
      maxUses: parseInt(newCodeMaxUses),
      currentUses: 0,
      expiresAt: newCodeExpiry ? new Date(newCodeExpiry) : null,
      createdAt: new Date(),
      active: true
    }

    setDiscountCodes(prev => [newCode, ...prev])
    setNewCodeValue("")
    setNewCodeDiscount("10")
    setNewCodeMaxUses("100")
    setNewCodeExpiry("")
    toast.success("Código de desconto criado!")
  }

  const toggleCodeStatus = (id: string) => {
    setDiscountCodes(prev => prev.map(code => 
      code.id === id ? { ...code, active: !code.active } : code
    ))
    toast.success("Status atualizado!")
  }

  const deleteCode = (id: string) => {
    setDiscountCodes(prev => prev.filter(code => code.id !== id))
    toast.success("Código removido!")
  }

  // Helper function to copy text with fallback
  const copyToClipboard = async (text: string): Promise<boolean> => {
    // Try modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback:', err)
      }
    }
    
    // Fallback to legacy method
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      
      return successful
    } catch (err) {
      console.error('Fallback copy failed:', err)
      return false
    }
  }

  const copyCode = async (code: string, id: string) => {
    const success = await copyToClipboard(code)
    if (success) {
      setCopiedId(id)
      toast.success("Código copiado!")
      setTimeout(() => setCopiedId(null), 2000)
    } else {
      toast.error("Erro ao copiar código. Tente copiar manualmente.")
    }
  }

  const copyCredentials = async (email: string, password: string, id: string) => {
    const credentials = `Email: ${email}\nPassword: ${password}`
    
    try {
      const success = await copyToClipboard(credentials)
      if (success) {
        setCopiedId(id)
        toast.success("Credenciais copiadas!")
        setTimeout(() => setCopiedId(null), 2000)
      } else {
        // Show credentials in a modal/alert as fallback
        alert(`Credenciais do Tester:\n\n${credentials}\n\nCopie manualmente estas informações.`)
        toast.info("Copie as credenciais manualmente")
      }
    } catch (error) {
      console.error('Erro ao copiar:', error)
      alert(`Credenciais do Tester:\n\n${credentials}\n\nCopie manualmente estas informações.`)
      toast.info("Copie as credenciais manualmente")
    }
  }

  const togglePasswordVisibility = (id: string) => {
    setShowPassword(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // Tester Functions
  const inviteTester = async () => {
    if (!newTesterEmail.trim() || !newTesterName.trim() || !newTesterPassword.trim()) {
      toast.error("Preencha todos os campos!")
      return
    }

    try {
      setLoading(true)
      
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + parseInt(newTesterDuration))

      const { data, error } = await supabase
        .from('testers')
        .insert([
          {
            email: newTesterEmail,
            name: newTesterName,
            password: newTesterPassword,
            status: 'active',
            access_level: newTesterAccess,
            expires_at: expiryDate.toISOString(),
            usage_count: 0
          }
        ])
        .select()

      if (error) {
        if (error.code === '23505') {
          toast.error("Este email já está cadastrado!")
        } else {
          console.error('Erro ao criar tester:', error)
          toast.error("Erro ao criar tester no banco de dados")
        }
        return
      }

      toast.success(`Tester ${newTesterName} adicionado com sucesso!`)
      setNewTesterEmail("")
      setNewTesterName("")
      setNewTesterPassword("")
      setNewTesterDuration("30")
      
      // Reload testers
      await loadTesters()
    } catch (error) {
      console.error('Erro ao criar tester:', error)
      toast.error("Erro ao criar tester")
    } finally {
      setLoading(false)
    }
  }

  const removeTester = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja remover o tester "${name}"?`)) {
      return
    }

    try {
      setLoadingTester(id)
      
      console.log('🗑️ Iniciando remoção do tester:', { id, name })
      
      // Marca como inativo e muda status para "expired" (soft delete)
      const { error: updateError, data: updateData } = await supabase
        .from('testers')
        .update({ 
          status: 'expired',
          expires_at: new Date().toISOString() // Define como expirado agora
        })
        .eq('id', id)
        .select()

      if (updateError) {
        console.error('❌ Erro ao remover tester:', updateError)
        toast.error(`Erro ao remover: ${updateError.message}`)
        setLoadingTester(null)
        return
      }

      console.log('✅ Tester removido com sucesso:', updateData)

      // Remove from local state immediately
      setTesters(prev => prev.filter(t => t.id !== id))
      toast.success(`${name} removido com sucesso!`)
      
    } catch (error: any) {
      console.error('❌ Erro inesperado ao remover tester:', error)
      toast.error(`Erro inesperado: ${error?.message || 'Desconhecido'}`)
    } finally {
      setLoadingTester(null)
    }
  }

  const sendInviteEmail = (tester: TesterUser) => {
    // Simulate sending email
    toast.success(`Convite enviado para ${tester.email}`)
  }

  const exportData = (type: "codes" | "testers") => {
    const data = type === "codes" ? discountCodes : testers
    const dataStr = JSON.stringify(data, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `prontoai-${type}-${Date.now()}.json`
    link.click()
    toast.success(`${type === "codes" ? "Códigos" : "Testers"} exportados!`)
  }

  // Filter testers
  const filteredTesters = testers.filter(tester => {
    const matchesSearch = tester.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tester.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || tester.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const stats = {
    totalCodes: discountCodes.length,
    activeCodes: discountCodes.filter(c => c.active).length,
    totalTesters: testers.length,
    activeTesters: testers.filter(t => t.status === "active").length,
    totalUses: discountCodes.reduce((sum, code) => sum + code.currentUses, 0)
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gray-400">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-zinc-950 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50 shadow-lg shadow-cyan-500/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoWithText />
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg shadow-amber-500/30">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 text-gray-300 transition-all duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Códigos</p>
                <p className="text-2xl font-bold text-gray-200">{stats.totalCodes}</p>
              </div>
              <Ticket className="w-8 h-8 text-cyan-500" />
            </div>
          </Card>
          
          <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Códigos Ativos</p>
                <p className="text-2xl font-bold text-gray-200">{stats.activeCodes}</p>
              </div>
              <Check className="w-8 h-8 text-emerald-500" />
            </div>
          </Card>
          
          <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Testers</p>
                <p className="text-2xl font-bold text-gray-200">{stats.totalTesters}</p>
              </div>
              <Users className="w-8 h-8 text-indigo-500" />
            </div>
          </Card>
          
          <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Testers Ativos</p>
                <p className="text-2xl font-bold text-gray-200">{stats.activeTesters}</p>
              </div>
              <Crown className="w-8 h-8 text-amber-500" />
            </div>
          </Card>
          
          <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-rose-500/20 hover:border-rose-500/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Usos Totais</p>
                <p className="text-2xl font-bold text-gray-200">{stats.totalUses}</p>
              </div>
              <Percent className="w-8 h-8 text-rose-500" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="testers" className="space-y-6">
          <TabsList className="bg-zinc-950 backdrop-blur-sm border border-cyan-500/20">
            <TabsTrigger value="testers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-200">
              <Users className="w-4 h-4 mr-2" />
              Testers
            </TabsTrigger>
            <TabsTrigger value="codes" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-200">
              <Ticket className="w-4 h-4 mr-2" />
              Códigos de Desconto
            </TabsTrigger>
          </TabsList>

          {/* Testers Tab */}
          <TabsContent value="testers" className="space-y-6">
            {/* Add New Tester */}
            <Card className="p-6 bg-zinc-950 backdrop-blur-sm border-cyan-500/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-200">
                <Plus className="w-5 h-5 text-cyan-400" />
                Adicionar Novo Tester
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Nome</Label>
                  <Input
                    value={newTesterName}
                    onChange={(e) => setNewTesterName(e.target.value)}
                    placeholder="João Silva"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Email</Label>
                  <Input
                    type="email"
                    value={newTesterEmail}
                    onChange={(e) => setNewTesterEmail(e.target.value)}
                    placeholder="joao@email.com"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Senha</Label>
                  <Input
                    type="text"
                    value={newTesterPassword}
                    onChange={(e) => setNewTesterPassword(e.target.value)}
                    placeholder="senha123"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Nível de Acesso</Label>
                  <Select value={newTesterAccess} onValueChange={(v: any) => setNewTesterAccess(v)}>
                    <SelectTrigger className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Básico</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="unlimited">Ilimitado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Duração (dias)</Label>
                  <Input
                    type="number"
                    value={newTesterDuration}
                    onChange={(e) => setNewTesterDuration(e.target.value)}
                    placeholder="30"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={inviteTester}
                  disabled={loading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {loading ? "Adicionando..." : "Adicionar Tester"}
                </Button>
                <Button
                  onClick={loadTesters}
                  disabled={loading}
                  variant="outline"
                  className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 text-gray-300 transition-all duration-200"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  {loading ? "Carregando..." : "Recarregar Todos"}
                </Button>
                <Button
                  onClick={() => exportData("testers")}
                  variant="outline"
                  className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 text-gray-300 transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </Card>

            {/* Filters */}
            <Card className="p-4 bg-zinc-950 backdrop-blur-sm border-cyan-500/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar por nome ou email..."
                      className="pl-10 bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={(v: any) => setFilterStatus(v)}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativos</SelectItem>
                    <SelectItem value="expired">Expirados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* Testers List */}
            <Card className="p-6 bg-zinc-950 backdrop-blur-sm border-cyan-500/20">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Testers Cadastrados</h3>
              
              {loading && !loadingTester ? (
                <p className="text-center text-gray-500 py-8">Carregando...</p>
              ) : (
                <div className="space-y-3">
                  {filteredTesters.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      {searchTerm ? "Nenhum tester encontrado" : "Nenhum tester cadastrado ainda"}
                    </p>
                  ) : (
                    filteredTesters.map((tester) => (
                      <div
                        key={tester.id}
                        className="flex items-center justify-between p-4 bg-black backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-200">{tester.name}</h4>
                            <Badge className={
                              tester.status === "active" 
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
                                : "bg-rose-500/20 text-rose-400 border-rose-500/30"
                            }>
                              {tester.status === "active" ? "Ativo" : "Expirado"}
                            </Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                              {tester.accessLevel}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {tester.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Convidado: {tester.invitedAt.toLocaleDateString()}
                            </span>
                            {tester.expiresAt && (
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                Expira: {tester.expiresAt.toLocaleDateString()}
                              </span>
                            )}
                            <span>Usos: {tester.usageCount}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">Senha:</span>
                            <code className="bg-zinc-900 px-2 py-1 rounded text-cyan-400">
                              {showPassword[tester.id] ? tester.password : "••••••••"}
                            </code>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => togglePasswordVisibility(tester.id)}
                              className="h-6 w-6 hover:bg-cyan-500/10"
                            >
                              {showPassword[tester.id] ? (
                                <EyeOff className="w-3 h-3 text-gray-500" />
                              ) : (
                                <Eye className="w-3 h-3 text-gray-500" />
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => reloadSingleTester(tester.id, tester.name)}
                            disabled={loadingTester === tester.id}
                            className="hover:bg-cyan-500/10 transition-all duration-200"
                            title="Recarregar este tester"
                          >
                            <RefreshCw className={`w-4 h-4 text-cyan-400 ${loadingTester === tester.id ? 'animate-spin' : ''}`} />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => copyCredentials(tester.email, tester.password, tester.id)}
                            className="hover:bg-cyan-500/10 transition-all duration-200"
                          >
                            {copiedId === tester.id ? (
                              <Check className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-500" />
                            )}
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => sendInviteEmail(tester)}
                            className="hover:bg-cyan-500/10 transition-all duration-200"
                          >
                            <Mail className="w-4 h-4 text-cyan-400" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeTester(tester.id, tester.name)}
                            disabled={loadingTester === tester.id}
                            className="hover:bg-rose-500/10 transition-all duration-200"
                          >
                            <Trash2 className={`w-4 h-4 text-rose-400 ${loadingTester === tester.id ? 'opacity-50' : ''}`} />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Discount Codes Tab */}
          <TabsContent value="codes" className="space-y-6">
            {/* Create New Code */}
            <Card className="p-6 bg-zinc-950 backdrop-blur-sm border-cyan-500/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-200">
                <Plus className="w-5 h-5 text-cyan-400" />
                Criar Novo Código de Desconto
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Código</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newCodeValue}
                      onChange={(e) => setNewCodeValue(e.target.value.toUpperCase())}
                      placeholder="PRONTO2024"
                      className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                    />
                    <Button
                      onClick={generateRandomCode}
                      variant="outline"
                      className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 text-gray-300 transition-all duration-200"
                    >
                      Gerar
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Tipo de Desconto</Label>
                  <Select value={newCodeType} onValueChange={(v: any) => setNewCodeType(v)}>
                    <SelectTrigger className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Porcentagem (%)</SelectItem>
                      <SelectItem value="fixed">Valor Fixo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">
                    Desconto {newCodeType === "percentage" ? "(%)" : "(Valor)"}
                  </Label>
                  <Input
                    type="number"
                    value={newCodeDiscount}
                    onChange={(e) => setNewCodeDiscount(e.target.value)}
                    placeholder="10"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Máximo de Usos</Label>
                  <Input
                    type="number"
                    value={newCodeMaxUses}
                    onChange={(e) => setNewCodeMaxUses(e.target.value)}
                    placeholder="100"
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Label className="text-sm text-gray-400 mb-2 block">Data de Expiração (Opcional)</Label>
                  <Input
                    type="date"
                    value={newCodeExpiry}
                    onChange={(e) => setNewCodeExpiry(e.target.value)}
                    className="bg-black border-cyan-500/30 text-gray-200 focus:border-cyan-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={createDiscountCode}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Código
                </Button>
                <Button
                  onClick={() => exportData("codes")}
                  variant="outline"
                  className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 text-gray-300 transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </Card>

            {/* Codes List */}
            <Card className="p-6 bg-zinc-950 backdrop-blur-sm border-cyan-500/20">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Códigos Criados</h3>
              
              <div className="space-y-3">
                {discountCodes.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Nenhum código criado ainda</p>
                ) : (
                  discountCodes.map((code) => (
                    <div
                      key={code.id}
                      className="flex items-center justify-between p-4 bg-black backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <code className="text-lg font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded">
                            {code.code}
                          </code>
                          <Badge className={code.active ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-rose-500/20 text-rose-400 border-rose-500/30"}>
                            {code.active ? "Ativo" : "Inativo"}
                          </Badge>
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                            {code.type === "percentage" ? `${code.discount}%` : `$${code.discount}`}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Usos: {code.currentUses}/{code.maxUses}</span>
                          <span>Criado: {code.createdAt.toLocaleDateString()}</span>
                          {code.expiresAt && (
                            <span>Expira: {code.expiresAt.toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => copyCode(code.code, code.id)}
                          className="hover:bg-cyan-500/10 transition-all duration-200"
                        >
                          {copiedId === code.id ? (
                            <Check className="w-4 h-4 text-cyan-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-500" />
                          )}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => toggleCodeStatus(code.id)}
                          className="hover:bg-cyan-500/10 transition-all duration-200"
                        >
                          <Shield className={`w-4 h-4 ${code.active ? "text-emerald-400" : "text-rose-400"}`} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => deleteCode(code.id)}
                          className="hover:bg-rose-500/10 transition-all duration-200"
                        >
                          <Trash2 className="w-4 h-4 text-rose-400" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
