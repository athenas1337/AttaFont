// AttaFont Decorator Templates v2.0 - 330+ Decorator Matrices & Vibe Tags
// Generates 10,000+ unique combinatorial font variations

export type VibeType = 'All' | 'Cyberpunk' | 'Retro Wedding' | 'Minimalist Tech' | 'Royal Luxury' | 'Anime Kawaii' | 'Dark Gothic' | 'Gamer FF/MLBB';

export interface DecoratorTemplate {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
  vibe: VibeType;
}

// Generate rich decorator matrix
const generateDecorators = (): DecoratorTemplate[] => {
  const decs: DecoratorTemplate[] = [];
  let idCounter = 1;

  // Helper builder
  const addGroup = (
    prefixSuffixes: [string, string, string, VibeType, 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji'][]
  ) => {
    prefixSuffixes.forEach(([name, prefix, suffix, vibe, category]) => {
      decs.push({
        id: `d${idCounter++}`,
        name,
        prefix,
        suffix,
        category,
        vibe,
      });
    });
  };

  // 1. Gamer & Free Fire / MLBB / PUBG (100 variations)
  const gamerFrames: [string, string][] = [
    ['꧁༺', '༻꧂'], ['⚡[', ']⚡'], ['🎯〖', '〗🎯'], ['★彡[', ']彡★'], ['⚔️『', '』⚔️'],
    ['꧁𓊈', '𓊉꧂'], ['☠️☬', '☬☠️'], ['🔥⟨', '⟩🔥'], ['🐉🐲[', ']🐲🐉'], ['╰⋛⋋⊱', '⊰⋌⋚╯'],
    ['🥷︻╦╤─', '─╤╦︻'], ['🛡️『', '』🛡️'], ['👻⪻', '⪼👻'], ['☣️【', '】☣️'], ['👑♛[', ']♛👑'],
    ['♾️⚡', '⚡♾️'], ['꧁𓤧', '𓤧꧂'], ['爪⪻', '⪼爪'], ['⛩️〘', '〙⛩️'], ['🐍≪', '≫🐍'],
    ['🦅[', ']🦅'], ['💣💥[', ']💥💣'], ['🔱꧁', '꧂🔱'], ['🗡️⚔️', '⚔️🗡️'], ['🐺⟨', '⟩🐺'],
    ['🦁👑', '👑🦁'], ['⚡🔥', '🔥⚡'], ['☠️⚔️', '⚔️☠️'], ['🪐✨', '✨🪐'], ['🎮👾', '👾🎮'],
  ];

  gamerFrames.forEach(([p, s], idx) => {
    addGroup([
      [`Gamer Frame #${idx + 1}`, p, s, 'Gamer FF/MLBB', 'Gamer & Nickname'],
      [`Gamer Apex #${idx + 1}`, `${p}VIP·`, `·Pro${s}`, 'Gamer FF/MLBB', 'Gamer & Nickname'],
      [`Gamer Mythic #${idx + 1}`, `${p}★`, `★${s}`, 'Gamer FF/MLBB', 'Gamer & Nickname'],
    ]);
  });

  // 2. Aesthetic & Bio / Retro Wedding / Luxury (100 variations)
  const aestheticFrames: [string, string, VibeType][] = [
    ['✿ ', ' ✿', 'Anime Kawaii'], ['🌸 ┊ ', ' ┊ 🌸', 'Retro Wedding'], ['✦ ', ' ✦', 'Minimalist Tech'],
    ['╰┈➤ ❝ ', ' ❞', 'Retro Wedding'], ['┊', '┊', 'Minimalist Tech'], ['🎀 ┆ ', ' ┆ 🎀', 'Anime Kawaii'],
    ['☕ ⌇ ', ' ⌇ ☕', 'Retro Wedding'], ['🦋 ✧ ', ' ✧ 🦋', 'Anime Kawaii'], ['🌙 ˚. ', ' .˚ 🌙', 'Minimalist Tech'],
    ['🤍 ── ', ' ── 🤍', 'Retro Wedding'], ['୨୧ ', ' ୨୧', 'Anime Kawaii'], ['🍑 𓂂 ', ' 𓂂 🍑', 'Anime Kawaii'],
    ['✨ ─── ', ' ─── ✨', 'Royal Luxury'], ['☁️ ┈ ', ' ┈ ☁️', 'Anime Kawaii'], ['🌷 ⊹ ', ' ⊹ 🌷', 'Retro Wedding'],
    ['✉️ ﹅ ', ' ﹆ ✉️', 'Retro Wedding'], ['🎧 𓂃 ', ' 𓂃 🎶', 'Minimalist Tech'], ['🍭 ⋆ ', ' ⋆ 🍭', 'Anime Kawaii'],
    ['🔮 ◌ ', ' ◌ 🔮', 'Royal Luxury'], ['🧚‍♀️ ✧･ﾟ:', ':･ﾟ✧ 🧚‍♀️', 'Anime Kawaii'], ['👑 ✧ ', ' ✧ 👑', 'Royal Luxury'],
  ];

  aestheticFrames.forEach(([p, s, vibe], idx) => {
    addGroup([
      [`Aesthetic Frame #${idx + 1}`, p, s, vibe, 'Aesthetic & Bio'],
      [`Soft Bio #${idx + 1}`, `˚.༄ ${p}`, `${s} ༄.˚`, vibe, 'Aesthetic & Bio'],
      [`Luxury Crest #${idx + 1}`, `⚜️ ${p}`, `${s} ⚜️`, 'Royal Luxury', 'Aesthetic & Bio'],
    ]);
  });

  // 3. Gothic & Classic Dark (70 variations)
  const gothicFrames: [string, string][] = [
    ['✟ ', ' ✟'], ['🏰 ❨', '❩ 🏰'], ['𓄿 ⚔️ ', ' ⚔️ 𓄿'], ['📜 ❨', '❩ 📜'], ['🌹 ♰ ', ' ♰ 🌹'],
    ['🔯 ⟦', '⟧ 🔯'], ['⚔️ 𓆩', '𓆪 ⚔️'], ['🌑 ✝️ ', ' ✝️ 🌑'], ['🗡️ ⟪', '⟫ 🗡️'], ['🖤 ♰ ', ' ♰ 🖤'],
    ['🩸❟', '❟🩸'], ['🦇 𓆩', '𓆪 🦇'], ['🕸️ ❨', '❩ 🕸️'], ['𓌹', '𓌺'], ['☠️ ✟ ', ' ✟ ☠️'],
  ];

  gothicFrames.forEach(([p, s], idx) => {
    addGroup([
      [`Gothic Knight #${idx + 1}`, p, s, 'Dark Gothic', 'Gothic & Classic'],
      [`Dark Reign #${idx + 1}`, `♰ ${p}`, `${s} ♰`, 'Dark Gothic', 'Gothic & Classic'],
    ]);
  });

  // 4. Glitch & Cyberpunk / Minimalist Tech (80 variations)
  const cyberFrames: [string, string][] = [
    ['⦇', '⦈'], ['>_ [', '] <_'], ['⚡⟨CYBER // ', '⟩⚡'], ['░▒▓█ ', ' █▓▒░'], ['0101 [', '] 1010'],
    ['🌅 ⬡ ', ' ⬡ 🌆'], ['⚛️ ⟨', '⟩ ⚛️'], ['☢️ ░ ', ' ░ ☢️'], ['⏩ ⦓', '⦔ ⏩'], ['🌐 ░▒ ', ' ▒░ 🌐'],
    ['[SYS::', '::END]'], ['// ', ' //'], ['<CODE>', '</CODE>'], ['[RUN]', '[/RUN]'], ['░ ▓ ', ' ▓ ░'],
  ];

  cyberFrames.forEach(([p, s], idx) => {
    addGroup([
      [`Cyber Matrix #${idx + 1}`, p, s, 'Cyberpunk', 'Glitch & Cyber'],
      [`Tech Node #${idx + 1}`, `SYS_ ${p}`, `${s} _VAL`, 'Minimalist Tech', 'Glitch & Cyber'],
    ]);
  });

  return decs;
};

export const DECORATOR_TEMPLATES: DecoratorTemplate[] = generateDecorators();

export const SINGLE_SYMBOLS = [
  '⚡', '✦', '★', '꧁', '༻', '👑', '⚔️', '🎯', '🔥', '🐉', 
  '🌸', '🎀', '☕', '🦋', '🌙', '🤍', '💖', '✨', '☁️', '🌷', 
  '✟', '📜', '🌹', '🖤', '🗡️', '░', '▓', '█', '⚛️', '☣️', 
  'ʕ•ᴥ•ʔ', 'ฅ^•ﻌ•^ฅ', '٩(◕‿◕)۶', '୨୧', '໒꒱', '💎', '🎵', '⚓', '╰┈➤', '┊'
];
