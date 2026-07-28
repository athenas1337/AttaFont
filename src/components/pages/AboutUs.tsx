import React from 'react';
import { Info, ArrowLeft, Heart, Sparkles, Code2, Cpu } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Generator Font</span>
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-slate-300 text-sm leading-relaxed shadow-2xl">
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
          <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Tentang AttaFont (About Us)</h1>
            <p className="text-xs text-slate-400">AttaFont Engine v2.0 • Generator Font Unicode & Fancy Text 10,000+ Variasi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <Cpu className="w-6 h-6 text-indigo-400 mx-auto" />
            <h3 className="font-bold text-white text-base">10,000+ Font</h3>
            <p className="text-xs text-slate-400">Variasi teks Unicode instan tanpa lag</p>
          </div>
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <Code2 className="w-6 h-6 text-emerald-400 mx-auto" />
            <h3 className="font-bold text-white text-base">Client-Side Ultra Fast</h3>
            <p className="text-xs text-slate-400">Pemrosesan langsung di browser pengguna</p>
          </div>
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
            <h3 className="font-bold text-white text-base">Fitur Smart Vibe</h3>
            <p className="text-xs text-slate-400">Filter proyek Cyberpunk, Luxury, Kawaii, Gamer</p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">Misi Kami</h2>
          <p>
            AttaFont dirancang dan dikembangkan oleh <strong>Atha</strong> dengan misi menyediakan generator teks mewah, simbol estetik, dan font Unicode berkualitas tinggi yang ultra-cepat, responsif di seluler/PC, serta 100% bebas biaya untuk kreator konten, gamer, desainer, dan pengguna media sosial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">Inovasi Teknologi AttaFont v2.0</h2>
          <p>
            AttaFont v2.0 menggabungkan transformasi alfabestis Matematika, Fraktur Gothic, Small Caps, Cursive, dan Zalgo Glitch dengan lebih dari 330 matriks bingkai dekorator. Sistem lazy rendering memastikan lebih dari 10.000 gaya dapat dimuat pada 60 FPS tanpa memperlambat memori perangkat.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-800 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-950 border border-slate-800 text-sm font-medium text-slate-300">
            <span>Dibuat dengan cinta oleh Atha</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
