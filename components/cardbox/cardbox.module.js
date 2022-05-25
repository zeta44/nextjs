import styles from './cardbox.module.css'

export function Cardbox() {
    return (
        
        <section className={styles.grid_card_container}>
            <div className={styles.grid_card_1} 
            data-aos="fade-left"
            data-aos-duration="1000"
            ></div>
            <div className={styles.grid_card_2} 
            data-aos="fade-right"
            data-aos-duration="1000"
            ></div>
        </section>
        
    )
}