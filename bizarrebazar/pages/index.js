import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>          Achetons l'amicale
</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com"></link>
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"></script>
        <div id="snipcart" data-config-modal-style="side" data-api-key="ZWM2MTY0MjYtZjI3NS00MDM3LTkzNjQtMTljMjA2N2U2ZGM2NjM3NTAyODk3NTI4MDExNjAx" hidden></div>
      </Head>

      <main className={styles.main}>

        <h2>
          Achetons l'amicale
        </h2>
       <button class="snipcart-add-item"
          data-item-id="tableau de fou"
          data-item-price="123"
          data-item-url="/index"
          data-item-description="Un superbe objet en soutien pour l'achat de l'Amicale."
          data-item-name="un tableau de fou">
          Add to cart
        </button>
        <button class="snipcart-checkout">Click here to checkout</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
