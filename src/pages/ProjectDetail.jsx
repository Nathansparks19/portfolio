import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects, profile } from '../data/index.js'
import NotFound from './NotFound.jsx'
import styles from './Page.module.css'

const cleanUrl = url => url.replace(/^https?:\/\//, '').replace(/\/(login)?$/, '')

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex(p => p.slug === slug)
  const p = projects[index]

  useEffect(() => {
    if (p) document.title = `${p.title} | ${profile.name}`
  }, [p])

  if (!p) return <NotFound />
  const next = projects[(index + 1) % projects.length]

  const sections = [
    { heading: 'The problem', text: p.problem },
    { heading: 'What I built', text: p.built },
    { heading: 'Result', text: p.outcome },
  ].filter(s => s.text)

  return (
    <main className={`wrap ${styles.page}`}>
      <Link to="/work" className={`text-link ${styles.back}`}><ArrowLeft size={14} aria-hidden /> All work</Link>

      <h1 className={styles.title}>{p.title}</h1>
      <p className={styles.lead}>{p.summary}</p>

      <dl className={styles.meta}>
        <div><dt>Type</dt><dd>{p.kind}</dd></div>
        <div><dt>Built with</dt><dd>{p.stack.join(', ')}</dd></div>
        {p.link && (
          <div>
            <dt>Live site</dt>
            <dd>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-link">
                {cleanUrl(p.link)} <ArrowUpRight size={14} aria-hidden />
              </a>
            </dd>
          </div>
        )}
        {p.repo && (
          <div>
            <dt>Code</dt>
            <dd>
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-link">
                View on GitHub <ArrowUpRight size={14} aria-hidden />
              </a>
            </dd>
          </div>
        )}
      </dl>

      {p.image && (
        <figure className={styles.shot}>
          <img src={p.image} alt={`Screenshot of ${p.title}`} />
        </figure>
      )}

      <div className={styles.story}>
        {sections.map(s => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </section>
        ))}
      </div>

      <div className={styles.footerNav}>
        <p>
          Want something like this?{' '}
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`About ${p.title}`)}`} className="text-link">Email me</a>
        </p>
        <Link to={`/work/${next.slug}`} className="text-link">Next: {next.title}</Link>
      </div>
    </main>
  )
}
