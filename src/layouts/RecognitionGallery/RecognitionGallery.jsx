import { CarouselGallery } from "@components/CarouselGallery/CarouselGallery";
import { GridGallery } from "@components/GridGallery/GridGallery";
import { dataRecognitions } from "@data/galleryRecognition";
import { useRef } from "react";

import "./stylesRecognitionGallery.scss";
export const RecognitionGallery = () => {
  const $textRecognition = useRef(null);
  const $btnShowInfoRecognition = useRef(null);
  const handleShowMoreInfo = () => {
    $textRecognition.current.classList.toggle("show-all-text-recognition");

    if ($btnShowInfoRecognition.current.textContent === "Ver más") {
      $btnShowInfoRecognition.current.textContent = "Ver menos";
    } else {
      $btnShowInfoRecognition.current.textContent = "Ver más";
    }
  };

  return (
    <section className="container-fluid-recognition container-fluid">
      <article className="container-recognition container px-lg-5 ">
        <div className="row-recognition row">
          <aside className="col-info col-12 col-lg-6">
            <div className="content-info">
              <p className="m-0 subtitle-section">
                Si gustas puedes hecharle un ojo a mis
              </p>
              <h2 className="title-section">
                <strong>Diplomas y certificados</strong>
              </h2>
              <p ref={$textRecognition} className="text-recognition ">
                Cada uno de estos documentos representa un hito en mi viaje
                educativo y profesional, y refleja mi compromiso con la
                excelencia en la medicina familiar. A través de años de estudio
                riguroso y dedicación continua, he adquirido el conocimiento y
                las habilidades necesarias para proporcionar una atención
                integral y compasiva a mis pacientes y sus familias.
              </p>
              <button
                ref={$btnShowInfoRecognition}
                onClick={handleShowMoreInfo}
                className="btn d-lg-none btn-show-more-info-recognition"
              >
                Ver más
              </button>
            </div>
          </aside>
          <aside className="d-md-none col-12">
            <CarouselGallery
              galleryID={dataRecognitions.galleryID}
              images={dataRecognitions.images}
            />
          </aside>
          <aside className="col-12 col-lg-6">
            <section className="container py-0 d-none d-md-block">
              <GridGallery
                galleryID={dataRecognitions.galleryID}
                images={dataRecognitions.images}
              />
            </section>
          </aside>
        </div>
      </article>
    </section>
  );
};
