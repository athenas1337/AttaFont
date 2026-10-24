import React, { useState } from 'react';
import { FontOutput } from '../utils/fontGenerator';
import { Copy, Check, Star, Sparkles, Columns, Eye } from 'lucide-react';

interface FontCardProps {
  font: FontOutput;
  isFavorite: boolean;
  isCompared: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (font: FontOutput) => void;
  onCopy: (text: string) => void;
  onOpenPreview?: (font: FontOutput) => void;
}

export const FontCard: React.FC<FontCardProps> = ({
  font,
  isFavorite,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
  onCopy,
  onOpenPreview,
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

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCompare(font);
  };

  const handlePreviewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenPreview) {
      onOpenPreview(font);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className={`group relative bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-850 border rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-indigo-500/10 flex flex-col justify-between ${
        copied
          ? 'border-emerald-500 ring-2 ring-emerald-500/20'
          : 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50'
      }`}
    >
      {/* Top Card Info Bar */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center space-x-2 truncate">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-slate-100 transition-colors truncate">
            {font.name}
          </span>
          {font.isPopular && (
            <span className="shrink-0 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Top</span>
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1 shrink-0">
          {/* Social Bio Preview Button */}
          {onOpenPreview && (
            <button
              onClick={handlePreviewClick}
              title="Pratinjau Bio Instagram / WhatsApp"
              className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Multi-Font Compare Button */}
          <button
            onClick={handleCompareClick}
            title={isCompared ? 'Hapus dari Komparasi' : 'Tambah ke Komparasi Side-by-Side'}
            className={`p-1.5 rounded-lg transition-colors ${
              isCompared
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-300 dark:border-indigo-500/40'
                : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
          </button>

          {/* Favorite Star Button */}
          <button
            onClick={handleFavoriteClick}
            title={isFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
            className={`p-1.5 rounded-lg transition-colors ${
              isFavorite
                ? 'text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 hover:bg-amber-100 dark:hover:bg-amber-400/20'
                : 'text-slate-400 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Converted Font Display */}
      <div className="my-2 py-2 overflow-x-auto no-scrollbar">
        <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors tracking-wide break-all font-mono leading-relaxed select-all">
          {font.convertedText}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
          {font.category} • <span className="text-indigo-600 dark:text-indigo-400/90 font-semibold">{font.vibe}</span>
        </span>

        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all duration-200 shadow-sm ${
            copied
              ? 'bg-emerald-600 text-white border border-emerald-500 shadow-emerald-500/20'
              : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 text-slate-700 dark:text-slate-300 group-hover:text-white border border-slate-200 dark:border-slate-700 group-hover:border-indigo-600'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
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
