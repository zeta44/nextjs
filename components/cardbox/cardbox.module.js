import styles from './cardbox.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export function Cardbox() {
    return (
        <section>

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


            <section className={styles.slider_top_container}>
                
                <AwesomeSlider
                    media={[
                        {
                            source: '../../../images/image-0.jpg',
                        },
                        {
                            source: '../../../images/image-1.jpg',
                        },
                        {
                            source: '../../../images/image-2.jpg',
                        },
                    ]}
                />
                
            </section>


        </section>
    )
}