const fs = require('fs');
const path = require('path');

function createSvgPlaceholder(width, height, title, subtitle, bgColor, textCol, iconType = 'code') {
  const icons = {
    code: `<rect x="30" y="30" width="60" height="40" rx="6" fill="none" stroke="${textCol}" stroke-width="4"/><path d="M45 45l-8 5 8 5M75 45l8 5-8 5M63 42l-6 16" stroke="${textCol}" stroke-width="3" stroke-linecap="round"/>`,
    design: `<circle cx="60" cy="50" r="25" fill="none" stroke="${textCol}" stroke-width="4"/><path d="M45 50a15 15 0 0 1 30 0" stroke="${textCol}" stroke-width="4"/>`,
    video: `<polygon points="45,35 80,50 45,65" fill="${textCol}"/>`,
    cert: `<rect x="30" y="25" width="60" height="50" rx="4" fill="none" stroke="${textCol}" stroke-width="4"/><circle cx="60" cy="50" r="12" fill="none" stroke="${textCol}" stroke-width="3"/>`
  };

  const selectedIcon = icons[iconType] || icons.code;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor[0]}"/>
      <stop offset="100%" stop-color="${bgColor[1]}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <!-- Decorative Grid -->
  <g opacity="0.1" stroke="#ffffff" stroke-width="1">
    <path d="M 0,40 L ${width},40 M 0,80 L ${width},80 M 0,120 L ${width},120 M 0,160 L ${width},160 M 0,200 L ${width},200 M 0,240 L ${width},240 M 0,280 L ${width},280 M 0,320 L ${width},320 M 0,360 L ${width},360"/>
    <path d="M 40,0 L 40,${height} M 80,0 L 80,${height} M 120,0 L 120,${height} M 160,0 L 160,${height} M 200,0 L 200,${height} M 240,0 L 240,${height} M 280,0 L 280,${height} M 320,0 L 320,${height}"/>
  </g>
  <g transform="translate(${width / 2 - 60}, ${height / 2 - 70})" filter="url(#glow)">
    ${selectedIcon}
  </g>
  <text x="50%" y="${height / 2 + 30}" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="${textCol}" text-anchor="middle">${title}</text>
  <text x="50%" y="${height / 2 + 60}" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="14" fill="${textCol}" opacity="0.8" text-anchor="middle">${subtitle}</text>
  <text x="50%" y="${height - 25}" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="${textCol}" opacity="0.5" text-anchor="middle">HS PORTFOLIO • HODAN SHARIIF</text>
</svg>`;
}

const projects = [
  { folder: 'project1', name: 'HAZNA E-commerce', tech: 'React • Tailwind • Node.js', bg: ['#1E1B4B', '#312E81'] },
  { folder: 'project2', name: 'Horyaal Hotel Booking', tech: 'React • Next.js • MongoDB', bg: ['#064E3B', '#047857'] },
  { folder: 'project3', name: 'SNU University Dashboard', tech: 'React • Chart.js • Tailwind', bg: ['#4C1D95', '#6D28D9'] },
  { folder: 'project4', name: 'Modern Portfolio Website', tech: 'React • Framer Motion', bg: ['#831843', '#BE185D'] },
  { folder: 'project5', name: 'News & Article Portal', tech: 'React • API • Tailwind', bg: ['#1E293B', '#334155'] },
  { folder: 'project6', name: 'Task Manager App', tech: 'React • Redux • Firebase', bg: ['#0F766E', '#14B8A6'] },
];

projects.forEach((proj, idx) => {
  const dir = path.join(__dirname, '..', 'src', 'assets', 'projects', proj.folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  // Cover
  fs.writeFileSync(
    path.join(dir, 'cover.jpg'),
    createSvgPlaceholder(800, 500, proj.name, proj.tech, proj.bg, '#F8FAFC', 'code')
  );
  // Additional gallery shots inside each project folder!
  fs.writeFileSync(
    path.join(dir, 'screenshot1.jpg'),
    createSvgPlaceholder(800, 500, `${proj.name} - Dashboard`, 'Analytics & Overview', proj.bg, '#F8FAFC', 'code')
  );
  fs.writeFileSync(
    path.join(dir, 'screenshot2.jpg'),
    createSvgPlaceholder(800, 500, `${proj.name} - Mobile View`, 'Responsive Interface', proj.bg, '#F8FAFC', 'code')
  );
});

const designs = [
  { file: 'design1.jpg', title: 'Coffee Time Poster', tag: 'Branding & Social Media', bg: ['#78350F', '#451A03'] },
  { file: 'design2.jpg', title: 'Ramadan Kareem Banner', tag: 'Islamic Greeting Art', bg: ['#1E1B4B', '#312E81'] },
  { file: 'design3.jpg', title: 'Nature Organic Banner', tag: 'Product Promotion', bg: ['#064E3B', '#047857'] },
  { file: 'design4.jpg', title: 'Digital Marketing Agency', tag: 'Corporate Flyer', bg: ['#1E3A8A', '#2563EB'] },
  { file: 'design5.jpg', title: 'Delicious Burger Promo', tag: 'Food & Restaurant', bg: ['#881337', '#9F1239'] },
  { file: 'design6.jpg', title: 'Beauty & Skincare Line', tag: 'Luxury Packaging', bg: ['#701A75', '#86198F'] },
  { file: 'design7.jpg', title: 'Special Offer 50% Off', tag: 'E-commerce Sale Banner', bg: ['#9A3412', '#C2410C'] },
];

designs.forEach(d => {
  const p = path.join(__dirname, '..', 'src', 'assets', 'designs', d.file);
  fs.writeFileSync(p, createSvgPlaceholder(600, 750, d.title, d.tag, d.bg, '#FFFFFF', 'design'));
});

const videos = [
  { file: 'video1.jpg', title: 'Product Commercial Ad', cat: 'Video Editing • After Effects', bg: ['#0F172A', '#1E293B'] },
  { file: 'video2.jpg', title: 'Cozy Cafe Promo Reels', cat: 'Short Form Content', bg: ['#451A03', '#78350F'] },
  { file: 'video3.jpg', title: 'Tech Event Highlights', cat: 'Cinematic Recap', bg: ['#312E81', '#4338CA'] },
  { file: 'video4.jpg', title: 'Brand Storyteller Vlog', cat: 'YouTube & Socials', bg: ['#831843', '#9D174D'] },
  { file: 'video5.jpg', title: 'Travel Vlog Mogadishu', cat: 'Color Graded Video', bg: ['#134E4A', '#0F766E'] },
];

videos.forEach(v => {
  const p = path.join(__dirname, '..', 'src', 'assets', 'videos', v.file);
  fs.writeFileSync(p, createSvgPlaceholder(800, 450, v.title, v.cat, v.bg, '#FFFFFF', 'video'));
});

console.log('Successfully generated sample local SVG assets!');
