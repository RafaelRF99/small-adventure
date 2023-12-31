import styles from './page.module.css'
// FONTS
import { title } from '../fonts/fonts'
// NEXT
import Link from 'next/link'
// COMPONENTS
import Play from '@/components/Play'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${title.className} ${styles.title}`}>Small Adventure</h1>
      <Link href='/select'>
        <Play />
      </Link>
    </main>
  )
}
