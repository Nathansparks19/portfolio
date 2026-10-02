import { profile } from '../data/index.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p>© {year} {profile.name}. {profile.location}.</p>
        <ul className={styles.links}>
          <li><a href={`mailto:${profile.email}`}>Email</a></li>
          {profile.github && <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
          {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          {profile.cv && <li><a href={profile.cv} target="_blank" rel="noopener noreferrer">CV</a></li>}
        </ul>
      </div>
    </footer>
  )
}
