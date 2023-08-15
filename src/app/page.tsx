import styles from './page.module.css'
// FONTS
import { title } from '../fonts/fonts'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${title.className} ${styles.title}`}>Small Adventure</h1>
    </main>
  )
}
