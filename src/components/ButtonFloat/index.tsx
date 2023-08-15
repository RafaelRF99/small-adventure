'use client'
import styles from './BackHome.module.scss'
// NEXT
import Image from 'next/image'
import Link from 'next/link'
// SVG
import exit from '/public/exit.svg'
import clear from '/public/clear.svg'

interface ButtonFloatProps {
    choice: string
}

export default function ButtonFloat({choice}: ButtonFloatProps) {

    function handleStyleFloat() {
        if (choice === 'exit') {
            const select = '5%'
            return select
        }
        if (choice === 'clear') {
            const select = '17%'
            return select
        }
    }
    
    function handleFloat() {
        if (choice === 'exit') {
            return <Image src={exit} alt='Exit' width={30} />
        }
        if (choice === 'clear') {
            return <Image src={clear} alt='Clear' width={30} />
        }
    }

    function refreshPage() {
        if (choice === 'clear') {
            return window.location.reload();
        }
      }

    return (
        <div className={styles.back} style={{bottom: handleStyleFloat()}}>
            <Link href='/'>
                <button className={styles.invisible} onClick={refreshPage}>
                    {handleFloat()}
                </button>
            </Link>
        </div>
    )
}