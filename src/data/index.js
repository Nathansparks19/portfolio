// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file, not the pages.
// Any link left as '' is hidden automatically, so nothing breaks.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nwankwonta Chiemena',
  location: 'Lagos, Nigeria',
  email: 'nathansparks19@gmail.com',
  phone: '+2349067373277',          // used for the Call link
  phoneDisplay: '+234 906 737 3277', // shown on the page
  whatsapp: 'https://wa.me/2349067373277',
  github: 'https://github.com/Nathansparks19',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  cv: '',       // e.g. '/Nathan-Sparks-CV.pdf' (put the PDF in /public)
  photo: '',    // e.g. '/profile.jpeg' once you have a proper headshot in /public
  available: true,
}

// group: 'own' | 'client'
// image: put a screenshot in /public/work/ and set e.g. '/work/dyslexpert.png'
export const projects = [
  // ── Own products ─────────────────────────────
  {
    slug: 'dyslexpert',
    ai: true,
    group: 'own',
    featured: true,
    title: 'DysleXpert',
    kind: 'Own product, built on my research',
    summary: 'Dyslexia screening for children, with short game-based tests in several languages and a machine-learning model behind the result.',
    stack: ['React', 'FastAPI', 'Supabase', 'scikit-learn', 'XGBoost'],
    link: 'https://dyslexpert.vercel.app/',
    repo: '',
    image: '',
    problem: 'Dyslexia is often identified late, after a child has already fallen behind. Formal assessment is expensive and hard to reach for many families.',
    built: 'A web app where a child completes short game-based tasks. The responses go to a stacked ensemble model (Random Forest, XGBoost and Extra Trees) trained on data from 3,644 participants, which returns a screening result.',
    outcome: 'The model reached 97.83% accuracy in evaluation. The research behind it was my undergraduate final-year project.',
  },
  {
    slug: 'mindshield',
    ai: true,
    group: 'own',
    featured: true,
    title: 'MindShield',
    kind: 'Own product',
    summary: 'A recovery companion for people dealing with addiction, with streak tracking, journaling and an AI assistant.',
    stack: ['React', 'Supabase', 'Claude API', 'Vercel'],
    link: 'https://mindshield.vercel.app',
    repo: '',
    image: '',
    problem: 'People in recovery need structure and support every day, not only during meetings or sessions.',
    built: 'A React app with Supabase sign-in and storage for streaks and journal entries. The AI assistant runs through serverless functions, so the API key never reaches the browser.',
    outcome: '',
  },
  {
    slug: 'arise',
    ai: true,
    group: 'own',
    featured: true,
    title: 'Arise',
    kind: 'Own product',
    summary: 'A faith-based recovery companion with a full Bible reader, streak tracking and an AI guide.',
    stack: ['React', 'Supabase', 'Claude API', 'API.Bible'],
    link: 'https://arise-with-purpose.vercel.app/',
    repo: '',
    image: '',
    problem: 'Most recovery apps leave out faith, which for many people is central to how they change.',
    built: 'Streak logic, Supabase sign-in, a full Bible reader (NKJV and NLT through API.Bible) and an AI guide built on the Claude API.',
    outcome: '',
  },
  {
    slug: 'bu-timetable',
    ai: true,
    group: 'own',
    featured: true,
    title: 'BU Timetable System',
    kind: 'Own product',
    summary: 'Timetable management for Babcock University, with sign-in by role, AI clash detection, a class swap market and analytics.',
    stack: ['React', 'Vite', 'Supabase', 'Claude API', 'Vercel'],
    link: 'https://babcock-timetable-app.vercel.app/login',
    repo: '',
    image: '',
    problem: 'Timetables built by hand produce clashes between rooms, lecturers and student groups that are only found after release.',
    built: 'An app where each user role sees what it needs. New entries are checked for clashes with help from the Claude API, users can request swaps, and analytics show how the timetable is being used.',
    outcome: '',
  },
  {
    slug: 'ile',
    group: 'own',
    featured: false,
    title: 'Ilé',
    kind: 'Own product, waitlist stage',
    summary: 'A rental platform for Nigeria, currently collecting a waitlist and research from renters.',
    stack: ['React', 'Vite', 'FastAPI', 'Supabase'],
    link: 'https://ile.nathansparks.dev',
    repo: '',
    image: '',
    problem: 'Finding a place to rent in Nigeria often means unverified listings, agent fees and little protection for tenants.',
    built: 'The product site and a waitlist with a detailed renter survey, so the platform is shaped by what renters actually report.',
    outcome: '',
  },

  // ── Client and community work ────────────────
  {
    slug: 'styled-by-mena',
    group: 'client',
    featured: false,
    title: 'Styled by Mena',
    kind: 'Client project, United Kingdom',
    summary: 'Booking website for a hairstyling business in Nottingham, with services, prices and an appointment request flow.',
    stack: ['React', 'Supabase', 'Vercel'],
    link: 'https://styledbymena-green.vercel.app/',
    repo: '',
    image: '',
    problem: 'Bookings came in through direct messages, which made scheduling slow and easy to get wrong.',
    built: 'A clear service catalogue and a booking flow that collects what the stylist needs up front.',
    outcome: '',
  },
  {
    slug: 'abc-kids-foundation',
    group: 'client',
    featured: false,
    title: 'ABC Kids Foundation',
    kind: 'Volunteer project, non-profit',
    summary: 'Website for a Nigerian foundation that supports children, widows and communities.',
    stack: ['React', 'Vite', 'Vercel'],
    link: '',
    repo: 'https://github.com/Nathansparks19/abc-kids-foundation',
    image: '',
    problem: 'The foundation needed a credible place online to show its work and reach supporters.',
    built: 'A site built around the foundation\'s real photos and brand, so visitors see the actual people and communities it serves.',
    outcome: '',
  },
  {
    slug: 'ignite-teens-check-in',
    group: 'client',
    featured: false,
    title: 'Ignite Teens check-in',
    kind: 'Community project',
    summary: 'An anonymous check-in form for a church teens ministry, so young people can share how they are doing without giving their name.',
    stack: ['HTML', 'JavaScript', 'Supabase'],
    link: 'https://ignite-checkin.vercel.app/',
    repo: '',
    image: '',
    problem: 'Teenagers are often unwilling to raise personal struggles face to face.',
    built: 'A lightweight form that stores responses without identifying the sender, so leaders can see what the group needs.',
    outcome: '',
  },

]

// Short facts under the hero. Keep these true and current.
export const highlights = [
  { value: String(projects.length), label: 'projects built' },
  { value: '3', label: 'countries with clients: Nigeria, the UK and the US' },
  { value: '2023', label: 'freelancing since' },
]

export const groups = [
  { id: 'own', title: 'Own products', intro: 'Products I designed, built and run myself.' },
  { id: 'client', title: 'Client and community work', intro: 'Built for businesses, organisations and communities.' },
]

// The one study with a measured result. Shown large in the AI section.
export const study = {
  title: 'Early dyslexia detection with a stacked ensemble',
  detail: 'My undergraduate final-year research. Random Forest, XGBoost and Extra Trees stacked into one classifier, trained on 3,644 participants, and now running inside DysleXpert.',
  metric: '97.83%',
  metricLabel: 'accuracy',
  link: '/work/dyslexpert',
}

// Other AI work, shown as a short list under the study.
export const aiWork = [
  { title: 'AI clash detection', detail: 'Claude API checks new timetable entries for conflicts in the BU Timetable System.', link: '/work/bu-timetable' },
  { title: 'AI assistants in live products', detail: 'Server-side Claude API assistants in MindShield and Arise.', link: '/work/mindshield' },
]

export const services = [
  {
    heading: 'Building products',
    audience: 'For founders, businesses and organisations',
    items: [
      { title: 'Web apps and MVPs', desc: 'From idea to a deployed product people can sign in to and use.' },
      { title: 'Websites for businesses and organisations', desc: 'Booking sites, non-profit sites and internal tools, built so you can manage them yourself.' },
    ],
  },
  {
    heading: 'AI and machine learning',
    audience: 'For teams with data or a process to improve',
    items: [
      { title: 'Predictive models', desc: 'Classification and risk models built from your data, evaluated honestly on data the model has not seen.' },
      { title: 'AI features in your product', desc: 'Assistants and smart checks built into an app, with keys kept server-side.' },
    ],
  },
]

export const about = {
  paragraphs: [
    'I build web products and the machine-learning models behind them, and I care about both halves: a model is only useful once people can reach it, and an app is better when it is built on evidence.',
    'I am a final-year Computer Science student at Babcock University, specialising in artificial intelligence. I have worked as a freelance developer and designer since 2023, for clients in Nigeria, the United Kingdom and the United States.',
  ],
  experience: [
    { role: 'Head of Media', org: 'Ignite Teens, Global Impact Church', years: '2025 to now' },
    { role: 'Freelance developer and designer', org: 'Self-employed', years: '2023 to now' },
    { role: 'Virtual Assistant', org: 'ABC Kids Foundation', years: '2022 to 2024' },
  ],
  facts: [
    { label: 'Based in', value: 'Lagos, Nigeria. Works remotely.' },
    { label: 'Studying', value: 'BSc Computer Science, Babcock University, 2027' },
    { label: 'Tools', value: 'React, TypeScript, Next.js, FastAPI, Python, Supabase, PostgreSQL, scikit-learn, XGBoost, Claude API, Vercel' },
  ],
}
