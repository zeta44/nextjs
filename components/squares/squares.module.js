import styles from './squares.module.css';

export function Squares() {
  return (
    <section className={styles.grid}>
      <article className={styles.grid_container}>
        <div className={styles.a}></div>
        <div className={styles.b}></div>
        <div className={styles.c}></div>
        <div className={styles.d}></div>
        <div className={styles.e}></div>
      </article>
    </section>
  )
}