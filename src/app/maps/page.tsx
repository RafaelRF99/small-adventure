import ButtonFloat from '@/components/ButtonFloat';
import styles from './page.module.scss'
// COMPONENTS
import RandomMaps from "@/components/RandomMaps";

export default function Maps() {

    return (
        <div className={styles.container}>
            <h1>Maps</h1>
            <div className={styles.cartas}>
                <RandomMaps carta='A' />
                <RandomMaps carta='2' />
                <RandomMaps carta='3' />
                <RandomMaps carta='4' />
                <RandomMaps carta='5' />
                <RandomMaps carta='6' />
                <RandomMaps carta='7' />
                <RandomMaps carta='8' />
                <RandomMaps carta='K' />
            </div>
            <div>
                <ButtonFloat choice='exit' />
                <ButtonFloat choice='clear' />
            </div>
        </div>
    )
}