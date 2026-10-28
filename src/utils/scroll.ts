/**
 * Smoothly scrolls to a given section ID accounting for fixed/sticky header offset.
 * Designed to work reliably across mobile devices, desktop, and embedded iframe environments.
 */
export const scrollToSection = (sectionId: string, offset = 80) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const rawClean = sectionId.replace('#', '').trim().toLowerCase();
  
  // Resolve common section aliases
  const aliasMap: Record<string, string[]> = {
    home: ['home', 'hero', 'top'],
    courses: ['courses', 'programs', 'curriculum', 'classes'],
    about: ['about', 'why-us', 'whychoose', 'why-choose'],
    gallery: ['gallery', 'projects', 'student-work', 'work', 'student-projects'],
    projects: ['gallery', 'projects', 'student-work', 'work'],
    contact: ['contact', 'location', 'address', 'visit-us'],
    testimonials: ['testimonials', 'reviews', 'student-reviews'],
  };

  const candidateIds = aliasMap[rawClean] || [rawClean];

  let targetElement: HTMLElement | null = null;
  for (const id of candidateIds) {
    const el = document.getElementById(id) || document.querySelector<HTMLElement>(`[data-section="${id}"]`);
    if (el) {
      targetElement = el;
      break;
    }
  }

  if (!targetElement) {
    console.warn(`Target section for "${sectionId}" not found.`);
    return;
  }

  // Calculate position accounting for current scroll position and sticky header offset
  const rect = targetElement.getBoundingClientRect();
  const currentScrollTop =
    window.pageYOffset ||
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const targetTop = Math.max(0, Math.round(rect.top + currentScrollTop - offset));

  // Perform single smooth scroll command
  try {
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  } catch {
    window.scrollTo(0, targetTop);
  }

  // Update hash in URL quietly without triggering default jump
  if (window.history && window.history.replaceState) {
    try {
      window.history.replaceState(null, '', `#${candidateIds[0]}`);
    } catch {
      // ignore
    }
  }
};

