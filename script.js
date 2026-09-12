/**
 * Sanjana & Gagan - Interactive Love Postcard Deck & Romantic Confession
 * Pure Vanilla JavaScript: Custom vector illustrations, card deck navigation, Web Audio synthesizer
 */

(function () {
  'use strict';

  // ==========================================================================
  // Question Deck Data & Custom Romantic Vector Illustrations
  // ==========================================================================
  const QUESTIONS = [
    {
      num: 1,
      tag: 'Question 1',
      title: 'What do you like the most about me?',
      note: 'Be specific. And please don’t say “everything.” 😌',
      placeholder: 'Tell me specifically, Gagan... ✍️',
      stamp: '💐',
      // Illustration: Cute Blushing Bear Holding Blooming Flowers
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="50" r="32" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <circle cx="58" cy="30" r="12" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <circle cx="58" cy="30" r="7" fill="#FFCCD5"/>
          <circle cx="102" cy="30" r="12" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <circle cx="102" cy="30" r="7" fill="#FFCCD5"/>
          <circle cx="70" cy="46" r="4" fill="#3D2B2E"/>
          <circle cx="90" cy="46" r="4" fill="#3D2B2E"/>
          <ellipse cx="80" cy="52" r="3" fill="#FF8BA7"/>
          <path d="M 76 56 Q 80 60 84 56" fill="none" stroke="#3D2B2E" stroke-width="1.8" stroke-linecap="round"/>
          <ellipse cx="64" cy="54" rx="6" ry="3.5" fill="#FF85A1" opacity="0.6"/>
          <ellipse cx="96" cy="54" rx="6" ry="3.5" fill="#FF85A1" opacity="0.6"/>
          <!-- Bouquet of cute roses -->
          <g transform="translate(62, 60)">
            <ellipse cx="18" cy="24" rx="20" ry="12" fill="#FFCCD5" stroke="#FF85A1" stroke-width="1.5"/>
            <circle cx="10" cy="18" r="8" fill="#FF1E56"/>
            <circle cx="18" cy="12" r="8" fill="#FF4D6D"/>
            <circle cx="26" cy="18" r="8" fill="#FF1E56"/>
            <path d="M 8 26 L 18 42 L 28 26" fill="#A7C957"/>
          </g>
        </svg>`
    },
    {
      num: 2,
      tag: 'Question 2',
      title: 'What is one thing about me that you don’t like?',
      note: 'You can be honest. I promise I won’t fight. 😂',
      placeholder: 'Be completely honest, I promise not to fight 😂...',
      stamp: '🥊',
      // Illustration: Cute Pouty Kitten with Tiny Pink Boxing Gloves
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Kitten Head -->
          <circle cx="80" cy="52" r="30" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <!-- Cat Ears -->
          <polygon points="56,40 52,18 72,30" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <polygon points="58,36 56,24 68,30" fill="#FFCCD5"/>
          <polygon points="104,40 108,18 88,30" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <polygon points="102,36 104,24 92,30" fill="#FFCCD5"/>
          <!-- Squinting smiling teasing eyes > < -->
          <path d="M 66 48 L 74 52 L 66 56" fill="none" stroke="#3D2B2E" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 94 48 L 86 52 L 94 56" fill="none" stroke="#3D2B2E" stroke-width="2.5" stroke-linecap="round"/>
          <ellipse cx="80" cy="56" rx="2.5" ry="2" fill="#FF8BA7"/>
          <path d="M 76 60 Q 80 57 84 60" fill="none" stroke="#3D2B2E" stroke-width="2" stroke-linecap="round"/>
          <!-- Little Pink Boxing Gloves -->
          <circle cx="48" cy="65" r="13" fill="#FF4D6D" stroke="#D90429" stroke-width="1.5"/>
          <circle cx="44" cy="62" r="4.5" fill="#FF758F"/>
          <circle cx="112" cy="65" r="13" fill="#FF4D6D" stroke="#D90429" stroke-width="1.5"/>
          <circle cx="116" cy="62" r="4.5" fill="#FF758F"/>
        </svg>`
    },
    {
      num: 3,
      tag: 'Question 3',
      title: 'When do you think I look the best?',
      note: 'And don’t just say “always.” 😏',
      placeholder: 'Which moment, outfit, or look? 😏...',
      stamp: '🪞',
      // Illustration: Antique Golden Sparkle Mirror with Diamond Heart
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Mirror Handle -->
          <path d="M 80 75 L 80 102" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/>
          <circle cx="80" cy="102" r="5" fill="#FB8500"/>
          <!-- Mirror Oval Frame -->
          <ellipse cx="80" cy="45" rx="36" ry="40" fill="#FFF9FA" stroke="#FFB703" stroke-width="5"/>
          <!-- Mirror Glass reflection -->
          <ellipse cx="80" cy="45" rx="28" ry="32" fill="#FFE8EE"/>
          <path d="M 68 28 C 76 34, 72 58, 64 62" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"/>
          <!-- Heart in mirror -->
          <path d="M 80 44 C 77 36, 68 36, 66 44 C 64 52, 75 60, 80 64 C 85 60, 96 52, 94 44 C 92 36, 83 36, 80 44 Z" fill="#FF1E56"/>
          <!-- Sparkles -->
          <text x="114" y="32" font-size="16">✨</text>
          <text x="36" y="55" font-size="14">✨</text>
        </svg>`
    },
    {
      num: 4,
      tag: 'Question 4',
      title: 'What was the first thing you noticed about me?',
      note: 'I’m actually curious about this one. ✨',
      placeholder: 'The very first detail you noticed... 👀',
      stamp: '👀',
      // Illustration: Cute Character Peeking with Big Curious Sparkling Anime Eyes
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Wall / Fence -->
          <rect x="25" y="65" width="110" height="38" rx="8" fill="#FFF0F3" stroke="#FFB4C2" stroke-width="2"/>
          <text x="80" y="88" font-size="12" text-anchor="middle" fill="#FF85A1">💕 ✨ 💕</text>
          <!-- Head peeking -->
          <circle cx="80" cy="55" r="28" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <!-- Big Glossy Anime Eyes -->
          <ellipse cx="70" cy="52" rx="7" ry="9" fill="#3D2B2E"/>
          <circle cx="68" cy="48" r="3.5" fill="#FFFFFF"/>
          <circle cx="73" cy="55" r="1.5" fill="#FFFFFF"/>
          <ellipse cx="90" cy="52" rx="7" ry="9" fill="#3D2B2E"/>
          <circle cx="88" cy="48" r="3.5" fill="#FFFFFF"/>
          <circle cx="93" cy="55" r="1.5" fill="#FFFFFF"/>
          <!-- Little paws holding the fence -->
          <circle cx="56" cy="66" r="7" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="1.8"/>
          <circle cx="104" cy="66" r="7" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="1.8"/>
          <!-- Blushing -->
          <ellipse cx="62" cy="58" rx="5" ry="3" fill="#FF85A1" opacity="0.7"/>
          <ellipse cx="98" cy="58" rx="5" ry="3" fill="#FF85A1" opacity="0.7"/>
        </svg>`
    },
    {
      num: 5,
      tag: 'Question 5',
      title: 'What is one thing I do that you find cute?',
      note: 'I want to know what you notice about me. ❤️',
      placeholder: 'What little thing or habit melted you? 🥰...',
      stamp: '🥰',
      // Illustration: Cute Bunny Blushing and Squishing Cheeks
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Bunny Tall Ears -->
          <ellipse cx="68" cy="26" rx="9" ry="24" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <ellipse cx="68" cy="26" rx="5" ry="16" fill="#FFCCD5"/>
          <ellipse cx="92" cy="26" rx="9" ry="24" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <ellipse cx="92" cy="26" rx="5" ry="16" fill="#FFCCD5"/>
          <!-- Head -->
          <circle cx="80" cy="64" r="28" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="2"/>
          <!-- Happy closed curved eyes ( ^ ^ ) -->
          <path d="M 68 62 Q 73 54 78 62" stroke="#FF1E56" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 82 62 Q 87 54 92 62" stroke="#FF1E56" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <!-- Chubby flushed cheeks squished by paws -->
          <ellipse cx="62" cy="68" rx="8" ry="6" fill="#FF6B8B" opacity="0.75"/>
          <ellipse cx="98" cy="68" rx="8" ry="6" fill="#FF6B8B" opacity="0.75"/>
          <circle cx="58" cy="70" r="6" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="1.8"/>
          <circle cx="102" cy="70" r="6" fill="#FFFDF9" stroke="#E3D1C3" stroke-width="1.8"/>
          <text x="80" y="80" font-size="10" text-anchor="middle" fill="#FF1E56">❤️</text>
        </svg>`
    },
    {
      num: 6,
      tag: 'Question 6',
      title: 'If you had to choose one colour for me, what would it be?',
      note: 'And why? 🎨',
      placeholder: 'Which colour fits me best and why? 🎨...',
      stamp: '🎨',
      // Illustration: Wooden Artist Palette with Pastel Splotches & Paintbrush
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Palette Body -->
          <path d="M 40 50 C 40 25, 120 25, 125 50 C 130 75, 105 95, 75 90 C 60 88, 55 98, 45 92 C 35 85, 40 65, 40 50 Z"
                fill="#FFF4E6" stroke="#DDB892" stroke-width="3"/>
          <circle cx="52" cy="80" r="6" fill="#FFF9F7" stroke="#DDB892" stroke-width="2"/>
          <!-- Colour drops -->
          <circle cx="60" cy="40" r="7" fill="#FF4D6D"/>
          <circle cx="80" cy="35" r="7" fill="#FFB703"/>
          <circle cx="100" cy="42" r="7" fill="#90E0EF"/>
          <circle cx="112" cy="60" r="7" fill="#E0AAFF"/>
          <circle cx="95" cy="74" r="7" fill="#FFCCD5"/>
          <!-- Paintbrush angled -->
          <g transform="rotate(35 80 50)">
            <rect x="76" y="-10" width="8" height="65" rx="3" fill="#B08968"/>
            <rect x="75" y="55" width="10" height="12" fill="#E5E5E5"/>
            <path d="M 75 67 C 75 78, 85 78, 85 67 Z" fill="#FF1E56"/>
          </g>
        </svg>`
    },
    {
      num: 7,
      tag: 'Question 7',
      title: 'If you had to choose one song for me, which one would you choose?',
      note: 'I want to know which song reminds you of me. 🎶',
      placeholder: 'Song title & artist that feels like us 🎶...',
      stamp: '🎧',
      // Illustration: Retro Pastel Cassette Mixtape with Dancing Notes
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Tape Outer Body -->
          <rect x="35" y="25" width="90" height="58" rx="8" fill="#FFF0F5" stroke="#FF85A1" stroke-width="2.5"/>
          <!-- Tape Inner Label -->
          <rect x="45" y="32" width="70" height="32" rx="4" fill="#FFFFFF" stroke="#FFCCD5" stroke-width="1.5"/>
          <text x="80" y="44" font-size="8" font-weight="bold" text-anchor="middle" fill="#FF1E56">SANJANA & GAGAN</text>
          <!-- Spool holes with heart cutouts -->
          <circle cx="60" cy="52" r="8" fill="#FFE5EC" stroke="#FF85A1" stroke-width="1.5"/>
          <text x="60" y="55" font-size="7" text-anchor="middle" fill="#FF1E56">❤️</text>
          <circle cx="100" cy="52" r="8" fill="#FFE5EC" stroke="#FF85A1" stroke-width="1.5"/>
          <text x="100" y="55" font-size="7" text-anchor="middle" fill="#FF1E56">❤️</text>
          <!-- Bottom trapezoid window -->
          <polygon points="50,75 110,75 102,83 58,83" fill="#FFCCD5"/>
          <!-- Floating Music Notes -->
          <text x="24" y="36" font-size="14">🎵</text>
          <text x="124" y="30" font-size="14">🎶</text>
          <text x="130" y="60" font-size="12">💕</text>
        </svg>`
    },
    {
      num: 8,
      tag: 'Question 8',
      title: 'What is one thing about me that you think you understand better than most people do?',
      note: 'Be honest. ❤️',
      placeholder: 'Something deep that only you understand... ❤️',
      stamp: '☕',
      // Illustration: Two Smiling Teacups Connected by a Warm Heart String
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Cup 1 (Sanjana) -->
          <g transform="translate(38, 48)">
            <rect x="0" y="0" width="34" height="28" rx="8" fill="#FFF0F5" stroke="#FF85A1" stroke-width="2"/>
            <path d="M 0 6 C -8 6, -8 20, 0 20" fill="none" stroke="#FF85A1" stroke-width="2"/>
            <circle cx="12" cy="12" r="2" fill="#3D2B2E"/>
            <circle cx="22" cy="12" r="2" fill="#3D2B2E"/>
            <path d="M 14 16 Q 17 19 20 16" fill="none" stroke="#3D2B2E" stroke-width="1.5"/>
            <text x="17" y="36" font-size="10" text-anchor="middle" fill="#FF4D6D">S</text>
          </g>
          <!-- Cup 2 (Gagan) -->
          <g transform="translate(88, 48)">
            <rect x="0" y="0" width="34" height="28" rx="8" fill="#F0F8FF" stroke="#90E0EF" stroke-width="2"/>
            <path d="M 34 6 C 42 6, 42 20, 34 20" fill="none" stroke="#90E0EF" stroke-width="2"/>
            <circle cx="12" cy="12" r="2" fill="#3D2B2E"/>
            <circle cx="22" cy="12" r="2" fill="#3D2B2E"/>
            <path d="M 14 16 Q 17 19 20 16" fill="none" stroke="#3D2B2E" stroke-width="1.5"/>
            <text x="17" y="36" font-size="10" text-anchor="middle" fill="#0077B6">G</text>
          </g>
          <!-- Heart string connecting them -->
          <path d="M 64 48 C 72 32, 88 32, 96 48" fill="none" stroke="#FF1E56" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="80" y="30" font-size="16" text-anchor="middle">💖</text>
        </svg>`
    },
    {
      num: 9,
      tag: 'Question 9',
      title: 'What’s your favourite memory of us?',
      note: 'Just one. Let’s see which one you choose. 😌',
      placeholder: 'Our sweetest or funniest memory so far... 📸',
      stamp: '📸',
      // Illustration: Vintage Polaroid Frame with glowing heart photo
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Polaroid Border -->
          <g transform="rotate(-5 80 50)">
            <rect x="52" y="16" width="56" height="72" rx="4" fill="#FFFFFF" stroke="#EAD9CD" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.08))"/>
            <!-- Photo inside -->
            <rect x="58" y="22" width="44" height="44" rx="2" fill="#FFE5EC"/>
            <!-- Two cute silhouette heads -->
            <circle cx="74" cy="42" r="8" fill="#FF85A1"/>
            <circle cx="86" cy="40" r="9" fill="#3D2B2E"/>
            <text x="80" y="32" font-size="12" text-anchor="middle">❤️</text>
            <!-- Handwritten label at bottom -->
            <path d="M 64 74 L 96 74" stroke="#DDB892" stroke-width="2" stroke-linecap="round"/>
          </g>
          <!-- Little wooden photo pin / clip -->
          <rect x="74" y="10" width="12" height="12" rx="2" fill="#D4A373"/>
          <text x="116" y="40" font-size="14">✨</text>
        </svg>`
    },
    {
      num: 10,
      tag: 'Question 10',
      title: 'What is one thing you would like us to do together someday?',
      note: 'Anything you want. ✈️💫',
      placeholder: 'A dream adventure, trip, or moment together... ✈️',
      stamp: '✈️',
      // Illustration: Cute Paper Airplane Flying Over Pastel Crescent Moon & Stars
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Crescent Moon -->
          <path d="M 115 20 C 105 20, 96 28, 96 42 C 96 56, 107 65, 120 65 C 124 65, 128 64, 131 62 C 122 62, 114 54, 114 42 C 114 30, 121 23, 130 20 C 125 20, 120 20, 115 20 Z" fill="#FFE45E"/>
          <!-- Dreamy Cloud -->
          <path d="M 40 75 C 32 75, 26 68, 30 60 C 32 50, 48 48, 52 54 C 56 46, 70 46, 75 52 C 82 48, 92 54, 90 64 C 95 68, 92 75, 84 75 Z" fill="#FFF0F5" opacity="0.9"/>
          <!-- Dotted flight loop -->
          <path d="M 35 60 Q 60 30 75 50 T 115 35" fill="none" stroke="#FF85A1" stroke-width="1.8" stroke-dasharray="3,3"/>
          <!-- Paper Airplane -->
          <g transform="translate(110, 26) rotate(-25)">
            <polygon points="0,0 28,10 0,20 6,10" fill="#FFFFFF" stroke="#FF1E56" stroke-width="1.5"/>
            <polygon points="6,10 28,10 0,0" fill="#FFE5EC"/>
          </g>
          <text x="50" y="32" font-size="12">⭐</text>
        </svg>`
    },
    {
      num: 11,
      tag: 'Question 11',
      title: 'Okay, now something different…',
      note: 'If you had to write one small shayari for me, what would you write? ✍️🌹\n(It doesn’t have to be perfect. Just write whatever comes to your mind when you think about me. ❤️)',
      placeholder: 'Dil se likho Gagan, shayari perfect hona zaroori nahi hai... ❤️',
      stamp: '🌹',
      // Illustration: Antique Ink Quill, Rolled Love Scroll & Fresh Red Rose
      artSvg: `
        <svg viewBox="0 0 160 110" class="question-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Rolled Parchment Scroll -->
          <rect x="42" y="42" width="65" height="45" rx="4" fill="#FFFBF0" stroke="#EAD9CD" stroke-width="2"/>
          <path d="M 52 55 L 95 55" stroke="#FFB4C2" stroke-width="2" stroke-linecap="round"/>
          <path d="M 52 64 L 88 64" stroke="#FFB4C2" stroke-width="2" stroke-linecap="round"/>
          <path d="M 52 73 L 78 73" stroke="#FFB4C2" stroke-width="2" stroke-linecap="round"/>
          <!-- Feather Quill Pen -->
          <g transform="translate(85, 12) rotate(22)">
            <path d="M 8 0 C 2 12, 0 35, 8 50 L 8 62 L 6 62 L 7 50 C 14 38, 16 12, 8 0 Z" fill="#FF85A1"/>
            <path d="M 8 0 L 8 62" stroke="#FFFFFF" stroke-width="1"/>
            <polygon points="6,62 10,62 8,68" fill="#3D2B2E"/>
          </g>
          <!-- Fresh Red Rose beside scroll -->
          <g transform="translate(32, 58)">
            <circle cx="12" cy="12" r="10" fill="#FF1E56"/>
            <path d="M 8 10 C 12 6, 16 14, 12 16" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
            <path d="M 12 22 C 14 26, 18 28, 22 26" stroke="#588157" stroke-width="2.5" fill="none"/>
          </g>
        </svg>`
    }
  ];

  // ==========================================================================
  // Audio & Romantic Background Music Synthesizer (Zero external dependencies)
  // ==========================================================================
  let audioCtx = null;
  let musicMasterGain = null;
  let sfxMasterGain = null;
  let isMusicPlaying = false;
  let isMuted = false;
  let musicSchedulerTimer = null;
  let noteSpawnInterval = null;
  let hasUserInteracted = false;

  const bgAudioEl = document.getElementById('bgMusicAudio');
  const soundToggleBtn = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = document.getElementById('soundLabel');
  const musicToast = document.getElementById('musicToast');

  const volumeSlider = document.getElementById('volumeSlider');
  const volIcon = document.getElementById('volIcon');

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        sfxMasterGain = audioCtx.createGain();
        sfxMasterGain.gain.setValueAtTime(0.35, audioCtx.currentTime);
        sfxMasterGain.connect(audioCtx.destination);
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function applyVolume(vol) {
    if (bgAudioEl) {
      bgAudioEl.volume = Math.max(0, Math.min(1, vol));
    }
    if (volIcon) {
      if (vol <= 0) volIcon.textContent = '🔇';
      else if (vol < 0.5) volIcon.textContent = '🔉';
      else volIcon.textContent = '🔊';
    }
  }

  const chorusJumpBtn = document.getElementById('chorusJumpBtn');

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      applyVolume(val);
      if (val > 0 && !isMusicPlaying) {
        startBackgroundMusic();
      }
    });
  }

  if (chorusJumpBtn) {
    chorusJumpBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudio();
      if (bgAudioEl) {
        bgAudioEl.currentTime = 0; // Replay the iconic chorus from the beginning
        if (bgAudioEl.paused) {
          startBackgroundMusic();
        }
      }
      playSparkleSound();
      if (musicToast) {
        const toastSpan = musicToast.querySelector('span');
        if (toastSpan) toastSpan.textContent = '💖 Now Playing: "Vaaroon" (Chorus) 💕';
        musicToast.classList.add('show');
        setTimeout(() => musicToast.classList.remove('show'), 3200);
      }
    });
  }

  function startBackgroundMusic() {
    initAudio();
    isMusicPlaying = true;
    isMuted = false;

    if (bgAudioEl) {
      // Full volume as requested by user
      const targetVol = volumeSlider ? parseFloat(volumeSlider.value) : 1.0;
      applyVolume(targetVol > 0 ? targetVol : 1.0);
      if (volumeSlider && targetVol <= 0) volumeSlider.value = 1.0;

      const p = bgAudioEl.play();
      if (p !== undefined) {
        p.catch((err) => {
          console.log('Audio autoplay prevented, awaiting user gesture:', err);
        });
      }
    }

    if (soundToggleBtn) soundToggleBtn.classList.add('playing');
    if (soundIcon) soundIcon.textContent = '🎵';
    if (soundLabel) soundLabel.textContent = 'Vaaroon: Playing';

    if (musicToast) {
      musicToast.classList.add('show');
      setTimeout(() => musicToast.classList.remove('show'), 3500);
    }
  }

  function stopBackgroundMusic() {
    isMusicPlaying = false;
    isMuted = true;

    if (bgAudioEl) bgAudioEl.pause();

    if (soundToggleBtn) soundToggleBtn.classList.remove('playing');
    if (soundIcon) soundIcon.textContent = '🔇';
    if (soundLabel) soundLabel.textContent = 'Vaaroon: Paused';
  }

  function toggleMusic() {
    initAudio();
    if (isMusicPlaying && !isMuted) stopBackgroundMusic();
    else startBackgroundMusic();
  }

  function playSparkleSound() {
    if (isMuted || !audioCtx || !sfxMasterGain) return;
    const notes = [880, 1108.73, 1318.51, 1760];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
          osc.connect(gain);
          gain.connect(sfxMasterGain);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.4);
        } catch(e) {}
      }, idx * 75);
    });
  }

  function playCelebrationFanfare() {
    if (isMuted || !audioCtx || !sfxMasterGain) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
          osc.connect(gain);
          gain.connect(sfxMasterGain);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.5);
        } catch(e) {}
      }, idx * 95);
    });
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hasUserInteracted = true;
      toggleMusic();
    });
  }

  const autoplayBanner = document.getElementById('autoplayBanner');
  const bannerClose = document.getElementById('bannerClose');

  if (bannerClose) {
    bannerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      if (autoplayBanner) {
        autoplayBanner.classList.add('dismissed');
      }
    });
  }

  if (autoplayBanner) {
    autoplayBanner.addEventListener('click', () => {
      ensureMusicPlaying();
      autoplayBanner.classList.add('dismissed');
    });
  }

  function ensureMusicPlaying() {
    initAudio();
    if (bgAudioEl) {
      bgAudioEl.volume = 1.0;
      if (volumeSlider) volumeSlider.value = '1';
      if (volIcon) volIcon.textContent = '🔊';

      const p = bgAudioEl.play();
      if (p !== undefined) {
        p.then(() => {
          isMusicPlaying = true;
          isMuted = false;
          if (soundToggleBtn) soundToggleBtn.classList.add('playing');
          if (soundIcon) soundIcon.textContent = '🎵';
          if (soundLabel) soundLabel.textContent = 'Vaaroon: Playing';
          if (autoplayBanner) autoplayBanner.classList.add('dismissed');
        }).catch((err) => {
          // Autoplay policy waiting for initial interaction
          if (autoplayBanner && !autoplayBanner.classList.contains('dismissed')) {
            autoplayBanner.classList.add('show');
          }
        });
      }
    }
  }

  // Attempt unmuted autoplay immediately on script load
  ensureMusicPlaying();

  if (bgAudioEl) {
    bgAudioEl.addEventListener('canplay', () => {
      if (!isMusicPlaying || bgAudioEl.paused) {
        ensureMusicPlaying();
      }
    }, { once: true });
  }

  // Aggressively capture ANY user interaction (pointer movement, touch, click, scroll, keypress)
  const INTERACTION_EVENTS = ['click', 'pointerdown', 'touchstart', 'touchend', 'mousemove', 'pointermove', 'keydown', 'scroll', 'wheel'];
  function onFirstUserInteraction() {
    ensureMusicPlaying();
    if (isMusicPlaying && bgAudioEl && !bgAudioEl.paused) {
      if (autoplayBanner) autoplayBanner.classList.add('dismissed');
      INTERACTION_EVENTS.forEach(evt => {
        window.removeEventListener(evt, onFirstUserInteraction);
      });
    }
  }
  INTERACTION_EVENTS.forEach(evt => {
    window.addEventListener(evt, onFirstUserInteraction, { passive: true });
  });

  // Also retry on document readiness and window load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureMusicPlaying);
  } else {
    ensureMusicPlaying();
  }
  window.addEventListener('load', ensureMusicPlaying);

  // ==========================================================================
  // Interactive Peeker Animal System ("Behind the Wall" Kawaii Creatures)
  // ==========================================================================
  const PEEKERS = [
    {
      id: 'peekerBunny',
      bubbleId: 'bunnyBubble',
      quotes: [
        'Psst... Gagan! 🐰',
        'Choose YES! 🥺💕',
        'Sanjana made this! 🌸',
        'You\'re doing great! ✨',
        'Hehe, peek-a-boo! 🥕'
      ]
    },
    {
      id: 'peekerKitten',
      bubbleId: 'kittenBubble',
      quotes: [
        'Click YES! 🐱❤️',
        'Don\'t click NO! 😾',
        'Meow! Say yes! 🐾',
        'You two are the sweetest! 🥰',
        'Sanjana is watching! 👀'
      ]
    },
    {
      id: 'peekerBear',
      bubbleId: 'bearBubble',
      quotes: [
        'Sanjana likes you! 🐻💕',
        'Best boy Gagan! 🐻',
        'Big warm bear hug! 🤗',
        'Vaaroon is playing! 🎶',
        'Keep smiling! 😊'
      ]
    },
    {
      id: 'peekerPanda',
      bubbleId: 'pandaBubble',
      quotes: [
        'Peek-a-boo! 🐼✨',
        'Look up here! 👀',
        'Cutest couple ever! 🐼',
        'Sanjana really likes you! 🥰',
        'Answer honestly! 💌'
      ]
    },
    {
      id: 'peekerFox',
      bubbleId: 'foxBubble',
      quotes: [
        'You two are cute! 🦊💖',
        'Clever fox approved! 🦊',
        'Forever & always! 💌',
        'Gagan + Sanjana 💕',
        'A match made in heaven! ✨'
      ]
    }
  ];

  let currentActivePeeker = null;
  let peekerRetractTimeout = null;
  let lastPeekerIndex = -1;

  function spawnPeekerHeart(x, y) {
    const emojis = ['💖', '💕', '✨', '🌸', '❤️', '🐾'];
    const heart = document.createElement('div');
    heart.className = 'peeker-heart-pop';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const offsetX = (Math.random() - 0.5) * 24;
    heart.style.left = `${Math.max(12, Math.min(window.innerWidth - 35, x + offsetX))}px`;
    heart.style.top = `${Math.max(12, Math.min(window.innerHeight - 35, y - 24))}px`;
    document.body.appendChild(heart);
    setTimeout(() => {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, 1200);
  }

  function hideActivePeeker() {
    if (currentActivePeeker) {
      const el = document.getElementById(currentActivePeeker.id);
      if (el) el.classList.remove('active');
      currentActivePeeker = null;
    }
    if (peekerRetractTimeout) {
      clearTimeout(peekerRetractTimeout);
      peekerRetractTimeout = null;
    }
  }

  function triggerRandomPeeker() {
    // Hide current one if any
    hideActivePeeker();

    // Pick an index different from last one
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * PEEKERS.length);
    } while (PEEKERS.length > 1 && nextIndex === lastPeekerIndex);
    lastPeekerIndex = nextIndex;

    const peekerData = PEEKERS[nextIndex];
    const el = document.getElementById(peekerData.id);
    const bubble = document.getElementById(peekerData.bubbleId);

    if (!el) return;

    // Pick a cute speech bubble quote
    if (bubble) {
      const q = peekerData.quotes[Math.floor(Math.random() * peekerData.quotes.length)];
      bubble.textContent = q;
    }

    // Pop out from behind the wall
    el.classList.add('active');
    currentActivePeeker = peekerData;

    // Retract behind the wall after 3.8 seconds
    peekerRetractTimeout = setTimeout(() => {
      hideActivePeeker();
    }, 3800);
  }

  // Setup click and interactions for each peeker
  PEEKERS.forEach((peekerData) => {
    const el = document.getElementById(peekerData.id);
    const bubble = document.getElementById(peekerData.bubbleId);
    if (!el) return;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      ensureMusicPlaying();
      playSparkleSound();

      // Spawn floating hearts
      const rect = el.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + rect.height / 2);
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnPeekerHeart(clickX, clickY), i * 120);
      }

      // Cute reaction quote
      if (bubble) {
        const reactions = [
          'Hehe! 🥰',
          'Sanjana really likes Gagan! 🥰',
          'You clicked me! 💖',
          'Say YES to Sanjana! 💍',
          'Super cute! ✨'
        ];
        bubble.textContent = reactions[Math.floor(Math.random() * reactions.length)];
      }

      // Reset auto-hide timer to give user time to read reaction
      if (peekerRetractTimeout) clearTimeout(peekerRetractTimeout);
      peekerRetractTimeout = setTimeout(() => {
        hideActivePeeker();
      }, 2200);
    });
  });

  // Start peeker loop: initial peek after 1.8s, then every 5.5s
  setTimeout(() => {
    triggerRandomPeeker();
    setInterval(() => {
      triggerRandomPeeker();
    }, 5500);
  }, 1800);

  // ==========================================================================
  // Minimal, Gentle Particle Canvas (8 tiny subtle particles only)
  // ==========================================================================
  const ambientCanvas = document.getElementById('ambientCanvas');
  const ambientCtx = ambientCanvas ? ambientCanvas.getContext('2d') : null;
  let ambientParticles = [];
  const MAX_AMBIENT = 8;

  function resizeCanvases() {
    const dpr = window.devicePixelRatio || 1;
    if (ambientCanvas) {
      ambientCanvas.width = window.innerWidth * dpr;
      ambientCanvas.height = window.innerHeight * dpr;
      if (ambientCtx) ambientCtx.scale(dpr, dpr);
    }
    if (confettiCanvas) {
      confettiCanvas.width = window.innerWidth * dpr;
      confettiCanvas.height = window.innerHeight * dpr;
      if (confettiCtx) confettiCtx.scale(dpr, dpr);
    }
  }

  class AmbientParticle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x = Math.random() * window.innerWidth;
      this.y = initial ? Math.random() * window.innerHeight : window.innerHeight + 15;
      this.size = Math.random() * 5 + 4;
      this.speedY = Math.random() * 0.35 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.12 + 0.05;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.015;
      this.isHeart = Math.random() > 0.75;
      this.color = Math.random() > 0.5 ? 'rgba(255, 133, 161, ' : 'rgba(255, 77, 109, ';
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      if (this.y < -25 || this.x < -25 || this.x > window.innerWidth + 25) this.reset(false);
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      if (this.isHeart) {
        ctx.fillStyle = this.color + this.opacity + ')';
        const s = this.size * 0.05;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10 * s, -10 * s, -20 * s, 5 * s, 0, 20 * s);
        ctx.bezierCurveTo(20 * s, 5 * s, 10 * s, -10 * s, 0, 0);
        ctx.fill();
      } else {
        ctx.fillStyle = 'rgba(255, 214, 112, ' + this.opacity + ')';
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.lineTo(this.size * 0.4, 0);
          ctx.lineTo(this.size * 0.1, this.size * 0.1);
        }
        ctx.fill();
      }
      ctx.restore();
    }
  }

  if (ambientCanvas && ambientCtx) {
    for (let i = 0; i < MAX_AMBIENT; i++) ambientParticles.push(new AmbientParticle());
    function renderAmbient() {
      ambientCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let p of ambientParticles) { p.update(); p.draw(ambientCtx); }
      requestAnimationFrame(renderAmbient);
    }
    requestAnimationFrame(renderAmbient);
  }

  // Celebration Confetti Cannon
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let celebrationParticles = [];

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 6;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 4;
      this.gravity = 0.32;
      this.drag = 0.95;
      const colors = ['#FF3366', '#FF85A1', '#FFB703', '#FF4D6D', '#FFFFFF', '#E0AAFF'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.size = Math.random() * 9 + 6;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 10;
      this.life = 1;
      this.decay = Math.random() * 0.015 + 0.008;
    }
    update() {
      this.vx *= this.drag;
      this.vy = this.vy * this.drag + this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;
      this.life -= this.decay;
    }
    draw(ctx) {
      if (this.life <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.life);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
      ctx.restore();
    }
  }

  function launchConfetti(originX, originY, count = 50) {
    if (!confettiCanvas) return;
    for (let i = 0; i < count; i++) celebrationParticles.push(new ConfettiParticle(originX, originY));
  }

  function renderConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = celebrationParticles.length - 1; i >= 0; i--) {
      const p = celebrationParticles[i];
      p.update();
      p.draw(confettiCtx);
      if (p.life <= 0) celebrationParticles.splice(i, 1);
    }
    requestAnimationFrame(renderConfetti);
  }
  requestAnimationFrame(renderConfetti);

  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  // ==========================================================================
  // Interactive Love Postcard Deck Navigation (Questions 1 to 11)
  // ==========================================================================
  let currentCardIndex = 0;

  const introStage = document.getElementById('introStage');
  const questionsStage = document.getElementById('questionsStage');
  const promotionStage = document.getElementById('promotionStage');
  const finalQuestionStage = document.getElementById('finalQuestionStage');
  const confessionStage = document.getElementById('confessionStage');

  const startTestBtn = document.getElementById('startTestBtn');
  const postcardCard = document.getElementById('postcardCard');
  const prevCardBtn = document.getElementById('prevCardBtn');
  const nextCardBtn = document.getElementById('nextCardBtn');
  const nextBtnText = document.getElementById('nextBtnText');
  const currentCardNum = document.getElementById('currentCardNum');
  const progressFill = document.getElementById('progressFill');

  const qTag = document.getElementById('qTag');
  const qTitle = document.getElementById('qTitle');
  const qNote = document.getElementById('qNote');
  const questionArtBox = document.getElementById('questionArtBox');
  const cardStamp = document.getElementById('cardStamp');
  const deckTextarea = document.getElementById('deckTextarea');

  function renderCurrentCard(direction = 'next') {
    const q = QUESTIONS[currentCardIndex];
    if (!q) return;

    // Card slide animation
    if (postcardCard) {
      postcardCard.classList.remove('anim-in', 'anim-out-next', 'anim-out-prev');
      void postcardCard.offsetWidth; // trigger reflow
      postcardCard.classList.add('anim-in');
    }

    // Update Question metadata
    if (currentCardNum) currentCardNum.textContent = q.num;
    if (qTag) qTag.textContent = q.tag;
    if (qTitle) qTitle.textContent = q.title;
    if (qNote) qNote.textContent = q.note;
    if (cardStamp) cardStamp.textContent = q.stamp;
    if (questionArtBox) questionArtBox.innerHTML = q.artSvg;

    // Update Progress bar
    if (progressFill) {
      const pct = ((currentCardIndex + 1) / QUESTIONS.length) * 100;
      progressFill.style.width = `${pct}%`;
    }

    // Restore saved answer for this question
    const saved = localStorage.getItem(`sanjana_gagan_card_${q.num}`) || '';
    if (deckTextarea) {
      deckTextarea.value = saved;
      deckTextarea.placeholder = q.placeholder;
      deckTextarea.focus();
    }

    // Update Button Labels
    if (prevCardBtn) {
      prevCardBtn.disabled = currentCardIndex === 0;
    }
    if (nextBtnText) {
      if (currentCardIndex === QUESTIONS.length - 1) {
        nextBtnText.textContent = 'Lock In My Answers 😌❤️';
      } else {
        nextBtnText.textContent = 'Next Note 💌';
      }
    }
  }

  // Save on input
  if (deckTextarea) {
    deckTextarea.addEventListener('input', () => {
      const q = QUESTIONS[currentCardIndex];
      if (q) {
        localStorage.setItem(`sanjana_gagan_card_${q.num}`, deckTextarea.value);
      }
    });
  }

  // ==========================================================================
  // STAGE 1: YES & Runaway NO Buttons + Reactive Kawaii Expressions
  // ==========================================================================
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const noBtnText = document.getElementById('noBtnText');
  const introIllustrationBox = document.getElementById('introIllustrationBox');
  const charBubble = document.getElementById('charBubble');
  const bubbleIcon = document.getElementById('bubbleIcon');
  const bubbleText = document.getElementById('bubbleText');
  const envelopeHeart = document.getElementById('envelopeHeart');

  const FACE_LAYERS = {
    normal: document.getElementById('faceNormal'),
    curious: document.getElementById('faceCurious'),
    pleading: document.getElementById('facePleading'),
    crying: document.getElementById('faceCrying'),
    angry: document.getElementById('faceAngry'),
    smug: document.getElementById('faceSmug')
  };

  let noAttemptsCount = 0;

  const CHARACTER_REACTIONS = [
    {
      face: 'curious',
      icon: '🤨',
      heart: '❤️',
      msg: 'Wait... Gagan, why are you aiming for NO? 🤨',
      soundFreq: [440, 660]
    },
    {
      face: 'curious',
      icon: '🧐',
      heart: '❤️',
      msg: 'Hey! The big red YES button is right over there! 👉❤️',
      soundFreq: [480, 720]
    },
    {
      face: 'pleading',
      icon: '🥺',
      heart: '💔',
      msg: "Look at these puppy eyes Gagan... you wouldn't! 🥺",
      soundFreq: [520, 360]
    },
    {
      face: 'pleading',
      icon: '🥺',
      heart: '💔',
      msg: "Are you seriously still trying?! Don't break my heart! 💔",
      soundFreq: [500, 340]
    },
    {
      face: 'crying',
      icon: '😭',
      heart: '💔',
      msg: "Waaaah! You're making me cry real tears now! 😭💦",
      soundFreq: [580, 260]
    },
    {
      face: 'crying',
      icon: '😢',
      heart: '💔',
      msg: "Sanjana is literally sobbing into her pillow rn! 😭",
      soundFreq: [540, 240]
    },
    {
      face: 'angry',
      icon: '😤',
      heart: '⚡',
      msg: "Hmph! You're going to make me super mad and pouty! 😤",
      soundFreq: [220, 180]
    },
    {
      face: 'angry',
      icon: '😡',
      heart: '⚡',
      msg: "That button is 100% ILLEGAL in this household! 😤🛑",
      soundFreq: [240, 160]
    },
    {
      face: 'smug',
      icon: '😜',
      heart: '💖',
      msg: "Did you really think Sanjana would let you click NO? 😂",
      soundFreq: [600, 900]
    },
    {
      face: 'smug',
      icon: '😎',
      heart: '💖',
      msg: "Give up already, handsome! Just click YES! 🥰💖",
      soundFreq: [650, 980]
    }
  ];

  const NO_TEXTS = [
    'No 😭',
    'Are you sure? 🥺',
    'Think again!',
    'Really Gagan? 😭',
    "Don't break Sanjana's heart 💔",
    'One more chance? 🥺',
    'Nice try 😂',
    "You can't escape ❤️"
  ];
  let noTextIdx = 0;

  function playCharacterSound(freqStart = 320, freqEnd = 600) {
    if (isMuted || !audioCtx || !sfxMasterGain) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(sfxMasterGain);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.22);
    } catch(e) {}
  }

  function setCharacterFace(faceName) {
    Object.keys(FACE_LAYERS).forEach((key) => {
      const layer = FACE_LAYERS[key];
      if (layer) {
        if (key === faceName) {
          layer.classList.remove('hidden-face');
        } else {
          layer.classList.add('hidden-face');
        }
      }
    });
  }

  function updateCharacterOnNoAttempt() {
    noAttemptsCount++;

    // Pick reaction based on attempts
    let reaction;
    if (noAttemptsCount <= CHARACTER_REACTIONS.length) {
      reaction = CHARACTER_REACTIONS[noAttemptsCount - 1];
    } else {
      const bonusMessages = [
        "Still trying?! Your stubbornness is cute though! 😂❤️",
        "The NO button is running a marathon today! 🏃‍♂️💨",
        "Resistance is completely futile, Gagan! Click YES! 🥰",
        "At this rate the YES button will cover the whole screen! 💖"
      ];
      const bonusIdx = (noAttemptsCount - CHARACTER_REACTIONS.length - 1) % bonusMessages.length;
      reaction = {
        face: 'smug',
        icon: '🥰',
        heart: '💖',
        msg: bonusMessages[bonusIdx],
        soundFreq: [700, 1000]
      };
    }

    // Switch visible SVG facial expression
    setCharacterFace(reaction.face);

    // Update speech bubble text and icon with pop animation
    if (charBubble) {
      if (bubbleIcon) bubbleIcon.textContent = reaction.icon;
      if (bubbleText) bubbleText.textContent = reaction.msg;

      charBubble.classList.remove('bubble-pop');
      void charBubble.offsetWidth; // force browser reflow
      charBubble.classList.add('bubble-pop');
    }

    // Update envelope heart icon in paws
    if (envelopeHeart) {
      envelopeHeart.textContent = reaction.heart;
    }

    // Trigger squash & stretch bounce animation on bear
    if (introIllustrationBox) {
      introIllustrationBox.classList.remove('expression-bounce');
      void introIllustrationBox.offsetWidth; // force browser reflow
      introIllustrationBox.classList.add('expression-bounce');
    }

    // Play pitch-shifted expressive boing sound
    if (reaction.soundFreq) {
      playCharacterSound(reaction.soundFreq[0], reaction.soundFreq[1]);
    } else {
      playCharacterSound(320, 600);
    }

    // Scale up the YES button to become more and more irresistible
    if (yesBtn) {
      const growFactor = Math.min(1.45, 1 + noAttemptsCount * 0.035);
      yesBtn.style.setProperty('--yes-grow', growFactor);
    }
  }

  function evadeNoButton(e) {
    if (!noBtn) return;
    initAudio();
    if (!isMusicPlaying) startBackgroundMusic();

    // Trigger character reaction, facial expression change, speech bubble, and YES growth
    updateCharacterOnNoAttempt();

    noTextIdx = (noTextIdx + 1) % NO_TEXTS.length;
    if (noBtnText) noBtnText.textContent = NO_TEXTS[noTextIdx];

    if (noBtn.parentElement !== document.body) {
      const initRect = noBtn.getBoundingClientRect();
      noBtn.style.left = `${initRect.left}px`;
      noBtn.style.top = `${initRect.top}px`;
      document.body.appendChild(noBtn);
    }
    noBtn.classList.add('evading');

    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = Math.max(120, btnRect.width || 135);
    const btnHeight = Math.max(44, btnRect.height || 48);

    const minX = 36;
    const maxX = Math.max(minX, window.innerWidth - btnWidth - 36);
    const minY = 96;
    const maxY = Math.max(minY, window.innerHeight - btnHeight - 48);

    const spanX = Math.max(1, maxX - minX);
    const spanY = Math.max(1, maxY - minY);

    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    if (e) {
      if (e.touches && e.touches.length > 0) {
        curX = e.touches[0].clientX;
        curY = e.touches[0].clientY;
      } else if (e.clientX !== undefined) {
        curX = e.clientX;
        curY = e.clientY;
      }
    }

    const yesRect = yesBtn ? yesBtn.getBoundingClientRect() : { left: 0, right: 0, top: 0, bottom: 0 };
    let targetX = minX;
    let targetY = minY;
    let attempts = 0;

    while (attempts < 20) {
      const candX = minX + Math.random() * spanX;
      const candY = minY + Math.random() * spanY;
      const dist = Math.hypot(candX + btnWidth / 2 - curX, candY + btnHeight / 2 - curY);
      const overlapsYes = (
        candX < yesRect.right + 35 &&
        candX + btnWidth > yesRect.left - 35 &&
        candY < yesRect.bottom + 35 &&
        candY + btnHeight > yesRect.top - 35
      );

      if (dist > 140 && !overlapsYes) {
        targetX = candX;
        targetY = candY;
        break;
      }
      targetX = candX;
      targetY = candY;
      attempts++;
    }

    targetX = Math.min(Math.max(targetX, minX), maxX);
    targetY = Math.min(Math.max(targetY, minY), maxY);

    noBtn.style.left = `${Math.round(targetX)}px`;
    noBtn.style.top = `${Math.round(targetY)}px`;
  }

  let lastEvadeTime = 0;
  function handleNoPointerMove(e) {
    if (!noBtn || !introStage || introStage.classList.contains('hidden')) return;
    const now = Date.now();
    if (now - lastEvadeTime < 160) return;

    const rect = noBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (dist < 85) {
      lastEvadeTime = now;
      evadeNoButton(e);
    }
  }

  if (noBtn) {
    document.addEventListener('mousemove', handleNoPointerMove);
    noBtn.addEventListener('mouseenter', evadeNoButton);
    noBtn.addEventListener('mouseover', evadeNoButton);
    noBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      evadeNoButton(e);
    }, { passive: false });
    noBtn.addEventListener('click', (e) => {
      e.preventDefault();
      evadeNoButton(e);
    });
  }

  function handleStartTest() {
    initAudio();
    if (!isMusicPlaying) startBackgroundMusic();
    playCelebrationFanfare();
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 45);

    if (noBtn) {
      noBtn.style.display = 'none';
      if (noBtn.parentElement === document.body) noBtn.remove();
    }

    if (introStage) {
      introStage.classList.remove('active');
      introStage.classList.add('hidden');
    }
    if (questionsStage) {
      questionsStage.classList.remove('hidden');
      questionsStage.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    currentCardIndex = 0;
    renderCurrentCard('next');
  }

  if (yesBtn) {
    yesBtn.addEventListener('click', handleStartTest);
  }

  // Previous Card Button
  if (prevCardBtn) {
    prevCardBtn.addEventListener('click', () => {
      if (currentCardIndex > 0) {
        initAudio();
        playSparkleSound();
        currentCardIndex--;
        renderCurrentCard('prev');
      }
    });
  }

  // Next Card Button
  if (nextCardBtn) {
    nextCardBtn.addEventListener('click', () => {
      initAudio();

      // If on the last question, advance to the Promotion Stage
      if (currentCardIndex === QUESTIONS.length - 1) {
        playCelebrationFanfare();
        launchConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 60);

        if (questionsStage) {
          questionsStage.classList.remove('active');
          questionsStage.classList.add('hidden');
        }
        if (promotionStage) {
          promotionStage.classList.remove('hidden');
          promotionStage.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        playSparkleSound();
        launchConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 15);
        currentCardIndex++;
        renderCurrentCard('next');
      }
    });
  }

  // ==========================================================================
  // STAGE 3: The Promotion Envelope -> Stage 4: The Final Question
  // ==========================================================================
  const viewFinalQuestionBtn = document.getElementById('viewFinalQuestionBtn');

  if (viewFinalQuestionBtn) {
    viewFinalQuestionBtn.addEventListener('click', () => {
      initAudio();
      playSparkleSound();
      launchConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 45);

      if (promotionStage) {
        promotionStage.classList.remove('active');
        promotionStage.classList.add('hidden');
      }
      if (finalQuestionStage) {
        finalQuestionStage.classList.remove('hidden');
        finalQuestionStage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ==========================================================================
  // STAGE 4: The Final Question Tickets -> Stage 5: The Confession
  // ==========================================================================
  const ticketBtns = document.querySelectorAll('.ticket-btn');
  let selectedGirlfriendChoice = 'Yes ❤️';

  ticketBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      playCelebrationFanfare();

      const choice = btn.getAttribute('data-choice');
      selectedGirlfriendChoice = choice;
      localStorage.setItem('sanjana_gagan_gf_choice', choice);

      // Mark selected ticket
      ticketBtns.forEach(b => {
        b.classList.remove('selected');
        const stamp = b.querySelector('.ticket-stamp');
        if (stamp) stamp.textContent = '☐';
      });

      btn.classList.add('selected');
      const activeStamp = btn.querySelector('.ticket-stamp');
      if (activeStamp) activeStamp.textContent = '❤️';

      // Launch joyful confetti burst
      launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 80);

      // Smoothly unveil Sanjana's Confession Letter
      setTimeout(() => {
        if (finalQuestionStage) {
          finalQuestionStage.classList.remove('active');
          finalQuestionStage.classList.add('hidden');
        }
        if (confessionStage) {
          confessionStage.classList.remove('hidden');
          confessionStage.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 700);
    });
  });

  // ==========================================================================
  // STAGE 5: WhatsApp Export & Copy Answers
  // ==========================================================================
  function generateSummaryMessage() {
    let msg = `❤️ Sanjana, here are my answers to your test! ❤️\n\n`;

    QUESTIONS.forEach((q) => {
      const ans = localStorage.getItem(`sanjana_gagan_card_${q.num}`) || '(Left blank)';
      msg += `${q.num}. ${q.title}\n👉 "${ans.trim()}"\n\n`;
    });

    msg += `───────────────────\n`;
    msg += `❤️ THE FINAL QUESTION: Gagan, will you let me be your girlfriend?\n`;
    msg += `Gagan's Official Answer: ✅ "${selectedGirlfriendChoice}"\n\n`;
    msg += `I really, really like you too, Sanjana! 💕`;

    return msg;
  }

  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', () => {
      initAudio();
      playSparkleSound();
      const text = generateSummaryMessage();
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  const copyAnswersBtn = document.getElementById('copyAnswersBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  if (copyAnswersBtn) {
    copyAnswersBtn.addEventListener('click', () => {
      initAudio();
      playSparkleSound();
      const text = generateSummaryMessage();
      navigator.clipboard.writeText(text).then(() => {
        if (copyBtnText) {
          copyBtnText.textContent = 'Copied to Clipboard! 💕';
          setTimeout(() => {
            copyBtnText.textContent = 'Copy My Answers 📋';
          }, 3000);
        }
      }).catch(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copied! 💕';
      });
    });
  }

})();
