import styles from './random.module.scss'
// FONTS
import { title } from '../../fonts/fonts'
// COMPONENTS
import RandomItem from "@/components/RandomItem";

export default function Random() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={`${styles.title} ${title.className}`}>Random</h1>
            </div>
            <div className={styles.display}>
                <RandomItem tier={1} title="Acessórios" />
                <RandomItem tier={2} title="Saqueando Monstros" />
                <RandomItem tier={4} title="Armadilhas" />
                <RandomItem tier={5} title="Colares do Poder" />
                <RandomItem tier={6} title="Clavas Mágicas Nivel 1" />
                <RandomItem tier={7} title="Clavas Mágicas Nivel 2" />
                <RandomItem tier={8} title="Clavas Mágicas Nivel 3" />
            </div>
        </div>
    )
}