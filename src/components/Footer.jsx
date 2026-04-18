import { GitBranch, Mail, MapPin } from 'lucide-react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.f}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}><span className={styles.br}>&lt;</span>nathansparks<span className={styles.bl}>.dev</span><span className={styles.br}>/&gt;</span></div>
          <p className={styles.tag}>Building products that matter.</p>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/Nathansparks19" target="_blank" rel="noopener noreferrer" className={styles.l}><GitBranch size={12}/>GitHub</a>
          <a href="mailto:hello@nathansparks.dev" className={styles.l}><Mail size={12}/>Email</a>
          <span className={styles.l} style={{cursor:'default'}}><MapPin size={12}/>Lagos, NG</span>
        </div>
        <p className={styles.copy}>© 2025 Nathan Sparks (Chiemena). All rights reserved.</p>
      </div>
    </footer>
  )
}
