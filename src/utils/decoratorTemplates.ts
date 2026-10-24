// AttaFont Decorator Templates v3.0 (Master Handcrafted Library)
// Contains 120+ authentic, beautifully named gamer, bio, gothic, cyber, and kawaii frames.

export type VibeType = 'All' | 'Cyberpunk' | 'Retro Wedding' | 'Minimalist Tech' | 'Royal Luxury' | 'Anime Kawaii' | 'Dark Gothic' | 'Gamer FF/MLBB';

export interface DecoratorTemplate {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: 'Gamer & Nickname' | 'Aesthetic & Bio' | 'Gothic & Classic' | 'Glitch & Cyber' | 'Symbols & Emoji';
  vibe: VibeType;
}

export const DECORATOR_TEMPLATES: DecoratorTemplate[] = [
  // ============================================================
  // 1. GAMER & ESPORTS NICKNAMES (Free Fire, MLBB, PUBG, Roblox)
  // ============================================================
  { id: 'g_crown', name: 'Imperial Crown', prefix: '꧁༺', suffix: '༻꧂', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_overlord', name: 'Free Fire Overlord', prefix: '亗 ', suffix: ' 亗', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_joker', name: 'Joker Smile', prefix: '×͜× ', suffix: ' ×͜×', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_samurai', name: 'Samurai Executioner', prefix: '〆 ', suffix: ' 〆', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_clan', name: 'Emperor Dynasty', prefix: '乡 ', suffix: ' 乡', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_mythic', name: 'MLBB Mythic Star', prefix: '★᭄ꦿ ', suffix: ' ꦿ★', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_boss', name: 'Godmode Boss', prefix: 'ᴮᴼˢˢ ', suffix: ' ᴮᴼˢˢ', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_wings', name: 'Valkyrie Wings', prefix: '꧁𓊈', suffix: '𓊉꧂', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_thunder', name: 'Thunderstrike', prefix: '⚡[', suffix: ']⚡', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_sniper', name: 'Sniper Crosshair', prefix: '🎯〖', suffix: '〗🎯', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_katana', name: 'Katana Slash', prefix: '⚔️『', suffix: '』⚔️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_reaper', name: 'Shadow Reaper', prefix: '☠️☬', suffix: '☬☠️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_phoenix', name: 'Phoenix Rebirth', prefix: '🔥⟨', suffix: '⟩🔥', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_dragon', name: 'Dragon Fury', prefix: '🐉🐲[', suffix: ']🐲🐉', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_ninja', name: 'AWP Sniper Elite', prefix: '︻╦╤─ ', suffix: ' ─╤╦︻', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_royal', name: 'Royal Sovereign', prefix: '👑♛[', suffix: ']♛👑', category: 'Gamer & Nickname', vibe: 'Royal Luxury' },
  { id: 'g_infinity', name: 'Infinity Gamer', prefix: '♾️⚡', suffix: '⚡♾️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_horns', name: 'Demon Horns', prefix: '╰⋛⋋⊱', suffix: '⊰⋌⋚╯', category: 'Gamer & Nickname', vibe: 'Dark Gothic' },
  { id: 'g_spectre', name: 'Neon Spectre', prefix: '꧁𓤧', suffix: '𓤧꧂', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_torii', name: 'Cyber Samurai Gate', prefix: '⛩️〘', suffix: '〙⛩️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_toxic', name: 'Bio Hazard', prefix: '☣️【', suffix: '】☣️', category: 'Gamer & Nickname', vibe: 'Cyberpunk' },
  { id: 'g_shield', name: 'Guardian Shield', prefix: '🛡️『', suffix: '』🛡️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_ghost', name: 'Phantom Ghost', prefix: '👻⪻', suffix: '⪼👻', category: 'Gamer & Nickname', vibe: 'Dark Gothic' },
  { id: 'g_viper', name: 'Viper Strike', prefix: '🐍≪', suffix: '≫🐍', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_eagle', name: 'Golden Eagle', prefix: '🦅[', suffix: ']🦅', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_trident', name: 'Poseidon Trident', prefix: '🔱꧁', suffix: '꧂🔱', category: 'Gamer & Nickname', vibe: 'Royal Luxury' },
  { id: 'g_wolf', name: 'Alpha Wolfpack', prefix: '🐺⟨', suffix: '⟩🐺', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_lion', name: 'Lionheart Pride', prefix: '🦁👑 ', suffix: ' 👑🦁', category: 'Gamer & Nickname', vibe: 'Royal Luxury' },
  { id: 'g_arcade', name: 'Pixel Arcade', prefix: '🎮👾[', suffix: ']👾🎮', category: 'Gamer & Nickname', vibe: 'Cyberpunk' },
  { id: 'g_starwar', name: 'Star Warrior', prefix: '★彡[', suffix: ']彡★', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_darkaura', name: 'Dark Aura King', prefix: '꧁༒☬', suffix: '☬༒꧂', category: 'Gamer & Nickname', vibe: 'Dark Gothic' },
  { id: 'g_legend', name: 'Legendary Hero', prefix: '༺Leͥgeͣnͫd༻ ', suffix: '', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_proff', name: 'Pro Free Fire Badge', prefix: '亗・', suffix: '・亗', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_claw', name: 'Predator Claw', prefix: '爪⪻', suffix: '⪼爪', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },
  { id: 'g_assassin', name: 'Silent Assassin', prefix: '🗡️⚔️ ', suffix: ' ⚔️🗡️', category: 'Gamer & Nickname', vibe: 'Gamer FF/MLBB' },

  // ============================================================
  // 2. AESTHETIC & BIO (Instagram, TikTok, Pinterest)
  // ============================================================
  { id: 'a_cherry', name: 'Sakura Blossom', prefix: '🌸 ┊ ', suffix: ' ┊ 🌸', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_starlight', name: 'Starlight Sparkle', prefix: '⋆｡°✩ ', suffix: ' ✩°｡⋆', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_kawaii_ribbon', name: 'Sweet Kawaii Ribbon', prefix: '｡ﾟ•┈୨♡୧┈•ﾟ｡ ', suffix: ' ｡ﾟ•┈୨♡୧┈•ﾟ｡', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_butterfly', name: 'Angel Butterfly', prefix: '🦋 ✧ ', suffix: ' ✧ 🦋', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_cozy', name: 'Cottage Cozy Cafe', prefix: '☕ ⌇ ', suffix: ' ⌇ ☕', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_moon', name: 'Moonlight Serenade', prefix: '🌙 ˚. ', suffix: ' .˚ 🌙', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_heart_soft', name: 'White Heart Ribbon', prefix: '🤍 ── ', suffix: ' ── 🤍', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_quote', name: 'Aesthetic Whisper', prefix: '˗ˏˋ ', suffix: ' ˎˊ˗', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_tulip', name: 'Tulip Harmony', prefix: '𓍢ִ໋🌷͙֒ ', suffix: '', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_cupid', name: 'Cupid Arrow', prefix: 'જ⁀➴ ', suffix: '', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_fairy_wings', name: 'Fairy Ribbon', prefix: '౨ৎ ', suffix: ' ౨ৎ', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_letter', name: 'Vintage Mailbox', prefix: '✉️ ﹅ ', suffix: ' ﹆ ✉️', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_cloud', name: 'Midnight Cloud', prefix: '☁︎ ☾ ', suffix: ' ☽ ☁︎', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_flower', name: 'Floral Cute', prefix: '✿ ', suffix: ' ✿', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_bracket', name: 'Minimalist Bracket', prefix: '┊', suffix: '┊', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_candy', name: 'Sweet Candy Pop', prefix: '🍭 ⋆ ', suffix: ' ⋆ 🍭', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_diamond', name: 'Diamond Crest', prefix: '💎 ✧ ', suffix: ' ✧ 💎', category: 'Aesthetic & Bio', vibe: 'Royal Luxury' },
  { id: 'a_lofi', name: 'Lo-Fi Headphone', prefix: '🎧 𓂃 ', suffix: ' 𓂃 🎶', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_golden', name: 'Golden Hour Sun', prefix: '✨ ─── ', suffix: ' ─── ✨', category: 'Aesthetic & Bio', vibe: 'Royal Luxury' },
  { id: 'a_peach', name: 'Peach Garden', prefix: '🍑 𓂂 ', suffix: ' 𓂂 🍑', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_bow', name: 'Sparkly Ribbon', prefix: '୨୧ ', suffix: ' ୨୧', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_crystal', name: 'Crystal Magic Ball', prefix: '🔮 ◌ ', suffix: ' ◌ 🔮', category: 'Aesthetic & Bio', vibe: 'Royal Luxury' },
  { id: 'a_lover_embrace', name: 'Lover Embrace', prefix: '₊˚⊹♡ ', suffix: ' ♡⊹˚₊', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_soft_tag', name: 'Soft Angelic Tag', prefix: '╰┈➤ ❝ ', suffix: ' ❞', category: 'Aesthetic & Bio', vibe: 'Retro Wedding' },
  { id: 'a_velvet_star', name: 'Velvet Twilight', prefix: '⋆˙⟡ ', suffix: ' ⟡˙⋆', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_angelic_crown', name: 'Angelic Tiara', prefix: '👑 ✧ ', suffix: ' ✧ 👑', category: 'Aesthetic & Bio', vibe: 'Royal Luxury' },
  { id: 'a_cloud_soft', name: 'Pastel Cloud', prefix: '☁️ ┈ ', suffix: ' ┈ ☁️', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },
  { id: 'a_sparkles', name: 'Star Constellation', prefix: '✦ ', suffix: ' ✦', category: 'Aesthetic & Bio', vibe: 'Minimalist Tech' },
  { id: 'a_music_melody', name: 'Melody Wave', prefix: '🎵 🎶 ', suffix: ' 🎶 🎵', category: 'Aesthetic & Bio', vibe: 'Anime Kawaii' },

  // ============================================================
  // 3. GOTHIC & DARK FANTASY (Medieval, Occult, Knights)
  // ============================================================
  { id: 'got_vampire', name: 'Vampire Cross', prefix: '✟ ', suffix: ' ✟', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_raven', name: 'Dark Raven Blood', prefix: '𓄿 ⚔️ ', suffix: ' ⚔️ 𓄿', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_grimoire', name: 'Ancient Grimoire', prefix: '📜 ❨', suffix: '❩ 📜', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_rose', name: 'Velvet Gothic Rose', prefix: '🌹 ♰ ', suffix: ' ♰ 🌹', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_templar', name: 'Sacred Templar', prefix: '🔯 ⟦', suffix: '⟧ 🔯', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_thorns', name: 'Thorns Crown', prefix: '⚔️ 𓆩', suffix: '𓆪 ⚔️', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_eclipse', name: 'Midnight Eclipse', prefix: '🌑 ✝️ ', suffix: ' ✝️ 🌑', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_claymore', name: 'Silver Claymore', prefix: '🗡️ ⟪', suffix: '⟫ 🗡️', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_coffin', name: 'Obsidian Coffin', prefix: '🖤 ♰ ', suffix: ' ♰ 🖤', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_crimson', name: 'Crimson Drop', prefix: '🩸❟', suffix: '❟🩸', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_bat', name: 'Bat Wings Night', prefix: '🦇 𓆩', suffix: '𓆪 🦇', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_cobweb', name: 'Cobweb Castle', prefix: '🕸️ ❨', suffix: '❩ 🕸️', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_scythe', name: 'Scythe Reaper', prefix: '𓌹', suffix: '𓌺', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_crypt', name: 'Skull Crypt', prefix: '☠️ ✟ ', suffix: ' ✟ ☠️', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_medieval', name: 'Medieval Fortress', prefix: '🏰 𝔖𝔞𝔠𝔯𝔢𝔡: ', suffix: ' 🏰', category: 'Gothic & Classic', vibe: 'Dark Gothic' },
  { id: 'got_royal_shield', name: 'Dark Paladin Shield', prefix: '⚔️⚜️ ', suffix: ' ⚜️⚔️', category: 'Gothic & Classic', vibe: 'Royal Luxury' },

  // ============================================================
  // 4. GLITCH & CYBERPUNK (Hacker, Terminal, Matrix, Sci-Fi)
  // ============================================================
  { id: 'c_terminal', name: 'Terminal Shell', prefix: '>_ [', suffix: '] <_', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_binary', name: 'Matrix Binary', prefix: '0101 [', suffix: '] 1010', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_cyber2077', name: 'Cyberpunk 2077', prefix: '⚡⟨CYBER // ', suffix: '⟩⚡', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_neonblocks', name: 'Neon Glitch Blocks', prefix: '░▒▓█ ', suffix: ' █▓▒░', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_quantum', name: 'Quantum Core', prefix: '⚛️ ⟨', suffix: '⟩ ⚛️', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_rad', name: 'Radioactive Waste', prefix: '☢️ ░ ', suffix: ' ░ ☢️', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_warp', name: 'Hyperdrive Warp', prefix: '⏩ ⦓', suffix: '⦔ ⏩', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_vaporgrid', name: 'Vapor Neon Grid', prefix: '🌐 ░▒ ', suffix: ' ▒░ 🌐', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_sysexec', name: 'Hacker System Exec', prefix: '[SYS::', '::END]', category: 'Glitch & Cyber', vibe: 'Minimalist Tech' },
  { id: 'c_sourcecode', name: 'Source Code Tag', prefix: '<CODE> ', suffix: ' </CODE>', category: 'Glitch & Cyber', vibe: 'Minimalist Tech' },
  { id: 'c_run', name: 'Cyber Run Shell', prefix: '[RUN] ', suffix: ' [/RUN]', category: 'Glitch & Cyber', vibe: 'Minimalist Tech' },
  { id: 'c_node', name: 'Sub-Atomic Node', prefix: '⦇', suffix: '⦈', category: 'Glitch & Cyber', vibe: 'Minimalist Tech' },
  { id: 'c_synthwave', name: 'Synthwave Sunset', prefix: '🌅 ⬡ ', suffix: ' ⬡ 🌆', category: 'Glitch & Cyber', vibe: 'Cyberpunk' },
  { id: 'c_network', name: 'Neural Network', prefix: '// ', suffix: ' //', category: 'Glitch & Cyber', vibe: 'Minimalist Tech' },

  // ============================================================
  // 5. KAOMOJI & EMOTICONS (Cute, Anime, Playful)
  // ============================================================
  { id: 'k_bear', name: 'Happy Bear', prefix: 'ʕ•ᴥ•ʔ ', suffix: ' ʕ•ᴥ•ʔ', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_cat', name: 'Joyful Kitty', prefix: 'ฅ^•ﻌ•^ฅ ', suffix: ' ฅ^•ﻌ•^ฅ', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_bunny', name: 'Blushing Bunny', prefix: '(˶˃ ᵕ ˂˶) ', suffix: ' (˶˃ ᵕ ˂˶)', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_cheer', name: 'Victory Cheer', prefix: '٩(◕‿◕)۶ ', suffix: ' ٩(◕‿◕)۶', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_hug', name: 'Warm Hug', prefix: '(⊃｡•́‿•̀｡)⊃ ', suffix: ' ⊂(｡•́‿•̀｡⊂)', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_smile', name: 'Shy Smile', prefix: '( ˶ˆᗜˆ˵ ) ', suffix: ' ♡', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_wink', name: 'Tender Wink', prefix: '(⁠~⁠￣⁠³⁠￣⁠)⁠~ ', suffix: ' ~⁠(⁠￣⁠³⁠￣⁠~⁠)', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_angel_wings', name: 'Sparkle Wings', prefix: '໒꒱ ', suffix: ' ໒꒱', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_boxer', name: 'Fighter Boxer', prefix: '(ง\'̀-\'́)ง ', suffix: ' (ง\'̀-\'́)ง', category: 'Symbols & Emoji', vibe: 'Gamer FF/MLBB' },
  { id: 'k_nap', name: 'Cozy Nap', prefix: '( ᴗ ̫ ᴗ ) ', suffix: ' 💤', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_curious', name: 'Curious Peek', prefix: '⸜(｡˃ ᵕ ˂ )⸝ ', suffix: ' ⸜(｡˃ ᵕ ˂ )⸝', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_excited', name: 'Super Excited', prefix: '＼(≧▽≦)／ ', suffix: ' ＼(≧▽≦)／', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
  { id: 'k_sparkle_eyes', name: 'Sparkle Eyes', prefix: '(☆ω☆) ', suffix: ' (☆ω☆)', category: 'Symbols & Emoji', vibe: 'Anime Kawaii' },
];

// Single quick-insert symbols and kaomoji for the studio toolbar
export const QUICK_INSERT_SYMBOLS = [
  '亗', '★', '꧁༺', '༻꧂', '〆', '乡', '☬', 'ツ', '×͜×', '★᭄ꦿ',
  'ᴮᴼˢˢ', '⚡', '⚔️', '🎯', '🔥', '👑', '🌸', '🦋', '🤍', '💖',
  '୨୧', '౨ৎ', '🌷', '✦', '🌙', '☁️', '✟', '🌹', '🖤', '🗡️',
  '░▒▓█', 'ʕ•ᴥ•ʔ', 'ฅ^•ﻌ•^ฅ', '(˶˃ ᵕ ˂˶)', '( ˶ˆᗜˆ˵ )', 'જ⁀➴', '₊˚⊹♡', '💎', '🎵', '┊'
];

export const SINGLE_SYMBOLS = QUICK_INSERT_SYMBOLS;
