import React, { useState } from 'react';
import { Sliders, Copy, Check, Type, Palette, Layout } from 'lucide-react';

interface MicroFontEditorProps {
  inputText: string;
  onCopy: (text: string) => void;
}

const COLOR_PRESETS = [
  { name: 'Pure White', textClass: 'text-white' },
  { name: 'Dark Slate', textClass: 'text-slate-900' },
  { name: 'Neon Indigo', textClass: 'text-indigo-400' },
  { name: 'Cyber Pink', textClass: 'text-pink-400' },
  { name: 'Emerald Glow', textClass: 'text-emerald-400' },
  { name: 'Amber Gold', textClass: 'text-amber-400' },
  { name: 'Cyan Vapor', textClass: 'text-cyan-400' },
];

const BG_PRESETS = [
  { name: 'Slate Dark', bgClass: 'bg-slate-950 border-slate-800' },
  { name: 'Obsidian Black', bgClass: 'bg-black border-slate-900' },
  { name: 'Cyber Purple', bgClass: 'bg-purple-950/60 border-purple-800/40' },
  { name: 'Deep Ocean', bgClass: 'bg-cyan-950/60 border-cyan-800/40' },
  { name: 'Light Studio', bgClass: 'bg-slate-100 border-slate-300' },
  { name: 'Pure White', bgClass: 'bg-white border-slate-200' },
];

export const MicroFontEditor: React.FC<MicroFontEditorProps> = ({ inputText, onCopy }) => {
  const [letterSpacing, setLetterSpacing] = useState(2); // in px
  const [fontSize, setFontSize] = useState(20); // in px
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0]);
  const [selectedBg, setSelectedBg] = useState(BG_PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const sampleText = inputText && inputText.trim() ? inputText : 'AttaFont Studio Editor';

  const handleCopy = () => {
    onCopy(sampleText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm dark:shadow-xl space-y-5 my-6 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              Micro-Font Studio Editor & Previewer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sesuaikan letter-spacing (tracking), ukuran font, warna teks, dan latar secara real-time
            </p>
          </div>
        </div>
      </div>

      {/* Live Preview Studio Container */}
      <div
        className={`p-6 rounded-2xl border transition-all duration-300 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-4 overflow-x-auto ${selectedBg.bgClass}`}
      >
        <div className="w-full text-center sm:text-left py-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
            Studio Live Canvas:
          </span>
          <p
            style={{
              letterSpacing: `${letterSpacing}px`,
              fontSize: `${fontSize}px`,
            }}
            className={`font-mono font-bold transition-all break-all ${selectedColor.textClass}`}
          >
            {sampleText}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shrink-0 shadow-lg transition-all ${
            copied
              ? 'bg-emerald-600 text-white shadow-emerald-600/30'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
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
              <span>Salin Teks Studio</span>
            </>
          )}
        </button>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Letter Spacing Slider */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-850">
          <label className="font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <Type className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Letter Spacing:</span>
            </span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{letterSpacing}px</span>
          </label>
          <input
            type="range"
            min="0"
            max="12"
            step="1"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Font Size Slider */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-850">
          <label className="font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <Type className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Ukuran Font:</span>
            </span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{fontSize}px</span>
          </label>
          <input
            type="range"
            min="14"
            max="36"
            step="1"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Text Color Picker */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-850">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
            <Palette className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
            <span>Warna Teks Canvas:</span>
          </span>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {COLOR_PRESETS.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border transition-all ${
                  selectedColor.name === color.name ? 'ring-2 ring-indigo-500 scale-110' : 'opacity-70 hover:opacity-100'
                } ${
                  color.name === 'Pure White' ? 'bg-white border-slate-300' :
                  color.name === 'Dark Slate' ? 'bg-slate-900 border-slate-700' :
                  color.name === 'Neon Indigo' ? 'bg-indigo-500' :
                  color.name === 'Cyber Pink' ? 'bg-pink-500' :
                  color.name === 'Emerald Glow' ? 'bg-emerald-500' :
                  color.name === 'Amber Gold' ? 'bg-amber-500' : 'bg-cyan-500'
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Background Color Picker */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-850">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
            <Layout className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Tema Latar Canvas:</span>
          </span>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {BG_PRESETS.map((bg) => (
              <button
                key={bg.name}
                onClick={() => setSelectedBg(bg)}
                className={`px-2 py-1 rounded-lg text-[10px] font-medium border transition-all ${
                  selectedBg.name === bg.name
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-white'
                }`}
              >
                {bg.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
