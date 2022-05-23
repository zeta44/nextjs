import styles from './cardbox.module.css'

export function Cardbox() {
    return (
        <section className={styles.grid_card_container}>
            <div className={styles.grid_card_1}></div>
            <div className={styles.grid_card_2}></div>
        </section>
    )
}