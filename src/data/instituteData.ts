import { Course, Testimonial } from '../types';
import { IMAGES } from '../assets/images';

export const INSTITUTE_INFO = {
  name: 'RK Interior Designer Institute',
  shortName: 'RK Institute',
  badge: 'Govt. Recognized Certification',
  subtitle: 'Private Computer Classes',
  phone: '7039063446',
  displayPhone: '+91 70390 63446',
  whatsappNumber: '917039063446',
  address: '903, Rijin, Skyline Deepak Mahal, Near Dwarka Hotel, Shimpoli Road, Mhatre Wadi, Borivali West, Mumbai, Maharashtra 400092',
  landmark: 'Near Dwarka Hotel, Shimpoli Road & Shimpoli Metro Station, Borivali West',
  googleMapsUrl: 'https://maps.google.com/?q=Skyline+Deepak+Mahal+Dwarka+Hotel+Shimpoli+Road+Borivali+West+Mumbai+400092',
  email: 'rkinteriordesignclasses@gmail.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 8:30 PM | Sunday: Special Weekend Batches',
  originalBannerUrl: IMAGES.banner,
  social: {
    instagram: 'https://www.instagram.com/rkinteriordesignerinstitute?obrf=bDd1cHA0NjIxaG04',
    facebook: 'https://www.facebook.com/share/1JHZapbzJd/'
  }
};

export const COURSES: Course[] = [
  {
    id: 'autocad-2d',
    name: 'Auto CAD 2D',
    shortName: 'Auto CAD 2D',
    tagline: 'Civil Layout, Elevations, Space Planning, Ceilings & Residential Projects',
    duration: '2 Months',
    level: 'Beginner to Professional',
    prerequisites: 'Basic computer familiarity; no prior drafting experience required',
    description: 'Comprehensive 2-month certified course in architectural & interior drafting. Master civil layouts, elevations, sections, space planning, false ceiling designs, furniture layouts, electrical schematics, and complete residential project drawing sets.',
    image: IMAGES.autocad,
    badge: '2 Months Course',
    toolsLearned: [
      'Civil Layout',
      'Elevation & Section',
      'Furniture Layout',
      'Dimension Layout',
      'Basic Design',
      'Space Planing',
      'Celing Layout',
      'False Celing Design',
      'Electrical Layout',
      'Residential Projects'
    ],
    keyHighlights: [
      'Civil Layout & Dimension Layout drafting with precision architectural accuracy',
      'Detailed Elevation & Section views for site execution and contractor guidance',
      'Ergonomic Space Planing, Basic Design principles & custom Furniture Layout',
      'Celing Layout, False Celing Design & Electrical Layout for Mumbai apartments',
      'Hands-on Residential Projects with complete working drawing submission sets'
    ],
    curriculum: [
      {
        moduleNumber: '01',
        title: 'Basic Design & Space Planing',
        topics: [
          'Basic Design principles, CAD workspace setup & unit configurations',
          'Space Planing fundamentals, anthropometrics & room circulation',
          'Drafting walls, doors, windows, and structural partitions',
          'Architectural conventions, standard symbols & drafting discipline'
        ]
      },
      {
        moduleNumber: '02',
        title: 'Civil Layout & Dimension Layout',
        topics: [
          'Civil Layout drafting with accurate structural dimensions and offsets',
          'Dimension Layout with customized linear, aligned, and angular dimension styles',
          'Layer management, line weights, color coding, and object snaps (OSNAP)',
          'Site measurement conversion into accurate municipal submission plans'
        ]
      },
      {
        moduleNumber: '03',
        title: 'Furniture Layout & Elevation & Section',
        topics: [
          'Interior Furniture Layout for living rooms, master bedrooms, kitchens & dining',
          'Dynamic furniture CAD blocks, fixture libraries & standard clearances',
          'Interior wall Elevation drafting with carpentry heights & material callouts',
          'Cross-Section drawing detailing structural heights, slabs, and beam drops'
        ]
      },
      {
        moduleNumber: '04',
        title: 'Celing Layout & False Celing Design',
        topics: [
          'Reflected Celing Layout planning and architectural grids',
          'False Celing Design: perimeter coves, stepped gypsum drops & wooden rafters',
          'Ceiling cross-sections, framing channels, pelmets, and AC vent locations',
          'Light fixture cut-outs, strip light grooves & maintenance trapdoors'
        ]
      },
      {
        moduleNumber: '05',
        title: 'Electrical Layout & Residential Projects',
        topics: [
          'Electrical Layout drafting for primary switches, 2-way switches & power sockets',
          'Ceiling downlights, cove lights, wall sconces, and DB distribution circuits',
          'Complete live Residential Projects (2BHK / 3BHK flat working drawings)',
          'Paper space layout tabs, title blocks, client presentation & scale PDF plotting'
        ]
      }
    ],
    practicalProject: 'Complete Residential Project Working Drawing Package: Civil Layout, Dimension Layout, Furniture Layout, Elevation & Section, Celing Layout, False Celing Design, Electrical Layout'
  },
  {
    id: '3dsmax-vray-photoshop',
    name: "3D'SMax Vray Photoshop (6 Το 8 Months)",
    shortName: "3D'SMax + Vray + PS",
    tagline: '3D Modeling, Realistic Vray Lighting, Texturing & Post-Production',
    duration: '6 Το 8 Months',
    level: 'Comprehensive Master Program',
    prerequisites: 'Basic CAD knowledge or design interest; zero prior 3D experience needed',
    description: "The complete 6 to 8 months industry master diploma. Learn 3D'S Max spatial modeling from basic keys and unit setup to advanced poly modeling and splines; realistic V-Ray materials, lights, and photorealistic rendering; plus Adobe Photoshop post-production and portfolio presentation.",
    image: IMAGES.livingRoom,
    badge: '6 Το 8 Months Course',
    toolsLearned: [
      'Modeling',
      'Camera',
      'Basic Keys & Unit Setup',
      'Materials',
      'Spline',
      'Rendering',
      'Poly',
      'Lights',
      'Vray',
      'Texturing',
      'Shape 2D & 3D',
      'UVW Mapping'
    ],
    keyHighlights: [
      'Master Basic Keys & Unit Setup and 2D/3D shape primitives in 3ds Max',
      'Spline modeling & Editable Poly for custom designer furniture and modular kitchens',
      'Photorealistic Vray global illumination, physical camera, IES lights & Sun/Sky',
      'PBR Materials creation, realistic Texturing & precision UVW Mapping',
      'Photoshop post-production, render pass compositing & client portfolio decks'
    ],
    curriculum: [
      {
        moduleNumber: '01',
        title: 'Basic Keys & Unit Setup, Shape 2D & 3D',
        topics: [
          '3ds Max interface customization, Basic Keys & navigation shortcuts',
          'Unit Setup (Metric mm / Imperial Feet-Inches) tailored for interior projects',
          'Shape 2D drawing (lines, rectangles, arcs, circles, text, splines)',
          'Shape 3D primitives (boxes, cylinders, spheres, planes) & pivot transforms'
        ]
      },
      {
        moduleNumber: '02',
        title: 'Spline & Poly Modeling',
        topics: [
          'Spline modeling: vertex types (Corner, Smooth, Bezier, Bezier Corner)',
          'Spline modifiers: Extrude, Sweep, Lathe, Bevel, Outline for mouldings and paneling',
          'Editable Poly mastery: Vertex, Edge, Border, Polygon, Element sub-objects',
          'Poly tools: Extrude, Inset, Bevel, Bridge, Connect, Chamfer, QuickSlice & Cut'
        ]
      },
      {
        moduleNumber: '03',
        title: 'Interior Spatial Modeling & Custom Furniture',
        topics: [
          'Importing 2D CAD floor plans and modeling complete interior room shells',
          'Modeling custom furniture: luxury beds, designer sofas, dining sets & wardrobes',
          'Modular kitchen modeling: base units, wall cabinets, profile handles & appliances',
          'Architectural ceiling coves, fluted wall panels, louvers & decorative partitions'
        ]
      },
      {
        moduleNumber: '04',
        title: 'Camera & Spatial Composition',
        topics: [
          'Physical Camera and Standard Camera placement at human eye height',
          'Camera focal length, lens angle & field of view (FOV) for tight interiors',
          'Automatic 2-point perspective correction for clean vertical architectural lines',
          'Near and far clipping planes to render compact bathrooms and small bedrooms'
        ]
      },
      {
        moduleNumber: '05',
        title: 'Materials, Texturing & UVW Mapping',
        topics: [
          'Slate & Compact Material Editor, Vray Mtl architecture',
          'Materials: Diffuse color, reflection glossiness, Fresnel IOR & refraction',
          'Realistic Texturing: Italian marble with bookmatching, wood veneers, fabrics & metals',
          'UVW Mapping modifiers: Box, Planar, Cylindrical, and Face mapping alignment',
          'Bump mapping, Normal maps & Displacement for realistic surface tactility'
        ]
      },
      {
        moduleNumber: '06',
        title: 'Lights, Vray & Photorealistic Rendering',
        topics: [
          'Lights: Vray Light (Plane, Dome, Sphere, Mesh, Disc) and interior light balance',
          'Vray Sun & Sky system with HDRI 360-degree environment dome maps',
          'IES photometric lights for authentic architectural spot downlights',
          'Vray render engine: Global Illumination (GI - Brute Force + Light Cache)',
          'Rendering optimization, V-Ray Frame Buffer (VFB) exposure & Denoiser'
        ]
      },
      {
        moduleNumber: '07',
        title: 'Photoshop Post-Production & Final Presentation',
        topics: [
          'Exporting Vray Render Elements (Reflection, Refraction, Lighting, ZDepth)',
          'Compositing in Photoshop: ambient bloom, reflections & outdoor window vistas',
          'Camera Raw Filter color grading (warmth, clarity, contrast & highlights)',
          'Designing client mood boards, presentation sheets & a professional portfolio book'
        ]
      }
    ],
    practicalProject: "Photorealistic 3D Interior Project (Living & Dining Area, Modular Kitchen, Master Bedroom) with 4K Day & Night V-Ray Renders and Photoshop Post-Production"
  }
];

export const COMBO_PACKAGES = [
  {
    id: 'master-diploma',
    title: 'Complete 4-in-1 Master Diploma',
    subtitle: 'AutoCAD 2D + 3ds Max + V-Ray + Photoshop',
    badge: 'Most Popular',
    duration: '3 to 4 Months (Flexible Batches)',
    suitableFor: 'Aspiring Interior Designers, Career Switchers & Design Students',
    skills: ['2D Working Drawings', '3D Spatial Modeling', 'Photorealistic Lighting', 'Presentation & Portfolio'],
    includedSoftware: ['AutoCAD 2D', '3ds Max', 'V-Ray', 'Photoshop'],
    projectsCount: '6 Practical Industry Projects',
    guarantee: '100% Practical 1-on-1 Training + Verified Certificate + Complete Job Portfolio'
  },
  {
    id: '3d-visualization-combo',
    title: '3D Visualization Specialist Combo',
    subtitle: '3ds Max + V-Ray + Photoshop',
    badge: '3D Artist Focus',
    duration: '2 to 3 Months',
    suitableFor: 'Architects, 3D Visualizers, Freelancers & Design Graduates',
    skills: ['3D Modeling', 'Photorealistic V-Ray', 'PBR Materials', 'Render Post-Production'],
    includedSoftware: ['3ds Max', 'V-Ray', 'Photoshop'],
    projectsCount: '4 High-End 3D Render Projects',
    guarantee: 'High-Res 4K Render Output + Lighting Mastery + Portfolio'
  },
  {
    id: 'cad-drafting-combo',
    title: 'Architectural Drafting & Presentation Combo',
    subtitle: 'AutoCAD 2D + Photoshop',
    badge: 'Drafting Specialist',
    duration: '6 to 8 Weeks',
    suitableFor: 'Civil Engineers, CAD Draftspersons, Site Supervisors',
    skills: ['Floor Plans', 'Working Drawings', '2D Rendered Plans', 'Client Presentations'],
    includedSoftware: ['AutoCAD 2D', 'Photoshop'],
    projectsCount: '3 Working Drawing Sets',
    guarantee: 'Site Measurement Standards + Full Municipal CAD Guidelines'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '1-on-1 Private Attention',
    description: 'Unlike crowded institutes with 30 students per batch, our private computer classes ensure the instructor focuses directly on you, matching your personal learning speed.',
    stat: '1-on-1 / Max 3',
    unit: 'Students per Batch'
  },
  {
    title: '100% Practical Project-Based',
    description: 'No rote memorization or boring theory. From day one, you draft real Mumbai residential layouts, model designer furniture, and render photorealistic luxury interiors.',
    stat: '10+ Years',
    unit: 'Teaching Excellence'
  },
  {
    title: 'Industry Recognized Certificate',
    description: 'Earn an accredited course completion certificate validated with your final portfolio projects to showcase to interior design firms and architectural studios.',
    stat: 'Certified',
    unit: 'Course Credential'
  },
  {
    title: 'Basic Vastu as per Interior Design',
    description: 'We do teach basic vastu as per interior design — room orientations, entrance energy, and practical layout planning alongside architectural drafting.',
    stat: 'Vastu',
    unit: 'Interior Harmony'
  },
  {
    title: 'Flexible Class Timings',
    description: 'Accommodates college schedules and working professionals with morning, evening, and weekend slots in Borivali West.',
    stat: '6 Days/Wk',
    unit: 'Morning to Night Slots'
  }
];

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Niddhi',
    role: 'Civil & Architecture Student',
    area: 'Borivali West, Mumbai',
    quote: 'I specifically learned to create line plans, detailed apartment 2D drawings complete with elevations, sections, and furniture layouts. The pacing was perfect for beginners advancing to intermediate level, and the teacher was always responsive to questions about CAD best practices for Indian construction standards. Highly recommend for anyone in civil engineering or architecture!',
    courseTaken: 'Auto CAD 2D',
    rating: 5
  },
  {
    name: 'Sana Khan',
    role: 'Interior Design Student',
    area: 'Mumbai',
    quote: 'If you want a place for learning computer aided designs with practical experience, then this place is for you. I specifically learnt to create detailed apartment 2D drawings with complete elevations, sections, and furniture layouts. Their teaching ways are very innovative and super effective! Literally a life saviour.',
    courseTaken: 'Auto CAD 2D',
    rating: 5
  },
  {
    name: 'Shreyash Lad',
    role: 'CAD & 3D Design Student',
    area: 'Borivali, Mumbai',
    quote: 'RK Interior Designer Institute is very nice and neatly attend the student in class. Teacher was very helpful to students about doubt.',
    courseTaken: "Auto CAD 2D & 3D'S Max",
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Do I need prior architectural or sketching knowledge to join?',
    answer: 'No prior sketching or design background is required. The courses begin with basic computer fundamentals and guide you progressively from simple lines to complex 3D interior spaces.'
  },
  {
    question: 'What is the advantage of Private Computer Classes over regular coaching?',
    answer: 'In typical computer institutes, instructors lecture to 20-30 students at once. At RK Interior Designer Institute, classes are private (1-on-1 or micro-batches of 2-3). You get dedicated personal instructor time, instant doubt resolution, and custom pacing.'
  },
  {
    question: 'Where is the institute located and how can I reach it?',
    answer: 'We are conveniently located at 903, Rijin, Skyline Deepak Mahal, Near Dwarka Hotel, Shimpoli Road, Mhatre Wadi, Borivali West, Mumbai 400092. We are within easy reach from Shimpoli Metro Station (Line 2A) and Borivali Railway Station (Western Line).'
  },
  {
    question: 'Will I receive a course completion certificate?',
    answer: 'Yes! Upon successfully completing your coursework and submitting your practical project portfolio, you will receive an official Certified Course Certificate from RK Interior Designer Institute.'
  },
  {
    question: 'Can I choose my own batch timings if I am working or in college?',
    answer: 'Yes, we offer flexible time slots from 9:00 AM to 8:30 PM, Monday through Saturday, as well as dedicated weekend batches for working professionals.'
  },
  {
    question: 'How do I book a free demo session or visit the center?',
    answer: 'You can directly call us at 7039063446, message us on WhatsApp, or submit the inquiry form on this website. We will schedule a convenient one-on-one consultation and demo session.'
  }
];
