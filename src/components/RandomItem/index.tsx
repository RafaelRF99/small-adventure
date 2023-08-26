'use client'
import styles from './RandomItem.module.scss';
// HOOKS
import { useState } from 'react';
// FUNCTION
import { renderDrop } from '../../functions/renderDrop'

interface RandomItemProps {
    tier: number;
    title: string;
}

export default function RandomItem({ tier, title }: RandomItemProps) {
    const [drop, setDrop] = useState<string | JSX.Element | null>(null);

    function handlePlayClick() {
        const newDrop = renderDrop(tier);
        setDrop(newDrop);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>T{tier} - </p>
                <h2>{title}</h2>
            </div>
            <br />
            <div>
                <div className={styles.drop}>
                    <button className={styles.trade} onClick={handlePlayClick}>Jogar</button>
                    <strong>Drop:</strong>
                    {drop}
                </div>
            </div>
        </div>
    );
}
