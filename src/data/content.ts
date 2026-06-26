/**
 * Single source of truth for all site copy.
 * Keeping content separate from presentation keeps the section
 * components purely about layout and makes edits trivial.
 *
 * Content: Sumin Maharjan — Flutter Developer portfolio.
 */

export const site = {
  name: 'Sumin',
  fullName: 'Sumin Maharjan',
  role: 'Flutter Developer',
  email: 'suminmhrzn18@gmail.com',
  phone: '+977 9868711182',
  location: 'Lalitpur-21, Kathmandu, Nepal',
  year: '©2026',
  since: '/BUILDING SINCE 2024',
}

export const nav = [
  { label: 'About', href: '#bio' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  title: 'FLUTTER DEVELOPER',
  cta: { label: 'Get in Touch', href: '#contact' },
}

export const bio = {
  heading: 'Hey!',
  // Short left-column intro
  intro:
    "I'm Sumin, a Flutter Developer based in Kathmandu, building cross-platform mobile apps with Flutter, Firebase, and Bloc/Cubit.",
  // Right-column paragraphs (from CV professional summary)
  paragraphs: [
    'Passionate and detail-oriented Flutter Developer with hands-on experience building cross-platform applications. Skilled in developing responsive UI, integrating REST & GraphQL APIs, and optimizing app performance.',
    'Strong analytical background with prior experience in accounting systems and process automation. Adept at collaborating in agile teams and delivering user-centric digital solutions.',
  ],
  cta: { label: 'Get in Touch', href: '#contact' },
}

export const valueProp = {
  // The statement is split into a solid (dark) lead and a muted (gray) tail.
  lead:
    'From idea to launch. Cross-platform mobile apps built to feel native, scale cleanly, and perform in real-world use, driven by ',
  tail: 'clean architecture, solid state management, and thoughtful UI.',
}

export interface Service {
  index: string
  title: string
  items: string[]
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Android & iOS Development', 'Responsive UI/UX', 'Custom Animations'],
  },
  {
    index: '02',
    title: 'State Management',
    items: ['Bloc', 'Cubit', 'Provider'],
  },
  {
    index: '03',
    title: 'Backend & APIs',
    items: ['Firebase', 'Supabase (Learning)', 'REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    index: '04',
    title: 'Maps & Real-Time',
    items: ['Google Maps SDK', 'OpenStreetMap', 'Nominatim', 'Geolocation', 'Real-Time Tracking'],
  },
  {
    index: '05',
    title: 'Architecture & Tools',
    items: ['Clean Architecture', 'Git & GitHub', 'CI/CD', 'Android Studio', 'VS Code', 'Xcode', 'Figma', 'Postman'],
  },
  {
    index: '06',
    title: 'Deployment',
    items: ['Google Play Store', 'Apple App Store'],
  },
  {
    index: '07',
    title: 'Exploring',
    items: ['WebRTC (Audio & Video Calling)', 'Socket.IO', 'System Design'],
  },
]

export interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  icon: string
  android?: string
  ios?: string
}

export const projects: Project[] = [
  {
    title: 'Tithi Ghadi',
    category: 'Panchang Calendar',
    description: 'Nepali Panchang calendar app with astronomical timekeeping and daily Tithi details.',
    tech: ['Flutter', 'REST API', 'Animations'],
    icon: '/apps/tithi-ghadi.png',
    android: 'https://play.google.com/store/apps/details?id=com.kataho.tithighadi&hl=en',
    ios: 'https://apps.apple.com/in/app/tithi-ghadi/id6768195077',
  },
  {
    title: 'Connect KMC',
    category: 'Municipality App',
    description: 'Official Kathmandu Metropolitan City app connecting citizens with municipal services.',
    tech: ['Flutter', 'REST API', 'Google Maps'],
    icon: '/apps/connect-kmc.png',
    android: 'https://play.google.com/store/apps/details?id=np.gov.connect.kathmandu',
    ios: 'https://apps.apple.com/np/app/connect-kmc/id6767496815',
  },
  {
    title: 'KataHo',
    category: 'Digital Address',
    description: 'Digital addressing app with real-time location and Google Maps integration.',
    tech: ['Flutter', 'Google Maps SDK', 'REST API'],
    icon: '/apps/kataho.png',
    android: 'https://play.google.com/store/apps/details?id=com.ramlaxman.kataHo&hl=en',
    ios: 'https://apps.apple.com/np/app/kataho-%E0%A4%95%E0%A4%A4-%E0%A4%B9/id1671536921',
  },
  {
    title: 'TrackOn GPS',
    category: 'Real-Time Tracking',
    description: 'Real-time GPS tracking with Web Sockets and live Google Maps location updates.',
    tech: ['Flutter', 'Web Sockets', 'Google Maps'],
    icon: '/apps/trackon.png',
    android: 'https://play.google.com/store/apps/details?id=com.itsoch.trackon&hl=en',
    ios: 'https://apps.apple.com/np/app/trackon-gps/id1573197793',
  },
  {
    title: 'VithiTrack',
    category: 'GPS Tracking',
    description: 'Vehicle GPS tracking app with responsive layouts and live map telemetry.',
    tech: ['Flutter', 'Google Maps SDK', 'REST API'],
    icon: '/apps/vithitrack.png',
    android: 'https://play.google.com/store/apps/details?id=com.acube.gps',
    ios: 'https://apps.apple.com/in/app/vithitrack/id6759089369',
  },
  {
    title: 'GPS Nepal',
    category: 'GPS Tracking',
    description: 'GPS tracking solution for vehicles and assets across Nepal with live maps.',
    tech: ['Flutter', 'Google Maps', 'REST API'],
    icon: '/apps/gps-nepal.png',
    android: 'https://play.google.com/store/apps/details?id=com.shiva.gpstracker&hl=en',
    ios: 'https://apps.apple.com/us/app/gps-nepal/id1281231338',
  },
  {
    title: 'Swift HRMS',
    category: 'HR Management',
    description: 'Human Resource Management System with employee, attendance, and payroll modules built on Bloc/Cubit.',
    tech: ['Flutter', 'Bloc/Cubit', 'GraphQL'],
    icon: '/apps/swift-hrms.png',
    android: 'https://play.google.com/store/apps/details?id=com.featherwebs.control&hl=en',
  },
]

export interface Experience {
  role: string
  company: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Mid-Flutter Developer',
    company: 'Technology Sales Pvt. Ltd.',
    period: 'Feb 2025 – Present',
    points: [
      'Built digital address, Panchang calendar, and emergency response apps (KataHo, Tithi, ERC) with real-time tracking, REST API integration, and Google Maps SDK.',
      'Developed custom UI components with responsive layouts across multiple screen sizes.',
    ],
  },
  {
    role: 'Jr. Flutter Developer',
    company: 'Trackon GPS',
    period: 'Feb 2025 – Jan 2026',
    points: [
      'Worked on Web Socket and Google Maps SDK integrations for real-time tracking features.',
      'Developed custom UI components and responsive layouts; integrated REST APIs for efficient data flow.',
    ],
  },
  {
    role: 'Flutter Trainee',
    company: 'Featherwebs',
    period: 'Aug 2024 – Feb 2025',
    points: [
      'Engineered Swift HRMS and contributed to the Kirtipur Municipality application using Flutter.',
      'Built employee management, attendance, and payroll modules with Bloc/Cubit; integrated REST & GraphQL APIs.',
    ],
  },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar?: string
}

// Placeholder quotes — replace with real references when available.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Sumin delivered clean, well-architected Flutter code and was a reliable contributor across our mobile projects.',
    author: 'Team Lead',
    role: 'Technology Sales Pvt. Ltd.',
  },
  {
    quote:
      'Strong grasp of state management and real-time integrations. Shipped tracking features smoothly with Web Sockets and Google Maps.',
    author: 'Engineering Manager',
    role: 'Trackon GPS',
  },
  {
    quote:
      'A detail-oriented developer who picks things up fast. Built solid HRMS modules during the traineeship.',
    author: 'Mentor',
    role: 'Featherwebs',
  },
  {
    quote:
      'Collaborative and dependable in agile teams, with a consistent focus on responsive, user-centric UI.',
    author: 'Product Colleague',
    role: 'Mobile Team',
  },
]

export const contact = {
  heading: 'Let’s talk.',
  description:
    'Have a project or a Flutter role in mind? Send a message and I’ll get back to you soon.',
  /**
   * Formspree endpoint that delivers submissions to suminmhrzn18@gmail.com.
   * Create a free form at https://formspree.io (use that email), then set
   * VITE_FORMSPREE_ID in a `.env` file, e.g. VITE_FORMSPREE_ID=abcdwxyz
   * Falls back to the placeholder below until configured.
   */
  formEndpoint: `https://formspree.io/f/${
    import.meta.env.VITE_FORMSPREE_ID ?? 'YOUR_FORM_ID'
  }`,
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:suminmhrzn18@gmail.com', icon: 'email' },
] as const

export const footer = {
  heading: ['Building', 'Mobile Apps', 'with Flutter.'],
  quickLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#bio' },
    { label: 'Expertise', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  email: 'suminmhrzn18@gmail.com',
  watermark: 'SUMIN',
}
