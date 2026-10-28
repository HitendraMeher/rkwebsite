export interface Course {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  duration: string;
  level: string;
  prerequisites: string;
  description: string;
  image: string;
  badge: string;
  toolsLearned: string[];
  keyHighlights: string[];
  curriculum: {
    moduleNumber: string;
    title: string;
    topics: string[];
  }[];
  practicalProject: string;
}

export interface Testimonial {
  name: string;
  role: string;
  area: string;
  quote: string;
  courseTaken: string;
  rating: number;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  selectedCourse: string;
  preferredBatch: string;
  experienceLevel: string;
  message: string;
}
