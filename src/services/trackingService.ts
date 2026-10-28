export interface VisitorRecord {
  id: string;
  sessionId: string;
  timestamp: string;
  dateStr: string;
  timeStr: string;
  device: 'Mobile' | 'Desktop' | 'Tablet';
  browser: string;
  os: string;
  city: string;
  referrer: string;
  sectionsViewed: string[];
  pageViews: number;
}

export interface EnquiryRecord {
  id: string;
  timestamp: string;
  dateStr: string;
  timeStr: string;
  fullName: string;
  phone: string;
  email: string;
  course: string;
  preferredBatch: string;
  experienceLevel: string;
  message: string;
  status: 'New' | 'Contacted' | 'Follow-up' | 'Enrolled' | 'Closed';
  notes?: string;
  source: string;
}

const VISITORS_KEY = 'rk_visitors_log_v2';
const ENQUIRIES_KEY = 'rk_enquiries_log_v2';
const CURRENT_SESSION_KEY = 'rk_current_session_id';

// Initial realistic seeded data for instant demonstration
const SEEDED_ENQUIRIES: EnquiryRecord[] = [
  {
    id: 'ENQ-8021',
    timestamp: new Date(Date.now() - 38 * 60 * 1000).toISOString(),
    dateStr: new Date(Date.now() - 38 * 60 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    timeStr: '04:15 PM',
    fullName: 'Pooja Kulkarni',
    phone: '9820145520',
    email: 'pooja.kulkarni@gmail.com',
    course: 'Auto CAD 2D',
    preferredBatch: 'Morning (9 AM - 12 PM)',
    experienceLevel: 'Complete Beginner',
    message: 'Want to learn 2D layouts for residential apartments. Need syllabus and fee details.',
    status: 'New',
    source: 'Website Form'
  },
  {
    id: 'ENQ-8020',
    timestamp: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
    dateStr: new Date(Date.now() - 3 * 3600 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    timeStr: '01:45 PM',
    fullName: 'Rohan Mehta',
    phone: '9892301982',
    email: 'rohan.designs99@outlook.com',
    course: "3D'SMax Vray Photoshop (6 Το 8 Months)",
    preferredBatch: 'Weekend Special (Sat & Sun)',
    experienceLevel: 'Interior Design Student',
    message: 'Currently studying 2nd yr interior diploma. Looking for photorealistic 3ds max rendering training.',
    status: 'Contacted',
    notes: 'Called on 26 Oct. Sent brochure and batch timetable on WhatsApp.',
    source: 'WhatsApp Direct'
  },
  {
    id: 'ENQ-8019',
    timestamp: new Date(Date.now() - 19 * 3600 * 1000).toISOString(),
    dateStr: new Date(Date.now() - 19 * 3600 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    timeStr: '09:20 PM',
    fullName: 'Aditi Panchal',
    phone: '9167389201',
    email: 'aditi.panchal24@gmail.com',
    course: 'Both Courses (AutoCAD 2D + 3D Max Vray)',
    preferredBatch: 'Evening (5 PM - 8:30 PM)',
    experienceLevel: 'Career Switcher',
    message: 'Looking for 1-on-1 private coaching for career shift into architectural visualization.',
    status: 'Enrolled',
    notes: 'Walked in to Borivali center. Enrolled in November evening batch.',
    source: 'Website Form'
  },
  {
    id: 'ENQ-8018',
    timestamp: new Date(Date.now() - 28 * 3600 * 1000).toISOString(),
    dateStr: new Date(Date.now() - 28 * 3600 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    timeStr: '11:10 AM',
    fullName: 'Kunal Shah',
    phone: '9769024810',
    email: 'kunal.shah.arch@gmail.com',
    course: 'Auto CAD 2D',
    preferredBatch: 'Morning (9 AM - 12 PM)',
    experienceLevel: 'Architecture / Civil Engineer',
    message: 'Needs fast-track Civil layout and electrical planning modules certification.',
    status: 'Follow-up',
    notes: 'Demo session scheduled for Saturday 11 AM.',
    source: 'Website Form'
  }
];

const SEEDED_VISITORS: VisitorRecord[] = [
  {
    id: 'VIS-991',
    sessionId: 'sess_991_mumbai',
    timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: 'Just now',
    device: 'Mobile',
    browser: 'Chrome Mobile 122',
    os: 'Android 14',
    city: 'Borivali West, Mumbai',
    referrer: 'Google Search ("interior design classes borivali")',
    sectionsViewed: ['Home', 'Courses', 'About', 'Enquire Modal'],
    pageViews: 6
  },
  {
    id: 'VIS-990',
    sessionId: 'sess_990_kandivali',
    timestamp: new Date(Date.now() - 22 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: '22 mins ago',
    device: 'Desktop',
    browser: 'Chrome 122',
    os: 'Windows 11',
    city: 'Kandivali West, Mumbai',
    referrer: 'Direct / Bookmark',
    sectionsViewed: ['Home', 'Courses', '3DSMax Details', 'Gallery', 'Contact'],
    pageViews: 8
  },
  {
    id: 'VIS-989',
    sessionId: 'sess_989_malad',
    timestamp: new Date(Date.now() - 55 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: '55 mins ago',
    device: 'Mobile',
    browser: 'Mobile Safari',
    os: 'iOS 17.4 (iPhone)',
    city: 'Malad West, Mumbai',
    referrer: 'Instagram (@rk_institute_mumbai)',
    sectionsViewed: ['Home', 'Gallery', 'Courses', 'WhatsApp Click'],
    pageViews: 5
  },
  {
    id: 'VIS-988',
    sessionId: 'sess_988_andheri',
    timestamp: new Date(Date.now() - 110 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: '1.8 hrs ago',
    device: 'Desktop',
    browser: 'Edge 121',
    os: 'Windows 10',
    city: 'Andheri West, Mumbai',
    referrer: 'Justdial Mumbai Directory',
    sectionsViewed: ['Home', 'Courses', 'AutoCAD Details', 'Testimonials'],
    pageViews: 4
  },
  {
    id: 'VIS-987',
    sessionId: 'sess_987_dahisar',
    timestamp: new Date(Date.now() - 210 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: '3.5 hrs ago',
    device: 'Mobile',
    browser: 'Chrome Mobile 122',
    os: 'Android 13',
    city: 'Dahisar East, Mumbai',
    referrer: 'WhatsApp Share Link',
    sectionsViewed: ['Home', 'Courses', 'About (Govt Certificate)'],
    pageViews: 3
  },
  {
    id: 'VIS-986',
    sessionId: 'sess_986_borivali',
    timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(),
    dateStr: 'Today',
    timeStr: '5.3 hrs ago',
    device: 'Desktop',
    browser: 'Firefox 123',
    os: 'macOS Sonoma',
    city: 'Borivali East, Mumbai',
    referrer: 'Google Maps Place Link',
    sectionsViewed: ['Home', 'Courses', 'Contact', 'Enquire Modal'],
    pageViews: 7
  }
];

function detectDevice(): 'Mobile' | 'Desktop' | 'Tablet' {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return 'Tablet';
  if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function detectBrowser(): string {
  if (typeof window === 'undefined') return 'Chrome';
  const ua = navigator.userAgent;
  if (ua.indexOf('Edg') > -1) return 'Microsoft Edge';
  if (ua.indexOf('Chrome') > -1) return 'Google Chrome';
  if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) return 'Apple Safari';
  if (ua.indexOf('Firefox') > -1) return 'Mozilla Firefox';
  return 'Web Browser';
}

function detectOS(): string {
  if (typeof window === 'undefined') return 'Windows';
  const ua = navigator.userAgent;
  if (/Android/.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
  if (/Mac OS X/.test(ua)) return 'macOS';
  if (/Windows/.test(ua)) return 'Windows';
  if (/Linux/.test(ua)) return 'Linux';
  return 'Unknown OS';
}

export const trackingService = {
  getEnquiries(): EnquiryRecord[] {
    try {
      const stored = localStorage.getItem(ENQUIRIES_KEY);
      if (!stored) {
        localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(SEEDED_ENQUIRIES));
        return SEEDED_ENQUIRIES;
      }
      return JSON.parse(stored);
    } catch {
      return SEEDED_ENQUIRIES;
    }
  },

  getVisitors(): VisitorRecord[] {
    try {
      const stored = localStorage.getItem(VISITORS_KEY);
      if (!stored) {
        localStorage.setItem(VISITORS_KEY, JSON.stringify(SEEDED_VISITORS));
        return SEEDED_VISITORS;
      }
      return JSON.parse(stored);
    } catch {
      return SEEDED_VISITORS;
    }
  },

  initVisitorSession(): void {
    if (typeof window === 'undefined') return;

    try {
      let currentSessionId = sessionStorage.getItem(CURRENT_SESSION_KEY);
      const visitors = this.getVisitors();

      if (!currentSessionId) {
        // Create new visit session
        currentSessionId = 'sess_' + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem(CURRENT_SESSION_KEY, currentSessionId);

        const now = new Date();
        const newVisitor: VisitorRecord = {
          id: 'VIS-' + Math.floor(1000 + Math.random() * 9000),
          sessionId: currentSessionId,
          timestamp: now.toISOString(),
          dateStr: 'Today',
          timeStr: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
          device: detectDevice(),
          browser: detectBrowser(),
          os: detectOS(),
          city: 'Mumbai, Maharashtra',
          referrer: document.referrer ? document.referrer.slice(0, 40) : 'Direct Visit',
          sectionsViewed: ['Home'],
          pageViews: 1
        };

        const updated = [newVisitor, ...visitors];
        localStorage.setItem(VISITORS_KEY, JSON.stringify(updated.slice(0, 100)));
        window.dispatchEvent(new Event('rk_data_updated'));
      }
    } catch (e) {
      console.warn('Visitor tracking error:', e);
    }
  },

  trackSectionView(sectionName: string): void {
    if (typeof window === 'undefined') return;
    try {
      const currentSessionId = sessionStorage.getItem(CURRENT_SESSION_KEY);
      if (!currentSessionId) return;

      const visitors = this.getVisitors();
      const updated = visitors.map(v => {
        if (v.sessionId === currentSessionId) {
          const viewed = v.sectionsViewed.includes(sectionName)
            ? v.sectionsViewed
            : [...v.sectionsViewed, sectionName];
          return {
            ...v,
            sectionsViewed: viewed,
            pageViews: v.pageViews + 1
          };
        }
        return v;
      });

      localStorage.setItem(VISITORS_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event('rk_data_updated'));
    } catch {
      // ignore silently
    }
  },

  logEnquiry(data: {
    fullName: string;
    phone: string;
    email?: string;
    course: string;
    preferredBatch: string;
    experienceLevel: string;
    message?: string;
    source?: string;
  }): EnquiryRecord {
    const enquiries = this.getEnquiries();
    const now = new Date();

    const newEnquiry: EnquiryRecord = {
      id: 'ENQ-' + Math.floor(1000 + Math.random() * 9000),
      timestamp: now.toISOString(),
      dateStr: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      timeStr: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      fullName: data.fullName.trim(),
      phone: data.phone.trim(),
      email: (data.email || '').trim(),
      course: data.course,
      preferredBatch: data.preferredBatch,
      experienceLevel: data.experienceLevel,
      message: (data.message || '').trim(),
      status: 'New',
      source: data.source || 'Website Form'
    };

    const updated = [newEnquiry, ...enquiries];
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('rk_data_updated'));

    // Also update visitor log if current session submitted an enquiry
    this.trackSectionView('Enquiry Submitted');

    return newEnquiry;
  },

  updateEnquiryStatus(id: string, status: EnquiryRecord['status'], notes?: string): void {
    const enquiries = this.getEnquiries();
    const updated = enquiries.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status,
          notes: notes !== undefined ? notes : item.notes
        };
      }
      return item;
    });
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('rk_data_updated'));
  },

  deleteEnquiry(id: string): void {
    const enquiries = this.getEnquiries().filter(item => item.id !== id);
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(enquiries));
    window.dispatchEvent(new Event('rk_data_updated'));
  },

  deleteVisitor(id: string): void {
    const visitors = this.getVisitors().filter(item => item.id !== id);
    localStorage.setItem(VISITORS_KEY, JSON.stringify(visitors));
    window.dispatchEvent(new Event('rk_data_updated'));
  },

  exportEnquiriesToCSV(): void {
    const data = this.getEnquiries();
    const headers = ['Enquiry ID', 'Date', 'Time', 'Student Name', 'Phone', 'Email', 'Course', 'Batch Time', 'Experience', 'Status', 'Notes'];
    const rows = data.map(e => [
      e.id,
      e.dateStr,
      e.timeStr,
      `"${e.fullName.replace(/"/g, '""')}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      `"${e.course.replace(/"/g, '""')}"`,
      `"${e.preferredBatch}"`,
      `"${e.experienceLevel}"`,
      e.status,
      `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rk_institute_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  exportVisitorsToCSV(): void {
    const data = this.getVisitors();
    const headers = ['Visitor ID', 'Timestamp', 'Device', 'OS', 'Browser', 'City / Location', 'Referrer', 'Sections Visited', 'Page Views'];
    const rows = data.map(v => [
      v.id,
      `${v.dateStr} ${v.timeStr}`,
      v.device,
      v.os,
      `"${v.browser}"`,
      `"${v.city}"`,
      `"${v.referrer.replace(/"/g, '""')}"`,
      `"${v.sectionsViewed.join(' > ')}"`,
      v.pageViews
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rk_institute_visitors_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
