import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/index.js'
import ProjectCard from '../components/ProjectCard.jsx'
import styles from './Projects.module.css'

const categories = ['all', 'fullstack app', 'product', 'freelance', 'tool', 'concept']

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">projects</div>
        <h1 className={styles.title}>All work</h1>
        <p className={styles.sub}>A collection of products, tools, and experiments I've shipped.</p>
      </motion.div>

      <motion.div
        className={styles.filters}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </motion.div>

      <motion.div className={styles.grid} layout>
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </main>
  )
}
