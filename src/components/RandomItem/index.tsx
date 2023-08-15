import styles from './RandomItem.module.scss'
// JSON
import { saque } from './drop'

interface RandomItemProps {
    tier: number
    title: string
}

export default function RandomItem({ tier, title }: RandomItemProps) {

    function render() {
        const qtd = saque.length
        for (let x = 1; x < qtd; x++) {
            const random = Math.floor(Math.random() * qtd)
            const escolha = saque[random]
            return escolha.lot
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>T{tier}</p>
                <p> - </p>
                <h2>{title}</h2>
            </div>
            <div>
                <p>Drop:</p>
                {render()}
            </div>
            <button>Jogar</button>
        </div>
    )
}