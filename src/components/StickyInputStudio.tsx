import React from 'react';
import { X, Search, Sparkles, Type, AlignLeft } from 'lucide-react';

interface StickyInputStudioProps {
  inputText: string;
  setInputText: (text: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SAMPLE_PRESETS = [
  'Atha',
  'AttaFont Engine',
  'Nick Gamer FF',
  'Aesthetic Bio 🌸',
  'Gothic Raven ⚔️',
  'Cyber Glitch ⚡',
];

export const StickyInputStudio: React.FC<StickyInputStudioProps> = ({
  inputText,
  setInputText,
  searchQuery,
  setSearchQuery,
}) => {
  const charCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        
        {/* Input Row */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Text Input Studio Box */}
          <div className="relative flex-1 w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-400 transition-colors">
              <Type className="w-5 h-5" />
            </div>
            
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ketik teks kamu di sini..."
              className="w-full pl-11 pr-24 py-3.5 sm:py-4 bg-slate-900/90 border border-slate-700/80 focus:border-indigo-500 rounded-2xl text-slate-100 placeholder-slate-500 font-medium text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-inner"
            />

            {/* Right inside controls: Clear button & Char counter */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
              {inputText.length > 0 && (
                <button
                  onClick={() => setInputText('')}
                  title="Hapus Teks"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <div className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800/90 text-xs font-mono text-slate-400 border border-slate-700/50">
                <AlignLeft className="w-3 h-3 text-indigo-400" />
                <span>{charCount} Karakter</span>
              </div>
            </div>
          </div>

          {/* Live Search Bar */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari gaya font..."
              className="w-full pl-10 pr-9 py-3 bg-slate-900/90 border border-slate-700/80 focus:border-purple-500 rounded-2xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Preset Samples & Quick Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-slate-400 font-medium flex items-center space-x-1 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Contoh Teks:</span>
            </span>
            {SAMPLE_PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => setInputText(preset)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${
                  inputText === preset
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="text-slate-400 text-[11px] sm:text-xs font-mono ml-auto">
            {wordCount} Kata | {charCount} Karakter
          </div>
        </div>

      </div>
    </div>
  );
};
