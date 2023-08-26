'use client'
import styles from './Aventura.module.scss'

import { title } from '../../fonts/fonts'
import Link from 'next/link'

import { useState } from 'react'

export default function Aventura() {
    const [levelSelect, setLeveSelect] = useState('')
    const [missionSelect, setMissionSelect] = useState('')

    const level = 4
    const mission = 3

    function handleInform(choice: number) {
        const handleArray = []
        for (let x = 0; x < choice + 1; x++) {
            handleArray.push(x)
        }
        return handleArray.map((item, i) => {
            return <option key={i}>{item === 0 ? '' : item}</option>
        })
    }

    function handleSave(e: React.FormEvent) {
        e.preventDefault()
        if (levelSelect && missionSelect) {
            console.log(levelSelect, missionSelect)
        }
    }

    return (
        <form className={styles.container} onSubmit={handleSave}>
            <h1 className={`${styles.title} ${title.className}`}>Aventura</h1>
            <div className={styles.inform}>
                <div className={styles.quest}>
                    <p>Selecione o nível:</p>
                    <select onChange={e => setLeveSelect(e.target.value)}>{handleInform(level)}</select>
                </div>
                <div className={styles.quest}>
                    <p>Selecione a missão:</p>
                    <select onChange={e => setMissionSelect(e.target.value)}>{handleInform(mission)}</select>
                </div>
            </div>
            <Link href='/maps'>
                <button className={styles.btn}>Iniciar</button>
            </Link>
        </form>
    )
}