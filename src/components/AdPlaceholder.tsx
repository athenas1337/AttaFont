import React from 'react';
import { Sparkles } from 'lucide-react';

interface AdPlaceholderProps {
  slotId?: string;
  position: 'above-fold' | 'in-list' | 'sidebar' | 'footer-banner';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slotId = 'default-ad-slot', position }) => {
  // Respecting Google AdSense Core Web Vitals: Pre-allocated height prevents CLS layout shift!
  const getHeightClass = () => {
    switch (position) {
      case 'above-fold':
        return 'min-h-[90px] sm:min-h-[100px] my-4';
      case 'in-list':
        return 'min-h-[120px] my-4 col-span-full';
      case 'sidebar':
        return 'min-h-[250px] my-4';
      case 'footer-banner':
        return 'min-h-[100px] my-6';
      default:
        return 'min-h-[90px] my-4';
    }
  };

  return (
    <div className={`w-full ${getHeightClass()} flex flex-col items-center justify-center rounded-2xl bg-slate-900/40 border border-dashed border-slate-800/80 p-3 text-center transition-all overflow-hidden relative group`}>
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-1">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500/60" /> Iklan / Advertisement
        </span>
        <span className="text-xs text-slate-400 font-mono">
          [Google AdSense Responsive Unit #{slotId}]
        </span>
      </div>
    </div>
  );
};
