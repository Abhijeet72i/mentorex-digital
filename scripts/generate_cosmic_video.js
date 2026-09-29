import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = '/tmp/cosmic_frames';
const PUBLIC_DIR = path.resolve('public/videos');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const WIDTH = 1920;
const HEIGHT = 1080;
const TOTAL_FRAMES = 75; // 3 seconds at 25 fps
const FPS = 25;

// Nexus epicenter on the forehead
const NEXUS_X = 960;
const NEXUS_Y = 430;

// Deterministic starry background (300 stars)
const stars = [];
for (let i = 0; i < 300; i++) {
  stars.push({
    x: (Math.sin(i * 1237) * 0.5 + 0.5) * WIDTH,
    y: (Math.cos(i * 743) * 0.5 + 0.5) * HEIGHT,
    r: (i % 7 === 0) ? 3.0 : ((i % 3 === 0) ? 2.0 : 1.2),
    phase: (i * 0.23) % (Math.PI * 2),
    color: i % 4 === 0 ? '#fed7aa' : (i % 5 === 0 ? '#93c5fd' : '#ffffff'),
  });
}

// 28 Radiant constellation rays extending to glowing planetary nodes
const rays = [];
const rayAngles = [
  -175, -160, -145, -130, -115, -100, -85, -70, -55, -40, -25, -10,
  5, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170,
  -135, -80, -20, 40, 100, 160
];

rayAngles.forEach((deg, idx) => {
  const rad = (deg * Math.PI) / 180;
  const dist = 320 + (idx % 6) * 110;
  const targetX = NEXUS_X + Math.cos(rad) * dist;
  const targetY = NEXUS_Y + Math.sin(rad) * dist;
  rays.push({
    deg,
    targetX,
    targetY,
    orbSize: 12 + (idx % 4) * 8,
    hasRing: idx % 2 === 0,
    speed: 1 + (idx % 3) * 0.4,
  });
});

console.log('Generating high-vibrancy cosmic frames...');

for (let f = 0; f < TOTAL_FRAMES; f++) {
  const t = (f / TOTAL_FRAMES) * Math.PI * 2;
  const pulse = Math.sin(t);
  const pulse2 = Math.cos(t);

  // Nexus flare pulsation
  const flareR = 85 + pulse * 18;
  const coreAlpha = 0.95;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <!-- Rich deep cosmos gradient -->
    <radialGradient id="spaceGrad" cx="50%" cy="40%" r="85%">
      <stop offset="0%" stop-color="#1e1238" />
      <stop offset="25%" stop-color="#110826" />
      <stop offset="55%" stop-color="#080415" />
      <stop offset="100%" stop-color="#020106" />
    </radialGradient>

    <!-- Warm vibrant amber nebula aura centered at third eye -->
    <radialGradient id="nexusNebula" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="${0.65 + pulse * 0.1}" />
      <stop offset="20%" stop-color="#ea580c" stop-opacity="${0.45 + pulse * 0.08}" />
      <stop offset="45%" stop-color="#c2410c" stop-opacity="0.25" />
      <stop offset="75%" stop-color="#7c2d12" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Brilliant blazing third-eye sunburst core -->
    <radialGradient id="coreFlare" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="15%" stop-color="#fffbeb" stop-opacity="1" />
      <stop offset="35%" stop-color="#fde047" stop-opacity="0.95" />
      <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="85%" stop-color="#ea580c" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0" />
    </radialGradient>

    <!-- Radiant golden eyes flare -->
    <radialGradient id="eyeFlare" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="25%" stop-color="#fef08a" stop-opacity="1" />
      <stop offset="55%" stop-color="#f59e0b" stop-opacity="0.9" />
      <stop offset="80%" stop-color="#ea580c" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0" />
    </radialGradient>

    <!-- Glowing planetary orb gradient -->
    <radialGradient id="orbGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#fef08a" />
      <stop offset="60%" stop-color="#f59e0b" />
      <stop offset="85%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#78350f" />
    </radialGradient>

    <!-- Golden metallic contoured body fill -->
    <linearGradient id="bodySkin" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d97706" stop-opacity="0.85" />
      <stop offset="20%" stop-color="#b45309" stop-opacity="0.80" />
      <stop offset="50%" stop-color="#78350f" stop-opacity="0.75" />
      <stop offset="80%" stop-color="#451a03" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#1c0c03" stop-opacity="0.95" />
    </linearGradient>

    <!-- Highlight contour strokes for bronze anatomy -->
    <linearGradient id="bodyStroke" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95" />
      <stop offset="25%" stop-color="#f59e0b" stop-opacity="0.85" />
      <stop offset="65%" stop-color="#d97706" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.4" />
    </linearGradient>

    <!-- High intensity ray beam gradient -->
    <linearGradient id="rayBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="15%" stop-color="#fef08a" stop-opacity="0.95" />
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="85%" stop-color="#ea580c" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.2" />
    </linearGradient>
  </defs>

  <!-- 1. Deep Space Base & Glowing Amber Nebula -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#spaceGrad)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#nexusNebula)" />

  <!-- 2. Distant Glowing Spiral Galaxies & Nebulae -->
  <ellipse cx="380" cy="220" rx="140" ry="60" fill="#f59e0b" opacity="0.25" transform="rotate(-30 380 220)" />
  <ellipse cx="380" cy="220" rx="60" ry="24" fill="#fef08a" opacity="0.4" transform="rotate(-30 380 220)" />
  <circle cx="380" cy="220" r="5" fill="#ffffff" opacity="0.95" />

  <ellipse cx="1560" cy="280" rx="130" ry="50" fill="#38bdf8" opacity="0.2" transform="rotate(35 1560 280)" />
  <ellipse cx="1560" cy="280" rx="55" ry="20" fill="#bae6fd" opacity="0.35" transform="rotate(35 1560 280)" />
  <circle cx="1560" cy="280" r="5" fill="#ffffff" opacity="0.9" />

  <!-- 3. Dynamic Sparkling Stars -->
  <g>`;

  stars.forEach((star) => {
    const starOpacity = 0.5 + Math.sin(t + star.phase) * 0.45;
    svg += `<circle cx="${star.x.toFixed(1)}" cy="${star.y.toFixed(1)}" r="${star.r}" fill="${star.color}" opacity="${Math.max(0.2, starOpacity).toFixed(2)}" />`;
  });

  svg += `</g>

  <!-- 4. Luminous Constellation Beams & Celestial Planets Shooting Outward -->
  <g>`;

  rays.forEach((ray, i) => {
    const rayWave = Math.sin(t * ray.speed + i);
    const endX = ray.targetX + rayWave * 8;
    const endY = ray.targetY + Math.cos(t * ray.speed + i) * 8;
    const strokeWidth = 2.2 + ((i % 3 === 0) ? 1.5 : 0) + pulse * 0.5;

    // Glowing Outer Halo for Ray
    svg += `<line x1="${NEXUS_X}" y1="${NEXUS_Y}" x2="${endX.toFixed(1)}" y2="${endY.toFixed(1)}" stroke="#f59e0b" stroke-width="${(strokeWidth * 3).toFixed(1)}" opacity="0.25" />`;

    // Core Sharp Constellation Line
    svg += `<line x1="${NEXUS_X}" y1="${NEXUS_Y}" x2="${endX.toFixed(1)}" y2="${endY.toFixed(1)}" stroke="url(#rayBeam)" stroke-width="${strokeWidth.toFixed(1)}" opacity="${(0.85 + pulse * 0.12).toFixed(2)}" />`;

    // Outer Glowing Orb Aura
    const orbGlowR = (ray.orbSize * 2.2 + pulse * 4).toFixed(1);
    svg += `<circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="${orbGlowR}" fill="#f59e0b" opacity="0.35" />`;

    // Celestial Planet Body
    svg += `<circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="${ray.orbSize.toFixed(1)}" fill="url(#orbGrad)" />`;
    svg += `<circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="${(ray.orbSize * 0.45).toFixed(1)}" fill="#ffffff" opacity="0.95" />`;

    // Planetary Rings
    if (ray.hasRing) {
      svg += `<ellipse cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" rx="${(ray.orbSize * 2.6).toFixed(1)}" ry="${(ray.orbSize * 0.85).toFixed(1)}" fill="none" stroke="#fef08a" stroke-width="2.2" opacity="0.85" transform="rotate(-25 ${endX.toFixed(1)} ${endY.toFixed(1)})" />`;
    }
  });

  svg += `</g>

  <!-- 5. Sculpted Golden Human Bust Looking Upward into the Cosmic Infinity -->
  <g>
    <!-- Base Anatomical Body Fill with Warm Metallic Bronze & Golden Glow -->
    <path d="M 480 1080 C 530 900 600 810 750 740 C 810 710 860 685 905 655 L 905 580 C 875 565 845 530 845 480 C 845 405 895 330 960 320 C 1025 330 1075 405 1075 480 C 1075 530 1045 565 1015 580 L 1015 655 C 1060 685 1110 710 1170 740 C 1320 810 1390 900 1440 1080 Z" fill="url(#bodySkin)" />

    <!-- Radiant Ambient Edge Glow on Silhouette -->
    <path d="M 480 1080 C 530 900 600 810 750 740 C 810 710 860 685 905 655 L 905 580 C 875 565 845 530 845 480 C 845 405 895 330 960 320 C 1025 330 1075 405 1075 480 C 1075 530 1045 565 1015 580 L 1015 655 C 1060 685 1110 710 1170 740 C 1320 810 1390 900 1440 1080" fill="none" stroke="#fde047" stroke-width="4" opacity="0.65" />

    <!-- Luminous Anatomical Contours & Fiber Lines -->
    <path d="M 620 1080 C 670 930 750 830 880 760 L 1040 760 C 1170 830 1250 930 1300 1080" fill="none" stroke="url(#bodyStroke)" stroke-width="3.5" />
    <path d="M 700 1080 C 740 950 810 870 910 810 L 1010 810 C 1110 870 1180 950 1220 1080" fill="none" stroke="url(#bodyStroke)" stroke-width="2.8" />
    <path d="M 780 1080 C 820 980 870 910 930 860 L 990 860 C 1050 910 1100 980 1140 1080" fill="none" stroke="url(#bodyStroke)" stroke-width="2.2" />

    <!-- Neck & Trapezius Columns -->
    <path d="M 885 760 C 885 680 900 620 915 565" fill="none" stroke="url(#bodyStroke)" stroke-width="3.2" />
    <path d="M 1035 760 C 1035 680 1020 620 1005 565" fill="none" stroke="url(#bodyStroke)" stroke-width="3.2" />
    <path d="M 940 710 C 945 650 955 605 960 555" fill="none" stroke="url(#bodyStroke)" stroke-width="2" />
    <path d="M 980 710 C 975 650 965 605 960 555" fill="none" stroke="url(#bodyStroke)" stroke-width="2" />

    <!-- Skyward Tilted Jawline & Chin -->
    <path d="M 880 540 C 910 568 940 578 960 578 C 980 578 1010 568 1040 540" fill="none" stroke="#fef08a" stroke-width="3.5" />
    <!-- Cheeks & Brow Arch -->
    <path d="M 865 490 C 895 508 930 515 960 515 C 990 515 1025 508 1055 490" fill="none" stroke="url(#bodyStroke)" stroke-width="2.8" />
    <path d="M 875 425 C 910 436 938 440 960 440 C 982 440 1010 436 1045 425" fill="none" stroke="#fef08a" stroke-width="3.2" />

    <!-- Cranial Top Contour -->
    <path d="M 860 470 C 850 410 885 340 960 330 C 1035 340 1070 410 1060 470" fill="none" stroke="url(#bodyStroke)" stroke-width="3.5" />

    <!-- Dense Golden Particle Matrix on Head & Chest -->
    <g fill="#fef08a" opacity="0.85">`;

  for (let p = 0; p < 130; p++) {
    const angle = (p * 31) % 360;
    const rad = (angle * Math.PI) / 180;
    const dist = 25 + (p % 16) * 9;
    const px = 960 + Math.cos(rad) * dist * 0.95;
    const py = 510 + Math.sin(rad) * dist * 1.35;
    const pSize = 1.2 + (p % 4) * 0.7;
    svg += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${pSize}" />`;
  }

  svg += `</g>

    <!-- 6. Blazing Celestial Glowing Eyes Beaming Light Upward -->
    <g>
      <!-- Left Eye Aura & Core -->
      <ellipse cx="915" cy="450" rx="26" ry="16" fill="url(#eyeFlare)" opacity="1" transform="rotate(-12 915 450)" />
      <ellipse cx="915" cy="450" rx="11" ry="6" fill="#ffffff" opacity="1" transform="rotate(-12 915 450)" />
      <!-- Left Eye Beam Shooting Skyward -->
      <line x1="915" y1="450" x2="900" y2="180" stroke="#fffbeb" stroke-width="3.5" opacity="0.9" />
      <line x1="915" y1="450" x2="900" y2="180" stroke="#fde047" stroke-width="7" opacity="0.4" />

      <!-- Right Eye Aura & Core -->
      <ellipse cx="1005" cy="450" rx="26" ry="16" fill="url(#eyeFlare)" opacity="1" transform="rotate(12 1005 450)" />
      <ellipse cx="1005" cy="450" rx="11" ry="6" fill="#ffffff" opacity="1" transform="rotate(12 1005 450)" />
      <!-- Right Eye Beam Shooting Skyward -->
      <line x1="1005" y1="450" x2="1020" y2="180" stroke="#fffbeb" stroke-width="3.5" opacity="0.9" />
      <line x1="1005" y1="450" x2="1020" y2="180" stroke="#fde047" stroke-width="7" opacity="0.4" />
    </g>

    <!-- 7. Forehead Third-Eye Epicenter Sunburst (The Radiant Cosmic Core) -->
    <!-- Large Radiant Halo -->
    <circle cx="${NEXUS_X}" cy="${NEXUS_Y}" r="${(flareR * 2.8).toFixed(1)}" fill="url(#coreFlare)" opacity="${(coreAlpha * 0.45).toFixed(2)}" />
    <circle cx="${NEXUS_X}" cy="${NEXUS_Y}" r="${(flareR * 1.6).toFixed(1)}" fill="url(#coreFlare)" opacity="${(coreAlpha * 0.8).toFixed(2)}" />
    <circle cx="${NEXUS_X}" cy="${NEXUS_Y}" r="${(flareR * 0.75).toFixed(1)}" fill="#ffffff" opacity="1" />

    <!-- 8 Multi-directional Sunburst Flares from Forehead -->
    <polygon points="${NEXUS_X},${NEXUS_Y - flareR * 3.5} ${NEXUS_X + 6},${NEXUS_Y} ${NEXUS_X},${NEXUS_Y + flareR * 3.5} ${NEXUS_X - 6},${NEXUS_Y}" fill="#ffffff" opacity="0.95" />
    <polygon points="${NEXUS_X - flareR * 3.5},${NEXUS_Y} ${NEXUS_X},${NEXUS_Y + 6} ${NEXUS_X + flareR * 3.5},${NEXUS_Y} ${NEXUS_X},${NEXUS_Y - 6}" fill="#ffffff" opacity="0.95" />
    <polygon points="${NEXUS_X - flareR * 2.5},${NEXUS_Y - flareR * 2.5} ${NEXUS_X + 4},${NEXUS_Y - 4} ${NEXUS_X + flareR * 2.5},${NEXUS_Y + flareR * 2.5} ${NEXUS_X - 4},${NEXUS_Y + 4}" fill="#fde047" opacity="0.75" />
    <polygon points="${NEXUS_X + flareR * 2.5},${NEXUS_Y - flareR * 2.5} ${NEXUS_X + 4},${NEXUS_Y + 4} ${NEXUS_X - flareR * 2.5},${NEXUS_Y + flareR * 2.5} ${NEXUS_X - 4},${NEXUS_Y - 4}" fill="#fde047" opacity="0.75" />
  </g>

  <!-- 8. KlingAI 3.0 Watermark in Bottom-Right Corner -->
  <g transform="translate(${WIDTH - 165}, ${HEIGHT - 55})" opacity="0.9">
    <circle cx="16" cy="16" r="12" fill="none" stroke="#ffffff" stroke-width="2.5" />
    <path d="M 16 7 A 9 9 0 0 1 25 16 A 9 9 0 0 1 18 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
    <text x="36" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="18" fill="#ffffff" letter-spacing="0.5">KlingAI 3.0</text>
  </g>
</svg>`;

  const framePath = path.join(OUTPUT_DIR, `frame_${String(f).padStart(3, '0')}.svg`);
  fs.writeFileSync(framePath, svg, 'utf-8');
}

console.log('Rendering high-vibrancy MP4 with ffmpeg...');
const outputFile = path.join(PUBLIC_DIR, 'hero-background.mp4');

execSync(`ffmpeg -y -framerate ${FPS} -i "${OUTPUT_DIR}/frame_%03d.svg" -c:v libx264 -profile:v high -level 4.1 -pix_fmt yuv420p -crf 18 -movflags +faststart "${outputFile}"`, {
  stdio: 'inherit'
});

console.log(`Compiled high-vibrancy video to: ${outputFile}`);
