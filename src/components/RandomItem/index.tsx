'use client'
import styles from './RandomItem.module.scss';
// JSON
import { acessorios, saque, baus, armadilhas, colares, clava1, clava2, clava3 } from './drop';
// HOOKS
import { useState } from 'react';

interface RandomItemProps {
    tier: number;
    title: string;
}

export default function RandomItem({ tier, title }: RandomItemProps) {
    const [drop, setDrop] = useState<string | JSX.Element | null>(null);

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
                return (
                    <span className={styles.render}>
                        <p>{escolha.lot + " +" + escolha.dano}</p>
                        <p>{escolha.effect}</p>
                    </span>
                )
            }
            return escolha.lot + '*'
        }
        if (tier === 2) {
            const qtd = saque.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = saque[random];
            return escolha.lot;
        }
        if (tier === 3) {
            const qtd = baus.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = baus[random];
            return escolha.lot;
        }
        if (tier === 4) {
            const qtd = armadilhas.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = armadilhas[random];
            return (
                <>
                    <p>{escolha.trap}</p>
                    <p>{escolha.effect}</p>
                </>
            )
        }
        if (tier === 5) {
            const qtd = colares.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = colares[random];
            return (
                <>
                    <p>{escolha.lot}</p>
                    <p>{escolha.effect}</p>
                </>
            )
        }
        if (tier === 6) {
            const qtd = clava1.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = clava1[random];
            return escolha.bonus;
        }
        if (tier === 7) {
            const qtd = clava2.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = clava2[random];
            return escolha.bonus;
        }
        if (tier === 8) {
            const qtd = clava3.length;
            const random = Math.floor(Math.random() * qtd);
            const escolha = clava3[random];
            return escolha.bonus;
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
                    <strong>Drop:</strong>
                    {drop}
                </div>
            </div>
        </div>
    );
}
