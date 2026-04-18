import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Send, CheckCircle, XCircle, Loader, MapPin, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { projects, services, stack } from '../data/index.js'
import ProjectCard from '../components/ProjectCard.jsx'
import styles from './Home.module.css'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const up = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d,ease:[0.22,1,0.36,1]} })

function ContactForm() {
  const ref = useRef()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name:'', email:'', type:'', message:'' })
  const set = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, ref.current, EMAILJS_PUBLIC_KEY)
      setStatus('success'); setForm({ name:'', email:'', type:'', message:'' })
    } catch { setStatus('error') }
  }
  return (
    <form ref={ref} className={styles.cForm} onSubmit={submit}>
      <div className={styles.inputRow}>
        <input name="name" type="text" placeholder="Your name" className={styles.inp} value={form.name} onChange={set} required />
        <input name="email" type="email" placeholder="Email address" className={styles.inp} value={form.email} onChange={set} required />
      </div>
      <input name="project_type" type="text" placeholder="Project type — MVP, web app, AI integration…" className={styles.inp} value={form.type} onChange={set} />
      <textarea name="message" placeholder="Tell me about your project, timeline, and budget…" className={styles.ta} value={form.message} onChange={set} required />
      {status==='success' && <div className={`${styles.fMsg} ${styles.fOk}`}><CheckCircle size={13}/>Sent! I'll respond within 24 hours.</div>}
      {status==='error'   && <div className={`${styles.fMsg} ${styles.fErr}`}><XCircle size={13}/>Something went wrong — email hello@nathansparks.dev</div>}
      <div>
        <button type="submit" className="btn-primary" disabled={status==='loading'||status==='success'}>
          {status==='loading'?<><Loader size={13} className={styles.spin}/>Sending…</>:status==='success'?<><CheckCircle size={13}/>Sent!</>:<><Send size={13}/>Send message</>}
        </button>
      </div>
    </form>
  )
}

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────── */}
      <div className={styles.heroWrap}>

        {/* LEFT */}
        <div className={styles.heroLeft}>
          <motion.div className={styles.badge} {...up(0.1)}>
            <span className={styles.pulseDot}/> Available for freelance
          </motion.div>

          <motion.h1 className={styles.h1} {...up(0.2)}>
            I design,<br/>build &<br/><span className={styles.rose}>ship.</span>
          </motion.h1>

          <motion.p className={styles.sub} {...up(0.32)}>
            Fullstack developer and product builder from Lagos, Nigeria.
            I turn ideas into production-ready web apps — clean code, real users, fast delivery.
          </motion.p>

          <motion.div className={styles.btns} {...up(0.42)}>
            <Link to="/projects" className="btn-primary">View my work <ArrowRight size={13}/></Link>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </motion.div>

          <motion.div className={styles.statsRow} {...up(0.5)}>
            <div className={styles.stat}><span className={styles.statN}>6<em>+</em></span><span className={styles.statL}>Live projects</span></div>
            <div className={styles.stat}><span className={styles.statN}>3</span><span className={styles.statL}>AI-powered apps</span></div>
            <div className={styles.stat}><span className={styles.statN}>2<em>+</em></span><span className={styles.statL}>Years building</span></div>
            <div className={styles.stat}><span className={styles.statN}>∞</span><span className={styles.statL}>Ambition</span></div>
          </motion.div>
        </div>

        {/* RIGHT — contained photo card */}
        <motion.div className={styles.photoCard}
          initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }}
        >
          <div className={styles.photoFrame}>
            <img src="/profile.jpeg" alt="Nathan Sparks — Chiemena"
              onError={e => { e.target.style.display='none' }}
            />
            <div className={styles.photoPlaceholder}>
              <div className={styles.photoInitials}>N</div>
              <span className={styles.photoHint}>Add profile.jpeg to /public</span>
            </div>
          </div>
          <div className={styles.nameTag}>
            <span className={styles.nameTagDot}/>
            <div className={styles.nameTagText}>
              Nathan Sparks
              <span className={styles.nameTagSub}>Lagos, NG · Open to remote</span>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="divider" />

      {/* ── ABOUT ────────────────────────── */}
      <section id="about" className={styles.section}>
        <div className={styles.sLabel}>01 — about</div>
        <h2 className={styles.sTitle}>Who I am</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>I'm <strong>Chiemena</strong> (Nathan) — a final-year CS student at Babcock University and a product-driven fullstack developer. I build things that actually work: real users, real logic, interfaces that feel good.</p>
            <p>I serve as <strong>Head of Media</strong> for Ignite Teens, do freelance design and dev, and I'm building towards a portfolio of tools for African markets — starting with <strong>Kashe</strong>, a financial OS for Nigerian SMEs.</p>
            <p>I've shipped AI apps using the <strong>Claude API</strong>, built ML models at ~98% accuracy, and delivered products for clients in Nigeria and the UK. I move fast, think in systems, and don't stop until something ships.</p>
          </div>
          <div className={styles.stackGrid}>
            {Object.entries(stack).map(([cat, items]) => (
              <div key={cat}>
                <div className={styles.stackLbl}>// {cat}</div>
                <div className={styles.tags}>
                  {items.map(t => <span key={t} className={`tag ${cat==='frontend'?'accent':cat==='backend'?'accent2':cat==='ai'?'accent3':''}`}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROJECTS ─────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sHead}>
          <div>
            <div className={styles.sLabel}>02 — projects</div>
            <h2 className={styles.sTitle} style={{marginBottom:0}}>Featured work</h2>
          </div>
          <Link to="/projects" className={styles.viewAll}>All projects <ArrowUpRight size={12}/></Link>
        </div>
        <div className={styles.projectsGrid}>
          {projects.filter(p=>p.featured).map((p,i) => <ProjectCard key={p.id} project={p} index={i}/>)}
        </div>
      </section>

      <div className="divider" />

      {/* ── SERVICES ─────────────────────── */}
      <section id="services" className={styles.section}>
        <div className={styles.sLabel}>03 — services</div>
        <h2 className={styles.sTitle}>What I offer</h2>
        <div className={styles.servicesGrid}>
          {services.map((s,i) => (
            <motion.div key={s.title} className={styles.sCard}
              initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{duration:0.4,delay:i*0.07}}
              style={{'--sc':s.color}}
            >
              <div className={styles.sNum}>0{i+1}</div>
              <h3 className={styles.sName}>{s.title}</h3>
              <p className={styles.sDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ──────────────────────── */}
      <section id="contact" className={styles.section}>
        <div className={styles.sLabel}>04 — contact</div>
        <h2 className={styles.sTitle}>Let's build<br/>something.</h2>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactSub}>Open to freelance projects, collaborations, and interesting problems. I usually respond within 24 hours.</p>
            <div className={styles.cLinks}>
              <a href="https://github.com/Nathansparks19" target="_blank" rel="noopener noreferrer" className={styles.cLink}><GitBranch size={13} className={styles.cIcon}/>github.com/Nathansparks19</a>
              <a href="mailto:hello@nathansparks.dev" className={styles.cLink}><Mail size={13} className={styles.cIcon}/>hello@nathansparks.dev</a>
              <div className={styles.cLink}><MapPin size={13} className={styles.cIcon}/>Lagos, Nigeria — available remotely</div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </section>

    </main>
  )
}
