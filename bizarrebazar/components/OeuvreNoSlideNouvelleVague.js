import Markdown from "react-markdown";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import { useMediaQuery } from "../utils/useMediaquery";
import Image from "next/image";

export default function OeuvreNoSlideNouvelleVague(props) {
  const artiste = props.data;
  let isPageWide = useMediaQuery("(max-width: 768px)");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        {isPageWide ? (
          <Zoom>
            <img
              src={artiste.fields.illustrationOeuvre1[0].fields.file.url.replace(
                "http",
                "https"
              )}
              alt="Picture of the author"
            //   width='380'
            //   height='380'
            className="tailleImage"
            />
          </Zoom>
        ) : (
          <Carousel
            controls={
              artiste.fields.illustrationOeuvre1?.length < 2 ? false : true
            }
            justify-self="center"
            align-self="start"
            control-prev-icon-color="invert(100%)"
            control-next-icon-color="invert(100%)"
            indicators={false}
            touch={true}
            interval={null}
          >
            {artiste.fields.illustrationOeuvre1?.map((oeuvre, i) => {
              return (
                <Carousel.Item key={i}>
                  <Zoom>
                    <img
                      src={artiste.fields.illustrationOeuvre1[i].fields.file.url.replace(
                        "http",
                        "https"
                      )}
                      alt="Picture of the author"
                    //   width='600'
                    //   height='600'
                    className="tailleImage"
                    />
                  </Zoom>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}

        <div className="LibreBaskerville text-sm ">
          {artiste.fields.titreOeuvre1}
        </div>
        <div className="text-sm">
          <Markdown
            source={artiste.fields.descriptionOeuvre1}
            escapeHtml={true}
            className="text-sm "
          />
        </div>
        <div className="LibreBaskerville text-sm">
          {artiste.fields.prixOeuvre1 == "0"
            ? "Prix libre"
            : "Prix : " + artiste.fields.prixOeuvre1 + " euros"}{" "}
        </div>

        {!artiste.fields.oeuvre1Vendue ? (
          artiste.fields.tShirt1 ? (
            <button
              className="snipcart-add-item text-sm underline hover:text-red-600"
              data-item-id={artiste.fields.titreOeuvre1}
              data-item-price={artiste.fields.prixOeuvre1}
              data-item-url="/"
              data-item-name={artiste.fields.titreOeuvre1}
              data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
              data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
              data-item-custom2-name="Taille"
              data-item-custom2-options="S|M|L|XL"
              data-item-weight={
                typeof artiste.fields.poidsOeuvre1 == undefined
                  ? 0
                  : artiste.fields.poidsOeuvre1
              }
            >
              Ajouter au panier
            </button>
          ) : (
            <button
              className="snipcart-add-item text-sm underline hover:text-red-600"
              data-item-id={artiste.fields.titreOeuvre1}
              data-item-price={artiste.fields.prixOeuvre1}
              data-item-url="/"
              data-item-name={artiste.fields.titreOeuvre1}
              data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
              data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
              data-item-weight={
                typeof artiste.fields.poidsOeuvre1 == undefined
                  ? 0
                  : artiste.fields.poidsOeuvre1
              }
            >
              Ajouter au panier
            </button>
          )
        ) : (
          <div>N'est plus disponible...</div>
        )}
      </div>

      <div>
        {artiste.fields.illustrationOeuvre2 && (
          <>
            {isPageWide ? (
              artiste.fields.illustrationOeuvre2 && (
                <Zoom>
                  <img
                    src={artiste.fields.illustrationOeuvre2[0].fields.file.url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    // width='380'
                    // height='380'
                    className="tailleImage"
                  />
                  {/* <img
        src={artiste.fields.illustrationOeuvre2[0].url.replace(
          "http",
          "https"
        )}
        className="tailleImage"
        loading="lazy"
      /> */}
                </Zoom>
              )
            ) : (
              <Carousel
                controls={
                  artiste.fields.illustrationOeuvre2?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre2?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      <img
                        src={artiste.fields.illustrationOeuvre2[i].fields.file.url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        // width='600'
                        // height='600'
                        className="tailleImage"
                      />

                      {/* <img
            src={artiste.fields.illustrationOeuvre2[
              i
            ].url.replace("http", "https")}
            className="tailleImage"
            loading="lazy"
          /> */}
                    </Zoom>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            <div className="LibreBaskerville text-sm">
              {artiste.fields.titreOeuvre2}
            </div>
            <Markdown
              source={artiste.fields.descriptionOeuvre2}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre2 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre2 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre2Vendue ? (
              artiste.fields.tShirt2 ? (
                <button
                  className="snipcart-add-item text-sm underline hover:text-red-600"
                  data-item-id={artiste.fields.titreOeuvre2}
                  data-item-price={artiste.fields.prixOeuvre2}
                  data-item-url="/"
                  data-item-name={artiste.fields.titreOeuvre2}
                  data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                  data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                  data-item-custom2-name="Taille"
                  data-item-custom2-options="S|M|L|XL"
                  data-item-weight={
                    typeof artiste.fields.poidsOeuvre2 == undefined
                      ? 0
                      : artiste.fields.poidsOeuvre2
                  }
                >
                  Ajouter au panier
                </button>
              ) : (
                <button
                  className="snipcart-add-item text-sm underline hover:text-red-600"
                  data-item-id={artiste.fields.titreOeuvre2}
                  data-item-price={artiste.fields.prixOeuvre2}
                  data-item-url="/"
                  data-item-name={artiste.fields.titreOeuvre2}
                  data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                  data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                  data-item-weight={
                    typeof artiste.fields.poidsOeuvre2 == undefined
                      ? 0
                      : artiste.fields.poidsOeuvre2
                  }
                >
                  Ajouter au panier
                </button>
              )
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
