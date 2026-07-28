import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Syarat & Ketentuan Layanan (Terms of Service)</h1>
            <p className="text-xs text-slate-400">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Penerimaan Ketentuan</h2>
          <p>
            Dengan mengakses dan menggunakan platform <strong>AttaFont Engine</strong> di <code>attafont.my.id</code>, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan Layanan ini serta semua hukum dan peraturan yang berlaku.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Lisensi Penggunaan Karakter Unicode</h2>
          <p>
            Hasil generasi teks Unicode, simbol, dan font fancy dari AttaFont bebas digunakan untuk keperluan pribadi maupun komersial (seperti nama akun game Free Fire/MLBB, bio Instagram, postingan TikTok, desain grafis, dan proyek web) tanpa memerlukan royalti.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Penolakan Tanggung Jawab (Disclaimer)</h2>
          <p>
            Layanan disediakan "sebagaimana adanya". AttaFont tidak memberikan jaminan, tersurat maupun tersirat, mengenai kompatibilitas lengkap seluruh karakter Unicode pada setiap jenis sistem operasi atau aplikasi pihak ketiga tertentu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Perubahan Layanan</h2>
          <p>
            AttaFont berhak untuk mengubah, memperbarui, atau menghentikan fitur layanan kapan saja tanpa pemberitahuan sebelumnya demi peningkatan kualitas aplikasi.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Kontak Pertanyaan</h2>
          <p>
            Untuk pertanyaan seputar Syarat & Ketentuan ini, silakan kirim pesan melalui Halaman Kontak atau email ke <code>admin@attafont.my.id</code>.
          </p>
        </section>
      </div>
    </div>
  );
};
