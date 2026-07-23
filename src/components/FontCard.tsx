import React, { useState } from 'react';
import { FontOutput } from '../utils/fontGenerator';
import { Copy, Check, Star, Sparkles } from 'lucide-react';

interface FontCardProps {
  font: FontOutput;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCopy: (text: string) => void;
}

export const FontCard: React.FC<FontCardProps> = ({
  font,
  isFavorite,
  onToggleFavorite,
  onCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(font.convertedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(font.id);
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between"
    >
      {/* Top Card Info Bar */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center space-x-2 truncate">
          <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors truncate">
            {font.name}
          </span>
          {font.isPopular && (
            <span className="shrink-0 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Populer</span>
            </span>
          )}
        </div>

        {/* Favorite Star Button */}
        <button
          onClick={handleFavoriteClick}
          title={isFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
          className={`p-1.5 rounded-lg transition-colors shrink-0 ${
            isFavorite
              ? 'text-amber-400 bg-amber-400/10 hover:bg-amber-400/20'
              : 'text-slate-500 hover:text-amber-400 hover:bg-slate-800'
          }`}
        >
          <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400' : ''}`} />
        </button>
      </div>

      {/* Main Converted Font Display */}
      <div className="my-2 py-2 overflow-x-auto no-scrollbar">
        <p className="text-lg sm:text-xl font-medium text-slate-100 group-hover:text-indigo-300 transition-colors tracking-wide break-all font-mono leading-relaxed select-all">
          {font.convertedText}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500 group-hover:text-slate-400">
          {font.category}
        </span>

        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-xl font-medium text-xs flex items-center space-x-1.5 transition-all duration-200 ${
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white border border-slate-700 group-hover:border-indigo-500'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
