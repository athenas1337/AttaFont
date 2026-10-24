import React, { useState } from 'react';
import { FontOutput } from '../utils/fontGenerator';
import { X, Copy, Check, Instagram, MessageCircle, Gamepad2, ShieldCheck } from 'lucide-react';

interface SocialPreviewModalProps {
  font: FontOutput | null;
  onClose: () => void;
  onCopy: (text: string) => void;
}

export const SocialPreviewModal: React.FC<SocialPreviewModalProps> = ({ font, onClose, onCopy }) => {
  const [tab, setTab] = useState<'instagram' | 'whatsapp' | 'freefire'>('instagram');
  const [copied, setCopied] = useState(false);

  if (!font) return null;

  const handleCopy = () => {
    onCopy(font.convertedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden transition-colors">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              Pratinjau Nyata Media Sosial & Game
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Lihat bagaimana font ini terlihat di platform favoritmu
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-2 gap-2">
          <button
            onClick={() => setTab('instagram')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              tab === 'instagram'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <Instagram className="w-4 h-4" />
            <span>Bio Instagram</span>
          </button>

          <button
            onClick={() => setTab('whatsapp')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              tab === 'whatsapp'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </button>

          <button
            onClick={() => setTab('freefire')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              tab === 'freefire'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Nick Free Fire</span>
          </button>
        </div>

        {/* Live Mockup Body */}
        <div className="p-6">
          {tab === 'instagram' && (
            <div className="bg-slate-100 dark:bg-black rounded-2xl p-4 border border-slate-300 dark:border-slate-800 space-y-3 font-sans">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-sm">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1">
                    <span>atha.official</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  </h4>
                  <p className="text-xs text-slate-500">Digital Creator • AttaFont</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-900 space-y-1 text-xs text-slate-900 dark:text-slate-200 font-mono">
                <p className="font-bold text-sm text-indigo-600 dark:text-pink-400 break-all">{font.convertedText}</p>
                <p className="text-slate-600 dark:text-slate-400">✨ Follow for daily aesthetic fonts</p>
                <p className="text-blue-500">🔗 attafont.my.id</p>
              </div>
            </div>
          )}

          {tab === 'whatsapp' && (
            <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-400 pb-2 border-b border-emerald-200/60 dark:border-emerald-900/40">
                <span className="font-semibold">WhatsApp Preview</span>
                <span>Hari ini 21:05</span>
              </div>
              <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-none p-3.5 ml-auto max-w-[85%] text-sm font-mono break-all shadow-md">
                <p>{font.convertedText}</p>
                <span className="text-[10px] text-emerald-200 block text-right mt-1">21:05 ✓✓</span>
              </div>
            </div>
          )}

          {tab === 'freefire' && (
            <div className="bg-slate-900 text-white rounded-2xl p-4 border border-amber-500/40 space-y-3 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between text-xs text-amber-400">
                <span className="font-black tracking-widest uppercase">Garena Free Fire ID Card</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 font-bold">LV. 75</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                <span className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">In-Game Nickname:</span>
                <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-wide break-all">
                  {font.convertedText}
                </p>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span>Rank: <strong className="text-amber-400">Grandmaster ★</strong></span>
                <span>Region: <strong className="text-white">ID - Indonesia</strong></span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
            {font.name}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all shadow-sm ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks Ini</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
