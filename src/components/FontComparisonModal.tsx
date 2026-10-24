import React from 'react';
import { FontOutput } from '../utils/fontGenerator';
import { X, Copy, Check, Columns, Sparkles } from 'lucide-react';

interface FontComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFonts: FontOutput[];
  onRemoveFont: (id: string) => void;
  onCopy: (text: string) => void;
  inputText: string;
}

export const FontComparisonModal: React.FC<FontComparisonModalProps> = ({
  isOpen,
  onClose,
  selectedFonts,
  onRemoveFont,
  onCopy,
  inputText,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyFont = (font: FontOutput) => {
    onCopy(font.convertedText);
    setCopiedId(font.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-colors">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
              <Columns className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Komparasi Multi-Font Side-by-Side</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-semibold">
                  {selectedFonts.length} / 4 Dipilih
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bandingkan hingga 4 gaya font sekaligus secara berdampingan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          {selectedFonts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Sparkles className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="font-bold text-slate-800 dark:text-white">Belum Ada Font Dipilih untuk Komparasi</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Klik ikon komparasi (side-by-side) pada kartu font di halaman utama untuk menambahkan hingga 4 font.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedFonts.map((font) => (
                <div
                  key={font.id}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 relative flex flex-col justify-between shadow-sm dark:shadow-inner"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-900 pb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{font.name}</h4>
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-semibold">{font.category} • {font.vibe}</span>
                    </div>

                    <button
                      onClick={() => onRemoveFont(font.id)}
                      className="text-slate-400 hover:text-rose-500 p-1"
                      title="Hapus dari Komparasi"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="py-3 px-1 overflow-x-auto no-scrollbar">
                    <p className="text-xl sm:text-2xl font-mono text-indigo-600 dark:text-indigo-200 tracking-wide break-all">
                      {font.convertedText}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyFont(font)}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all ${
                      copiedId === font.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                  >
                    {copiedId === font.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin Font Ini</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Teks Sampel: <strong className="text-slate-800 dark:text-white font-mono">{inputText || 'AttaFont Engine'}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold"
          >
            Tutup Komparasi
          </button>
        </div>

      </div>
    </div>
  );
};
