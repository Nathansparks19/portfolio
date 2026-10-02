import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/index.js'
import styles from './Navbar.module.css'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'AI & ML', to: '/#ai' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.bar}>
      <nav className={`wrap ${styles.inner}`} aria-label="Main">
        <Link to="/" className={styles.name} onClick={close}>{profile.name}</Link>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul id="site-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.label}><Link to={l.to} className={styles.link} onClick={close}>{l.label}</Link></li>
          ))}
          <li><Link to="/#contact" className={styles.cta} onClick={close}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
