/* =====================================================
   PLAYER.JS — Music Player + Per-Song Theme Engine
   =====================================================

   HOW TO ADD SONGS:
   ─────────────────
   1. Put your .mp3 files inside the  "music/"  folder.

   2. Add an entry to the PLAYLIST array below:
      {
        title:   "Song Name",
        artist:  "Artist Name",
        file:    "music/yourfile.mp3",
        theme:   "ocean"    ← pick from THEMES list below
      }

   AVAILABLE BUILT-IN THEMES:
   ───────────────────────────
     "ocean"      — teal & seafoam (default)
     "forest"     — deep green & moss
     "sunset"     — warm amber & coral
     "lavender"   — soft purple & lilac
     "midnight"   — dark navy & indigo
     "rose"       — blush pink & dusty mauve
     "sand"       — warm sand & gold
     "cherry"     — crimson & soft pink

   Or define your own in the THEMES object below!
===================================================== */


/* ══════════════════════════════════════
   ✏️  PLAYLIST — Edit your songs here
   Each song can have its own theme.
══════════════════════════════════════ */
const PLAYLIST = [
  {
    title:  "Paiya BGM",
    artist: "U1",
    file:   "music/paiyabgm.mp3",
    theme:  "lavender"
  },
  {
    title:  "Vellake BGM",
    artist: "aniruth",
    file:   "music/vellakebgm.mp3",
    theme:  "forest"
  },
  {
    title:  "YenPirandaiMagane",
    artist: "Don't Know",
    file:   "music/YenPirandaiMagane.mp3",
    theme:  "midnight"
  }
  /*
    ADD MORE SONGS — copy a block above and paste here.
    Example:

    ,{
      title:  "Night Drive",
      artist: "Some Artist",
      file:   "music/night.mp3",
      theme:  "midnight"
    }
  */
];


/* ══════════════════════════════════════
   ✏️  THEMES — Customize or add your own
   Each key maps a theme name to a set
   of CSS variable values.
══════════════════════════════════════ */
const THEMES = {

  /* ── Each theme can define these cursor vars:
     --cur-dot-size     : dot diameter  (default 7px)
     --cur-dot-bg       : dot fill color
     --cur-dot-radius   : dot shape — 50% = circle, 0 = square, etc.
     --cur-dot-shadow   : optional glow on the dot
     --cur-ring-size    : ring diameter (default 34px)
     --cur-ring-color   : ring border color
     --cur-ring-border  : full border shorthand e.g. "2px dashed"
     --cur-ring-radius  : ring shape  (default 50%)
     --cur-ring-opacity : ring opacity (default 0.45)
  ── */

  ocean: {
    name:              "Ocean Calm",
    "--bg":            "#f0f4f3",
    "--bg2":           "#e8efed",
    "--card":          "#ffffff",
    "--accent":        "#2a9d8f",
    "--accent-light":  "#52b5a8",
    "--accent-soft":   "rgba(42,157,143,0.10)",
    "--accent2":       "#5aab9c",
    "--text":          "#1e2d2b",
    "--muted":         "#6b8c86",
    "--subtle":        "#a8bfbb",
    "--border":        "rgba(42,157,143,0.14)",
    "--border-card":   "rgba(42,157,143,0.20)",
    "--shadow":        "0 4px 24px rgba(42,157,143,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(42,157,143,0.13)",
    /* cursor — clean teal circle */
    "--cur-dot-size":   "7px",
    "--cur-dot-bg":     "#2a9d8f",
    "--cur-dot-radius": "50%",
    "--cur-dot-shadow": "0 0 8px rgba(42,157,143,0.6)",
    "--cur-ring-size":  "34px",
    "--cur-ring-color": "#2a9d8f",
    "--cur-ring-border":"1.5px solid",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.45",
    canvasColor:       "42,157,143"
  },

  forest: {
    name:              "Deep Forest",
    "--bg":            "#f2f4ef",
    "--bg2":           "#e8ede3",
    "--card":          "#ffffff",
    "--accent":        "#3a7d44",
    "--accent-light":  "#5a9e64",
    "--accent-soft":   "rgba(58,125,68,0.10)",
    "--accent2":       "#6aaf72",
    "--text":          "#1a2b1d",
    "--muted":         "#607a63",
    "--subtle":        "#a5bfa8",
    "--border":        "rgba(58,125,68,0.14)",
    "--border-card":   "rgba(58,125,68,0.20)",
    "--shadow":        "0 4px 24px rgba(58,125,68,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(58,125,68,0.13)",
    /* cursor — leaf-shaped: larger dot, dashed ring */
    "--cur-dot-size":   "9px",
    "--cur-dot-bg":     "#3a7d44",
    "--cur-dot-radius": "50% 10% 50% 10%",
    "--cur-dot-shadow": "0 0 10px rgba(58,125,68,0.55)",
    "--cur-ring-size":  "36px",
    "--cur-ring-color": "#3a7d44",
    "--cur-ring-border":"1.5px dashed",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.5",
    canvasColor:       "58,125,68"
  },

  sunset: {
    name:              "Golden Hour",
    "--bg":            "#fdf5ec",
    "--bg2":           "#f7ede0",
    "--card":          "#ffffff",
    "--accent":        "#d4752a",
    "--accent-light":  "#e8924d",
    "--accent-soft":   "rgba(212,117,42,0.10)",
    "--accent2":       "#e8924d",
    "--text":          "#2b1f10",
    "--muted":         "#8a6540",
    "--subtle":        "#c9aa88",
    "--border":        "rgba(212,117,42,0.14)",
    "--border-card":   "rgba(212,117,42,0.20)",
    "--shadow":        "0 4px 24px rgba(212,117,42,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(212,117,42,0.13)",
    /* cursor — warm amber, larger glowing dot */
    "--cur-dot-size":   "8px",
    "--cur-dot-bg":     "#d4752a",
    "--cur-dot-radius": "50%",
    "--cur-dot-shadow": "0 0 12px rgba(212,117,42,0.75)",
    "--cur-ring-size":  "38px",
    "--cur-ring-color": "#d4752a",
    "--cur-ring-border":"1.5px solid",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.4",
    canvasColor:       "212,117,42"
  },

  lavender: {
    name:              "Lavender Fields",
    "--bg":            "#f4f2f8",
    "--bg2":           "#ece9f3",
    "--card":          "#ffffff",
    "--accent":        "#7c5cbf",
    "--accent-light":  "#9a7dd4",
    "--accent-soft":   "rgba(124,92,191,0.10)",
    "--accent2":       "#a68fd4",
    "--text":          "#1e1830",
    "--muted":         "#6e5d8a",
    "--subtle":        "#b8a8d4",
    "--border":        "rgba(124,92,191,0.14)",
    "--border-card":   "rgba(124,92,191,0.20)",
    "--shadow":        "0 4px 24px rgba(124,92,191,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(124,92,191,0.13)",
    /* cursor — diamond dot, double ring */
    "--cur-dot-size":   "8px",
    "--cur-dot-bg":     "#7c5cbf",
    "--cur-dot-radius": "2px",
    "--cur-dot-shadow": "0 0 10px rgba(124,92,191,0.65)",
    "--cur-ring-size":  "36px",
    "--cur-ring-color": "#7c5cbf",
    "--cur-ring-border":"1px solid",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.5",
    canvasColor:       "124,92,191"
  },

  midnight: {
    name:              "Midnight",
    "--bg":            "#0e1420",
    "--bg2":           "#131a2e",
    "--card":          "#1a2238",
    "--accent":        "#4f8ef7",
    "--accent-light":  "#74a8ff",
    "--accent-soft":   "rgba(79,142,247,0.12)",
    "--accent2":       "#6ba3f5",
    "--text":          "#e4eaf6",
    "--muted":         "#7b9ab8",
    "--subtle":        "#445e7a",
    "--border":        "rgba(79,142,247,0.14)",
    "--border-card":   "rgba(79,142,247,0.20)",
    "--shadow":        "0 4px 24px rgba(79,142,247,0.08)",
    "--shadow-hover":  "0 12px 48px rgba(79,142,247,0.16)",
    /* cursor — bright electric dot with strong glow */
    "--cur-dot-size":   "6px",
    "--cur-dot-bg":     "#74a8ff",
    "--cur-dot-radius": "50%",
    "--cur-dot-shadow": "0 0 14px rgba(79,142,247,0.9), 0 0 28px rgba(79,142,247,0.4)",
    "--cur-ring-size":  "36px",
    "--cur-ring-color": "#4f8ef7",
    "--cur-ring-border":"1px solid",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.55",
    canvasColor:       "79,142,247"
  },

  rose: {
    name:              "Rose Garden",
    "--bg":            "#fdf2f4",
    "--bg2":           "#f7e8ec",
    "--card":          "#ffffff",
    "--accent":        "#c2607a",
    "--accent-light":  "#d47f96",
    "--accent-soft":   "rgba(194,96,122,0.10)",
    "--accent2":       "#d47f96",
    "--text":          "#2b1419",
    "--muted":         "#8a5060",
    "--subtle":        "#c9a0aa",
    "--border":        "rgba(194,96,122,0.14)",
    "--border-card":   "rgba(194,96,122,0.20)",
    "--shadow":        "0 4px 24px rgba(194,96,122,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(194,96,122,0.13)",
    /* cursor — petal shape: small dot, soft ring */
    "--cur-dot-size":   "8px",
    "--cur-dot-bg":     "#c2607a",
    "--cur-dot-radius": "50% 0",
    "--cur-dot-shadow": "0 0 10px rgba(194,96,122,0.6)",
    "--cur-ring-size":  "34px",
    "--cur-ring-color": "#c2607a",
    "--cur-ring-border":"1.5px solid",
    "--cur-ring-radius":"50% 0",
    "--cur-ring-opacity":"0.4",
    canvasColor:       "194,96,122"
  },

  sand: {
    name:              "Desert Sand",
    "--bg":            "#faf5ec",
    "--bg2":           "#f2eadb",
    "--card":          "#ffffff",
    "--accent":        "#b08a3e",
    "--accent-light":  "#c9a55a",
    "--accent-soft":   "rgba(176,138,62,0.10)",
    "--accent2":       "#c9a55a",
    "--text":          "#271f0e",
    "--muted":         "#7a6540",
    "--subtle":        "#c0a878",
    "--border":        "rgba(176,138,62,0.14)",
    "--border-card":   "rgba(176,138,62,0.20)",
    "--shadow":        "0 4px 24px rgba(176,138,62,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(176,138,62,0.13)",
    /* cursor — square sand grain dot, rounded ring */
    "--cur-dot-size":   "7px",
    "--cur-dot-bg":     "#b08a3e",
    "--cur-dot-radius": "3px",
    "--cur-dot-shadow": "0 0 8px rgba(176,138,62,0.55)",
    "--cur-ring-size":  "32px",
    "--cur-ring-color": "#b08a3e",
    "--cur-ring-border":"1.5px solid",
    "--cur-ring-radius":"6px",
    "--cur-ring-opacity":"0.45",
    canvasColor:       "176,138,62"
  },

  cherry: {
    name:              "Cherry Blossom",
    "--bg":            "#fdf2f2",
    "--bg2":           "#f7e4e4",
    "--card":          "#ffffff",
    "--accent":        "#c0392b",
    "--accent-light":  "#d45a4e",
    "--accent-soft":   "rgba(192,57,43,0.08)",
    "--accent2":       "#e07a70",
    "--text":          "#2b1010",
    "--muted":         "#8a5050",
    "--subtle":        "#c9a0a0",
    "--border":        "rgba(192,57,43,0.12)",
    "--border-card":   "rgba(192,57,43,0.18)",
    "--shadow":        "0 4px 24px rgba(192,57,43,0.07)",
    "--shadow-hover":  "0 12px 48px rgba(192,57,43,0.12)",
    /* cursor — bold red dot, crisp ring */
    "--cur-dot-size":   "7px",
    "--cur-dot-bg":     "#c0392b",
    "--cur-dot-radius": "50%",
    "--cur-dot-shadow": "0 0 12px rgba(192,57,43,0.7)",
    "--cur-ring-size":  "32px",
    "--cur-ring-color": "#c0392b",
    "--cur-ring-border":"2px solid",
    "--cur-ring-radius":"50%",
    "--cur-ring-opacity":"0.45",
    canvasColor:       "192,57,43"
  }

};


/* ══════════════════════════════════════
   THEME ENGINE — transitions CSS vars
══════════════════════════════════════ */
(function () {

  /* Inject transition rule so CSS vars animate smoothly */
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    *, *::before, *::after {
      transition:
        background-color 0.7s ease,
        border-color     0.7s ease,
        color            0.6s ease,
        box-shadow       0.7s ease !important;
    }
    #bg-canvas { transition: opacity 0.5s ease !important; }
  `;
  document.head.appendChild(styleTag);

  /* Theme name badge — shown briefly on theme change */
  const badge = document.createElement('div');
  badge.id = 'theme-badge';
  badge.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px);
    background: var(--card); border: 1px solid var(--border-card);
    padding: 8px 20px; border-radius: 100px;
    font-family: var(--font-body); font-size: .75rem; font-weight: 500;
    color: var(--accent); letter-spacing: 1px; text-transform: uppercase;
    box-shadow: var(--shadow-hover); z-index: 9000;
    opacity: 0; pointer-events: none;
    transition: opacity .4s ease, transform .4s ease !important;
  `;
  document.body.appendChild(badge);

  let badgeTimer;
  function showBadge(text) {
    badge.textContent = '✦ ' + text;
    badge.style.opacity = '1';
    badge.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(badgeTimer);
    badgeTimer = setTimeout(() => {
      badge.style.opacity = '0';
      badge.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2200);
  }

  /* Apply a theme by name */
  window.applyTheme = function (themeName) {
    const t = THEMES[themeName] || THEMES['ocean'];
    const root = document.documentElement;

    /* Update each CSS variable */
    Object.entries(t).forEach(([key, val]) => {
      if (key.startsWith('--')) root.style.setProperty(key, val);
    });

    /* Update body gradient blobs */
    document.body.style.backgroundImage = `
      radial-gradient(ellipse 80% 55% at 8% 18%, rgba(${t.canvasColor},0.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 88% 78%, rgba(${t.canvasColor},0.05) 0%, transparent 60%)
    `;

    /* Notify canvas to update its color */
    window._canvasAccent = t.canvasColor;

    showBadge(t.name);
  };

  /* Apply default theme on load */
  window.applyTheme('ocean');

})();


/* ══════════════════════════════════════
   PLAYER ENGINE
══════════════════════════════════════ */
(function () {
  let currentIndex = 0;
  let isPlaying    = false;
  const audio      = new Audio();

  const trackEl  = document.getElementById('notch-track');
  const artistEl = document.getElementById('notch-artist');
  const playIcon = document.getElementById('play-icon');
  const eqBars   = document.getElementById('eq-bars');
  const notchArt = document.getElementById('notch-art');
  const btnPlay  = document.getElementById('btn-play');
  const btnPrev  = document.getElementById('btn-prev');
  const btnNext  = document.getElementById('btn-next');

  function loadTrack(index) {
    if (!PLAYLIST.length) return;
    currentIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const song   = PLAYLIST[currentIndex];

    audio.src            = song.file;
    trackEl.textContent  = song.title;
    artistEl.textContent = song.artist;

    /* ── THEME SWITCH ── */
    if (song.theme && window.applyTheme) {
      window.applyTheme(song.theme);
    }

    if (isPlaying) audio.play().catch(() => {});
  }

  function togglePlay() {
    if (!PLAYLIST.length) return;
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => console.warn('Autoplay blocked.'));
      setPlaying(true);
    }
  }

  function setPlaying(state) {
    isPlaying          = state;
    playIcon.className = state ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    eqBars.classList.toggle('paused', !state);
    notchArt.classList.toggle('spinning', state);
  }

  audio.addEventListener('ended', () => loadTrack(currentIndex + 1));

  btnPlay.addEventListener('click', togglePlay);
  btnPrev.addEventListener('click', () => { loadTrack(currentIndex - 1); if (isPlaying) audio.play(); });
  btnNext.addEventListener('click', () => { loadTrack(currentIndex + 1); if (isPlaying) audio.play(); });

  /* Init — show first song info, apply its theme */
  if (PLAYLIST.length) {
    const first          = PLAYLIST[0];
    trackEl.textContent  = first.title;
    artistEl.textContent = first.artist;
    audio.src            = first.file;
    if (first.theme && window.applyTheme) window.applyTheme(first.theme);
  } else {
    trackEl.textContent  = 'No songs added';
    artistEl.textContent = 'Edit player.js';
  }

})();
