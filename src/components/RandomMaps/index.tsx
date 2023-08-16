'use client'
import styles from './RandomMaps.module.scss'
// NEXT
import Image from 'next/image'
// HOOKS
import { useState } from 'react';

interface RandomMapsProps {
    carta: string
}

export default function RandomMaps({ carta }: RandomMapsProps) {
    const [random, setRandom] = useState<number | null>(null);

    function randomSelect() {
        const select = Math.round(Math.random() * 6);
        setRandom(select === 0 ? select + 1 : select);
    }

    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <p>{carta}</p>
                <p>-</p>
                <p>{random === null ? '-' : random}</p>
            </div>
            <div className={styles.img}>
                {random !== null ? (
                    <Image src={`/assets/maps/${carta}${random}.png`} alt={'tes'} width={230} height={300} />
                ) : ''}
            </div>
            <button className={styles.btn} onClick={randomSelect}>Jogar</button>
        </div>
    )
}