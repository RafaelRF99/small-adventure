import styles from './Select.module.scss'
// COMPONENTS
import Choice from "@/components/Choice";

export default function Select() {
    return (
        <div className={styles.container}>
            <h1>Escolha a opções desejada...</h1>
            <div className={styles.select}>
                <Choice tema="Random" link='/random' />
                <Choice tema="Mapas" link='/maps' />
            </div>
        </div>
    )
}