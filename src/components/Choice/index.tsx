import styles from './Choice.module.scss'
// FONTS
import { title } from '../../fonts/fonts'
// NEXT
import Link from 'next/link'

interface ChoiceProps {
    tema: string
    link: string
}

export default function Choice({ tema, link }: ChoiceProps) {
    return (
        <Link href={link}>
            <div className={styles.container}>
                <h1 className={title.className}>
                    {tema}
                </h1>
            </div>
        </Link>
    )
}