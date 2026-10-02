import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Copy, Check, Phone, MessageCircle, Mail } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { profile, projects, highlights, study, aiWork, services, about } from '../data/index.js'
import styles from './Home.module.css'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard blocked: the mailto link still works */ }
  }
  return (
    <button type="button" className="btn" onClick={copy} aria-live="polite">
      {copied ? <><Check size={15} aria-hidden /> Copied</> : <><Copy size={15} aria-hidden /> Copy email</>}
    </button>
  )
}

export default function Home() {
  const featured = projects.filter(p => p.featured)
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry')}`

  return (
    <main>
      {/* ── Hero ───────────────────────────── */}
      <section className={`wrap ${styles.hero} ${profile.photo ? '' : styles.noPhoto}`}>
        <div className={styles.heroText}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.lead}>
            I build web products and the machine-learning models behind them.
            Based in Lagos, working with clients anywhere.
          </p>
          <div className={styles.actions}>
            <Link to="/#work" className="btn btn-solid">See my work</Link>
            <Link to="/#contact" className="btn">Get in touch</Link>
          </div>
          {profile.available && (
            <p className={styles.status}>
              <span className={styles.dot} aria-hidden /> Taking on new projects
            </p>
          )}
          <dl className={styles.highlights}>
            {highlights.map(h => (
              <div key={h.label}>
                <dt>{h.value}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        {profile.photo && (
          <figure className={styles.portrait}>
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </figure>
        )}
      </section>

      {/* ── Work ───────────────────────────── */}
      <section id="work" className={styles.section}>
        <div className="wrap">
          <header className={styles.sectionHead}>
            <h2>Selected work</h2>
            <p>Products I have built and shipped, for myself and for clients.</p>
          </header>
          <div className={styles.grid}>
            {featured.map(p => <ProjectCard key={p.slug} p={p} />)}
          </div>
          <p className={styles.more}>
            <Link to="/work" className="btn">See all {projects.length} projects</Link>
          </p>
        </div>
      </section>

      {/* ── AI & ML ────────────────────────── */}
      <section id="ai" className={styles.section}>
        <div className="wrap">
          <header className={styles.sectionHead}>
            <h2>AI and machine learning</h2>
            <p>Research with a measured result, and AI built into products people use.</p>
          </header>

          <article className={styles.study}>
            <div>
              <h3 className={styles.studyTitle}>{study.title}</h3>
              <p className={styles.studyDetail}>{study.detail}</p>
              <Link to={study.link} className="text-link">Read case study</Link>
            </div>
            <p className={styles.metric}>
              <span className={styles.metricValue}>{study.metric}</span>
              <span className={styles.metricLabel}>{study.metricLabel}</span>
            </p>
          </article>

          <ul className={styles.aiList}>
            {aiWork.map(a => (
              <li key={a.title}>
                <Link to={a.link} className={styles.aiItem}>
                  <span className={styles.aiTitle}>{a.title}</span>
                  <span className={styles.aiDetail}>{a.detail}</span>
                  <ArrowUpRight size={16} aria-hidden className={styles.aiArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services ───────────────────────── */}
      <section id="services" className={styles.section}>
        <div className="wrap">
          <header className={styles.sectionHead}>
            <h2>Ways to work together</h2>
            <p>Hire me to build the product, the model, or both.</p>
          </header>
          <div className={styles.services}>
            {services.map(s => (
              <div key={s.heading}>
                <h3 className={styles.serviceTitle}>{s.heading}</h3>
                <p className={styles.audience}>{s.audience}</p>
                <dl className={styles.offers}>
                  {s.items.map(i => (
                    <div key={i.title} className={styles.offer}>
                      <dt>{i.title}</dt>
                      <dd>{i.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────── */}
      <section id="about" className={styles.section}>
        <div className="wrap">
          <header className={styles.sectionHead}>
            <h2>About</h2>
          </header>
          <div className={styles.about}>
            <div className={styles.aboutText}>
              {about.paragraphs.map((t, i) => <p key={i}>{t}</p>)}

              <h3 className={styles.subhead}>Experience</h3>
              <ul className={styles.experience}>
                {about.experience.map(e => (
                  <li key={e.role}>
                    <span className={styles.expRole}>{e.role}</span>
                    <span className={styles.expOrg}>{e.org}</span>
                    <span className={styles.expYears}>{e.years}</span>
                  </li>
                ))}
              </ul>
            </div>
            <dl className={styles.facts}>
              {about.facts.map(f => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────── */}
      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <div className="wrap">
          <h2 className={styles.contactTitle}>Have a project or a dataset in mind?</h2>
          <p className={styles.contactLead}>
            Tell me what you are building and when you need it. I reply to every message within two working days.
          </p>
          <div className={styles.channels}>
            <a href={mailto} className={styles.channel}>
              <Mail size={20} aria-hidden />
              <span className={styles.channelLabel}>Email</span>
              <span className={styles.channelValue}>{profile.email}</span>
            </a>
            {profile.whatsapp && (
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.channel}>
                <MessageCircle size={20} aria-hidden />
                <span className={styles.channelLabel}>WhatsApp</span>
                <span className={styles.channelValue}>{profile.phoneDisplay}</span>
              </a>
            )}
            {profile.phone && (
              <a href={`tel:${profile.phone}`} className={styles.channel}>
                <Phone size={20} aria-hidden />
                <span className={styles.channelLabel}>Call</span>
                <span className={styles.channelValue}>{profile.phoneDisplay}</span>
              </a>
            )}
          </div>
          <div className={styles.actions}>
            <CopyEmail />
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>}
            {profile.cv && <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>}
          </div>
        </div>
      </section>
    </main>
  )
}
