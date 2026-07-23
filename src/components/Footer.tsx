import React from 'react';
import { Heart, Sparkles, Code2, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand Header */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center font-bold text-white text-base">
            A
          </div>
          <span className="text-xl font-black tracking-tight text-white">AttaFont</span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            v1.0 Engine
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Ultra-Fast Client-Side Unicode Text Generator dengan 2000+ kombinasi font estetik, gamer nickname, gothic, dan simbol keren.
        </p>

        {/* Mandatory Footer Branding */}
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-sm font-medium text-slate-300 shadow-inner">
          <span>Dibuat dengan cinta oleh Atha</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <div className="pt-4 border-t border-slate-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>React 19 + TypeScript + Vite</span>
            </span>
            <span className="flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Unicode Engine v1.0</span>
            </span>
          </div>

          <p>© {new Date().getFullYear()} AttaFont. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
