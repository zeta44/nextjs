import styles from './about.module.css'

export function About() {
    return (
        <section>
            <article className={styles.about}>
                <h1>
                    Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
                </h1>
                <p>
                    Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae. Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.

                </p>

                <p>
                    Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent sed viverra lorem.

                </p>

            </article>
        </section>
    );
}