import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

interface ContactUsProps {
  onBack: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-Spam Honeypot check: If honeypot is filled, silent reject bot
    if (formData.honeypot.trim() !== '') {
      setStatus('success');
      setStatusMessage('Pesan Anda berhasil dikirim!');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Harap isi semua kolom wajib.');
      return;
    }

    setStatus('submitting');

    try {
      // Serverless Mailer API integration routing to admin@attafont.my.id
      const response = await fetch('https://formspree.io/f/xbjnqpyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Pesan dari Form Kontak AttaFont',
          message: formData.message,
          _replyto: formData.email,
          recipient: 'admin@attafont.my.id'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Pesan Anda berhasil dikirim ke admin@attafont.my.id! Kami akan membalas segera.');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        // Fallback mailto trigger if endpoint fails
        window.location.href = `mailto:admin@attafont.my.id?subject=${encodeURIComponent(formData.subject || 'Kontak AttaFont')}&body=${encodeURIComponent(`Dari: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setStatus('success');
        setStatusMessage('Membuka aplikasi email Anda untuk mengirim pesan ke admin@attafont.my.id.');
      }
    } catch {
      window.location.href = `mailto:admin@attafont.my.id?subject=${encodeURIComponent(formData.subject || 'Kontak AttaFont')}&body=${encodeURIComponent(`Dari: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setStatus('success');
      setStatusMessage('Membuka aplikasi email Anda ke admin@attafont.my.id.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Generator Font</span>
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 flex-wrap gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Hubungi Kami (Contact Us)</h1>
              <p className="text-xs text-slate-400">Kirim masukan, pertanyaan lisensi, atau kerjasama ke admin@attafont.my.id</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Anti-Spam Protected</span>
          </div>
        </div>

        {status === 'success' && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center space-x-3 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center space-x-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot Field (Hidden from human users, traps spam bots) */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Nama Lengkap *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Alamat Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contoh@domain.com"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Subjek Pesan</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Contoh: Pertanyaan Lisensi / Kerjasama AdSense"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Pesan Anda *</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan pesan Anda secara detail..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>

          {/* Direct Email Badge */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-400 flex items-center justify-between">
            <span>Atau hubungi email resmi kami langsung:</span>
            <a href="mailto:admin@attafont.my.id" className="font-mono font-bold text-indigo-400 underline">
              admin@attafont.my.id
            </a>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-600/30"
          >
            <Send className="w-4 h-4" />
            <span>{status === 'submitting' ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
