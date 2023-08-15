import styles from './BackHome.module.scss'
// NEXT
import Image from 'next/image'
import Link from 'next/link'
// SVG
import exit from '/public/exit.svg'

export default function BackHome() {
    return (
        <div className={styles.back}>
            <Link href='/'>
                <button className={styles.invisible}>
                    <Image src={exit} alt='Exit' width={40} />
                </button>
            </Link>
        </div>
    )
}