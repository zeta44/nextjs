import styles from './squares.module.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
          data-aos="flip-right"
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

      <article className={styles.slider_bottom_container}>
        <AwesomeSlider
          media={[
            {
              source: '../../../images/image-5.jpg',
            },
            {
              source: '../../../images/image-4.jpg',
            },
            {
              source: '../../../images/image-3.jpg',
            },
            {
              source: '../../../images/image-2.jpg',
            },
            {
              source: '../../../images/image-1.jpg',
            },
            {
              source: '../../../images/image-0.jpg',
            }
          ]}
        />
      </article>
    </section>

  )
}