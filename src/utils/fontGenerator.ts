// AttaFont Generator Engine v3.0 (Master Combinatorial Engine)
// Generates 10,000+ rich, authentic font variations instantly at 60 FPS

import { BASE_STYLES, BaseStyle } from './unicodeEngine';
import { DECORATOR_TEMPLATES, DecoratorTemplate, VibeType } from './decoratorTemplates';

export interface FontOutput {
  id: string;
  name: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
  vibe: VibeType;
  convertedText: string;
  baseStyleId: string;
  decoratorId?: string;
  isPopular?: boolean;
}

// Master Modifiers for rich combinatorial matrix (10,000+ outputs)
interface Modifier {
  id: string;
  prefix: string;
  suffix: string;
  tag: string;
  vibe?: VibeType;
}

const MODIFIERS: Modifier[] = [
  { id: 'pure', prefix: '', suffix: '', tag: '' },
  { id: 'vip', prefix: '·VIP· ', suffix: ' ·PRO·', tag: 'VIP Pro', vibe: 'Gamer FF/MLBB' },
  { id: 'star', prefix: '★ ', suffix: ' ★', tag: 'Star Crest' },
  { id: 'sparkle', prefix: '✧ ', suffix: ' ✧', tag: 'Sparkle' },
  { id: 'cross', prefix: '♰ ', suffix: ' ♰', tag: 'Gothic Cross', vibe: 'Dark Gothic' },
  { id: 'heart', prefix: '♡ ', suffix: ' ♡', tag: 'Cute Heart', vibe: 'Anime Kawaii' },
  { id: 'lightning', prefix: '⚡ ', suffix: ' ⚡', tag: 'High Voltage', vibe: 'Gamer FF/MLBB' },
  { id: 'brackets', prefix: '〖', suffix: '〗', tag: 'Brackets' },
  { id: 'corner', prefix: '『', suffix: '』', tag: 'Japanese Corner' },
  { id: 'brackets_round', prefix: '❨', suffix: '❩', tag: 'Round Seal' },
  { id: 'quote', prefix: '❝ ', suffix: ' ❞', tag: 'Quoted Bio' },
  { id: 'arrow', prefix: '╰┈➤ ', suffix: '', tag: 'Arrow Point' },
  { id: 'code', prefix: '> ', suffix: ' <', tag: 'Code Shell', vibe: 'Cyberpunk' },
  { id: 'shield', prefix: '🛡️ ', suffix: ' 🛡️', tag: 'Shield Guard', vibe: 'Gamer FF/MLBB' },
  { id: 'fire', prefix: '🔥 ', suffix: ' 🔥', tag: 'Blaze Fire', vibe: 'Gamer FF/MLBB' },
  { id: 'rose', prefix: '🌹 ', suffix: ' 🌹', tag: 'Velvet Rose', vibe: 'Retro Wedding' },
  { id: 'cherry', prefix: '🌸 ', suffix: ' 🌸', tag: 'Cherry Petal', vibe: 'Anime Kawaii' },
  { id: 'butterfly', prefix: '🦋 ', suffix: ' 🦋', tag: 'Butterfly Wing', vibe: 'Anime Kawaii' },
  { id: 'skull', prefix: '☠️ ', suffix: ' ☠️', tag: 'Death Skull', vibe: 'Dark Gothic' },
  { id: 'diamond', prefix: '💎 ', suffix: ' 💎', tag: 'Royal Gem', vibe: 'Royal Luxury' },
  { id: 'crown', prefix: '👑 ', suffix: ' 👑', tag: 'Royal Crown', vibe: 'Royal Luxury' },
  { id: 'music', prefix: '🎶 ', suffix: ' 🎶', tag: 'Music Melody' },
];

export function generateAllFonts(text: string): FontOutput[] {
  const sample = text && text.trim().length > 0 ? text : 'AttaFont Engine';
  const fonts: FontOutput[] = [];

  // Pre-transform all base styles once to avoid redundant transforms
  const baseTransformed = BASE_STYLES.map((base) => ({
    style: base,
    text: base.transform(sample),
  }));

  // 1. Pure Base Styles First (Highest Priority)
  baseTransformed.forEach(({ style, text: converted }) => {
    let vibe: VibeType = 'Minimalist Tech';
    if (style.category === 'Glitch & Cyber') vibe = 'Cyberpunk';
    else if (style.category === 'Gothic & Classic') vibe = 'Dark Gothic';
    else if (style.category === 'Gamer & Nickname') vibe = 'Gamer FF/MLBB';
    else if (style.name.includes('Cute') || style.name.includes('Heart')) vibe = 'Anime Kawaii';
    else if (style.name.includes('Luxury') || style.name.includes('Bold Script')) vibe = 'Royal Luxury';

    fonts.push({
      id: `base-${style.id}`,
      name: style.name,
      category: style.category,
      vibe,
      convertedText: converted,
      baseStyleId: style.id,
      isPopular: true,
    });
  });

  // 2. Primary Handcrafted Decorator Templates (120+ * 51 styles)
  DECORATOR_TEMPLATES.forEach((dec) => {
    baseTransformed.forEach(({ style: base, text: transformedBase }) => {
      const fullText = `${dec.prefix}${transformedBase}${dec.suffix}`;
      fonts.push({
        id: `dec-${dec.id}-${base.id}`,
        name: `${dec.name} • ${base.name}`,
        category: dec.category,
        vibe: dec.vibe,
        convertedText: fullText,
        baseStyleId: base.id,
        decoratorId: dec.id,
        isPopular: dec.id.startsWith('g_') && (base.id === 'sans-bold' || base.id === 'math-bold' || base.id === 'fraktur'),
      });
    });
  });

  // 3. Secondary Combinatorial Modifiers to reach 10,000+ total unique styles
  let count = fonts.length;
  const targetTotal = 10250;

  for (let m = 1; m < MODIFIERS.length && count < targetTotal; m++) {
    const mod = MODIFIERS[m];
    for (let d = 0; d < DECORATOR_TEMPLATES.length && count < targetTotal; d++) {
      const dec = DECORATOR_TEMPLATES[d];
      // Pick representative base styles for high aesthetic quality
      for (let b = 0; b < baseTransformed.length && count < targetTotal; b += 2) {
        const { style: base, text: transformedBase } = baseTransformed[b];
        const decorated = `${dec.prefix}${mod.prefix}${transformedBase}${mod.suffix}${dec.suffix}`;

        fonts.push({
          id: `comb-${mod.id}-${dec.id}-${base.id}`,
          name: `${dec.name} (${mod.tag} ${base.name})`,
          category: dec.category,
          vibe: mod.vibe || dec.vibe,
          convertedText: decorated,
          baseStyleId: base.id,
          decoratorId: dec.id,
          isPopular: false,
        });
        count++;
      }
    }
  }

  return fonts;
}

export function filterFonts(
  allFonts: FontOutput[],
  category: string,
  vibe: VibeType,
  searchQuery: string,
  favoritesList: string[]
): FontOutput[] {
  const query = searchQuery.trim().toLowerCase();

  return allFonts.filter((font) => {
    // 1. Favorites check
    if (category === 'Favorites') {
      if (!favoritesList.includes(font.id)) return false;
    } else if (category !== 'All Fonts') {
      if (font.category !== category) return false;
    }

    // 2. Project Vibe Filter check
    if (vibe !== 'All') {
      if (font.vibe !== vibe) return false;
    }

    // 3. Search Query check
    if (query.length > 0) {
      const matchName = font.name.toLowerCase().includes(query);
      const matchText = font.convertedText.toLowerCase().includes(query);
      const matchCategory = font.category.toLowerCase().includes(query);
      const matchVibe = font.vibe.toLowerCase().includes(query);
      if (!matchName && !matchText && !matchCategory && !matchVibe) return false;
    }

    return true;
  });
}
