import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Users,
  MessageSquare,
  TrendingUp,
  Download,
  Trash2,
  Phone,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Laptop,
  Smartphone,
  Globe,
  PlusCircle,
  X,
  ExternalLink,
  ChevronRight,
  LogOut,
  ArrowLeft
} from 'lucide-react';
import { trackingService, EnquiryRecord, VisitorRecord } from '../services/trackingService';
import { INSTITUTE_INFO } from '../data/instituteData';
import { WhatsAppIcon } from './SoftwareLogos';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('rk_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'enquiries' | 'visitors' | 'add_manual'>('enquiries');
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [visitors, setVisitors] = useState<VisitorRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // Manual enquiry form
  const [manualForm, setManualForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Auto CAD 2D',
    preferredBatch: 'Morning (9 AM - 12 PM)',
    experienceLevel: 'Complete Beginner',
    message: ''
  });
  const [manualSuccess, setManualSuccess] = useState(false);

  // Load and subscribe to tracking data
  const refreshData = () => {
    setEnquiries(trackingService.getEnquiries());
    setVisitors(trackingService.getVisitors());
  };

  useEffect(() => {
    refreshData();
    const handleUpdate = () => refreshData();
    window.addEventListener('rk_data_updated', handleUpdate);
    return () => window.removeEventListener('rk_data_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default authorized credentials
    if (
      (username.trim().toLowerCase() === 'admin' || username.trim().toLowerCase() === 'rkdirector') &&
      password.trim() === 'rkdesign2026'
    ) {
      sessionStorage.setItem('rk_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('rk_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // Status badge style helper
  const getStatusBadge = (status: EnquiryRecord['status']) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Follow-up':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Enrolled':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Closed':
        return 'bg-stone-100 text-stone-600 border-stone-200';
    }
  };

  // Filtered Enquiries
  const filteredEnquiries = enquiries.filter(item => {
    const matchesSearch =
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Filtered Visitors
  const filteredVisitors = visitors.filter(item => {
    return (
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.referrer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.browser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.device.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calculate Metrics
  const totalVisitorsCount = visitors.length;
  const totalEnquiriesCount = enquiries.length;
  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;
  const enrolledCount = enquiries.filter(e => e.status === 'Enrolled').length;
  const mobileVisitors = visitors.filter(v => v.device === 'Mobile').length;
  const desktopVisitors = visitors.filter(v => v.device === 'Desktop').length;

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.fullName || !manualForm.phone) return;

    trackingService.logEnquiry({
      ...manualForm,
      source: 'Admin Walk-in Entry'
    });

    setManualSuccess(true);
    setManualForm({
      fullName: '',
      phone: '',
      email: '',
      course: 'Auto CAD 2D',
      preferredBatch: 'Morning (9 AM - 12 PM)',
      experienceLevel: 'Complete Beginner',
      message: ''
    });

    setTimeout(() => {
      setManualSuccess(false);
      setActiveTab('enquiries');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-6xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh] animate-in fade-in duration-200">
        
        {/* If Not Authenticated -> Show Login Screen */}
        {!isAuthenticated ? (
          <div className="max-w-md w-full mx-auto p-6 sm:p-8 my-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#9b1747]/10 text-[#9b1747] flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Shield className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                Admin Portal Login
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                RK Interior Designer Institute · Secure Staff Access
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 pr-10 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                  {authError}
                </div>
              )}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Sign In to Admin Console</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-full text-stone-500 hover:text-stone-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <>
            {/* Top Navigation & Status Bar */}
            <div className="p-4 sm:p-5 bg-stone-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9b1747] flex items-center justify-center text-white font-bold font-serif text-xl shrink-0">
                  Rk
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold font-display text-white">
                      RK Institute Management Dashboard
                    </h2>
                    <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live Portal
                    </span>
                  </div>
                  <p className="text-xs text-stone-400">
                    Borivali West Campus · Real-time Visitors & Course Inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Website</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-rose-800/50"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-6 bg-stone-50 border-b border-stone-200">
              
              {/* Stat 1: Total Enquiries */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider">Total Enquiries</span>
                  <MessageSquare className="w-4 h-4 text-[#9b1747]" />
                </div>
                <div className="text-2xl font-extrabold text-stone-900">
                  {totalEnquiriesCount}
                </div>
                <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {newEnquiriesCount} New unhandled
                </div>
              </div>

              {/* Stat 2: Total Visitors */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider">Site Visitors</span>
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-extrabold text-stone-900">
                  {totalVisitorsCount}
                </div>
                <div className="text-[11px] text-stone-500 font-medium flex items-center gap-1.5 mt-1">
                  <span>📱 {mobileVisitors} Mobile</span>
                  <span>·</span>
                  <span>💻 {desktopVisitors} Desktop</span>
                </div>
              </div>

              {/* Stat 3: Conversion Rate */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider">Conversion Rate</span>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-extrabold text-stone-900">
                  {totalVisitorsCount > 0 ? ((totalEnquiriesCount / totalVisitorsCount) * 100).toFixed(1) : 0}%
                </div>
                <div className="text-[11px] text-stone-500 font-medium mt-1">
                  Visitors turning into leads
                </div>
              </div>

              {/* Stat 4: Admissions / Enrolled */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider">Enrolled Students</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-extrabold text-emerald-700">
                  {enrolledCount}
                </div>
                <div className="text-[11px] text-stone-500 font-medium mt-1">
                  Admissions finalized
                </div>
              </div>

            </div>

            {/* Dashboard Tabs & Action Strip */}
            <div className="px-4 sm:px-6 pt-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-white">
              
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('enquiries')}
                  className={`px-4 py-2.5 border-b-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'enquiries'
                      ? 'border-[#9b1747] text-[#9b1747]'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquiries & Leads</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-stone-100 text-stone-700 font-bold">
                    {enquiries.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('visitors')}
                  className={`px-4 py-2.5 border-b-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'visitors'
                      ? 'border-[#9b1747] text-[#9b1747]'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>Website Visitors</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-stone-100 text-stone-700 font-bold">
                    {visitors.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('add_manual')}
                  className={`px-4 py-2.5 border-b-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                    activeTab === 'add_manual'
                      ? 'border-[#9b1747] text-[#9b1747]'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add Walk-in Enquiry</span>
                </button>
              </div>

              {/* CSV Export & Search */}
              <div className="flex items-center gap-2 pb-2 sm:pb-0">
                {activeTab === 'enquiries' && (
                  <button
                    onClick={() => trackingService.exportEnquiriesToCSV()}
                    className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                )}
                {activeTab === 'visitors' && (
                  <button
                    onClick={() => trackingService.exportVisitorsToCSV()}
                    className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                )}
              </div>

            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-stone-50/50">
              
              {/* TAB 1: ENQUIRIES */}
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  {/* Search & Filter Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-stone-200">
                    <div className="relative flex-1 min-w-[220px]">
                      <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by student name, phone number, or course..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-stone-500">Status:</span>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="text-xs px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b1747]"
                      >
                        <option value="ALL">All ({enquiries.length})</option>
                        <option value="New">New ({enquiries.filter(e => e.status === 'New').length})</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Follow-up">Follow-up</option>
                        <option value="Enrolled">Enrolled</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>

                  {/* Enquiries Table */}
                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs">
                    {filteredEnquiries.length === 0 ? (
                      <div className="py-12 text-center text-stone-400">
                        <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No enquiries found matching your filter criteria.</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-semibold uppercase tracking-wider">
                              <th className="py-3 px-4">Date / ID</th>
                              <th className="py-3 px-4">Student Details</th>
                              <th className="py-3 px-4">Course & Batch</th>
                              <th className="py-3 px-4">Student Message</th>
                              <th className="py-3 px-4">Status</th>
                              <th className="py-3 px-4 text-right">Quick Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100">
                            {filteredEnquiries.map((enq) => (
                              <tr key={enq.id} className="hover:bg-stone-50/80 transition-colors">
                                
                                {/* Date & ID */}
                                <td className="py-3.5 px-4 whitespace-nowrap">
                                  <div className="font-bold text-stone-900">{enq.dateStr}</div>
                                  <div className="text-[11px] text-stone-400 font-mono">{enq.timeStr} · {enq.id}</div>
                                  <span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                                    {enq.source}
                                  </span>
                                </td>

                                {/* Student Details */}
                                <td className="py-3.5 px-4">
                                  <div className="font-bold text-sm text-stone-900">{enq.fullName}</div>
                                  <div className="font-mono text-stone-700 font-medium mt-0.5">{enq.phone}</div>
                                  {enq.email && (
                                    <div className="text-stone-400 text-[11px]">{enq.email}</div>
                                  )}
                                  <div className="text-[11px] text-stone-500 mt-1">
                                    Level: <span className="text-stone-700 font-medium">{enq.experienceLevel}</span>
                                  </div>
                                </td>

                                {/* Course & Batch */}
                                <td className="py-3.5 px-4 max-w-xs">
                                  <span className="inline-block px-2 py-0.5 rounded-md font-semibold text-[11px] bg-[#9b1747]/10 text-[#9b1747] border border-[#9b1747]/20">
                                    {enq.course}
                                  </span>
                                  <div className="text-stone-600 text-[11px] mt-1 flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-stone-400" />
                                    <span>{enq.preferredBatch}</span>
                                  </div>
                                </td>

                                {/* Message / Notes */}
                                <td className="py-3.5 px-4 max-w-xs">
                                  <p className="text-stone-600 text-xs italic line-clamp-2">
                                    "{enq.message || 'No custom query provided'}"
                                  </p>
                                  {enq.notes && (
                                    <div className="mt-1 text-[11px] text-amber-800 bg-amber-50 p-1.5 rounded border border-amber-200">
                                      <span className="font-semibold">Staff Note:</span> {enq.notes}
                                    </div>
                                  )}
                                </td>

                                {/* Status Selector */}
                                <td className="py-3.5 px-4 whitespace-nowrap">
                                  <select
                                    value={enq.status}
                                    onChange={(e) => trackingService.updateEnquiryStatus(enq.id, e.target.value as any)}
                                    className={`px-2 py-1 rounded-full text-xs font-bold border focus:outline-none cursor-pointer ${getStatusBadge(enq.status)}`}
                                  >
                                    <option value="New">● New</option>
                                    <option value="Contacted">● Contacted</option>
                                    <option value="Follow-up">● Follow-up</option>
                                    <option value="Enrolled">● Enrolled</option>
                                    <option value="Closed">● Closed</option>
                                  </select>
                                </td>

                                {/* Actions: Direct WhatsApp & Call */}
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <a
                                      href={`https://wa.me/91${enq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                                        `Hello ${enq.fullName}, this is RK Interior Designer Institute, Borivali West regarding your inquiry for ${enq.course}. How can we assist you with admissions & batch timings?`
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                                      title="Reply on WhatsApp"
                                    >
                                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                                    </a>
                                    <a
                                      href={`tel:${enq.phone}`}
                                      className="p-1.5 rounded-lg bg-[#9b1747]/10 text-[#9b1747] hover:bg-[#9b1747] hover:text-white transition-colors"
                                      title="Call Student"
                                    >
                                      <Phone className="w-4 h-4 fill-current stroke-none" />
                                    </a>
                                    <button
                                      onClick={() => {
                                        if (confirm(`Delete enquiry from ${enq.fullName}?`)) {
                                          trackingService.deleteEnquiry(enq.id);
                                        }
                                      }}
                                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                      title="Delete record"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>

                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: VISITORS */}
              {activeTab === 'visitors' && (
                <div className="space-y-4">
                  {/* Search Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-stone-200">
                    <div className="relative flex-1 min-w-[220px]">
                      <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by city, referrer, device, or browser..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                      />
                    </div>
                    <div className="text-xs text-stone-500 font-medium">
                      Showing {filteredVisitors.length} recorded website sessions
                    </div>
                  </div>

                  {/* Visitors Table */}
                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-semibold uppercase tracking-wider">
                            <th className="py-3 px-4">Visit Time / ID</th>
                            <th className="py-3 px-4">Device & Browser</th>
                            <th className="py-3 px-4">Estimated Location</th>
                            <th className="py-3 px-4">Traffic Source / Referrer</th>
                            <th className="py-3 px-4">Sections Visited</th>
                            <th className="py-3 px-4 text-center">Pageviews</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {filteredVisitors.map((v) => (
                            <tr key={v.id} className="hover:bg-stone-50/80 transition-colors">
                              
                              {/* Time / ID */}
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <div className="font-bold text-stone-900">{v.dateStr}</div>
                                <div className="text-[11px] text-stone-400 font-mono">{v.timeStr}</div>
                                <span className="text-[10px] text-stone-400 font-mono">{v.id}</span>
                              </td>

                              {/* Device & Browser */}
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                                  {v.device === 'Mobile' ? (
                                    <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                                  ) : (
                                    <Laptop className="w-3.5 h-3.5 text-stone-700" />
                                  )}
                                  <span>{v.device} ({v.os})</span>
                                </div>
                                <div className="text-[11px] text-stone-500 mt-0.5">{v.browser}</div>
                              </td>

                              {/* Location */}
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <span className="inline-flex items-center gap-1 font-medium text-stone-800">
                                  <Globe className="w-3 h-3 text-stone-400" />
                                  {v.city}
                                </span>
                              </td>

                              {/* Traffic Source */}
                              <td className="py-3.5 px-4 max-w-xs">
                                <span className="text-stone-700 font-medium line-clamp-1">
                                  {v.referrer}
                                </span>
                              </td>

                              {/* Sections Visited */}
                              <td className="py-3.5 px-4 max-w-sm">
                                <div className="flex flex-wrap gap-1">
                                  {v.sectionsViewed.map((sec, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-700"
                                    >
                                      {sec}
                                    </span>
                                  ))}
                                </div>
                              </td>

                              {/* Pageviews */}
                              <td className="py-3.5 px-4 text-center font-bold text-stone-800">
                                {v.pageViews}
                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: ADD WALK-IN ENQUIRY */}
              {activeTab === 'add_manual' && (
                <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <h3 className="text-base font-bold text-stone-900 mb-1">
                    Record Offline / Walk-in Student Enquiry
                  </h3>
                  <p className="text-xs text-stone-500 mb-5">
                    Save student details for Borivali West center visits or phone callers directly into the database.
                  </p>

                  {manualSuccess && (
                    <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Enquiry successfully recorded into database! Redirecting...</span>
                    </div>
                  )}

                  <form onSubmit={handleManualSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={manualForm.fullName}
                        onChange={(e) => setManualForm({ ...manualForm, fullName: e.target.value })}
                        placeholder="e.g. Shruti Patel"
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={manualForm.phone}
                          onChange={(e) => setManualForm({ ...manualForm, phone: e.target.value })}
                          placeholder="e.g. 9820011223"
                          className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={manualForm.email}
                          onChange={(e) => setManualForm({ ...manualForm, email: e.target.value })}
                          placeholder="student@gmail.com"
                          className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                        Interested Course
                      </label>
                      <select
                        value={manualForm.course}
                        onChange={(e) => setManualForm({ ...manualForm, course: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747]"
                      >
                        <option value="Auto CAD 2D">Auto CAD 2D</option>
                        <option value="3D'SMax Vray Photoshop (6 Το 8 Months)">3D'SMax Vray Photoshop (6 Το 8 Months)</option>
                        <option value="Both Courses (AutoCAD 2D + 3D'SMax Vray Photoshop)">Both Courses (AutoCAD 2D + 3D'SMax Vray Photoshop)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                          Batch Timing
                        </label>
                        <select
                          value={manualForm.preferredBatch}
                          onChange={(e) => setManualForm({ ...manualForm, preferredBatch: e.target.value })}
                          className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747]"
                        >
                          <option value="Morning (9 AM - 12 PM)">Morning (9:00 AM – 12:00 PM)</option>
                          <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="Evening (5 PM - 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                          <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                          Experience Level
                        </label>
                        <select
                          value={manualForm.experienceLevel}
                          onChange={(e) => setManualForm({ ...manualForm, experienceLevel: e.target.value })}
                          className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747]"
                        >
                          <option value="Complete Beginner">Complete Beginner</option>
                          <option value="Interior Design Student">Interior Design Student</option>
                          <option value="Architecture / Civil Engineer">Architecture / Civil Engineer</option>
                          <option value="Career Switcher">Career Switcher</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-700 mb-1">
                        Discussion Notes / Counselor Remarks
                      </label>
                      <textarea
                        rows={3}
                        value={manualForm.message}
                        onChange={(e) => setManualForm({ ...manualForm, message: e.target.value })}
                        placeholder="Visited center with parent. Interested in AutoCAD 2D morning slot starting next Monday..."
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9b1747] focus:bg-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-[#9b1747] hover:bg-[#821136] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                      >
                        Save Walk-in Lead to System
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </>
        )}

      </div>
    </div>
  );
};
