// Vite dynamic glob imports for local asset folders
const profileGlob = import.meta.glob('/src/assets/profile/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const certificateGlob = import.meta.glob('/src/assets/certificates/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const projectGlob = import.meta.glob('/src/assets/projects/**/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const designGlob = import.meta.glob('/src/assets/designs/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const videoImageGlob = import.meta.glob('/src/assets/videos/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const videoMediaGlob = import.meta.glob('/src/assets/videos/*.{mp4,webm,mov}', { eager: true });

function resolveGlobUrl(moduleObj) {
  if (!moduleObj) return '';
  return typeof moduleObj === 'string' ? moduleObj : moduleObj.default || moduleObj;
}

/**
 * Get Profile Image
 */
export function getProfileImage() {
  const keys = Object.keys(profileGlob);
  if (keys.length > 0) {
    return resolveGlobUrl(profileGlob[keys[0]]);
  }
  // Online fallback high resolution portrait
  return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
}

/**
 * Get Certificates Images
 */
export function getCertificates() {
  const keys = Object.keys(certificateGlob).sort();
  const onlineCerts = [
    {
      id: 'cert-1',
      title: 'MERN Full Stack Web Development',
      issuer: 'Full Stack Engineering Institute',
      date: '2025',
      src: keys[0] ? resolveGlobUrl(certificateGlob[keys[0]]) : 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cert-2',
      title: 'Training Mobile Content Creation',
      issuer: 'Creative Video',
      date: '2026',
      src: keys[1] ? resolveGlobUrl(certificateGlob[keys[1]]) : 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return onlineCerts;
}

/**
 * Get Projects Data
 */
export function getProjects() {
  const projectFolders = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];
  const onlineCovers = [
    'https://images.unsplash.com/photo-1556742049-0a67e723927d?auto=format&fit=crop&w=1000&q=80', // E-commerce
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80', // Hotel Booking
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80', // University Dashboard
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80', // Portfolio
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80', // News Portal
    'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80', // Task Manager
  ];

  const projectMetadata = [
    {
      id: 'project1',
      title: 'HAZNA E-commerce Platform',
      description: 'A full-featured modern MERN e-commerce web application with real-time shopping cart, product filtering, payment integration, and responsive layout.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
    {
      id: 'project2',
      title: 'Horyaal Hotel Booking System',
      description: 'Luxury hotel reservation application featuring interactive room booking, availability calendar, and admin analytics dashboard.',
      tech: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
    {
      id: 'project3',
      title: 'SNU Student & Faculty Dashboard',
      description: 'Comprehensive university portal for grade tracking, course enrollment, schedule management, and real-time announcements.',
      tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
    {
      id: 'project4',
      title: 'Modern Developer Portfolio',
      description: 'High-performance award-winning portfolio built with Framer Motion, micro-interactions, glassmorphism, and responsive design.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
    {
      id: 'project5',
      title: 'Global News & Articles Portal',
      description: 'Dynamic news publication app with live category filtering, dark mode toggle, bookmarking feature, and API integration.',
      tech: ['React', 'News API', 'Tailwind CSS'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
    {
      id: 'project6',
      title: 'Agile Task Manager App',
      description: 'Productivity kanban application featuring drag-and-drop task boards, priority tagging, time tracking, and team collaboration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      demoUrl: 'https://github.com/Hodanshariif6',
      githubUrl: 'https://github.com/Hodanshariif6',
    },
  ];

  return projectFolders.map((folder, idx) => {
    const meta = projectMetadata[idx];
    const matchingKeys = Object.keys(projectGlob).filter((k) => k.includes(`/assets/projects/${folder}/`));
    const coverKey = matchingKeys.find((k) => k.toLowerCase().includes('cover'));
    const localCover = coverKey ? resolveGlobUrl(projectGlob[coverKey]) : '';
    
    // Prefer online cover or local cover
    const coverSrc = onlineCovers[idx] || localCover;
    const gallery = matchingKeys.length > 0 
      ? matchingKeys.map((k) => resolveGlobUrl(projectGlob[k]))
      : [coverSrc, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'];

    return {
      ...meta,
      cover: coverSrc,
      gallery: gallery,
    };
  });
}

/**
 * Get Graphic Design Items - Always uses local images from src/assets/designs/
 * Falls back to online images only if local file is missing.
 */
export function getGraphicDesigns() {
  const designMeta = [
    { title: 'Graphic Design Artwork #1',    category: 'Logo Design & Branding',      online: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #2',    category: 'Brand Identity & Packaging',  online: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #3',    category: 'Social Media & Poster',       online: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #4',    category: 'Logo Design & Identity',      online: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #5',    category: 'Vector Logo & Branding',      online: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #6',    category: 'Creative Design & Flyer',     online: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
    { title: 'Graphic Design Artwork #7',    category: 'Logo Design & Packaging',     online: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
  ];

  const localKeys = Object.keys(designGlob).sort();

  return designMeta.map((meta, idx) => {
    const localKey = localKeys[idx];
    // Use local image — it now contains real user-uploaded designs
    const src = localKey ? resolveGlobUrl(designGlob[localKey]) : meta.online;
    return {
      id: `design-${idx + 1}`,
      title: meta.title,
      category: meta.category,
      src,
    };
  });
}

/**
 * Get Videos Data - Combines uploaded MP4 files with high-res online video thumbnails
 */
export function getVideos() {
  const mediaKeys = Object.keys(videoMediaGlob).sort();
  
  const onlineThumbnails = [
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80', // Commercial Ad
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80', // Cafe Promo
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', // Event Highlights
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', // Brand Story
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // Travel Vlog
  ];

  const titles = [
    'Commercial Product Ad',
    'Cozy Cafe Promo Reel',
    'Social Media Event Highlights',
    'Creative Brand Story Vlog',
    'Cinematic Travel Video Edit',
  ];

  const categories = [
    'Product Advertisement',
    'Social Media Promo',
    'Event Highlights',
    'Content Creation',
    'Video Editing',
  ];

  // If local .mp4 files exist in src/assets/videos/
  if (mediaKeys.length > 0) {
    return mediaKeys.map((mKey, idx) => {
      const videoSrc = resolveGlobUrl(videoMediaGlob[mKey]);
      const thumb = onlineThumbnails[idx] || onlineThumbnails[0];

      return {
        id: `video-media-${idx + 1}`,
        title: titles[idx] || `Uploaded Video Project #${idx + 1}`,
        category: categories[idx] || 'Video Production',
        duration: 'HD Video',
        videoUrl: videoSrc,
        thumbnail: thumb,
        isUploadedVideo: true,
        link: 'https://www.tiktok.com/@hothann289',
      };
    });
  }

  return onlineThumbnails.map((thumb, idx) => ({
    id: `video-${idx + 1}`,
    title: titles[idx] || `Video Content #${idx + 1}`,
    category: categories[idx] || 'Video Editing',
    duration: '1:00',
    videoUrl: '',
    thumbnail: thumb,
    isUploadedVideo: false,
    link: 'https://www.tiktok.com/@hothann289',
  }));
}
