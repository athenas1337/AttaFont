// AttaFont Generator Engine
// Combines base Unicode transformations with 100+ decorator matrices to produce 2000+ font styles instantly!

import { BASE_STYLES, BaseStyle } from './unicodeEngine';
import { DECORATOR_TEMPLATES, DecoratorTemplate } from './decoratorTemplates';

export interface FontOutput {
  id: string;
  name: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
  convertedText: string;
  baseStyleId: string;
  decoratorId?: string;
  isPopular?: boolean;
}

// Generate all combinatorial font variations (2000+)
export function generateAllFonts(text: string): FontOutput[] {
  const sample = text && text.trim().length > 0 ? text : 'AttaFont Engine';
  const fonts: FontOutput[] = [];

  // 1. Add pure base styles first (top priority)
  BASE_STYLES.forEach((baseStyle) => {
    fonts.push({
      id: `base-${baseStyle.id}`,
      name: baseStyle.name,
      category: baseStyle.category === 'All Fonts' ? 'Aesthetic & Bio' : baseStyle.category,
      convertedText: baseStyle.transform(sample),
      baseStyleId: baseStyle.id,
      isPopular: true
    });
  });

  // 2. Add Combinations of Decorator Templates x Base Styles (2000+ variations)
  let combIndex = 1;
  DECORATOR_TEMPLATES.forEach((dec) => {
    BASE_STYLES.forEach((base) => {
      // Pick compatible category or fallback
      const comboCategory = dec.category;
      const transformedBase = base.transform(sample);
      const fullText = `${dec.prefix}${transformedBase}${dec.suffix}`;

      fonts.push({
        id: `comb-${combIndex++}-${dec.id}-${base.id}`,
        name: `${dec.name} (${base.name})`,
        category: comboCategory,
        convertedText: fullText,
        baseStyleId: base.id,
        decoratorId: dec.id,
        isPopular: dec.id.startsWith('g1') || dec.id.startsWith('a1') || dec.id.startsWith('got1')
      });
    });
  });

  return fonts;
}

// Filter function supporting categories, search query, and pagination
export function filterFonts(
  allFonts: FontOutput[],
  category: string,
  searchQuery: string,
  favoritesList: string[]
): FontOutput[] {
  const query = searchQuery.trim().toLowerCase();

  return allFonts.filter((font) => {
    // Favorites check
    if (category === 'Favorites') {
      if (!favoritesList.includes(font.id)) return false;
    } else if (category !== 'All Fonts') {
      if (font.category !== category) return false;
    }

    // Search query check
    if (query.length > 0) {
      const matchName = font.name.toLowerCase().includes(query);
      const matchText = font.convertedText.toLowerCase().includes(query);
      const matchCategory = font.category.toLowerCase().includes(query);
      if (!matchName && !matchText && !matchCategory) return false;
    }

    return true;
  });
}
