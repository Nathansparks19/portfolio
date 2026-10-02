import { Link } from 'react-router-dom'
import styles from './Page.module.css'

export default function NotFound() {
  return (
    <main className={`wrap ${styles.page}`}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.lead}>The link may be old or mistyped.</p>
      <p style={{ marginTop: 24 }}>
        <Link to="/" className="btn btn-solid">Go to the homepage</Link>
      </p>
    </main>
  )
}
