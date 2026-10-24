import React, { useState, useMemo, useEffect } from 'react';
import { generateAllFonts, filterFonts, FontOutput } from './utils/fontGenerator';
import { VibeType } from './utils/decoratorTemplates';
import { Navbar } from './components/Navbar';
import { StickyInputStudio } from './components/StickyInputStudio';
import { CategoryTabs } from './components/CategoryTabs';
import { VibeFilterBar } from './components/VibeFilterBar';
import { MicroFontEditor } from './components/MicroFontEditor';
import { SymbolBuilder } from './components/SymbolBuilder';
import { FontCard } from './components/FontCard';
import { FontComparisonModal } from './components/FontComparisonModal';
import { SocialPreviewModal } from './components/SocialPreviewModal';
import { AdPlaceholder } from './components/AdPlaceholder';
import { CookieBanner } from './components/CookieBanner';
import { ToastNotification } from './components/ToastNotification';
import { Footer } from './components/Footer';

// Legal Pages
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { AboutUs } from './components/pages/AboutUs';
import { ContactUs } from './components/pages/ContactUs';

import { ChevronDown, AlertCircle, Columns } from 'lucide-react';

const LOCAL_STORAGE_FAVS_KEY = 'attafont_favorites_v3';
const LOCAL_STORAGE_THEME_KEY = 'attafont_theme_v3';
const BATCH_SIZE = 60;

export function App() {
  const [inputText, setInputText] = useState('AttaFont Engine');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Fonts');
  const [activeVibe, setActiveVibe] = useState<VibeType>('All');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Teks berhasil disalin!');
  
  // Theme state: dark / light with persistent localStorage & HTML class sync
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
      }
    } catch {}
    return 'dark';
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch {}
  }, [theme]);

  // Router Page State: home | privacy | terms | about | contact
  const [currentPage, setCurrentPage] = useState('home');

  // Multi-Font Comparison Modal state (Up to 4 fonts)
  const [comparedFonts, setComparedFonts] = useState<FontOutput[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Social / Game Mockup Preview state
  const [previewFont, setPreviewFont] = useState<FontOutput | null>(null);

  // Favorite Fonts saved in localStorage with fallback
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(LOCAL_STORAGE_FAVS_KEY);
        return saved ? JSON.parse(saved) : [];
      }
    } catch {
      // Ignore
    }
    return [];
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(LOCAL_STORAGE_FAVS_KEY, JSON.stringify(favorites));
      }
    } catch {
      // Ignore
    }
  }, [favorites]);

  // Reset pagination count when category, vibe, search, or input changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory, activeVibe, searchQuery, inputText]);

  // Toggle Theme handler
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 1. Generate 10,000+ fonts in memory (Memoized for max 60fps speed)
  const allGeneratedFonts = useMemo(() => {
    return generateAllFonts(inputText);
  }, [inputText]);

  // 2. Filter fonts by category, project vibe, search query, and favorites
  const filteredFonts = useMemo(() => {
    return filterFonts(allGeneratedFonts, activeCategory, activeVibe, searchQuery, favorites);
  }, [allGeneratedFonts, activeCategory, activeVibe, searchQuery, favorites]);

  // Sliced list for high performance lazy rendering
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

  // Toggle font comparison (Max 4)
  const handleToggleCompare = (font: FontOutput) => {
    setComparedFonts((prev) => {
      const exists = prev.some((f) => f.id === font.id);
      if (exists) {
        return prev.filter((f) => f.id !== font.id);
      } else {
        if (prev.length >= 4) {
          setToastMessage('Maksimal 4 font dalam komparasi side-by-side.');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2200);
          return prev;
        }
        return [...prev, font];
      }
    });
  };

  const handleRemoveComparedFont = (fontId: string) => {
    setComparedFonts((prev) => prev.filter((f) => f.id !== fontId));
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-indigo-500 selection:text-white transition-colors duration-200`}>
      {/* Top Navbar */}
      <Navbar
        totalFontsCount={allGeneratedFonts.length}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Pages Router Render */}
      {currentPage === 'privacy' && <PrivacyPolicy onBack={() => setCurrentPage('home')} />}
      {currentPage === 'terms' && <TermsOfService onBack={() => setCurrentPage('home')} />}
      {currentPage === 'about' && <AboutUs onBack={() => setCurrentPage('home')} />}
      {currentPage === 'contact' && <ContactUs onBack={() => setCurrentPage('home')} />}

      {/* Main Generator Home Page */}
      {currentPage === 'home' && (
        <>
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
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            
            {/* Above-the-fold AdSense Placeholder Unit */}
            <AdPlaceholder slotId="above-fold-header" position="above-fold" />

            {/* Smart Vibe Filter Bar */}
            <VibeFilterBar activeVibe={activeVibe} setActiveVibe={setActiveVibe} />

            {/* Micro-Font Studio Editor */}
            <MicroFontEditor inputText={inputText} onCopy={handleCopy} />

            {/* Custom Symbol Builder Component */}
            <SymbolBuilder inputText={inputText} onCopy={handleCopy} />

            {/* Floating Comparison Badge Trigger */}
            {comparedFonts.length > 0 && (
              <div className="fixed bottom-20 right-6 z-40">
                <button
                  onClick={() => setIsCompareOpen(true)}
                  className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-2xl hover:scale-105 transition-transform"
                >
                  <Columns className="w-4 h-4" />
                  <span>Komparasi ({comparedFonts.length}/4)</span>
                </button>
              </div>
            )}

            {/* Section Header Info */}
            <div className="flex items-center justify-between my-4">
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Gaya Font ({filteredFonts.length.toLocaleString()})</span>
                </h2>
                {activeVibe !== 'All' && (
                  <span className="text-xs text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-200 dark:border-pink-500/20 font-semibold">
                    Mood: {activeVibe}
                  </span>
                )}
                {searchQuery && (
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 font-semibold">
                    Cari: "{searchQuery}"
                  </span>
                )}
              </div>

              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block">
                Menampilkan {visibleFonts.length} dari {filteredFonts.length}
              </span>
            </div>

            {/* Empty State when no fonts found */}
            {filteredFonts.length === 0 ? (
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-4 my-8 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-slate-800 flex items-center justify-center mx-auto text-amber-500">
                  <AlertCircle className="w-8 h-8" />
                </div>
                {activeCategory === 'Favorites' ? (
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Belum Ada Font Favorit</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Klik ikon bintang pada kartu font mana saja untuk menyimpannya ke daftar favorit kamu!
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Font Tidak Ditemukan</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Coba ubah kata kunci pencarian atau ganti filter mood/vibe.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Font Cards Responsive Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visibleFonts.map((font, idx) => (
                  <React.Fragment key={font.id}>
                    <FontCard
                      font={font}
                      isFavorite={favorites.includes(font.id)}
                      isCompared={comparedFonts.some((f) => f.id === font.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onToggleCompare={handleToggleCompare}
                      onCopy={handleCopy}
                      onOpenPreview={(f) => setPreviewFont(f)}
                    />

                    {/* In-List Native Ad Unit inserted after every 24 cards */}
                    {(idx + 1) % 24 === 0 && (
                      <AdPlaceholder slotId={`in-list-ad-${idx}`} position="in-list" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Load More Button for 10,000+ Combinations */}
            {visibleCount < filteredFonts.length && (
              <div className="text-center mt-10 mb-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95"
                >
                  <span>Muat Lebih Banyak Font ({filteredFonts.length - visibleCount} tersisa)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Footer AdSense Banner */}
            <AdPlaceholder slotId="footer-banner-unit" position="footer-banner" />

          </main>
        </>
      )}

      {/* Multi-Font Side-by-Side Comparison Modal */}
      <FontComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedFonts={comparedFonts}
        onRemoveFont={handleRemoveComparedFont}
        onCopy={handleCopy}
        inputText={inputText}
      />

      {/* Social Media & Game Bio Preview Modal */}
      <SocialPreviewModal
        font={previewFont}
        onClose={() => setPreviewFont(null)}
        onCopy={handleCopy}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      {/* Floating Toast Notification */}
      <ToastNotification show={showToast} message={toastMessage} />

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
