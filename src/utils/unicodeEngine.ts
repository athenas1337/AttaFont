// AttaFont Unicode Character Engine
// Converts ASCII characters to rich Unicode alphabets & diacritic transformations

const ASCII_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ASCII_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ASCII_DIGITS = '0123456789';

// Map string generator helper using lookup table or offset calculation
function mapString(text: string, upperMap: string[], lowerMap: string[], digitMap?: string[]): string {
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

// Helper to convert character offset arrays
function offsetArray(startCode: number, length: number): string[] {
  const arr: string[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(String.fromCodePoint(startCode + i));
  }
  return arr;
}

// 1. Math Bold: 𝐀-𝐙, 𝐚-𝐳, 𝟎-𝟗
export const toMathBold = (text: string) => mapString(
  text,
  offsetArray(0x1D400, 26),
  offsetArray(0x1D41A, 26),
  offsetArray(0x1D7CE, 10)
);

// 2. Math Italic: 𝐴-𝑍, 𝑎-𝑧 (with fixes for U+1D435 etc where needed)
const italicUpper = offsetArray(0x1D434, 26);
italicUpper[8] = '𝐻'; // U+210B
const italicLower = offsetArray(0x1D44E, 26);
italicLower[7] = 'ℎ'; // U+210E
export const toMathItalic = (text: string) => mapString(text, italicUpper, italicLower);

// 3. Math Bold Italic
export const toMathBoldItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D468, 26),
  offsetArray(0x1D482, 26)
);

// 4. Script / Cursive: 𝒜-𝒵, 𝒶-𝓏
const scriptUpper = ['𝒜','ℬ','𝒞','𝒟','ℰ','ℱ','𝒢','ℋ','ℐ','𝒥','𝒦','ℒ','ℳ','𝒩','𝒪','𝒫','𝒬','ℛ','𝒮','𝒯','𝒰','𝒱','𝒲','𝒳','𝒴','𝒵'];
const scriptLower = ['𝒶','𝒷','𝒸','𝒹','ℯ','𝒻','ℊ','𝒽','𝒾','𝒿','𝓀','𝓁','𝓂','𝓃','ℴ','𝓅','𝓆','𝓇','𝓈','𝓉','𝓊','𝓋','𝓌','𝓍','𝓎','𝓏'];
export const toScript = (text: string) => mapString(text, scriptUpper, scriptLower);

// 5. Bold Script: 𝓐-𝓩, 𝓪-𝓟
export const toBoldScript = (text: string) => mapString(
  text,
  offsetArray(0x1D4D0, 26),
  offsetArray(0x1D4EA, 26)
);

// 6. Fraktur / Gothic: 𝔄-𝔁, 𝔞-𝔷
const frakturUpper = ['𝔄','𝔅','ℭ','𝔇','𝔈','𝔉','𝔁','ℌ','ℑ','𝔍','𝔏','𝔍','𝔑','𝔒','𝔓','𝔔','ℜ','𝔖','𝔗','𝔘','𝔙','𝔚','𝔛','𝔜','ℨ'];
const frakturLower = offsetArray(0x1D51E, 26);
export const toFraktur = (text: string) => mapString(text, frakturUpper, frakturLower);

// 7. Bold Fraktur: 𝕬-𝖅, 𝖆-𝖟
export const toBoldFraktur = (text: string) => mapString(
  text,
  offsetArray(0x1D56C, 26),
  offsetArray(0x1D586, 26)
);

// 8. Double-Struck / Blackboard: 𝔸-ℤ, 𝕒-𝕔, 𝟘-𝟡
const doubleUpper = ['𝔸','𝔹','ℂ','𝔻','𝔼','𝔽','𝔾','ℍ','𝕀','𝕁','𝕂','𝕃','𝕄','ℕ','𝕆','ℙ','ℚ','ℝ','𝕊','𝕋','𝕌','𝕍','𝕎','𝕏','𝕐','ℤ'];
const doubleLower = offsetArray(0x1D552, 26);
const doubleDigits = offsetArray(0x1D7D8, 10);
export const toDoubleStruck = (text: string) => mapString(text, doubleUpper, doubleLower, doubleDigits);

// 9. Sans-Serif Normal: 𝖠-𝖩, 𝖺-𝗑
export const toSansSerif = (text: string) => mapString(
  text,
  offsetArray(0x1D5A0, 26),
  offsetArray(0x1D5BA, 26),
  offsetArray(0x1D7E2, 10)
);

// 10. Sans-Serif Bold: 𝐀-𝐙, 𝐚-𝐳
export const toSansSerifBold = (text: string) => mapString(
  text,
  offsetArray(0x1D5D4, 26),
  offsetArray(0x1D5EE, 26),
  offsetArray(0x1D7EC, 10)
);

// 11. Sans-Serif Italic
export const toSansSerifItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D608, 26),
  offsetArray(0x1D622, 26)
);

// 12. Sans-Serif Bold Italic
export const toSansSerifBoldItalic = (text: string) => mapString(
  text,
  offsetArray(0x1D63C, 26),
  offsetArray(0x1D656, 26)
);

// 13. Monospace: 𝙰-𝚉, 𝚊-𝚣, 𝟶-𝟿
export const toMonospace = (text: string) => mapString(
  text,
  offsetArray(0x1D670, 26),
  offsetArray(0x1D68A, 26),
  offsetArray(0x1D7F6, 10)
);

// 14. Fullwidth (Vaporwave): Ａ-Ｚ, ａ-ｚ, ０-９
export const toFullwidth = (text: string) => mapString(
  text,
  offsetArray(0xFF21, 26),
  offsetArray(0xFF41, 26),
  offsetArray(0xFF10, 10)
);

// 15. Circled: Ⓐ-Ⓩ, ⓐ-ⓩ, ⓪-⑨
const circledUpper = offsetArray(0x24B6, 26);
const circledLower = offsetArray(0x24D0, 26);
const circledDigits = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
export const toCircled = (text: string) => mapString(text, circledUpper, circledLower, circledDigits);

// 16. Circled Dark / Inverse: 🅐-🅩, ⓿-❾
const circledDarkUpper = offsetArray(0x1F150, 26);
const circledDarkLower = offsetArray(0x1F150, 26);
const circledDarkDigits = ['⓿', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾'];
export const toCircledDark = (text: string) => mapString(text, circledDarkUpper, circledDarkLower, circledDarkDigits);

// 17. Squared: 🄰-🅩
const squaredUpper = offsetArray(0x1F130, 26);
export const toSquared = (text: string) => mapString(text, squaredUpper, squaredUpper);

// 18. Squared Dark: 🅰-🆉
const squaredDarkUpper = offsetArray(0x1F170, 26);
export const toSquaredDark = (text: string) => mapString(text, squaredDarkUpper, squaredDarkUpper);

// 19. Small Caps: ᴀ-ᴢ
const smallCaps = ['ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ғ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ','ɴ','ᴏ','ᴘ','ǫ','ʀ','s','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ'];
export const toSmallCaps = (text: string) => mapString(text, smallCaps, smallCaps);

// 20. Superscript
const superMap: { [key: string]: string } = {
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
  'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
  'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'D': 'ᴰ', 'E': 'ᴱ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': '₉', 'K': 'ᴷ', 'L': 'ᴸ',
  'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'R': 'ᴿ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ',
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
};
export const toSuperscript = (text: string) => text.split('').map(c => superMap[c] || c).join('');

// 21. Subscript
const subMap: { [key: string]: string } = {
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎'
};
export const toSubscript = (text: string) => text.split('').map(c => subMap[c] || c).join('');

// 22. Upside Down / Inverted
const upsideDownMap: { [key: string]: string } = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
  'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
  'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': 'Ɐ', 'B': 'ꓯ', 'C': 'Ɔ', 'D': 'Ɑ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ',
  'K': 'ꓘ', 'L': 'Ꞁ', 'M': 'ꟽ', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ꓤ', 'S': 'S', 'T': 'ꓕ',
  'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '0': '0', '1': '⇂', '2': '乙', '3': 'Ɛ', '4': 'h', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '.': '˙', ',': "'", '\'': ',', '"': ',,', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{'
};
export const toUpsideDown = (text: string) => text.split('').reverse().map(c => upsideDownMap[c] || c).join('');

// 23. Strikethrough (combining U+0336)
export const toStrikethrough = (text: string) => text.split('').map(c => c + '\u0336').join('');

// 24. Underline (combining U+0332)
export const toUnderline = (text: string) => text.split('').map(c => c + '\u0332').join('');

// 25. Double Underline (combining U+0333)
export const toDoubleUnderline = (text: string) => text.split('').map(c => c + '\u0333').join('');

// 26. Slash Through (combining U+0337)
export const toSlashThrough = (text: string) => text.split('').map(c => c + '\u0337').join('');

// 27. Overline / Tilde Above (combining U+0305 / U+0303)
export const toTildeAbove = (text: string) => text.split('').map(c => c + '\u0303').join('');
export const toDotAbove = (text: string) => text.split('').map(c => c + '\u0307').join('');

// 28. Currency / Bubble / Aesthetic Symbols
const currencyMap: { [key: string]: string } = {
  'a': '₳', 'b': '฿', 'c': '₵', 'd': '₫', 'e': '€', 'f': '₣', 'g': '₲', 'h': 'Ⱨ', 'i': '☨', 'j': 'ℑ',
  'k': '₭', 'l': '£', 'm': '₥', 'n': '₦', 'o': 'ℴ', 'p': '₱', 'q': 'ℚ', 'r': 'ℜ', 's': '§', 't': '₮',
  'u': '∪', 'v': '℣', 'w': '₩', 'x': 'ⵝ', 'y': '¥', 'z': 'ℤ',
  'A': '₳', 'B': '฿', 'C': '₵', 'D': '₫', 'E': '€', 'F': '₣', 'G': '₲', 'H': 'Ⱨ', 'I': '☨', 'J': 'ℑ',
  'K': '₭', 'L': '£', 'M': '₥', 'N': '₦', 'O': 'ℴ', 'P': '₱', 'Q': 'ℚ', 'R': 'ℜ', 'S': '§', 'T': '₮',
  'U': '∪', 'V': '℣', 'W': '₩', 'X': 'ⵝ', 'Y': '¥', 'Z': 'ℤ'
};
export const toCurrencyFont = (text: string) => text.split('').map(c => currencyMap[c] || c).join('');

// 29. Glitch / Zalgo Text Generator
const ZALGO_UP = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f'];
const ZALGO_DOWN = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'];

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
      const upChar = ZALGO_UP[Math.floor((i + j * 7) % ZALGO_UP.length)];
      const downChar = ZALGO_DOWN[Math.floor((i + j * 11) % ZALGO_DOWN.length)];
      result += upChar + downChar;
    }
  }
  return result;
}

// Map of base transformers for combinatorial generation
export interface BaseStyle {
  id: string;
  name: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji' | 'All Fonts';
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
  { id: 'circled', name: 'Circled Letters Ⓐ', category: 'Symbols & Emoji', transform: toCircled },
  { id: 'circled-dark', name: 'Dark Inverted Circles 🅐', category: 'Symbols & Emoji', transform: toCircledDark },
  { id: 'squared', name: 'Boxed Letters 🄰', category: 'Symbols & Emoji', transform: toSquared },
  { id: 'squared-dark', name: 'Dark Box Badges 🅰', category: 'Gamer & Nickname', transform: toSquaredDark },
  { id: 'small-caps', name: 'Instagram Bio Small Caps', category: 'Aesthetic & Bio', transform: toSmallCaps },
  { id: 'superscript', name: 'Superscript Mini ᵀᵉˣᵗ', category: 'Aesthetic & Bio', transform: toSuperscript },
  { id: 'subscript', name: 'Subscript Mini ₜₑₓₜ', category: 'Aesthetic & Bio', transform: toSubscript },
  { id: 'upside-down', name: 'Inverted Upside-Down', category: 'Glitch & Cyber', transform: toUpsideDown },
  { id: 'strikethrough', name: 'Crossed Strikethrough', category: 'Aesthetic & Bio', transform: toStrikethrough },
  { id: 'underline', name: 'Single Underline', category: 'Aesthetic & Bio', transform: toUnderline },
  { id: 'double-underline', name: 'Double Underline', category: 'Aesthetic & Bio', transform: toDoubleUnderline },
  { id: 'slash-through', name: 'Cyber Slash-Through', category: 'Glitch & Cyber', transform: toSlashThrough },
  { id: 'currency', name: 'Crypto Currency Symbols', category: 'Gamer & Nickname', transform: toCurrencyFont },
  { id: 'zalgo-mild', name: 'Cyber Glitch Mild', category: 'Glitch & Cyber', transform: (t) => toZalgoGlitch(t, 1) },
  { id: 'zalgo-extreme', name: 'Matrix Glitch Overload', category: 'Glitch & Cyber', transform: (t) => toZalgoGlitch(t, 3) },
];
