import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Generator Font</span>
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed shadow-2xl">
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
          <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Kebijakan Privasi (Privacy Policy)</h1>
            <p className="text-xs text-slate-400">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Pengantar</h2>
          <p>
            Selamat datang di <strong>AttaFont</strong> (disitus <code>attafont.my.id</code>). Privasi pengunjung kami adalah prioritas utama. Dokumen Kebijakan Privasi ini menjelaskan jenis informasi yang dikumpulkan dan dicatat oleh AttaFont serta bagaimana kami menggunakannya sesuai dengan standar Google AdSense dan regulasi perlindungan data internasional.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Pengolahan Data Client-Side</h2>
          <p>
            AttaFont beroperasi sepenuhnya di sisi klien (client-side engine). Setiap teks yang Anda ketik di studio generator diproses secara langsung pada browser perangkat Anda tanpa dikirimkan atau disimpan ke server eksternal kami.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Google DoubleClick DART Cookie & Google AdSense</h2>
          <p>
            Google adalah vendor pihak ketiga di situs kami. Google menggunakan cookie, yang dikenal sebagai DART cookie, untuk menayangkan iklan kepada pengunjung situs kami berdasarkan kunjungan mereka ke attafont.my.id dan situs lainnya di internet. Pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi jaringan iklan dan konten Google di URL berikut: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">https://policies.google.com/technologies/ads</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. File Log (Log Files)</h2>
          <p>
            AttaFont mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Informasi yang dikumpulkan oleh file log meliputi alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), stempel tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Informasi ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Hak Privasi GDPR & CCPA</h2>
          <p>
            Berdasarkan GDPR dan CCPA, pengguna berhak menolak pelacakan cookie iklan yang tidak esensial. Anda dapat mengatur preferensi cookie melalui Cookie Banner kami atau pengaturan browser Anda.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Kontak Kebijakan Privasi</h2>
          <p>
            Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, silakan hubungi kami melalui email di <code>admin@attafont.my.id</code>.
          </p>
        </section>
      </div>
    </div>
  );
};
