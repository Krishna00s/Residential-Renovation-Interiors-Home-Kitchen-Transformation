// Architectural SVG Vector Graphic & Local Asset Helper
// Generates clean, crisp architectural SVG patterns for local fallback & offline rendering.

export interface ArchitecturalSvgOptions {
  width?: number;
  height?: number;
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light' | 'stone' | 'olive' | 'accent';
  pattern?: 'blueprint' | 'elevation' | 'interior' | 'wood' | 'stone';
}

export function createArchitecturalSvgDataUrl(options: ArchitecturalSvgOptions): string {
  const width = options.width || 1200;
  const height = options.height || 800;
  const title = options.title.replace(/"/g, '&quot;');
  const subtitle = (options.subtitle || 'ARDAN ARCHITECTURAL STUDIO').replace(/"/g, '&quot;');

  let bg = '#121212';
  let stroke = 'rgba(197, 168, 128, 0.3)';
  let textPrimary = '#F9F8F6';
  let textSecondary = '#C5A880';
  let lineAccent = '#C5A880';

  if (options.theme === 'light') {
    bg = '#F9F8F6';
    stroke = 'rgba(18, 18, 18, 0.15)';
    textPrimary = '#121212';
    textSecondary = '#8C8275';
    lineAccent = '#8C8275';
  } else if (options.theme === 'stone') {
    bg = '#EAE6E1';
    stroke = 'rgba(18, 18, 18, 0.12)';
    textPrimary = '#1A1918';
    textSecondary = '#3E4A3D';
    lineAccent = '#3E4A3D';
  } else if (options.theme === 'olive') {
    bg = '#3E4A3D';
    stroke = 'rgba(249, 248, 246, 0.2)';
    textPrimary = '#F9F8F6';
    textSecondary = '#C5A880';
    lineAccent = '#C5A880';
  }

  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${stroke}" stroke-width="0.5"/>
    </pattern>
    <pattern id="diagonal" width="20" height="20" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="20" stroke="${stroke}" stroke-width="0.5" />
    </pattern>
    <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.98" />
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="100%" height="100%" fill="${bg}" />
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.8" />
  <rect width="100%" height="100%" fill="url(#overlayGrad)" />

  <!-- Architectural Framing Lines -->
  <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="none" stroke="${lineAccent}" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="8 4" />
  <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) * 0.3}" fill="none" stroke="${lineAccent}" stroke-width="0.75" stroke-opacity="0.25" />
  
  <!-- Architectural Dimension Lines -->
  <line x1="60" y1="${height - 60}" x2="${width - 60}" y2="${height - 60}" stroke="${lineAccent}" stroke-width="1" stroke-opacity="0.5" />
  <line x1="60" y1="${height - 65}" x2="60" y2="${height - 55}" stroke="${lineAccent}" stroke-width="1" />
  <line x1="${width - 60}" y1="${height - 65}" x2="${width - 60}" y2="${height - 55}" stroke="${lineAccent}" stroke-width="1" />

  <!-- Text Hierarchy -->
  <text x="${width / 2}" y="${height / 2 - 20}" font-family="Georgia, serif" font-size="32" font-weight="500" fill="${textPrimary}" text-anchor="middle" letter-spacing="1.5">${title}</text>
  <text x="${width / 2}" y="${height / 2 + 24}" font-family="sans-serif" font-size="12" font-weight="600" fill="${textSecondary}" text-anchor="middle" letter-spacing="4">${subtitle}</text>
  <text x="${width - 70}" y="${height - 70}" font-family="sans-serif" font-size="10" fill="${textSecondary}" text-anchor="end" letter-spacing="2">ARDAN CAD 01 // REV. 2026</text>
</svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}
