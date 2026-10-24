import React from 'react';
import { Heart, Code2, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 py-12 mt-20 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200 dark:border-slate-900">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center font-bold text-white text-base">
                A
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">AttaFont Engine</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                v2.0 Pro
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Platform generator teks Unicode & fancy text ultra-cepat dengan 10.000+ variasi font estetik, gamer nickname, gothic, dan simbol unik. Teroptimasi untuk domain <code>attafont.my.id</code>.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Halaman Resmi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Beranda Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Tentang Kami (About Us)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Hubungi Kami (Contact Us)
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Legal & Kebijakan</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Kebijakan Privasi (Privacy Policy)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Syarat & Ketentuan (Terms of Service)
                </button>
              </li>
              <li>
                <a href="mailto:admin@attafont.my.id" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono font-semibold">
                  admin@attafont.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Footer Branding */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-800 dark:text-slate-300 shadow-sm dark:shadow-inner">
            <span>Dibuat dengan cinta oleh Atha</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Code2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>React 19 + TypeScript + Vite</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>attafont.my.id</span>
              </span>
            </div>

            <p>© {new Date().getFullYear()} AttaFont. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
