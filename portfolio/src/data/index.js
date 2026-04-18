export const projects = [
  { id:'01', category:'fullstack app', title:'DysleXpert', description:'AI-powered dyslexia screening web app with gamified multilingual tests. Ensemble ML model (RF + XGBoost + Extra Trees) achieving ~98% accuracy.', tags:['FastAPI','React','Supabase','Machine Learning','Python'], accent:'#f43f5e', link:'https://dyslexpert.vercel.app/', github:'https://github.com/Nathansparks19', featured:true },
  { id:'02', category:'product', title:'MindShield', description:'Mental health & addiction recovery app powered by Claude AI. Streak tracking, journaling, serverless Anthropic API via Vercel edge functions.', tags:['React','Anthropic API','Supabase','Vercel'], accent:'#c084fc', link:'https://mindshield.vercel.app', github:'https://github.com/Nathansparks19', featured:true },
  { id:'03', category:'product', title:'Arise', description:'Faith-aware AI recovery companion. Bible integration (NKJV/NLT via API.Bible), premium UI, streak logic, built with Claude API and Supabase auth.', tags:['React','API.Bible','Claude API','Supabase'], accent:'#fb923c', link:'https://arise-with-purpose.vercel.app/', github:'https://github.com/Nathansparks19', featured:true },
  { id:'04', category:'freelance', title:'Styled by Mena', description:'Booking website for a Nottingham-based hairstyling brand. Clean UI, service listings, and appointment scheduling flow.', tags:['React','UI Design','Vercel','Supabase'], accent:'#f43f5e', link:'https://styledbymena-green.vercel.app/', github:'https://github.com/Nathansparks19', featured:false },
  { id:'05', category:'tool', title:'BU Timetable System', description:'Smart timetable scheduling for Babcock University. Conflict detection, multi-user support, built with React, Supabase and Vite.', tags:['React','Vite','Supabase','TypeScript'], accent:'#c084fc', link:'https://babcock-timetable-app.vercel.app/login', github:'https://github.com/Nathansparks19', featured:false },
  { id:'06', category:'concept', title:'Kashe', description:'A financial operating system for Nigerian SMEs. Ajo/Esusu-inspired, blockchain-ready financial identity for the informal economy.', tags:['Fintech','Nigeria','Blockchain','In Progress'], accent:'#fb923c', link:'#', github:null, featured:false },
]
export const services = [
  { title:'Fullstack Development', desc:'React frontends, FastAPI/Node backends, Supabase databases. Full products from idea to deployment.', color:'#f43f5e' },
  { title:'AI Integration', desc:'Claude API, ML model deployment, intelligent features built into real-world apps that people actually use.', color:'#c084fc' },
  { title:'Product Design', desc:'UI/UX design, Canva Pro graphics, flyers, brand kits. Design that communicates and converts.', color:'#fb923c' },
  { title:'MVP Building', desc:'Fast, lean, deployable. I build MVPs for founders who need to validate ideas without burning time.', color:'#f43f5e' },
]
export const stack = {
  frontend: ['React','TypeScript','Vite','Tailwind CSS','Framer Motion'],
  backend:  ['FastAPI','Python','Node.js','PostgreSQL','Supabase'],
  tools:    ['Vercel','Render','Git','Figma','Canva Pro'],
  ai:       ['Anthropic API','Claude','scikit-learn','XGBoost','Streamlit'],
}
