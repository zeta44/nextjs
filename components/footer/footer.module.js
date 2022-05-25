import styles from './footer.module.css';

export function Footer() {
    return (
        <section className={styles.footer} >
            <section data-aos="fade-up">
                <div className={styles.main_footer_separator}>

                </div>
            </section>
            <section className={styles.footer_bottom} data-aos="fade-down">

                <article>
                    <div className={styles.squareFooter}>

                    </div>

                    <div className={styles.squareFooter}>

                    </div>
                </article>


                <article>
                    <h1>
                        Proin enim enim, tincidunt consequat sollicitudin.
                    </h1>
                </article>
            </section>
        </section>
    )
}
