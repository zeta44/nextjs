import styles from './header.module.css';

export function Header() {
    return (
        <section className={styles.header}>
          <p className={styles.title_top}>
            Luctus vitae.
          </p>
          <h1 className={styles.title}>
            Utrum ut placerat nec, varius sit amet lacus.
          </h1>
        </section>
    )
}