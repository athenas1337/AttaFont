// AttaFont Decorator Templates & Symbol Frame Matrix
// Contains 100+ prefix/suffix decorator patterns categorized for gaming nicknames, aesthetics, cyber, gothic, etc.

export interface DecoratorTemplate {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
}

export const DECORATOR_TEMPLATES: DecoratorTemplate[] = [
  // Gamer & Free Fire / MLBB / PUBG Nicknames
  { id: 'g1', name: 'Imperial Crown', prefix: '꧁༺', suffix: '༻꧂', category: 'Gamer & Nickname' },
  { id: 'g2', name: 'Lightning Thunder', prefix: '⚡[', suffix: ']⚡', category: 'Gamer & Nickname' },
  { id: 'g3', name: 'Crosshair Sniper', prefix: '🎯〖', suffix: '〗🎯', category: 'Gamer & Nickname' },
  { id: 'g4', name: 'Star Warrior', prefix: '★彡[', suffix: ']彡★', category: 'Gamer & Nickname' },
  { id: 'g5', name: 'Katana Slash', prefix: '⚔️『', suffix: '』⚔️', category: 'Gamer & Nickname' },
  { id: 'g6', name: 'Valkyrie Wings', prefix: '꧁𓊈', suffix: '𓊉꧂', category: 'Gamer & Nickname' },
  { id: 'g7', name: 'Skull Assassin', prefix: '☠️☬', suffix: '☬☠️', category: 'Gamer & Nickname' },
  { id: 'g8', name: 'Phoenix Fire', prefix: '🔥⟨', suffix: '⟩🔥', category: 'Gamer & Nickname' },
  { id: 'g9', name: 'Dragon Lord', prefix: '🐉🐲[', suffix: ']🐲🐉', category: 'Gamer & Nickname' },
  { id: 'g10', name: 'Demon Horns', prefix: '╰⋛⋋⊱', suffix: '⊰⋌⋚╯', category: 'Gamer & Nickname' },
  { id: 'g11', name: 'Shadow Ninja', prefix: '🥷︻╦╤─', suffix: '─╤╦︻', category: 'Gamer & Nickname' },
  { id: 'g12', name: 'Royal Shield', prefix: '🛡️『', suffix: '』🛡️', category: 'Gamer & Nickname' },
  { id: 'g13', name: 'Ghost Reaper', prefix: '👻⪻', suffix: '⪼👻', category: 'Gamer & Nickname' },
  { id: 'g14', name: 'Toxic Hazard', prefix: '☣️【', suffix: '】☣️', category: 'Gamer & Nickname' },
  { id: 'g15', name: 'Overlord King', prefix: '👑♛[', suffix: ']♛👑', category: 'Gamer & Nickname' },
  { id: 'g16', name: 'Infinity Gamer', prefix: '♾️⚡', suffix: '⚡♾️', category: 'Gamer & Nickname' },
  { id: 'g17', name: 'Neon Spectre', prefix: '꧁𓤧', suffix: '𓤧꧂', category: 'Gamer & Nickname' },
  { id: 'g18', name: 'Predator Claw', prefix: '爪⪻', suffix: '⪼爪', category: 'Gamer & Nickname' },
  { id: 'g19', name: 'Cyber Samurai', prefix: '⛩️〘', suffix: 'MULTI〙⛩️', category: 'Gamer & Nickname' },
  { id: 'g20', name: 'Viper Strike', prefix: '🐍≪', suffix: '≫🐍', category: 'Gamer & Nickname' },

  // Aesthetic & Social Media Bio
  { id: 'a1', name: 'Floral Cute', prefix: '✿ ', suffix: ' ✿', category: 'Aesthetic & Bio' },
  { id: 'a2', name: 'Cherry Blossom', prefix: '🌸 ┊ ', suffix: ' ┊ 🌸', category: 'Aesthetic & Bio' },
  { id: 'a3', name: 'Sparkle Star', prefix: '✦ ', suffix: ' ✦', category: 'Aesthetic & Bio' },
  { id: 'a4', name: 'Soft Angel', prefix: '╰┈➤ ❝ ', suffix: ' ❞', category: 'Aesthetic & Bio' },
  { id: 'a5', name: 'Minimalist Bracket', prefix: '┊', suffix: '┊', category: 'Aesthetic & Bio' },
  { id: 'a6', name: 'Cute Ribbon', prefix: '🎀 ┆ ', suffix: ' ┆ 🎀', category: 'Aesthetic & Bio' },
  { id: 'a7', name: 'Cozy Cottage', prefix: '☕ ⌇ ', suffix: ' ⌇ ☕', category: 'Aesthetic & Bio' },
  { id: 'a8', name: 'Butterfly Dreams', prefix: '🦋 ✧ ', suffix: ' ✧ 🦋', category: 'Aesthetic & Bio' },
  { id: 'a9', name: 'Moonlight Glow', prefix: '🌙 ˚. ', suffix: ' .˚ 🌙', category: 'Aesthetic & Bio' },
  { id: 'a10', name: 'Heart Soft', prefix: '🤍 ── ', suffix: ' ── 🤍', category: 'Aesthetic & Bio' },
  { id: 'a11', name: 'Sparkly Bow', prefix: '୨୧ ', suffix: ' ୨୧', category: 'Aesthetic & Bio' },
  { id: 'a12', name: 'Peach Garden', prefix: '🍑 𓂂 ', suffix: ' 𓂂 🍑', category: 'Aesthetic & Bio' },
  { id: 'a13', name: 'Golden Hour', prefix: '✨ ─── ', suffix: ' ─── ✨', category: 'Aesthetic & Bio' },
  { id: 'a14', name: 'Soft Cloud', prefix: '☁️ ┈ ', suffix: ' ┈ ☁️', category: 'Aesthetic & Bio' },
  { id: 'a15', name: 'Tulip Harmony', prefix: '🌷 ⊹ ', suffix: ' ⊹ 🌷', category: 'Aesthetic & Bio' },
  { id: 'a16', name: 'Vintage Letter', prefix: '✉️ ﹅ ', suffix: ' ﹆ ✉️', category: 'Aesthetic & Bio' },
  { id: 'a17', name: 'Serenade Music', prefix: '🎧 𓂃 ', suffix: ' 𓂃 🎶', category: 'Aesthetic & Bio' },
  { id: 'a18', name: 'Sweet Candy', prefix: '🍭 ⋆ ', suffix: ' ⋆ 🍭', category: 'Aesthetic & Bio' },
  { id: 'a19', name: 'Crystal Magic', prefix: '🔮 ◌ ', suffix: ' ◌ 🔮', category: 'Aesthetic & Bio' },
  { id: 'a20', name: 'Dreamy Fairy', prefix: '🧚‍♀️ ✧･ﾟ:', suffix: ':･ﾟ✧ 🧚‍♀️', category: 'Aesthetic & Bio' },

  // Gothic & Medieval
  { id: 'got1', name: 'Vampire Cross', prefix: '✟ ', suffix: ' ✟', category: 'Gothic & Classic' },
  { id: 'got2', name: 'Medieval Castle', prefix: '🏰 𝔖𝔱𝔶𝔩𝔢: ', suffix: ' 🏰', category: 'Gothic & Classic' },
  { id: 'got3', name: 'Dark Raven', prefix: '𓄿 ⚔️ ', suffix: ' ⚔️ 𓄿', category: 'Gothic & Classic' },
  { id: 'got4', name: 'Ancient Scroll', prefix: '📜 ❨', suffix: '❩ 📜', category: 'Gothic & Classic' },
  { id: 'got5', name: 'Gothic Rose', prefix: '🌹 ♰ ', suffix: ' ♰ 🌹', category: 'Gothic & Classic' },
  { id: 'got6', name: 'Sacred Seal', prefix: '🔯 ⟦', suffix: '⟧ 🔯', category: 'Gothic & Classic' },
  { id: 'got7', name: 'Thorns Crest', prefix: '⚔️ 𓆩', suffix: '𓆪 ⚔️', category: 'Gothic & Classic' },
  { id: 'got8', name: 'Midnight Eclipse', prefix: '🌑 ✝️ ', suffix: ' ✝️ 🌑', category: 'Gothic & Classic' },
  { id: 'got9', name: 'Templar Sword', prefix: '🗡️ ⟪', suffix: '⟫ 🗡️', category: 'Gothic & Classic' },
  { id: 'got10', name: 'Black Velvet', prefix: '🖤 ♰ ', suffix: ' ♰ 🖤', category: 'Gothic & Classic' },

  // Glitch & Cyberpunk
  { id: 'c1', name: 'Matrix Frame', prefix: '⦇', suffix: '⦈', category: 'Glitch & Cyber' },
  { id: 'c2', name: 'Cyber Terminal', prefix: '>_ [', suffix: '] <_', category: 'Glitch & Cyber' },
  { id: 'c3', name: 'Cyberpunk 2077', prefix: '⚡⟨CYBER // ', suffix: '⟩⚡', category: 'Glitch & Cyber' },
  { id: 'c4', name: 'Neon Glitch', prefix: '░▒▓█ ', suffix: ' █▓▒░', category: 'Glitch & Cyber' },
  { id: 'c5', name: 'Hacker Binary', prefix: '0101 [', suffix: '] 1010', category: 'Glitch & Cyber' },
  { id: 'c6', name: 'Synthwave Sun', prefix: '🌅 ⬡ ', suffix: ' ⬡ 🌆', category: 'Glitch & Cyber' },
  { id: 'c7', name: 'Quantum Core', prefix: '⚛️ ⟨', suffix: '⟩ ⚛️', category: 'Glitch & Cyber' },
  { id: 'c8', name: 'Radioactive Waste', prefix: '☢️ ░ ', suffix: ' ░ ☢️', category: 'Glitch & Cyber' },
  { id: 'c9', name: 'Hyper Drive', prefix: '⏩ ⦓', suffix: '⦔ ⏩', category: 'Glitch & Cyber' },
  { id: 'c10', name: 'Vapor Neon Grid', prefix: '🌐 ░▒ ', suffix: ' ▒░ 🌐', category: 'Glitch & Cyber' },

  // Symbols & Kawaii
  { id: 's1', name: 'Kawaii Bear', prefix: 'ʕ•ᴥ•ʔ ', suffix: ' ʕ•ᴥ•ʔ', category: 'Symbols & Emoji' },
  { id: 's2', name: 'Happy Cat', prefix: 'ฅ^•ﻌ•^ฅ ', suffix: ' ฅ^•ﻌ•^ฅ', category: 'Symbols & Emoji' },
  { id: 's3', name: 'Starry Wink', prefix: '(⁠~⁠￣⁠³⁠￣⁠)⁠~ ', suffix: ' ~⁠(⁠￣⁠³⁠￣⁠~⁠)', category: 'Symbols & Emoji' },
  { id: 's4', name: 'Cheering Sparkle', prefix: '٩(◕‿◕)۶ ', suffix: ' ٩(◕‿◕)۶', category: 'Symbols & Emoji' },
  { id: 's5', name: 'Love Hug', prefix: '(⊃｡•́‿•̀｡)⊃ ', suffix: ' ⊂(｡•́‿•̀｡⊂)', category: 'Symbols & Emoji' },
  { id: 's6', name: 'Shy Blush', prefix: '(⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠) ', suffix: ' (⁠ꈍ⁠ᴗ⁠ꈍ⁠ ⁠)', category: 'Symbols & Emoji' },
  { id: 's7', name: 'Gaming Bunny', prefix: ' (˶˃ ᵕ ˂˶) ', suffix: ' (˶˃ ᵕ ˂˶)', category: 'Symbols & Emoji' },
  { id: 's8', name: 'Sparkle Wings', prefix: '໒꒱ ', suffix: ' ໒꒱', category: 'Symbols & Emoji' },
  { id: 's9', name: 'Diamond Crown', prefix: '💎 ✧ ', suffix: ' ✧ 💎', category: 'Symbols & Emoji' },
  { id: 's10', name: 'Music Note Wave', prefix: '🎵 🎶 ', suffix: ' 🎶 🎵', category: 'Symbols & Emoji' },
];

// Single Custom Symbol Pickers for the interactive Symbol Decorator Builder
export const SINGLE_SYMBOLS = [
  '⚡', '✦', '★', '꧁', '༻', '👑', '⚔️', '🎯', '🔥', '🐉', 
  '🌸', '🎀', '☕', '🦋', '🌙', '🤍', '💖', '✨', '☁️', '🌷', 
  '✟', '📜', '🌹', '🖤', '🗡️', '░', '▓', '█', '⚛️', '☣️', 
  'ʕ•ᴥ•ʔ', 'ฅ^•ﻌ•^ฅ', '٩(◕‿◕)۶', '୨୧', '໒꒱', '💎', '🎵', '⚓', '╰┈➤', '┊'
];
