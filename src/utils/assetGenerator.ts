// Architectural SVG Vector Graphic & Photorealistic Local Asset Helper
// Generates clean, rich architectural imagery for local rendering.

export interface ArchitecturalSvgOptions {
  width?: number;
  height?: number;
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light' | 'stone' | 'olive' | 'accent' | 'hero';
  pattern?: 'blueprint' | 'elevation' | 'interior' | 'wood' | 'stone';
}

export function createArchitecturalSvgDataUrl(options: ArchitecturalSvgOptions): string {
  const width = options.width || 1600;
  const height = options.height || 1000;
  const title = options.title.replace(/"/g, '&quot;');
  const subtitle = (options.subtitle || 'ARDAN ARCHITECTURAL STUDIO').replace(/"/g, '&quot;');

  if (options.theme === 'hero') {
    // Rich Photorealistic Dusk Glass Residence Architectural Image
    const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Dusk Twilight Sky Gradient -->
    <linearGradient id="heroSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B100C" />
      <stop offset="40%" stop-color="#141C16" />
      <stop offset="80%" stop-color="#1F2A21" />
      <stop offset="100%" stop-color="#28352A" />
    </linearGradient>

    <!-- Warm Interior Glowing Light -->
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

    <!-- Exterior Terrace Warm Spotlights -->
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

  <!-- Sky Base -->
  <rect width="100%" height="100%" fill="url(#heroSky)" />

  <!-- Surrounding Dusk Forest Silhouettes (Right & Background) -->
  <path d="M 600 ${height} Q 680 400 750 300 T 900 250 T 1100 200 T 1350 180 T ${width} 220 L ${width} ${height} Z" fill="#0B100C" opacity="0.9" />
  <path d="M 800 ${height} Q 920 350 1050 280 T 1280 220 T ${width} 240 L ${width} ${height} Z" fill="#121A14" opacity="0.7" />

  <!-- Contemporary 2-Storey Luxury Architectural Glass Residence (Positioned Right-Center) -->
  <g transform="translate(620, 240)">
    <!-- Main Charcoal Structural Cantilever Shell -->
    <rect x="0" y="0" width="900" height="600" rx="12" fill="#141C16" stroke="#253227" stroke-width="4" />
    <rect x="20" y="20" width="860" height="560" fill="#1B241D" />

    <!-- UPPER FLOOR ARCHITECTURE -->
    <!-- Warm Interior Glowing Space -->
    <rect x="60" y="50" width="780" height="230" fill="url(#interiorGlowUpper)" />

    <!-- Upper Interior Furniture & Joinery Silhouettes -->
    <rect x="120" y="180" width="240" height="100" fill="#1B231D" opacity="0.85" rx="4" />
    <line x1="120" y1="180" x2="360" y2="180" stroke="#C5A880" stroke-width="3" />
    <!-- Pendant Lights Upper -->
    <circle cx="200" cy="110" r="12" fill="#FFF9E6" />
    <circle cx="280" cy="110" r="12" fill="#FFF9E6" />
    <line x1="200" y1="50" x2="200" y2="100" stroke="#C5A880" stroke-width="1.5" />
    <line x1="280" y1="50" x2="280" y2="100" stroke="#C5A880" stroke-width="1.5" />

    <!-- Upper Floor Glass Facade & Steel Mullions -->
    <rect x="60" y="50" width="780" height="230" fill="url(#glassReflect)" stroke="#2B382D" stroke-width="3" />
    <line x1="250" y1="50" x2="250" y2="280" stroke="#0D120E" stroke-width="4" />
    <line x1="440" y1="50" x2="440" y2="280" stroke="#0D120E" stroke-width="4" />
    <line x1="630" y1="50" x2="630" y2="280" stroke="#0D120E" stroke-width="4" />

    <!-- Cantilever Floor Beam Divider -->
    <rect x="0" y="280" width="900" height="35" fill="#0D120E" />
    <line x1="0" y1="280" x2="900" y2="280" stroke="#C5A880" stroke-width="2" stroke-opacity="0.6" />

    <!-- GROUND FLOOR ARCHITECTURE -->
    <!-- Expansive Open Plan Living & Kitchen Glow -->
    <rect x="40" y="315" width="820" height="250" fill="url(#interiorGlowLower)" />

    <!-- Ground Floor Kitchen Island & Lounge Silhouettes -->
    <rect x="100" y="440" width="340" height="125" fill="#141C16" opacity="0.9" rx="6" />
    <rect x="100" y="430" width="340" height="10" fill="#EAE6E1" opacity="0.9" /> <!-- Quartz Top -->
    <rect x="520" y="450" width="280" height="115" fill="#19221B" opacity="0.85" rx="8" /> <!-- Sofa Lounge -->

    <!-- Ground Floor Full-Height Sliding Glass Doors -->
    <rect x="40" y="315" width="820" height="250" fill="url(#glassReflect)" stroke="#2B382D" stroke-width="3" />
    <line x1="240" y1="315" x2="240" y2="565" stroke="#0D120E" stroke-width="5" />
    <line x1="440" y1="315" x2="440" y2="565" stroke="#0D120E" stroke-width="5" />
    <line x1="640" y1="315" x2="640" y2="565" stroke="#0D120E" stroke-width="5" />
  </g>

  <!-- Outdoor Stone Terrace & Step Lights (Foreground) -->
  <polygon points="450,840 ${width},840 ${width},${height} 450,${height}" fill="#141C16" />
  <line x1="450" y1="840" x2="${width}" y2="840" stroke="#C5A880" stroke-width="3" stroke-opacity="0.7" />
  <line x1="450" y1="870" x2="${width}" y2="870" stroke="#C5A880" stroke-width="2" stroke-opacity="0.4" />

  <!-- Terrace Step Lights Glowing -->
  <circle cx="550" cy="840" r="6" fill="#FFF2D4" />
  <rect x="520" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="850" cy="840" r="6" fill="#FFF2D4" />
  <rect x="820" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="1150" cy="840" r="6" fill="#FFF2D4" />
  <rect x="1120" y="840" width="60" height="40" fill="url(#patioSpot)" />
  <circle cx="1450" cy="840" r="6" fill="#FFF2D4" />
  <rect x="1420" y="840" width="60" height="40" fill="url(#patioSpot)" />

  <!-- Left Dark Gradient Vignette directly in SVG for maximum contrast -->
  <rect width="70%" height="100%" fill="url(#heroSky)" opacity="0.85" />
</svg>
    `.trim();
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(heroSvg)}`;
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
    <linearGradient id="warmGlow" x1="50%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A880" stop-opacity="0.35" />
      <stop offset="60%" stop-color="#8E877D" stop-opacity="0.15" />
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.95" />
    </linearGradient>
    <linearGradient id="duskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#161D18" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#1B231D" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#222B24" stop-opacity="0.95" />
    </linearGradient>
  </defs>

  <!-- Base Atmosphere -->
  <rect width="100%" height="100%" fill="${bg}" />
  <rect width="100%" height="100%" fill="url(#duskGrad)" />
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4" />

  <!-- Architectural 2-Storey Glass Residence Vector Silhouette -->
  <g opacity="0.65" transform="translate(450, 180)">
    <!-- Main Structure Frame -->
    <rect x="100" y="100" width="650" height="450" fill="#1B231D" stroke="${lineAccent}" stroke-width="2" stroke-opacity="0.6" />
    <!-- Upper Floor Glass Balcony & Windows -->
    <rect x="120" y="130" width="610" height="180" fill="url(#warmGlow)" stroke="${lineAccent}" stroke-width="1.5" stroke-opacity="0.8" />
    <line x1="320" y1="130" x2="320" y2="310" stroke="${lineAccent}" stroke-width="1" />
    <line x1="520" y1="130" x2="520" y2="310" stroke="${lineAccent}" stroke-width="1" />
    <!-- Ground Floor Open Living & Sliding Glass Doors -->
    <rect x="120" y="340" width="610" height="190" fill="url(#warmGlow)" stroke="${lineAccent}" stroke-width="1.5" stroke-opacity="0.8" />
    <line x1="280" y1="340" x2="280" y2="530" stroke="${lineAccent}" stroke-width="1" />
    <line x1="440" y1="340" x2="440" y2="530" stroke="${lineAccent}" stroke-width="1" />
    <line x1="600" y1="340" x2="600" y2="530" stroke="${lineAccent}" stroke-width="1" />
    <!-- Outdoor Patio Steps & Terrace Lighting -->
    <line x1="60" y1="560" x2="800" y2="560" stroke="${lineAccent}" stroke-width="2" stroke-opacity="0.7" />
    <line x1="80" y1="585" x2="780" y2="585" stroke="${lineAccent}" stroke-width="1.5" stroke-opacity="0.5" />
    <circle cx="150" cy="560" r="4" fill="#C5A880" />
    <circle cx="350" cy="560" r="4" fill="#C5A880" />
    <circle cx="550" cy="560" r="4" fill="#C5A880" />
    <circle cx="750" cy="560" r="4" fill="#C5A880" />
  </g>

  <!-- Architectural Framing & CAD Markings -->
  <rect x="50" y="50" width="${width - 100}" height="${height - 100}" fill="none" stroke="${lineAccent}" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="6 4" />
  <circle cx="150" cy="${height / 2}" r="120" fill="none" stroke="${lineAccent}" stroke-width="0.75" stroke-opacity="0.2" />

  <!-- Text Overlay -->
  <text x="80" y="${height / 2 - 10}" font-family="Georgia, serif" font-size="28" font-weight="500" fill="${textPrimary}" letter-spacing="1.5">${title}</text>
  <text x="80" y="${height / 2 + 30}" font-family="sans-serif" font-size="11" font-weight="600" fill="${textSecondary}" letter-spacing="3.5">${subtitle}</text>
</svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}
