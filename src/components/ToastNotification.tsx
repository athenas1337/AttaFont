import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastNotificationProps {
  show: boolean;
  message?: string;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  show,
  message = 'Teks berhasil disalin!',
}) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
      <div className="flex items-center space-x-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-emerald-500/50 shadow-2xl shadow-emerald-500/20 text-white font-medium text-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
