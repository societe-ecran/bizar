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
        <p>
       <button class="snipcart-add-item"
          data-item-id="Local de fou"
          data-item-price="230000"
          data-item-url="/index"
          data-item-description="Un superbe local en plein coeur de la guillotiere."
          data-item-name="Local de fou">
          Ajouter au panier
        </button>
    </p>
        <button class="snipcart-checkout">Passer la commande</button>
      </main>

      <footer className={styles.footer}>
  
          Powered by Télécrans de derrière les fagots
         
      </footer>
    </div>
  )
}
