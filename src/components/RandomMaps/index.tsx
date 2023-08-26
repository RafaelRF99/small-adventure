'use client'
import styles from './RandomMaps.module.scss'
// NEXT
import Image from 'next/image'
// HOOKS
import { useState } from 'react';
import { renderDrop } from '../../functions/renderDrop';
import mapsOptin from './mapsOption.json'
import { MapsRenderBau, MapsRenderMonstros, MapsRenderTrap } from '@/functions/mapsRenderDrop';

interface RandomMapsProps {
    carta: string
}

interface mapsOptionProps {
    carta: {
        monstro: number
        bau: boolean
        chaveMestra: boolean
    }
}

export default function RandomMaps({ carta }: RandomMapsProps) {
    const [random, setRandom] = useState<number | null>(null);

    function randomSelect() {
        const select = Math.round(Math.random() * 6);
        setRandom(select === 0 ? select + 1 : select);
    }
    const destiny = carta + random

    function handleDrop() {
        if (mapsOptin.filter(map => map.carta === destiny)) {
            return mapsOptin.filter(map => map.carta === destiny).map((carta, i) => {
                return (
                    <div key={i}>
                        {carta.monstro !== 0 ? <p>Monstro: {MapsRenderMonstros(carta.monstro)}</p> : ''}
                        {carta.bau ? <p>Báu: {MapsRenderBau(carta.bau)}</p> : ''}
                        {carta.chaveMestra ? <p>Chave Mestra: 1</p> : ''}
                        {carta.trap !== 0 ? <p>Armadilha: {MapsRenderTrap(carta.trap)}</p> : ''}
                        {carta.trapAE !== undefined ? <p>Armadilha: {carta.trapAE}</p> : ''}
                    </div>
                )
            })
        }
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
                    <Image src={`/maps/${destiny}.PNG`} alt={destiny} width={230} height={250} />
                ) : ''}
            </div>
            {handleDrop()}
            <button className={styles.btn} onClick={randomSelect}>Jogar</button>
        </div>
    )
}