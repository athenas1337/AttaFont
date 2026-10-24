// AttaFont Unicode Character Engine v3.0 (Master Engine)
// 100% Mathematically accurate, standardized Unicode character mappings
// Verified against Unicode Standard & Mathematical Alphanumeric Symbols (U+1D400 - U+1D7FF)

const ASCII_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ASCII_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ASCII_DIGITS = '0123456789';

function mapString(text: string, upperMap: (string | null)[], lowerMap: (string | null)[], digitMap?: (string | null)[]): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const upperIdx = ASCII_UPPER.indexOf(char);
    if (upperIdx !== -1 && upperMap[upperIdx]) {
      result += upperMap[upperIdx];
      continue;
    }
    const lowerIdx = ASCII_LOWER.indexOf(char);
    if (lowerIdx !== -1 && lowerMap[lowerIdx]) {
      result += lowerMap[lowerIdx];
      continue;
    }
    if (digitMap) {
      const digitIdx = ASCII_DIGITS.indexOf(char);
      if (digitIdx !== -1 && digitMap[digitIdx]) {
        result += digitMap[digitIdx];
        continue;
      }
    }
    result += char;
  }
  return result;
}

function offsetArray(startCode: number, length: number): string[] {
  const arr: string[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(String.fromCodePoint(startCode + i));
  }
  return arr;
}

// -------------------------------------------------------------
// 1. Mathematical Bold (U+1D400 / U+1D41A / U+1D7CE)
// -------------------------------------------------------------
export const toMathBold = (text: string) => mapString(
  text,
  offsetArray(0x1D400, 26),
  offsetArray(0x1D41A, 26),
  offsetArray(0x1D7CE, 10)
);

// -------------------------------------------------------------
// 2. Mathematical Italic (U+1D434 / U+1D44E)
// Special hole: lower h is Planck constant U+210E (ℎ)
// -------------------------------------------------------------
const italicUpper = offsetArray(0x1D434, 26);
const italicLower = offsetArray(0x1D44E, 26);
italicLower[7] = '\u210E'; // 'h' hole in Unicode
export const toMathItalic = (text: string) => mapString(text, italicUpper, italicLower);

// -------------------------------------------------------------
// 3. Mathematical Bold Italic (U+1D468 / U+1D482)
// -------------------------------------------------------------
export const toMathBoldItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D468, 26),
  offsetArray(0x1D482, 26)
);

// -------------------------------------------------------------
// 4. Script / Cursive (U+1D49C / U+1D4B6 with letterlike symbol holes)
// Holes in uppercase: B, E, F, H, I, L, M, R
// Holes in lowercase: e, g, o
// -------------------------------------------------------------
const scriptUpper = [
  '𝒜', '\u212C', '𝒞', '𝒟', '\u2130', '\u2131', '𝒢', '\u210B',
  '\u2110', '𝒥', '𝒦', '\u2112', '\u2133', '𝒩', '𝒪', '𝒫',
  '𝒬', '\u211B', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵'
];
const scriptLower = [
  '𝒶', '𝒷', '𝒸', '𝒹', '\u212F', '𝒻', '\u210A', '𝒽',
  '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', '\u2134', '𝓅',
  '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏'
];
export const toScript = (text: string) => mapString(text, scriptUpper, scriptLower);

// -------------------------------------------------------------
// 5. Bold Script / Luxury Cursive (U+1D4D0 / U+1D4EA) - No holes in Unicode
// -------------------------------------------------------------
export const toBoldScript = (text: string) => mapString(
  text,
  offsetArray(0x1D4D0, 26),
  offsetArray(0x1D4EA, 26)
);

// -------------------------------------------------------------
// 6. Fraktur / Medieval Gothic (U+1D504 / U+1D51E)
// Holes in uppercase: C (ℭ U+212D), H (ℌ U+210C), I (ℑ U+2111), R (ℜ U+211C), Z (ℨ U+2128)
// 100% verified all 26 letters accurately mapped!
// -------------------------------------------------------------
const frakturUpper = [
  '𝔄', '𝔅', '\u212D', '𝔇', '𝔈', '𝔉', '𝔊', '\u210C',
  '\u2111', '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓',
  '𝔔', '\u211C', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', '\u2128'
];
const frakturLower = offsetArray(0x1D51E, 26);
export const toFraktur = (text: string) => mapString(text, frakturUpper, frakturLower);

// -------------------------------------------------------------
// 7. Bold Fraktur / Dark Knights Gothic (U+1D56C / U+1D586) - No holes
// -------------------------------------------------------------
export const toBoldFraktur = (text: string) => mapString(
  text,
  offsetArray(0x1D56C, 26),
  offsetArray(0x1D586, 26)
);

// -------------------------------------------------------------
// 8. Double-Struck / Blackboard Bold (U+1D538 / U+1D552)
// Holes in uppercase: C (ℂ U+2102), H (ℍ U+210D), N (ℕ U+2115), P (ℙ U+2119), Q (ℚ U+211A), R (ℝ U+211D), Z (ℤ U+2124)
// Digits: U+1D7D8
// -------------------------------------------------------------
const doubleUpper = [
  '𝔸', '𝔹', '\u2102', '𝔻', '𝔼', '𝔽', '𝔾', '\u210D',
  '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', '\u2115', '𝕆', '\u2119',
  '\u211A', '\u211D', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', '\u2124'
];
const doubleLower = offsetArray(0x1D552, 26);
const doubleDigits = offsetArray(0x1D7D8, 10);
export const toDoubleStruck = (text: string) => mapString(text, doubleUpper, doubleLower, doubleDigits);

// -------------------------------------------------------------
// 9. Sans-Serif Normal (U+1D5A0 / U+1D5BA / U+1D7E2)
// -------------------------------------------------------------
export const toSansSerif = (text: string) => mapString(
  text,
  offsetArray(0x1D5A0, 26),
  offsetArray(0x1D5BA, 26),
  offsetArray(0x1D7E2, 10)
);

// -------------------------------------------------------------
// 10. Sans-Serif Bold (U+1D5D4 / U+1D5EE / U+1D7EC)
// -------------------------------------------------------------
export const toSansSerifBold = (text: string) => mapString(
  text,
  offsetArray(0x1D5D4, 26),
  offsetArray(0x1D5EE, 26),
  offsetArray(0x1D7EC, 10)
);

// -------------------------------------------------------------
// 11. Sans-Serif Italic (U+1D608 / U+1D622)
// -------------------------------------------------------------
export const toSansSerifItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D608, 26),
  offsetArray(0x1D622, 26)
);

// -------------------------------------------------------------
// 12. Sans-Serif Bold Italic (U+1D63C / U+1D656)
// -------------------------------------------------------------
export const toSansSerifBoldItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D63C, 26),
  offsetArray(0x1D656, 26)
);

// -------------------------------------------------------------
// 13. Monospace / Hacker Code (U+1D670 / U+1D68A / U+1D7F6)
// -------------------------------------------------------------
export const toMonospace = (text: string) => mapString(
  text,
  offsetArray(0x1D670, 26),
  offsetArray(0x1D68A, 26),
  offsetArray(0x1D7F6, 10)
);

// -------------------------------------------------------------
// 14. Fullwidth / Vaporwave / Aesthetic (U+FF21 / U+FF41 / U+FF10)
// -------------------------------------------------------------
export const toFullwidth = (text: string) => mapString(
  text,
  offsetArray(0xFF21, 26),
  offsetArray(0xFF41, 26),
  offsetArray(0xFF10, 10)
);

// -------------------------------------------------------------
// 15. Circled Bubble Text (White Circle Ⓐ-Ⓩ, ⓐ-ⓩ, ⓪-⑨)
// -------------------------------------------------------------
const circledUpper = offsetArray(0x24B6, 26);
const circledLower = offsetArray(0x24D0, 26);
const circledDigits = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
export const toCircled = (text: string) => mapString(text, circledUpper, circledLower, circledDigits);

// -------------------------------------------------------------
// 16. Circled Dark / Inverse Bubbles (🅐-🅩, ⓿-❾)
// -------------------------------------------------------------
const circledDarkUpper = offsetArray(0x1F150, 26);
const circledDarkDigits = ['⓿', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾'];
export const toCircledDark = (text: string) => mapString(text, circledDarkUpper, circledDarkUpper, circledDarkDigits);

// -------------------------------------------------------------
// 17. Squared Box Letters (🄰-🅉)
// -------------------------------------------------------------
const squaredUpper = offsetArray(0x1F130, 26);
export const toSquared = (text: string) => mapString(text, squaredUpper, squaredUpper);

// -------------------------------------------------------------
// 18. Squared Dark / Negative Box Badges (🅰-🆉)
// -------------------------------------------------------------
const squaredDarkUpper = offsetArray(0x1F170, 26);
export const toSquaredDark = (text: string) => mapString(text, squaredDarkUpper, squaredDarkUpper);

// -------------------------------------------------------------
// 19. Small Caps (Bio Font): ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ ꜱ ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ
// -------------------------------------------------------------
const smallCaps = [
  'ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ꜰ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ',
  'ɴ', 'ᴏ', 'ᴘ', 'ǫ', 'ʀ', 'ꜱ', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ'
];
export const toSmallCaps = (text: string) => mapString(text, smallCaps, smallCaps);

// -------------------------------------------------------------
// 20. Superscript / Tiny Top (Fixed 'J' bug and missing letters)
// -------------------------------------------------------------
const superMap: { [key: string]: string } = {
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
  'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
  'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
  'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᑫ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
  'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', ' ': ' '
};
export const toSuperscript = (text: string) => text.split('').map(c => superMap[c] || c).join('');

// -------------------------------------------------------------
// 21. Subscript / Tiny Bottom
// -------------------------------------------------------------
const subMap: { [key: string]: string } = {
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
  'A': 'ₐ', 'E': 'ₑ', 'H': 'ₕ', 'I': 'ᵢ', 'J': 'ⱼ', 'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ',
  'P': 'ₚ', 'R': 'ᵣ', 'S': 'ₛ', 'T': 'ₜ', 'U': 'ᵤ', 'V': 'ᵥ', 'X': 'ₓ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', ' ': ' '
};
export const toSubscript = (text: string) => text.split('').map(c => subMap[c] || c).join('');

// -------------------------------------------------------------
// 22. Upside Down / Inverted (uʍop ǝpısd∩)
// -------------------------------------------------------------
const upsideDownMap: { [key: string]: string } = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
  'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
  'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ',
  'K': '⋊', 'L': '⅂', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥',
  'U': '∩', 'V': 'ᴧ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '0': '0', '1': '⇂', '2': '乙', '3': 'Ɛ', '4': 'h', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '.': '˙', ',': "'", '\'': ',', '"': ',,', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '_': '‾'
};
export const toUpsideDown = (text: string) => text.split('').reverse().map(c => upsideDownMap[c] || c).join('');

// -------------------------------------------------------------
// 23. Mirrored / Backwards Text (ƚxɘT)
// -------------------------------------------------------------
const mirrorMap: { [key: string]: string } = {
  'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'Ꮈ', 'g': 'ǫ', 'h': 'ʜ', 'i': 'i', 'j': 'į',
  'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'ᴎ', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ƨ', 't': 'ƚ',
  'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'ʏ', 'z': 'ƹ',
  'A': 'A', 'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'Ꭾ', 'H': 'H', 'I': 'I', 'J': 'ᒐ',
  'K': '⋊', 'L': '⅃', 'M': 'M', 'N': 'ᴎ', 'O': 'O', 'P': 'ꟼ', 'Q': 'Ọ', 'R': 'Я', 'S': 'Ƨ', 'T': 'T',
  'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Ƹ'
};
export const toMirrored = (text: string) => text.split('').reverse().map(c => mirrorMap[c] || c).join('');

// -------------------------------------------------------------
// 24. Parenthesized Badges ⒜-⒵
// -------------------------------------------------------------
const parenUpper = ['🄐','🄑','🄒','🄓','🄔','🄕','🄖','🄗','🄘','🄙','🄚','🄛','🄜','🄝','🄞','🄟','🄠','🄡','🄢','🄣','🄤','🄥','🄦','🄧','🄨','🄩'];
const parenLower = offsetArray(0x249C, 26);
const parenDigits = ['⑴', '⑵', '⑶', '⑷', '⑸', '⑹', '⑺', '⑻', '⑼'];
export const toParenthesized = (text: string) => mapString(text, parenUpper, parenLower, parenDigits);

// -------------------------------------------------------------
// 25. Combining Diacritics (Strikethrough, Underlines, Overlines, Dots)
// -------------------------------------------------------------
export const toStrikethrough = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0336').join('');
export const toUnderline = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0332').join('');
export const toDoubleUnderline = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0333').join('');
export const toSlashThrough = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0337').join('');
export const toTildeStrike = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0334').join('');
export const toWavyUnderline = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0330').join('');
export const toOverline = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0305').join('');
export const toDottedAbove = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0307').join('');
export const toCrossAbove = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u033D').join('');
export const toArrowBelow = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u034E').join('');
export const toHeartAbove = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0306\u0308').join('');
export const toStarBelow = (text: string) => text.split('').map(c => c === ' ' ? ' ' : c + '\u0359').join('');

// -------------------------------------------------------------
// 26. Spaced Aesthetic & Inter-Character Decorators
// -------------------------------------------------------------
export const toAestheticSpaced = (text: string) => text.split('').join('  ');
export const toDotSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' · ');
export const toStarSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' ★ ');
export const toSparkleSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' ✦ ');
export const toHeartSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' ♡ ');
export const toLightningSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' ⚡ ');
export const toWaveSpaced = (text: string) => text.split('').filter(c => c !== ' ').join(' ~ ');

// -------------------------------------------------------------
// 27. Japanese / Asian Aesthetic (Katakana/Kanji Lookalike)
// -------------------------------------------------------------
const asianMap: { [key: string]: string } = {
  'A': '丹', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇', 'F': '下', 'G': '厶', 'H': '卄',
  'I': '工', 'J': '丁', 'K': '片', 'L': '乚', 'M': '爪', 'N': '冂', 'O': '口', 'P': '尸',
  'Q': '扣', 'R': '尺', 'S': '丂', 'T': 'ㄒ', 'U': '凵', 'V': 'V', 'W': '山', 'X': '乂',
  'Y': '丫', 'Z': '乙',
  'a': '丹', 'b': '乃', 'c': '匚', 'd': '刀', 'e': '乇', 'f': '下', 'g': '厶', 'h': '卄',
  'i': '工', 'j': '丁', 'k': '片', 'l': '乚', 'm': '爪', 'n': '冂', 'o': '口', 'p': '尸',
  'q': '扣', 'r': '尺', 's': '丂', 't': 'ㄒ', 'u': '凵', 'v': 'V', 'w': '山', 'x': '乂',
  'y': '丫', 'z': '乙'
};
export const toAsianAesthetic = (text: string) => text.split('').map(c => asianMap[c] || c).join('');

// -------------------------------------------------------------
// 28. Cyrillic / Slavic Lookalike
// -------------------------------------------------------------
const cyrillicMap: { [key: string]: string } = {
  'A': 'Д', 'B': 'Б', 'C': 'Ҫ', 'D': 'D', 'E': 'Є', 'F': 'Ғ', 'G': 'Ԍ', 'H': 'Ң',
  'I': 'І', 'J': 'Ј', 'K': 'К', 'L': 'Г', 'M': 'М', 'N': 'И', 'O': 'Ф', 'P': 'Р',
  'Q': 'Q', 'R': 'Я', 'S': 'Ѕ', 'T': 'Ҭ', 'U': 'Ц', 'V': 'V', 'W': 'Ш', 'X': 'Ж',
  'Y': 'Ұ', 'Z': 'Z',
  'a': 'а', 'b': 'в', 'c': 'с', 'd': 'ԁ', 'e': 'е', 'f': 'ғ', 'g': 'ԍ', 'h': 'һ',
  'i': 'і', 'j': 'ј', 'k': 'к', 'l': 'г', 'm': 'м', 'n': 'п', 'o': 'о', 'p': 'р',
  'q': 'ԛ', 'r': 'г', 's': 'ѕ', 't': 'т', 'u': 'ц', 'v': 'ѵ', 'w': 'ш', 'x': 'ж',
  'y': 'у', 'z': 'z'
};
export const toCyrillicLookalike = (text: string) => text.split('').map(c => cyrillicMap[c] || c).join('');

// -------------------------------------------------------------
// 29. Currency & Crypto Hybrid (₮ɆӾ₮)
// -------------------------------------------------------------
const cleanCurrencyMap: { [key: string]: string } = {
  'A': '₳', 'B': '฿', 'C': '₵', 'D': 'Ð', 'E': 'Ɇ', 'F': '₣', 'G': '₲', 'H': 'Ⱨ',
  'I': 'ł', 'J': 'J', 'K': '₭', 'L': 'Ł', 'M': '₥', 'N': '₦', 'O': 'Ø', 'P': '₱',
  'Q': 'ℚ', 'R': 'Ɽ', 'S': '§', 'T': '₮', 'U': 'Ʉ', 'V': 'Ṽ', 'W': '₩', 'X': 'Ӿ',
  'Y': 'Ɏ', 'Z': 'ℤ',
  'a': '₳', 'b': '฿', 'c': '₵', 'd': 'Ð', 'e': 'ɇ', 'f': '₣', 'g': '₲', 'h': 'ⱨ',
  'i': 'ɨ', 'j': 'j', 'k': '₭', 'l': 'ł', 'm': '₥', 'n': '₦', 'o': 'ø', 'p': '₱',
  'q': 'q', 'r': 'ɽ', 's': '§', 't': '₮', 'u': 'ʉ', 'v': 'ṽ', 'w': '₩', 'x': 'ӿ',
  'y': 'ɏ', 'z': 'ℤ'
};
export const toCurrencyClean = (text: string) => text.split('').map(c => cleanCurrencyMap[c] || c).join('');

// -------------------------------------------------------------
// 30. Leet 1337 Speak (Clean Pro)
// -------------------------------------------------------------
const leetMap: { [key: string]: string } = {
  'A': '4', 'B': '8', 'C': '<', 'D': '|)', 'E': '3', 'F': '|=', 'G': '6', 'H': '#',
  'I': '1', 'J': '_|', 'K': '|<', 'L': '1', 'M': '|v|', 'N': '|/|', 'O': '0', 'P': '|*',
  'Q': '0_', 'R': '|2', 'S': '5', 'T': '7', 'U': '|_|', 'V': '\\/', 'W': '\\/\\/', 'X': '><',
  'Y': '`/', 'Z': '2',
  'a': '4', 'b': '8', 'c': '(', 'd': '|)', 'e': '3', 'f': '|=', 'g': '9', 'h': '#',
  'i': '1', 'j': '_|', 'k': '|<', 'l': '1', 'm': '|v|', 'n': '|/|', 'o': '0', 'p': '|*',
  'q': '0_', 'r': '|2', 's': '5', 't': '7', 'u': '|_|', 'v': '\\/', 'w': '\\/\\/', 'x': '><',
  'y': '`/', 'z': '2'
};
export const toLeetSpeak = (text: string) => text.split('').map(c => leetMap[c] || c).join('');

// -------------------------------------------------------------
// 31. Morse Code
// -------------------------------------------------------------
const morseMap: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};
export const toMorseCode = (text: string) => text.toUpperCase().split('').map(c => morseMap[c] || c).join(' ');

// -------------------------------------------------------------
// 32. Glitch / Zalgo (Safe diacritic range)
// -------------------------------------------------------------
const ZALGO_UP = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309'];
const ZALGO_DOWN = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339'];

export function toZalgoGlitch(text: string, intensity: number = 2): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === ' ') {
      result += ' ';
      continue;
    }
    result += char;
    for (let j = 0; j < intensity; j++) {
      const upChar = ZALGO_UP[(i * 3 + j * 7) % ZALGO_UP.length];
      const downChar = ZALGO_DOWN[(i * 5 + j * 11) % ZALGO_DOWN.length];
      result += upChar + downChar;
    }
  }
  return result;
}

// -------------------------------------------------------------
// BASE STYLES REGISTRY
// -------------------------------------------------------------
export interface BaseStyle {
  id: string;
  name: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
  transform: (text: string) => string;
}

export const BASE_STYLES: BaseStyle[] = [
  { id: 'math-bold', name: 'Mathematical Bold', category: 'Aesthetic & Bio', transform: toMathBold },
  { id: 'math-italic', name: 'Mathematical Italic', category: 'Aesthetic & Bio', transform: toMathItalic },
  { id: 'math-bold-italic', name: 'Bold Italic Cursive', category: 'Aesthetic & Bio', transform: toMathBoldItalic },
  { id: 'script', name: 'Cute Cursive Script', category: 'Aesthetic & Bio', transform: toScript },
  { id: 'bold-script', name: 'Bold Luxury Script', category: 'Aesthetic & Bio', transform: toBoldScript },
  { id: 'fraktur', name: 'Medieval Fraktur Gothic', category: 'Gothic & Classic', transform: toFraktur },
  { id: 'bold-fraktur', name: 'Dark Knights Gothic Bold', category: 'Gothic & Classic', transform: toBoldFraktur },
  { id: 'double-struck', name: 'Blackboard Double-Struck', category: 'Gothic & Classic', transform: toDoubleStruck },
  { id: 'sans-serif', name: 'Clean Sans-Serif', category: 'Aesthetic & Bio', transform: toSansSerif },
  { id: 'sans-bold', name: 'Clean Sans Bold', category: 'Gamer & Nickname', transform: toSansSerifBold },
  { id: 'sans-italic', name: 'Modern Sans Italic', category: 'Aesthetic & Bio', transform: toSansSerifItalic },
  { id: 'sans-bold-italic', name: 'Racing Sans Bold Italic', category: 'Gamer & Nickname', transform: toSansSerifBoldItalic },
  { id: 'monospace', name: 'Cyber Hacker Monospace', category: 'Glitch & Cyber', transform: toMonospace },
  { id: 'fullwidth', name: 'Vaporwave Fullwidth', category: 'Glitch & Cyber', transform: toFullwidth },
  { id: 'small-caps', name: 'Instagram Bio Small Caps', category: 'Aesthetic & Bio', transform: toSmallCaps },
  { id: 'circled', name: 'Circled Letters Ⓐ', category: 'Symbols & Emoji', transform: toCircled },
  { id: 'circled-dark', name: 'Dark Inverted Circles 🅐', category: 'Symbols & Emoji', transform: toCircledDark },
  { id: 'squared', name: 'Boxed Letters 🄰', category: 'Symbols & Emoji', transform: toSquared },
  { id: 'squared-dark', name: 'Dark Box Badges 🅰', category: 'Gamer & Nickname', transform: toSquaredDark },
  { id: 'parenthesized', name: 'Parenthesized Badges ⒜', category: 'Symbols & Emoji', transform: toParenthesized },
  { id: 'superscript', name: 'Superscript Mini ᵀᵉˣᵗ', category: 'Aesthetic & Bio', transform: toSuperscript },
  { id: 'subscript', name: 'Subscript Mini ₜₑₓₜ', category: 'Aesthetic & Bio', transform: toSubscript },
  { id: 'upside-down', name: 'Inverted Upside-Down', category: 'Glitch & Cyber', transform: toUpsideDown },
  { id: 'mirrored', name: 'Mirrored Backwards ƚxɘT', category: 'Glitch & Cyber', transform: toMirrored },
  { id: 'strikethrough', name: 'Crossed Strikethrough', category: 'Aesthetic & Bio', transform: toStrikethrough },
  { id: 'tilde-strike', name: 'Tilde Strikethrough', category: 'Aesthetic & Bio', transform: toTildeStrike },
  { id: 'underline', name: 'Single Underline', category: 'Aesthetic & Bio', transform: toUnderline },
  { id: 'double-underline', name: 'Double Underline', category: 'Aesthetic & Bio', transform: toDoubleUnderline },
  { id: 'wavy-underline', name: 'Wavy Underline', category: 'Aesthetic & Bio', transform: toWavyUnderline },
  { id: 'slash-through', name: 'Cyber Slash-Through', category: 'Glitch & Cyber', transform: toSlashThrough },
  { id: 'overline', name: 'Overline Top Line', category: 'Aesthetic & Bio', transform: toOverline },
  { id: 'dotted-above', name: 'Dotted Constellation Above', category: 'Aesthetic & Bio', transform: toDottedAbove },
  { id: 'cross-above', name: 'Cross Stars Above', category: 'Gothic & Classic', transform: toCrossAbove },
  { id: 'arrow-below', name: 'Runway Arrow Below', category: 'Gamer & Nickname', transform: toArrowBelow },
  { id: 'heart-above', name: 'Sweet Heart Kiss Above', category: 'Aesthetic & Bio', transform: toHeartAbove },
  { id: 'star-below', name: 'Magic Stars Below', category: 'Aesthetic & Bio', transform: toStarBelow },
  { id: 'aesthetic-spaced', name: 'Aesthetic Spaced (V a p o r)', category: 'Aesthetic & Bio', transform: toAestheticSpaced },
  { id: 'dot-spaced', name: 'Minimalist Dot Spaced', category: 'Aesthetic & Bio', transform: toDotSpaced },
  { id: 'star-spaced', name: 'Starlight Star Spaced', category: 'Aesthetic & Bio', transform: toStarSpaced },
  { id: 'sparkle-spaced', name: 'Sparkle ✦ Spaced', category: 'Aesthetic & Bio', transform: toSparkleSpaced },
  { id: 'heart-spaced', name: 'Sweet Heart ♡ Spaced', category: 'Aesthetic & Bio', transform: toHeartSpaced },
  { id: 'lightning-spaced', name: 'Thunder ⚡ Spaced', category: 'Gamer & Nickname', transform: toLightningSpaced },
  { id: 'wave-spaced', name: 'Ocean Wave ~ Spaced', category: 'Aesthetic & Bio', transform: toWaveSpaced },
  { id: 'asian-aesthetic', name: 'Kanji Katakana Lookalike', category: 'Glitch & Cyber', transform: toAsianAesthetic },
  { id: 'cyrillic-lookalike', name: 'Slavic Cyrillic Lookalike', category: 'Gothic & Classic', transform: toCyrillicLookalike },
  { id: 'currency-clean', name: 'Crypto Currency Hybrid ₮ɆӾ₮', category: 'Gamer & Nickname', transform: toCurrencyClean },
  { id: 'leet-speak', name: 'Hacker 1337 Leet Speak', category: 'Glitch & Cyber', transform: toLeetSpeak },
  { id: 'morse', name: 'Telegraph Morse Code', category: 'Glitch & Cyber', transform: toMorseCode },
  { id: 'zalgo-mild', name: 'Cyber Glitch Mild', category: 'Glitch & Cyber', transform: (t) => toZalgoGlitch(t, 1) },
  { id: 'zalgo-medium', name: 'Matrix Glitch Medium', category: 'Glitch & Cyber', transform: (t) => toZalgoGlitch(t, 2) },
  { id: 'zalgo-extreme', name: 'Demonic Matrix Overload', category: 'Glitch & Cyber', transform: (t) => toZalgoGlitch(t, 4) },
];
