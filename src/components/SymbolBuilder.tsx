import React, { useState } from 'react';
import { SINGLE_SYMBOLS } from '../utils/decoratorTemplates';
import { Copy, Check, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';

interface SymbolBuilderProps {
  inputText: string;
  onCopy: (text: string) => void;
}

export const SymbolBuilder: React.FC<SymbolBuilderProps> = ({ inputText, onCopy }) => {
  const [prefixSymbol, setPrefixSymbol] = useState('꧁༺');
  const [suffixSymbol, setSuffixSymbol] = useState('༻꧂');
  const [copied, setCopied] = useState(false);

  const sampleText = inputText && inputText.trim() ? inputText : 'Atha';
  const customBuiltText = `${prefixSymbol}${sampleText}${suffixSymbol}`;

  const handleCopy = () => {
    onCopy(customBuiltText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwap = () => {
    const temp = prefixSymbol;
    setPrefixSymbol(suffixSymbol);
    setSuffixSymbol(temp);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden mb-8">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                Custom Symbol Decorator Builder
              </h2>
              <p className="text-xs text-slate-400">
                Rakit bingkai & simbol khusus pilihanmu secara manual
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" /> Studio Builder
          </span>
        </div>

        {/* Live Preview Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
          <div className="w-full text-center sm:text-left overflow-x-auto py-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Hasil Decorator Custom:
            </span>
            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-indigo-200 to-pink-300 tracking-wide font-mono break-all">
              {customBuiltText}
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-200 shrink-0 shadow-lg ${
              copied
                ? 'bg-emerald-600 text-white shadow-emerald-600/30 scale-105'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 hover:scale-105'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Teks Custom</span>
              </>
            )}
          </button>
        </div>

        {/* Symbol Selector Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Prefix Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Simbol Depan (Prefix):</span>
              <span className="font-mono text-indigo-400">{prefixSymbol}</span>
            </label>
            <input
              type="text"
              value={prefixSymbol}
              onChange={(e) => setPrefixSymbol(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <div className="flex flex-wrap gap-1.5 pt-1 max-h-24 overflow-y-auto no-scrollbar">
              {SINGLE_SYMBOLS.map((sym, idx) => (
                <button
                  key={`prefix-${idx}`}
                  onClick={() => setPrefixSymbol(prefixSymbol + sym)}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-xs font-mono text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          {/* Suffix Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Simbol Belakang (Suffix):</span>
              <span className="font-mono text-indigo-400">{suffixSymbol}</span>
            </label>
            <input
              type="text"
              value={suffixSymbol}
              onChange={(e) => setSuffixSymbol(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <div className="flex flex-wrap gap-1.5 pt-1 max-h-24 overflow-y-auto no-scrollbar">
              {SINGLE_SYMBOLS.map((sym, idx) => (
                <button
                  key={`suffix-${idx}`}
                  onClick={() => setSuffixSymbol(suffixSymbol + sym)}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-lg text-xs font-mono text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handleSwap}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 rounded-lg border border-slate-700 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
            <span>Tukar Depan / Belakang</span>
          </button>

          <button
            onClick={() => {
              setPrefixSymbol('');
              setSuffixSymbol('');
            }}
            className="text-xs text-rose-400 hover:underline"
          >
            Reset Simbol
          </button>
        </div>
      </div>
    </div>
  );
};
