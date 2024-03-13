import { CarouselGallery } from "@components/CarouselGallery/CarouselGallery";
import { GridGallery } from "@components/GridGallery/GridGallery";
import { dataRecognitions } from "@data/galleryRecognition";

import "./stylesRecognitionGallery.scss";
export const RecognitionGallery = () => {
  return (
    <section className="contaner-fluid-gallery container-fluid">
      <article className="container-recognition-gallery container  px-lg-5">
        <header className="row-header row ">
          <section className="col-title col-12  text-center">
            <p className="m-0 subtitle-section">
              Si gustas puedes hecharle un ojo a
            </p>
            <h2 className="title-section m-0 p-0">
              <strong>Mis reconocimientos</strong>
            </h2>
            <p className="note">
              Para una mejor visualización de las imagenes, puede presionar
              sobre ellas.
            </p>
          </section>
        </header>

        <section className="row-carousel row d-md-none">
          <article className="col-12">
            <CarouselGallery
              galleryID={dataRecognitions.galleryID}
              images={dataRecognitions.images}
            />
          </article>
        </section>

        <section className="container py-0 d-none d-md-block">
          <GridGallery
            galleryID={dataRecognitions.galleryID}
            images={dataRecognitions.images}
          />
        </section>
      </article>
    </section>
  );
};
