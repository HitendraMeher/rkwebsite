import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { StudentProjectsSection } from './components/StudentProjectsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ContactStrip } from './components/ContactStrip';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { InquiryModal } from './components/InquiryModal';
import { BannerModal } from './components/BannerModal';
import { AdminDashboard } from './components/AdminDashboard';
import { TopDiwaliBanner, FloatingDiyaGreeting, DiwaliSectionDivider } from './components/DiwaliDecoration';
import { DiwaliFireworks } from './components/DiwaliFireworks';
import { trackingService } from './services/trackingService';
import { scrollToSection } from './utils/scroll';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>(undefined);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(false);
  const [activeCourseDetailId, setActiveCourseDetailId] = useState<string | null>(null);

  // Initialize website visitor session tracking & hidden admin access (#admin or Ctrl+Shift+A)
  useEffect(() => {
    trackingService.initVisitorSession();

    const checkHashForAdmin = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#rkadmin') {
        setAdminDashboardOpen(true);
      }
    };
    checkHashForAdmin();
    window.addEventListener('hashchange', checkHashForAdmin);

    // Discreet keyboard shortcut: Ctrl+Shift+A or Meta+Shift+A
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setAdminDashboardOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHashForAdmin);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenInquiry = (courseName?: string) => {
    setSelectedCourseForModal(courseName || 'Auto CAD 2D');
    setInquiryModalOpen(true);
    trackingService.trackSectionView('Open Inquiry Modal');
  };

  const handleScrollToCourses = () => {
    scrollToSection('courses');
    trackingService.trackSectionView('Courses Section');
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-[#9b1747] selection:text-white">
      {/* Minimal Diwali Festive Announcement Banner (Dismissible) */}
      <TopDiwaliBanner onOpenEnquire={handleOpenInquiry} />

      {/* 1. Header (Navbar with 1 WhatsApp Circle & 1 Call Circle) */}
      <Header
        onOpenEnquire={() => handleOpenInquiry()}
        onOpenBanner={() => setBannerModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCourses={handleScrollToCourses}
          onWatchVideo={() => setVideoModalOpen(true)}
        />

        {/* Festive Diwali Section Divider 1 */}
        <DiwaliSectionDivider label="Auspicious Festive Batches" />

        {/* 3. Industry-Relevant Courses */}
        <CoursesSection
          onSelectCourse={(courseId) => {
            setActiveCourseDetailId(courseId);
            trackingService.trackSectionView(`View Course: ${courseId}`);
          }}
        />

        {/* 4. Why Choose RK? (More Than Just a Class with Single Highlighted Govt Accreditation) */}
        <WhyChooseSection
          onOpenEnquire={() => handleOpenInquiry()}
        />

        {/* Festive Diwali Section Divider 2 */}
        <DiwaliSectionDivider label="Student Festive Portfolio" />

        {/* 5. Student Projects */}
        <StudentProjectsSection />

        {/* 6. What Our Students Say */}
        <TestimonialSection />

        {/* 7. Contact Strip */}
        <ContactStrip />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenBanner={() => setBannerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenEnquire={() => handleOpenInquiry()}
      />

      <CourseDetailModal
        courseId={activeCourseDetailId}
        onClose={() => setActiveCourseDetailId(null)}
        onEnquire={(courseName) => handleOpenInquiry(courseName)}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedCourse={selectedCourseForModal}
      />

      <BannerModal
        isOpen={bannerModalOpen}
        onClose={() => setBannerModalOpen(false)}
      />

      {/* Admin Management Dashboard & Visitor / Inquiry Tracker (Protected by Login) */}
      <AdminDashboard
        isOpen={adminDashboardOpen}
        onClose={() => {
          setAdminDashboardOpen(false);
          if (window.location.hash === '#admin' || window.location.hash === '#rkadmin') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />

      {/* Minimal Floating Diya Greetings (Bottom Left) */}
      <FloatingDiyaGreeting onOpenEnquire={handleOpenInquiry} />
    </div>
  );
}
