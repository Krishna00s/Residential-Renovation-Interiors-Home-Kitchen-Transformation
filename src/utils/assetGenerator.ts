// Architectural SVG Vector Graphic & Photorealistic Local Asset Helper
// Generates clean, rich, photorealistic architectural photography SVGs for local rendering.

export interface ArchitecturalSvgOptions {
  width?: number;
  height?: number;
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light' | 'stone' | 'olive' | 'accent' | 'hero' | 'attic' | 'kitchen' | 'bathroom' | 'extension' | 'energy' | 'interiors' | 'before' | 'after';
  pattern?: 'blueprint' | 'elevation' | 'interior' | 'wood' | 'stone';
}

function toBase64DataUrl(svgString: string): string {
  const trimmed = svgString.trim();
  try {
    const base64 = typeof window !== 'undefined' && typeof window.btoa === 'function'
      ? window.btoa(unescape(encodeURIComponent(trimmed)))
      : btoa(unescape(encodeURIComponent(trimmed)));
    return `data:image/svg+xml;base64,${base64}`;
  } catch {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(trimmed)}`;
  }
}

export function createArchitecturalSvgDataUrl(options: ArchitecturalSvgOptions): string {
  const width = options.width || 1600;
  const height = options.height || 1000;
  const title = options.title.replace(/"/g, '&quot;');
  const subtitle = (options.subtitle || 'ARDAN ARCHITECTURAL STUDIO').replace(/"/g, '&quot;');

  // 1. HERO BACKGROUND PHOTOGRAPHY SVG
  if (options.theme === 'hero') {
    const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="heroSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B100C" />
      <stop offset="40%" stop-color="#141C16" />
      <stop offset="80%" stop-color="#1F2A21" />
      <stop offset="100%" stop-color="#28352A" />
    </linearGradient>
    <radialGradient id="interiorGlowUpper" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF4D6" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#E8C897" stop-opacity="0.8" />
      <stop offset="80%" stop-color="#C5A880" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#161D18" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="interiorGlowLower" cx="60%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFEBB8" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#D9B784" stop-opacity="0.75" />
      <stop offset="85%" stop-color="#C5A880" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#161D18" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="patioSpot" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#FFE2A8" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#C5A880" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#161D18" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15" />
      <stop offset="30%" stop-color="#C5A880" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.4" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#heroSky)" />
  <path d="M 600 ${height} Q 680 400 750 300 T 900 250 T 1100 200 T 1350 180 T ${width} 220 L ${width} ${height} Z" fill="#0B100C" opacity="0.9" />
  <path d="M 800 ${height} Q 920 350 1050 280 T 1280 220 T ${width} 240 L ${width} ${height} Z" fill="#121A14" opacity="0.7" />

  <g transform="translate(620, 240)">
    <rect x="0" y="0" width="900" height="600" rx="12" fill="#141C16" stroke="#253227" stroke-width="4" />
    <rect x="20" y="20" width="860" height="560" fill="#1B241D" />
    <rect x="60" y="50" width="780" height="230" fill="url(#interiorGlowUpper)" />
    <rect x="120" y="180" width="240" height="100" fill="#1B231D" opacity="0.85" rx="4" />
    <line x1="120" y1="180" x2="360" y2="180" stroke="#C5A880" stroke-width="3" />
    <circle cx="200" cy="110" r="12" fill="#FFF9E6" />
    <circle cx="280" cy="110" r="12" fill="#FFF9E6" />
    <line x1="200" y1="50" x2="200" y2="100" stroke="#C5A880" stroke-width="1.5" />
    <line x1="280" y1="50" x2="280" y2="100" stroke="#C5A880" stroke-width="1.5" />
    <rect x="60" y="50" width="780" height="230" fill="url(#glassReflect)" stroke="#2B382D" stroke-width="3" />
    <line x1="250" y1="50" x2="250" y2="280" stroke="#0D120E" stroke-width="4" />
    <line x1="440" y1="50" x2="440" y2="280" stroke="#0D120E" stroke-width="4" />
    <line x1="630" y1="50" x2="630" y2="280" stroke="#0D120E" stroke-width="4" />
    <rect x="0" y="280" width="900" height="35" fill="#0D120E" />
    <line x1="0" y1="280" x2="900" y2="280" stroke="#C5A880" stroke-width="2" stroke-opacity="0.6" />
    <rect x="40" y="315" width="820" height="250" fill="url(#interiorGlowLower)" />
    <rect x="100" y="440" width="340" height="125" fill="#141C16" opacity="0.9" rx="6" />
    <rect x="100" y="430" width="340" height="10" fill="#EAE6E1" opacity="0.9" />
    <rect x="520" y="450" width="280" height="115" fill="#19221B" opacity="0.85" rx="8" />
    <rect x="40" y="315" width="820" height="250" fill="url(#glassReflect)" stroke="#2B382D" stroke-width="3" />
    <line x1="240" y1="315" x2="240" y2="565" stroke="#0D120E" stroke-width="5" />
    <line x1="440" y1="315" x2="440" y2="565" stroke="#0D120E" stroke-width="5" />
    <line x1="640" y1="315" x2="640" y2="565" stroke="#0D120E" stroke-width="5" />
  </g>

  <polygon points="450,840 ${width},840 ${width},${height} 450,${height}" fill="#141C16" />
  <line x1="450" y1="840" x2="${width}" y2="840" stroke="#C5A880" stroke-width="3" stroke-opacity="0.7" />
  <circle cx="550" cy="840" r="6" fill="#FFF2D4" />
  <rect x="520" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="850" cy="840" r="6" fill="#FFF2D4" />
  <rect x="820" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="1150" cy="840" r="6" fill="#FFF2D4" />
  <rect x="1120" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="1450" cy="840" r="6" fill="#FFF2D4" />
  <rect x="1420" y="840" width="60" height="40" fill="url(#patioSpot)" />

  <rect width="65%" height="100%" fill="url(#heroSky)" opacity="0.85" />
</svg>
    `;
    return toBase64DataUrl(heroSvg);
  }

  // 2. ATTIC / LOFT CONVERSION PHOTOGRAPHY SVG (CARD 04 ABOVE THE CITY)
  if (options.theme === 'attic') {
    const atticSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="atticSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121814" />
      <stop offset="40%" stop-color="#1B231D" />
      <stop offset="100%" stop-color="#253227" />
    </linearGradient>
    <linearGradient id="veluxSun" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF2" stop-opacity="0.95" />
      <stop offset="60%" stop-color="#EADAB6" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#1B231D" stop-opacity="0.1" />
    </linearGradient>
    <linearGradient id="oakBed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C5A880" stop-opacity="0.5" />
      <stop offset="50%" stop-color="#8E877D" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#C5A880" stop-opacity="0.5" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#atticSky)" />

  <!-- Angled Loft Pitch Architecture -->
  <polygon points="0,0 ${width},0 ${width},650 0,450" fill="#161D18" />

  <!-- Bank of 4 Large Velux Rooflight Skylights with Daylight Rays -->
  <g transform="translate(250, 60)">
    <polygon points="40,0 240,0 190,300 0,300" fill="url(#veluxSun)" stroke="#C5A880" stroke-width="4" />
    <polygon points="260,0 460,0 410,300 210,300" fill="url(#veluxSun)" stroke="#C5A880" stroke-width="4" />
    <polygon points="480,0 680,0 630,300 430,300" fill="url(#veluxSun)" stroke="#C5A880" stroke-width="4" />
    <polygon points="700,0 900,0 850,300 650,300" fill="url(#veluxSun)" stroke="#C5A880" stroke-width="4" />
  </g>

  <!-- Exposed Oak Timber Rafter Beams -->
  <line x1="200" y1="0" x2="200" y2="480" stroke="#C5A880" stroke-width="6" stroke-opacity="0.5" />
  <line x1="600" y1="0" x2="600" y2="540" stroke="#C5A880" stroke-width="6" stroke-opacity="0.5" />
  <line x1="1000" y1="0" x2="1000" y2="600" stroke="#C5A880" stroke-width="6" stroke-opacity="0.5" />

  <!-- Master Bedroom Suite Bed & Low-Level Eaves Joinery -->
  <rect x="250" y="520" width="750" height="280" fill="#141C16" stroke="#C5A880" stroke-width="2" rx="8" />
  <rect x="270" y="490" width="710" height="40" fill="url(#oakBed)" rx="4" />
  <rect x="350" y="560" width="550" height="150" fill="#EAE6E1" opacity="0.9" rx="6" />

  <!-- Architectural Title Overlay -->
  <text x="100" y="${height - 80}" font-family="Georgia, serif" font-size="32" font-weight="500" fill="#EDE8DF">${title}</text>
  <text x="100" y="${height - 45}" font-family="sans-serif" font-size="12" font-weight="600" fill="#C5A880" letter-spacing="3">${subtitle}</text>
</svg>
    `;
    return toBase64DataUrl(atticSvg);
  }

  // 3. KITCHEN RENOVATIONS SVG
  if (options.theme === 'kitchen') {
    const kitchenSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="kitGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.95" />
      <stop offset="50%" stop-color="#D4B68B" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#161D18" stop-opacity="0.2" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#1B231D" />
  <rect width="100%" height="100%" fill="url(#kitGlow)" />
  <rect x="250" y="450" width="1100" height="300" fill="#EAE6E1" opacity="0.95" rx="10" />
  <rect x="250" y="430" width="1100" height="20" fill="#C5A880" opacity="0.8" />
  <circle cx="550" cy="250" r="16" fill="#FFF8E7" />
  <circle cx="1050" cy="250" r="16" fill="#FFF8E7" />
  <line x1="550" y1="100" x2="550" y2="234" stroke="#C5A880" stroke-width="2" />
  <line x1="1050" y1="100" x2="1050" y2="234" stroke="#C5A880" stroke-width="2" />
  <text x="100" y="${height - 80}" font-family="Georgia, serif" font-size="32" fill="#EDE8DF">${title}</text>
  <text x="100" y="${height - 45}" font-family="sans-serif" font-size="12" fill="#C5A880" letter-spacing="3">${subtitle}</text>
</svg>
    `;
    return toBase64DataUrl(kitchenSvg);
  }

  // 4. BATHROOM RENOVATIONS SVG
  if (options.theme === 'bathroom') {
    const bathSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#161D18" />
  <rect x="200" y="150" width="1200" height="700" fill="#222B24" stroke="#C5A880" stroke-opacity="0.4" stroke-width="2" rx="12" />
  <rect x="300" y="450" width="600" height="250" fill="#EAE6E1" opacity="0.85" rx="8" />
  <circle cx="1100" cy="350" r="100" fill="none" stroke="#C5A880" stroke-width="3" />
  <text x="100" y="${height - 80}" font-family="Georgia, serif" font-size="32" fill="#EDE8DF">${title}</text>
  <text x="100" y="${height - 45}" font-family="sans-serif" font-size="12" fill="#C5A880" letter-spacing="3">${subtitle}</text>
</svg>
    `;
    return toBase64DataUrl(bathSvg);
  }

  // 5. BEFORE & AFTER TRANSFORMATION SVGs
  if (options.theme === 'before') {
    const beforeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#2A241E" />
  <path d="M 0 0 L ${width} 0 L ${width} 200 L 0 350 Z" fill="#1C1814" />
  <rect x="150" y="300" width="400" height="500" fill="#3D352B" stroke="#52483B" stroke-width="3" />
  <rect x="200" y="350" width="120" height="200" fill="#29231C" stroke="#4A3F33" stroke-width="2" />
  <line x1="0" y1="750" x2="${width}" y2="750" stroke="#1C1814" stroke-width="6" />
  <text x="100" y="${height - 80}" font-family="sans-serif" font-size="28" font-weight="700" fill="#C5A880">ORIGINAL 1970S CRAMPED LAYOUT</text>
  <text x="100" y="${height - 45}" font-family="sans-serif" font-size="14" fill="#8E877D">BEFORE TRANSFORMATION — ENCLOSED HALLWAYS &amp; DARK ZONES</text>
</svg>
    `;
    return toBase64DataUrl(beforeSvg);
  }

  if (options.theme === 'after') {
    const afterSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="sunGlow" cx="70%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFFDF7" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#F2E6D5" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#161D18" stop-opacity="0.1" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#1B231D" />
  <rect width="100%" height="100%" fill="url(#sunGlow)" />
  <rect x="200" y="200" width="1200" height="600" fill="#222B24" stroke="#C5A880" stroke-width="2" rx="12" />
  <rect x="240" y="240" width="1120" height="200" fill="#C5A880" opacity="0.35" rx="6" />
  <line x1="240" y1="440" x2="1360" y2="440" stroke="#C5A880" stroke-width="3" />
  <rect x="400" y="520" width="800" height="180" fill="#EAE6E1" opacity="0.9" rx="8" />
  <text x="100" y="${height - 80}" font-family="Georgia, serif" font-size="32" font-weight="500" fill="#EDE8DF">${title}</text>
  <text x="100" y="${height - 45}" font-family="sans-serif" font-size="12" font-weight="600" fill="#C5A880" letter-spacing="3">${subtitle}</text>
</svg>
    `;
    return toBase64DataUrl(afterSvg);
  }

  let bg = '#161D18';
  let stroke = 'rgba(197, 168, 128, 0.3)';
  let textPrimary = '#EDE8DF';
  let textSecondary = '#C5A880';
  let lineAccent = '#C5A880';

  if (options.theme === 'light') {
    bg = '#EDE8DF';
    stroke = 'rgba(22, 29, 24, 0.15)';
    textPrimary = '#161D18';
    textSecondary = '#8E877D';
    lineAccent = '#8E877D';
  } else if (options.theme === 'stone') {
    bg = '#1B231D';
    stroke = 'rgba(237, 232, 223, 0.15)';
    textPrimary = '#EDE8DF';
    textSecondary = '#C5A880';
    lineAccent = '#C5A880';
  } else if (options.theme === 'olive') {
    bg = '#222B24';
    stroke = 'rgba(237, 232, 223, 0.2)';
    textPrimary = '#EDE8DF';
    textSecondary = '#C5A880';
    lineAccent = '#C5A880';
  }

  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${stroke}" stroke-width="0.5"/>
    </pattern>
    <linearGradient id="duskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#161D18" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#1B231D" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#222B24" stop-opacity="0.95" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="${bg}" />
  <rect width="100%" height="100%" fill="url(#duskGrad)" />
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4" />
  <rect x="50" y="50" width="${width - 100}" height="${height - 100}" fill="none" stroke="${lineAccent}" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="6 4" />
  <text x="80" y="${height / 2 - 10}" font-family="Georgia, serif" font-size="28" font-weight="500" fill="${textPrimary}" letter-spacing="1.5">${title}</text>
  <text x="80" y="${height / 2 + 30}" font-family="sans-serif" font-size="11" font-weight="600" fill="${textSecondary}" letter-spacing="3.5">${subtitle}</text>
</svg>
  `;
  return toBase64DataUrl(svgString);
}
