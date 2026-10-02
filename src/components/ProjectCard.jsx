import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import styles from './ProjectCard.module.css'

const initials = title => title.replace(/[^A-Za-zÀ-ÿ ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()

const toneFor = group => ({ own: styles.toneOwn, client: styles.toneClient, progress: styles.toneProgress }[group] || styles.toneOwn)

export default function ProjectCard({ p }) {
  return (
    <article className={styles.card}>
      <Link to={`/work/${p.slug}`} className={styles.cover} aria-label={`${p.title} case study`}>
        {p.image ? (
          <img src={p.image} alt="" loading="lazy" />
        ) : (
          <div className={`${styles.tile} ${toneFor(p.group)}`}>
            <span className={styles.tileKind}>{p.kind}</span>
            <span className={styles.tileMark} aria-hidden>{initials(p.title)}</span>
          </div>
        )}
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/work/${p.slug}`}>{p.title}</Link>
        </h3>
        <p className={styles.summary}>{p.summary}</p>
        <p className={styles.stack}>{p.stack.join(' · ')}</p>
        <div className={styles.links}>
          <Link to={`/work/${p.slug}`} className="text-link">Case study</Link>
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-link">
              Live site <ArrowUpRight size={14} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
