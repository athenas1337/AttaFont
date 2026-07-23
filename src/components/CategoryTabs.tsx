import React from 'react';
import { Sparkles, Gamepad2, Heart, Skull, Zap, Smile, Star } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  favoritesCount: number;
}

export const CATEGORIES = [
  { id: 'All Fonts', label: 'Semua Font', icon: Sparkles, badge: '2000+' },
  { id: 'Gamer & Nickname', label: 'Gamer & Nickname', icon: Gamepad2 },
  { id: 'Aesthetic & Bio', label: 'Aesthetic & Bio', icon: Heart },
  { id: 'Gothic & Classic', label: 'Gothic & Classic', icon: Skull },
  { id: 'Glitch & Cyber', label: 'Glitch & Cyber', icon: Zap },
  { id: 'Symbols & Emoji', label: 'Symbols & Emoji', icon: Smile },
  { id: 'Favorites', label: 'Favorit Saya', icon: Star, countKey: true },
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  setActiveCategory,
  favoritesCount,
}) => {
  return (
    <div className="py-4 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
                
                {cat.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {cat.badge}
                  </span>
                )}

                {cat.countKey && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
