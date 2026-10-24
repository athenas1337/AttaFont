import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  totalFontsCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalFontsCount,
  theme,
  onToggleTheme,
  currentPage,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                A
              </span>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                AttaFont
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                v2.0 Pro
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              Generator Fancy Text & Unicode Font (10,000+ Variasi)
            </p>
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold text-slate-600 dark:text-slate-300 mr-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-900'
                  : 'hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentPage === 'about'
                  ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-900'
                  : 'hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              Tentang Kami
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentPage === 'contact'
                  ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-900'
                  : 'hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              Kontak
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentPage === 'privacy'
                  ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-900'
                  : 'hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              Privasi
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>{totalFontsCount.toLocaleString()} Font</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors shadow-sm"
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>

      </div>
    </header>
  );
};
