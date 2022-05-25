import styles from './squares.module.css';

export function Squares() {
  return (
    <section className={styles.grid}>
      <article className={styles.grid_container}>
        <div className={styles.a}
        data-aos="flip-left"
        data-aos-duration="1000"
        ></div>
        <div className={styles.b}
        data-aos="flip-left"
        data-aos-duration="1500"
        ></div>
        <div className={styles.c}
        data-aos="flip-down"
        data-aos-duration="1700"
        ></div>
        <div className={styles.d}
        data-aos="flip-right"
        data-aos-duration="1000"
        ></div>
        <div className={styles.e}
        data-aos="flip-right"
        data-aos-duration="2000"
        ></div>
      </article>
    </section>
  )
}