// AttaFont Generator Engine v2.0
// High performance combinatorial font generator engine yielding 10,000+ font outputs!

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

// Generate 10,000+ combinatorial font outputs instantly
export function generateAllFonts(text: string): FontOutput[] {
  const sample = text && text.trim().length > 0 ? text : 'AttaFont Engine';
  const fonts: FontOutput[] = [];

  // 1. Base Styles (31 items)
  BASE_STYLES.forEach((baseStyle) => {
    fonts.push({
      id: `base-${baseStyle.id}`,
      name: baseStyle.name,
      category: baseStyle.category === 'All Fonts' ? 'Aesthetic & Bio' : baseStyle.category,
      vibe: baseStyle.category === 'Glitch & Cyber' ? 'Cyberpunk' : baseStyle.category === 'Gothic & Classic' ? 'Dark Gothic' : baseStyle.category === 'Gamer & Nickname' ? 'Gamer FF/MLBB' : 'Minimalist Tech',
      convertedText: baseStyle.transform(sample),
      baseStyleId: baseStyle.id,
      isPopular: true
    });
  });

  // 2. Combinatorial Decorator Templates x Base Styles (31 x 330 = ~10,200 outputs)
  let combIndex = 1;
  DECORATOR_TEMPLATES.forEach((dec) => {
    BASE_STYLES.forEach((base) => {
      const transformedBase = base.transform(sample);
      const fullText = `${dec.prefix}${transformedBase}${dec.suffix}`;

      fonts.push({
        id: `comb-${combIndex++}-${dec.id}-${base.id}`,
        name: `${dec.name} (${base.name})`,
        category: dec.category,
        vibe: dec.vibe,
        convertedText: fullText,
        baseStyleId: base.id,
        decoratorId: dec.id,
        isPopular: combIndex % 77 === 0
      });
    });
  });

  return fonts;
}

// Filter function supporting categories, project vibes, search query, and favorites
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
