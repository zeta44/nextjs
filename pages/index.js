import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Brink Assingnment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <section>
          <p className={styles.title_top}>
            Luctus vitae.
          </p>
          <h1 className={styles.title}>
            Utrum ut placerat nec, varius sit amet lacus.
          </h1>
        </section>

      </header>

      <main className={styles.main}>

        {/* Cards Block */}
        <section className={styles.cardBox}>
          <div className={styles.card}>

          </div>

          <div className={styles.card}>

          </div>


        </section>
        {/* End of Cards Block */}


        {/* About Block */}
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
        {/* End of About Block */}


        {/* Grid Block */}
        {/* <section className={styles.grid}>
          <article>
            <div className={styles.square}>

            </div>

            <div className={styles.square}>

            </div>
          </article>


          <article>
            <div className={styles.rectangle}>

            </div>
          </article>

          <article>
            <div className={styles.square}>

            </div>

            <div className={styles.square}>

            </div>
          </article>


        </section> */}



        <div className="grid_container">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
          <div className="e"></div>
        </div>








        {/* End of Grig Block */}


        <section className={styles.services}>
          <article className={styles.servicesDescription}>

            <h1>
              Proin enim enim, tincidunt consequat sollicitudin.
            </h1>

            <p>
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu. Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
            </p>

          </article>

          <article className={styles.servicesImages}>

            <div className={styles.square_1}>

            </div>

            <div className={styles.square_2}>

            </div>

            <p>
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu. Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
            </p>

            <div className={styles.square_3}>

            </div>
          </article>

        </section>




      </main>


      <footer className={styles.footer}>
        <section>
          <div className={styles.main_footer_separator}>

          </div>
        </section>
        <section className={styles.footer_bottom}>

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



      </footer>
    </div>
  )
}
