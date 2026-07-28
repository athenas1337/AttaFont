import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'attafont_cookie_consent_v2';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
          setShowBanner(true);
        }
      }
    } catch {
      // Ignore storage block
    }
  }, []);

  const handleAccept = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      }
    } catch {
      // Ignore storage block
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-fade-in">
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 text-indigo-400">
            <Cookie className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-white text-sm">Persetahuan Cookie & Privasi</h3>
          </div>
          <button
            onClick={handleAccept}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menayangkan iklan Google AdSense yang relevan di <code>attafont.my.id</code>. Dengan melanjutkan penggunaan situs, Anda menyetujui Kebijakan Privasi kami.
        </p>

        <div className="flex items-center space-x-2 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-1 transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Setujui Cookie</span>
          </button>
        </div>
      </div>
    </div>
  );
};
