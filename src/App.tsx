import React, { useState, useMemo, useEffect } from 'react';
import { generateAllFonts, filterFonts, FontOutput } from './utils/fontGenerator';
import { Navbar } from './components/Navbar';
import { StickyInputStudio } from './components/StickyInputStudio';
import { CategoryTabs } from './components/CategoryTabs';
import { SymbolBuilder } from './components/SymbolBuilder';
import { FontCard } from './components/FontCard';
import { ToastNotification } from './components/ToastNotification';
import { Footer } from './components/Footer';
import { ChevronDown, AlertCircle } from 'lucide-react';

const LOCAL_STORAGE_FAVS_KEY = 'attafont_favorites_v1';
const BATCH_SIZE = 60;

export function App() {
  const [inputText, setInputText] = useState('AttaFont Engine');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Fonts');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Teks berhasil disalin!');

  // Favorite Fonts saved in localStorage with fallback
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(LOCAL_STORAGE_FAVS_KEY);
        return saved ? JSON.parse(saved) : [];
      }
    } catch (e) {
      console.warn('localStorage read disabled or blocked', e);
    }
    return [];
  });

  // Save favorites to localStorage whenever updated with fallback
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(LOCAL_STORAGE_FAVS_KEY, JSON.stringify(favorites));
      }
    } catch (e) {
      console.warn('Gagal menyimpan favorit ke localStorage', e);
    }
  }, [favorites]);

  // Reset pagination count when category or search changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory, searchQuery, inputText]);

  // 1. Generate all 2000+ fonts in memory (Memoized for max speed)
  const allGeneratedFonts = useMemo(() => {
    return generateAllFonts(inputText);
  }, [inputText]);

  // 2. Filter fonts by category, search query, and favorites
  const filteredFonts = useMemo(() => {
    return filterFonts(allGeneratedFonts, activeCategory, searchQuery, favorites);
  }, [allGeneratedFonts, activeCategory, searchQuery, favorites]);

  // Visible sliced list for 60fps rendering
  const visibleFonts = useMemo(() => {
    return filteredFonts.slice(0, visibleCount);
  }, [filteredFonts, visibleCount]);

  // Fallback copy function for browsers/contexts without navigator.clipboard
  const fallbackCopyText = (textToCopy: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setToastMessage('Teks berhasil disalin!');
      } else {
        setToastMessage('Gagal menyalin teks');
      }
    } catch {
      setToastMessage('Gagal menyalin teks');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  // Copy handler with toast feedback
  const handleCopy = (textToCopy: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setToastMessage('Teks berhasil disalin!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2200);
      }).catch(() => {
        fallbackCopyText(textToCopy);
      });
    } else {
      fallbackCopyText(textToCopy);
    }
  };

  // Favorite toggle handler
  const handleToggleFavorite = (fontId: string) => {
    setFavorites((prev) => {
      if (prev.includes(fontId)) {
        return prev.filter((id) => id !== fontId);
      } else {
        return [...prev, fontId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar totalFontsCount={allGeneratedFonts.length} />

      {/* Sticky Studio for Input & Live Search */}
      <StickyInputStudio
        inputText={inputText}
        setInputText={setInputText}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Category Tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        favoritesCount={favorites.length}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Custom Symbol Builder Component */}
        <SymbolBuilder inputText={inputText} onCopy={handleCopy} />

        {/* Section Header Info */}
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Gaya Font ({filteredFonts.length.toLocaleString()})</span>
            </h2>
            {searchQuery && (
              <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                Pencarian: "{searchQuery}"
              </span>
            )}
          </div>

          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            Menampilkan {visibleFonts.length} dari {filteredFonts.length}
          </span>
        </div>

        {/* Empty State when no fonts found */}
        {filteredFonts.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-amber-400">
              <AlertCircle className="w-8 h-8" />
            </div>
            {activeCategory === 'Favorites' ? (
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Belum Ada Font Favorit</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Klik ikon bintang pada kartu font mana saja untuk menyimpannya ke daftar favorit kamu!
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Font Tidak Ditemukan</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Coba ubah kata kunci pencarian atau pilih kategori font lainnya.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Font Cards Responsive Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleFonts.map((font) => (
              <FontCard
                key={font.id}
                font={font}
                isFavorite={favorites.includes(font.id)}
                onToggleFavorite={handleToggleFavorite}
                onCopy={handleCopy}
              />
            ))}
          </div>
        )}

        {/* Load More Button for 2000+ Combinations */}
        {visibleCount < filteredFonts.length && (
          <div className="text-center mt-10 mb-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95"
            >
              <span>Muat Lebih Banyak Font ({filteredFonts.length - visibleCount} tersisa)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </main>

      {/* Floating Toast Notification */}
      <ToastNotification show={showToast} message={toastMessage} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
