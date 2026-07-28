import React from 'react';
import { VibeType } from '../utils/decoratorTemplates';
import { Compass, Zap, HeartHandshake, Laptop, Crown, Sparkles, Skull, Gamepad2 } from 'lucide-react';

interface VibeFilterBarProps {
  activeVibe: VibeType;
  setActiveVibe: (vibe: VibeType) => void;
}

export const VIBE_OPTIONS: { id: VibeType; label: string; icon: React.ElementType; color: string }[] = [
  { id: 'All', label: 'Semua Mood/Vibe', icon: Compass, color: 'text-slate-400' },
  { id: 'Cyberpunk', label: 'Cyberpunk & Matrix', icon: Zap, color: 'text-cyan-400' },
  { id: 'Retro Wedding', label: 'Retro & Wedding', icon: HeartHandshake, color: 'text-pink-400' },
  { id: 'Minimalist Tech', label: 'Minimalist Tech', icon: Laptop, color: 'text-indigo-400' },
  { id: 'Royal Luxury', label: 'Royal & Luxury', icon: Crown, color: 'text-amber-400' },
  { id: 'Anime Kawaii', label: 'Anime & Kawaii', icon: Sparkles, color: 'text-rose-400' },
  { id: 'Dark Gothic', label: 'Dark & Gothic', icon: Skull, color: 'text-purple-400' },
  { id: 'Gamer FF/MLBB', label: 'Gamer FF / MLBB', icon: Gamepad2, color: 'text-emerald-400' },
];

export const VibeFilterBar: React.FC<VibeFilterBarProps> = ({ activeVibe, setActiveVibe }) => {
  return (
    <div className="py-2.5 mb-2">
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap shrink-0 flex items-center space-x-1 mr-1">
          <Compass className="w-3.5 h-3.5 text-indigo-400" />
          <span>Smart Vibe Filter:</span>
        </span>

        {VIBE_OPTIONS.map((item) => {
          const Icon = item.icon;
          const isActive = activeVibe === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveVibe(item.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-slate-800 text-white border-indigo-500/80 shadow-md shadow-indigo-500/20 scale-105'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : item.color}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
