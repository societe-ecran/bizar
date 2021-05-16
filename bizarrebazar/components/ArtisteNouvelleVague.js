import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMediaQuery } from "../utils/useMediaquery";
import OeuvreNouvelleVague from "./OeuvreNouvelleVague";
import OeuvreNoSlideNouvelleVague from "./OeuvreNoSlideNouvelleVague";

export default function ArtistNouvelleVague(props) {
  const artiste = props.artiste;
  let isPageWide = useMediaQuery("(max-width: 768px)");

  const slidesPreview = isPageWide ? 1 : 2;

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: slidesPreview,
    // mode: "free-snap",
    spacing: 1,
    loop: true,
  });

  function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        pl-6
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  }

  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right md:arrow" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
  }

  const count = (artisteTri) => {
    const tab = Object.keys(artisteTri.fields);
    const foundOeuvre3 = tab.includes("titreOeuvre3");
    return foundOeuvre3;
  };

  return (
    <div className="border-t border-black pt-3 ml-3 mr-6 md:ml-6 md:mr-12 LibreBaskerville word-break">
      <div className="mb-3">
        <div className="text-l md:text-2xl LibreBaskerville">
          {artiste.fields.nomDeLartiste}
        </div>
        <a
          href={artiste.fields.siteDeLartiste}
          className="hover:text-red-600 textDecorationNone  text-l md:text-xl LibreBaskerville"
          target="_blank"
        >
          {artiste.fields.siteDeLartiste}
        </a>
      </div>

      <div className='pb-3'>
      {!count(artiste) ? (
        <OeuvreNoSlideNouvelleVague data={artiste} />
      ) : (
        <div className="navigation-wrapper mb-3 ">
          <div ref={sliderRef} className="keen-slider">
            {artiste.fields.titreOeuvre1 && (
              <OeuvreNouvelleVague numero={"1"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre2 && (
              <OeuvreNouvelleVague numero={"2"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre3 && (
              <OeuvreNouvelleVague numero={"3"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre4 && (
              <OeuvreNouvelleVague numero={"4"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre5 && (
              <OeuvreNouvelleVague numero={"5"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre6 && (
              <OeuvreNouvelleVague numero={"6"} artiste={artiste} />
            )}

            {artiste.fields.titreOeuvre7 && (
              <OeuvreNouvelleVague numero={"7"} artiste={artiste} />
            )}
          </div>

          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
      )}
      </div>
    </div>
  );
}
