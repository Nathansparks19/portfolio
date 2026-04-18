import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ '--ca': project.accent }}
    >
      <div className={styles.glowLine} />
      <div className={styles.top}>
        <span className={styles.num}>{project.id}</span>
        <span className={styles.cat}>{project.category}</span>
        <div className={styles.actions}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}><GitBranch size={12} /></a>
          )}
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}><ExternalLink size={12} /></a>
          )}
        </div>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <div className={styles.footer}>
        <a href={project.link !== '#' ? project.link : (project.github || '#')}
          target="_blank" rel="noopener noreferrer" className={styles.link}>
          {project.link !== '#' ? 'View project' : 'View on GitHub'}
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  )
}
