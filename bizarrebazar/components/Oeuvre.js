import Markdown from "react-markdown";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMediaQuery } from "../utils/useMediaquery";
import Image from "next/image";

export default function Oeuvre(props) {
  const artiste = props.artiste;
  const numero = props.numero;
  let isPageWide = useMediaQuery("(max-width: 768px)");

  const view = () => {
    switch (numero) {
      case "1":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              <Zoom>
                <Image
                  src={artiste.fields.illustrationOeuvre1[0].url.replace(
                    "http",
                    "https"
                  )}
                  alt="Picture of the author"
                  width={380}
                  height={380}
                />
              </Zoom>
            ) : (
              <Carousel
                controls={
                  artiste.fields.illustrationOeuvre1.length < 2 ? false : true
                }
                justify-self="center"
                align-self="start"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre1.map((oeuvre, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <Zoom>
                        <Image
                          src={artiste.fields.illustrationOeuvre1[
                            i
                          ].url.replace("http", "https")}
                          alt="Picture of the author"
                          width={600}
                          height={600}
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
        );
        break;
      case "2":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre2 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre2[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
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
                      <Image
                        src={artiste.fields.illustrationOeuvre2[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
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
          </div>
        );

        break;
      case "3":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre3 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre3[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                  />
                  {/* <img
                src={artiste.fields.illustrationOeuvre3[0].url.replace(
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
                  artiste.fields.illustrationOeuvre3?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre3?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      <Image
                        src={artiste.fields.illustrationOeuvre3[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                      />

                      {/* <img
                    src={artiste.fields.illustrationOeuvre3[
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
              {artiste.fields.titreOeuvre3}
            </div>
            <Markdown
              source={artiste.fields.descriptionOeuvre3}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre3 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre3 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre3Vendue ? (
              <button
                className="snipcart-add-item text-sm underline hover:text-red-600"
                data-item-id={artiste.fields.titreOeuvre3}
                data-item-price={artiste.fields.prixOeuvre3}
                data-item-url="/"
                data-item-name={artiste.fields.titreOeuvre3}
                data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                data-item-weight={
                  typeof artiste.fields.poidsOeuvre3 == undefined
                    ? 0
                    : artiste.fields.poidsOeuvre3
                }
              >
                Ajouter au panier
              </button>
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </div>
        );
        break;
      case "4":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre4 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre4[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                  />
                  {/* <img
                src={artiste.fields.illustrationOeuvre4[0].url.replace(
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
                  artiste.fields.illustrationOeuvre4?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre4?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      {/* <img
                    src={artiste.fields.illustrationOeuvre4[
                      i
                    ].url.replace("http", "https")}
                    className="tailleImage"
                    loading="lazy"
                  /> */}
                      <Image
                        src={artiste.fields.illustrationOeuvre4[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                      />
                    </Zoom>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            <div className="LibreBaskerville text-sm">
              {artiste.fields.titreOeuvre4}
            </div>
            <Markdown
              source={artiste.fields.descriptionOeuvre4}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre4 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre4 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre4Vendue ? (
              <button
                className="snipcart-add-item text-sm underline hover:text-red-600"
                data-item-id={artiste.fields.titreOeuvre4}
                data-item-price={artiste.fields.prixOeuvre4}
                data-item-url="/"
                data-item-name={artiste.fields.titreOeuvre4}
                data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                data-item-weight={
                  typeof artiste.fields.poidsOeuvre4 == undefined
                    ? 0
                    : artiste.fields.poidsOeuvre4
                }
              >
                Ajouter au panier
              </button>
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </div>
        );
        break;
      case "5":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre5 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre5[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                  />
                  {/* <img
                src={artiste.fields.illustrationOeuvre5[0].url.replace(
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
                  artiste.fields.illustrationOeuvre5?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre5?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      <Image
                        src={artiste.fields.illustrationOeuvre5[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                      />
                      {/* <img
                    src={artiste.fields.illustrationOeuvre5[
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
            <div>{artiste.fields.titreOeuvre5}</div>
            <Markdown
              source={artiste.fields.descriptionOeuvre5}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre5 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre5 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre5Vendue ? (
              <button
                className="snipcart-add-item text-sm underline hover:text-red-600"
                data-item-id={artiste.fields.titreOeuvre5}
                data-item-price={artiste.fields.prixOeuvre5}
                data-item-url="/"
                data-item-name={artiste.fields.titreOeuvre5}
                data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                data-item-weight={
                  typeof artiste.fields.poidsOeuvre5 == undefined
                    ? 0
                    : artiste.fields.poidsOeuvre5
                }
              >
                Ajouter au panier
              </button>
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </div>
        );
        break;
      case "6":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre6 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre6[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                  />
                  {/* <img
                 src={artiste.fields.illustrationOeuvre5[0].url.replace(
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
                  artiste.fields.illustrationOeuvre6?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre6?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      <Image
                        src={artiste.fields.illustrationOeuvre6[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                      />
                      {/* <img
                     src={artiste.fields.illustrationOeuvre5[
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
              {artiste.fields.titreOeuvre6}
            </div>
            <Markdown
              source={artiste.fields.descriptionOeuvre6}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre6 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre6 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre6Vendue ? (
              <button
                className="snipcart-add-item text-sm underline hover:text-red-600"
                data-item-id={artiste.fields.titreOeuvre6}
                data-item-price={artiste.fields.prixOeuvre6}
                data-item-url="/"
                data-item-name={artiste.fields.titreOeuvre6}
                data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                data-item-weight={
                  typeof artiste.fields.poidsOeuvre6 == undefined
                    ? 0
                    : artiste.fields.poidsOeuvre6
                }
              >
                Ajouter au panier
              </button>
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </div>
        );
        break;
      case "7":
        return (
          <div className="keen-slider__slide">
            {isPageWide ? (
              artiste.fields.illustrationOeuvre7 && (
                <Zoom>
                  <Image
                    src={artiste.fields.illustrationOeuvre7[0].url.replace(
                      "http",
                      "https"
                    )}
                    alt="Picture of the author"
                    width={380}
                    height={380}
                  />
                  {/* <img
                   src={artiste.fields.illustrationOeuvre5[0].url.replace(
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
                  artiste.fields.illustrationOeuvre7?.length < 2 ? false : true
                }
                justify-self="center"
                align-self="center"
                control-prev-icon-color="invert(100%)"
                control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
              >
                {artiste.fields.illustrationOeuvre7?.map((oeuvre, i) => (
                  <Carousel.Item key={i}>
                    <Zoom>
                      <Image
                        src={artiste.fields.illustrationOeuvre7[i].url.replace(
                          "http",
                          "https"
                        )}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                      />
                      {/* <img
                       src={artiste.fields.illustrationOeuvre5[
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
              {artiste.fields.titreOeuvre7}
            </div>
            <Markdown
              source={artiste.fields.descriptionOeuvre7}
              escapeHtml={true}
              className="text-sm "
            />
            <div className="LibreBaskerville text-sm">
              {artiste.fields.prixOeuvre7 == "0"
                ? "Prix libre"
                : "Prix : " + artiste.fields.prixOeuvre7 + " euros"}{" "}
            </div>

            {!artiste.fields.oeuvre7Vendue ? (
              <button
                className="snipcart-add-item text-sm underline hover:text-red-600"
                data-item-id={artiste.fields.titreOeuvre7}
                data-item-price={artiste.fields.prixOeuvre7}
                data-item-url="/"
                data-item-name={artiste.fields.titreOeuvre7}
                data-item-custom1-name="Le prix des oeuvres est fixé à un montant minimun. N'hésitez pas à donner plus en soutien!"
                data-item-custom1-options="0 euros [+0.00]| 5 euros[+5.00]| 10 euros[+10.00]| 15 euros[+15.00] | 20 euros[+20.00]|50 euros[+50.00]| 100 euros[+100.00]"
                data-item-weight={
                  typeof artiste.fields.poidsOeuvre7 == undefined
                    ? 0
                    : artiste.fields.poidsOeuvre7
                }
              >
                Ajouter au panier
              </button>
            ) : (
              <div>N'est plus disponible...</div>
            )}
          </div>
        );

        break;
      default:
        "";
    }
  };

  return (
    <>
      {view()}
    </>
  );
}
