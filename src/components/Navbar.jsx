import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  useEffect(() => setOpen(false), [location])

  return (
    <motion.nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}>
      <Link to="/" className={styles.logo}>
        <span className={styles.bracket}>&lt;</span>nathansparks<span className={styles.dot}>.dev</span><span className={styles.bracket}>/&gt;</span>
      </Link>
      <div className={styles.links}>
        {links.map(l => <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>)}
        <a href="/#contact" className={styles.cta}>Hire me →</a>
      </div>
      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? styles.b1o : styles.b1} /><span className={open ? styles.b2o : styles.b2} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className={styles.mobile} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} className={styles.mobileLink} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} onClick={() => setOpen(false)}>
                <span className={styles.mNum}>0{i+1}</span>{l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
