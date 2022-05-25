import styles from './footer.module.css';

export function Footer() {
    return (
        <section className={styles.footer} >
            <section data-aos="fade-up">
                <div className={styles.main_footer_separator}>

                </div>
            </section>
            <section className={styles.footer_bottom}
            data-aos="fade-down"
            data-aos-duration="1000">

                <article>
                    <div className={styles.squareFooter}
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    >

                    </div>

                    <div className={styles.squareFooter}
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    >

                    </div>
                </article>


                <article>
                    <h1
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    >
                        Proin enim enim, tincidunt consequat sollicitudin.
                    </h1>
                </article>
            </section>
        </section>
    )
}
