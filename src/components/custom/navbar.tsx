"use client";

import { Button } from "@/components/ui/button";
import { Settings, Crown, LogOut } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface NavbarProps {
  responsesRemaining: string | number;
  isTester: boolean;
  isTrialUser: boolean;
  onSettingsClick: () => void;
  onUpgradeClick: () => void;
}

export function Navbar({
  responsesRemaining,
  isTester,
  isTrialUser,
  onSettingsClick,
  onUpgradeClick,
}: NavbarProps) {
  
  function handleLogout() {
    // Em produção, implementar logout real com Supabase
    toast.success("Logout realizado com sucesso!");
    
    // Redirecionar para página inicial após logout
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return (
    <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-cyan-500/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ProntoAI
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <span className="text-sm text-gray-400">Respostas:</span>
              <span className="font-bold text-cyan-400">{responsesRemaining}</span>
            </div>
            
            <Button
              onClick={onSettingsClick}
              variant="outline"
              size="icon"
              className="border-zinc-800 text-gray-300 hover:bg-zinc-900 hover:text-cyan-400"
            >
              <Settings size={18} />
            </Button>

            {!isTester && isTrialUser && (
              <Button
                onClick={onUpgradeClick}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                <Crown className="mr-2" size={16} />
                <span className="hidden sm:inline">Upgrade</span>
              </Button>
            )}
            
            {isTester && (
              <div className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/50">
                <span className="text-sm font-semibold text-green-400">✓ Tester</span>
              </div>
            )}

            <Button
              onClick={handleLogout}
              variant="outline"
              size="icon"
              className="border-zinc-800 text-gray-300 hover:bg-red-900 hover:text-red-400 hover:border-red-800"
              title="Sair"
            >
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
