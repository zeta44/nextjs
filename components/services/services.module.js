import styles from './services.module.css';

export function Services() {
    return (
        <section className={styles.services}>
            <article className={styles.servicesDescription}>

                <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                    Proin enim enim, tincidunt consequat sollicitudin.
                </h1>

                <p
                data-aos="fade-down"
                data-aos-duration="1000"
                >
                    Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu. Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
                </p>

            </article>

            <article>

                <div className={styles.service_grid_container}>
                    <div className={styles.service_grid_1}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    ></div>
                    <div className={styles.service_grid_2}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    >
                        <p>
                            Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
                        </p>
                    </div>
                    <div className={styles.service_grid_3}
                    
                    ></div>
                </div>


            </article>

        </section>
    )
}