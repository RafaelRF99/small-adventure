'use client'
import styles from './RandomItem.module.scss';
// JSON
import { acessorios, saque } from './drop';
// HOOKS
import { useState } from 'react';

interface RandomItemProps {
    tier: number;
    title: string;
}

export default function RandomItem({ tier, title }: RandomItemProps) {
    const [drop, setDrop] = useState<string | null>(null);

    function handlePlayClick() {
        const newDrop = renderDrop();
        setDrop(newDrop);
    }

    function renderDrop() {
        if (tier === 1) {
            const qtd = acessorios.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = acessorios[random];
            if (escolha.dano) {
                return escolha.lot + " +" + escolha.dano;
            }
            return escolha.lot + '*'
        }
        if (tier === 2) {
            const qtd = saque.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = saque[random];
            return escolha.lot;
        }
        else {
            return "Erro"
        }
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
                    <p>Drop:</p>
                    {drop}
                </div>
            </div>
        </div>
    );
}
