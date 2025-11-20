import React from 'react';

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3A7BFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#23D4C3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background rounded square */}
      <rect width="512" height="512" rx="120" fill="url(#logo-gradient)"/>
      
      {/* Letter P with modern design */}
      <path 
        d="M160 140 H280 C340 140 380 180 380 240 C380 300 340 340 280 340 H220 V420 H160 V140 Z M220 200 V280 H280 C305 280 320 265 320 240 C320 215 305 200 280 200 H220 Z" 
        fill="white"
      />
      
      {/* AI accent dot */}
      <circle cx="390" cy="180" r="25" fill="white" opacity="0.9"/>
    </svg>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="h-10 w-10 sm:h-12 sm:w-12" />
      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#3A7BFF] to-[#23D4C3] bg-clip-text text-transparent">
        ProntoAI
      </span>
    </div>
  );
}
