import styles from './Select.module.scss'
// FONTS
import { title } from '../../fonts/fonts'
// COMPONENTS
import Choice from "@/components/Choice";

export default function Select() {
    return (
        <div className={styles.container}>
            <h1 className={title.className}>Escolha a opções desejada...</h1>
            <div className={styles.select}>
                <Choice tema="Random" link='/random' />
                <Choice tema="Mapas" link='/maps' />
            </div>
        </div>
    )
}