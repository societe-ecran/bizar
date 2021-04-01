import Head from "next/head";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import Artist from "../components/Artist";

export default function Home({ artistes = [] }, props) {
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  fisherYatesShuffle(artistes);

  console.log(artistes)
  return (
    <html lang="fr">
      <div className=" bgColor scrollBarColor">
        <Head>
          <title>L'Amicale | Bizarre Bazar</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com"></link>
          <link rel="preconnect" href="https://cdn.snipcart.com"></link>
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"
          ></script>

          <div
            id="snipcart"
            // data-config-modal-style="side"
            data-api-key={process.env.SNIPCART_DATA_API_KEY}
            hidden
          ></div>
        </Head>
        <Layout>
          <div className="pt-12 hidden grid  gap-2 md:grid grid-cols-4 ">
            <div className="">
              <strong className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">
                BIZ
              </strong>
              <br />
              <strong className="text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn pl-44">
                AR
              </strong>
              <br />
              <strong className=" text-9xl px-6 mt-6 arkm motion-safe:animate-fadeIn ">
                R E
              </strong>
            </div>
            <div></div>
            <div className="">
              <span className="text-9xl  mt-6 arkm motion-safe:animate-fadeIn ">
                BAZ
              </span>
              <br />
              <span className="text-9xl pl-36 mt-6 arkm motion-safe:animate-fadeIn">
                A
              </span>
              <br />
              <span className="text-9xl pl-80 mt-6 arkm motion-safe:animate-fadeIn">
                R
              </span>
            </div>
            <div className=" flex justify-end items-start pr-6">
              <button className=" snipcart-checkout px-6 text-l underline hover:text-red-600 LibreBaskerville">
                PANIER
              </button>
              {/* <span class="snipcart-items-count"></span> <br/>
              <span class="snipcart-total-price"></span> */}
            </div>
          </div>

          <div className="ml-3 mr-3 md:mx-6 LibreBaskerville md:text-xl">
            <div className="md:border-t md:border-black LibreBaskerville pt-3">
              <span className="arkm LibreBaskerville">
                <strong>Bizarre</strong> Bazar{" "}
              </span>
              BizarreBazar a été créé pour rendre visible un geste qui
              nous tient à coeur : l’infinie puissance créatrice de nos proches
              au profit de l’achat de l’Amicale du futur. Vous trouverez donc ici des
              pièces toutes fantastiques qui nous ont été généreusement données
              par nos ami.e.s musicien.nes, artistes, plasticien.nes,
              illustrateur.rices, photographes, imprimeuse.rs, tisserand.es,
              potier.es, bijoutier.es, graphistes, designeuse.rs textile,
              peintres… Vous avez la possibilité de les acheter si elles vous
              plaisent afin de contribuer d’une manière originale à l’achat des
              murs de l’Amicale. Vous pourrez également faire un don
              supplémentaire lors de votre commande. N'hésitez surtout pas!
            </div>
                  
            <div>
              Découvrez aussi{" "}
              <a
                className="textDecorationNone underline text-black hover:text-red-600"
                href="https://amicalementvotre.bandcamp.com/"
                target="_blank"
              >
                les supers compiles de l’Amicale{" "}
              </a>
              que les copines et copains musiciens nous ont concoctées mais aussi
              une série spéciale de t-shirts imprimés dans les ateliers de{" "}
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://www.grrrndzero.org/"
                target="_blank"
              >
                Grrrnd Zero{" "}
              </a>
              avec les dessins de{" "}
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://felicite.land/"
                target="_blank"
              >
                Félicité Landrivon
              </a>
              ,
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://servicelocal.fr/"
                target="_blank"
              >
                {" "}
                Service Local
              </a>
              ,
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://marionjdanoff.net/"
                target="_blank"
              >
                {" "}
                Marion Jdanoff
              </a>
              ,
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://www.alaricgarnier.fr/"
                target="_blank"
              >
                {" "}
                Alaric Garnier
              </a>
              ,
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="http://www.benoitfrancois.art/"
                target="_blank"
              >
                {" "}
                Benoît François
              </a>
              , et
              <a
                className="underline text-black underline text-black hover:text-red-600"
                href="https://www.instagram.com/soleil_de_nuit__/"
                target="_blank"
              >
                {" "}
                Soleil de nuit
              </a>{" "}
              !
            </div>
            <div>
              {" "}
              Rendez-vous prochainement pour un BIZARRE BAZAR en réel !!
            </div>
            <div>Bonne visite.</div>
            <br />
            <div className="mb-3">
              Pour plus de renseignements : bizarrebazar@riseup.net.
            </div>
          </div>

          {/*<div className="pt-3 mx-6 text-xl pb-3">
              <div className="arkm border-b border-t border-black py-1 mb-3">
                <a
                  className="textDecorationNone hover:text-red-600"
                  href="https://amicalementvotre.bandcamp.com/"
                  target="_blank"
                >
                  COMPILE amicalement votre --COMPILE amicalement votre -- COMPILE amicalement votre --
                  
                </a>
              </div>
              <img
                src="https://res.cloudinary.com/dbqfcp9vd/image/upload/v1616165428/illustration/compile_ddzfu2.jpg"
                alt="cassette compil de l'Amicale!"
                className="tailleImage"
              ></img>
            </div>*/}

          {artistes.map((artiste, i) => {
            return <Artist artiste={artiste} />;
          })}
          <div className=" border-t border-black text-xl LibreBaskerville">
            <div className="pt-2 pb-24 ml-3 mr-3">
              Merci beaucoup à Åbåke, Bertoyas, Bikesabbath, Brulex, Chloé
              Bouvarel, Aude Barrio, Ivan Brun, Rachid Bulbien, Bouteilleurz,
              Marie Colin-Madan, Abraham Diaz, Lise Dua, Julien Dupont, Margaux
              Duseigneur, EMDT, Benoît François, Lucas Ferrero, Antoine Fisher,
              Marie-Anita Gaube, Alaric Garnier, Lucile Gautier, Vincent
              Guillermin, Huard, Marion Jdanoff, Jess, Zad Kokar, Romano Krang,
              Félicité Landrivon, Laho, Lashka, Oriane Lassus, Valentin Lergès,
              Service Local, Gaelle Loth, La Tòrna, Liquid Test Press, Julie
              Kieffer, Hugues La Blanche, Yannis La Macchia, Stephen Loye, Diane
              Malatesta, Lou Masduraud, Antoine Machelot, Suka Mabuk, Barbara
              Meuli, Éditions Nuit Noire, Nagawika, Margaux Othats, Atelier Peso
              Pluma, Tristan Perreton, Thomas Perrodin, Ratcharge, Coline
              Rosoux, Simon Roussin, Octave Rimbert-Rivière, Soleil de nuit,
              Henri Tattooer, Renaud Thomas, Torpe, Laurène Vernet, Lia Vé, Ema
              Xp, pour vos généreux dons. Merci à Olivier Bral, Clément Rossi,
              Clémentine Léon, Gautier Scerra, et Hugues pour la réalisation des
              impressions. Lise, Romain, Colline, pour la compilation.
            </div>
          </div>
        </Layout>

        <div>
          <div></div>
        </div>
      </div>
    </html>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artistes = await client
    .getEntries({ content_type: "artiste" })
    .then((response) => response.items);

  return {
    props: {
      artistes,
    },
  };
}
