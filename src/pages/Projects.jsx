import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, profile } from '../data/index.js'
import styles from './Page.module.css'

const filters = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'own', label: 'Own products', test: p => p.group === 'own' },
  { id: 'client', label: 'Client and community', test: p => p.group === 'client' },
  { id: 'ai', label: 'AI', test: p => p.ai },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  useEffect(() => { document.title = `All work | ${profile.name}` }, [])

  const current = filters.find(f => f.id === active)
  const items = projects.filter(current.test)

  return (
    <main className={`wrap ${styles.page}`}>
      <h1 className={styles.title}>All work</h1>
      <p className={styles.lead}>
        Everything I have built, from my own products to work for clients and communities. Each one has a short case study.
      </p>

      <div className={styles.filters} role="group" aria-label="Filter projects">
        {filters.map(f => {
          const count = projects.filter(f.test).length
          return (
            <button
              key={f.id}
              type="button"
              className={`${styles.filter} ${active === f.id ? styles.filterOn : ''}`}
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label} <span className={styles.count}>{count}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.grid}>
        {items.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </main>
  )
}
