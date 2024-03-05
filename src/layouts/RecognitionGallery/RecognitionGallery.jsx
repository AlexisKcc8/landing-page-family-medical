import { CarouselGallery } from "@components/CarouselGallery/CarouselGallery";
import { dataRecognitions } from "@data/galleryRecognition";

import "./stylesRecognitionGallery.scss";
export const RecognitionGallery = () => {
  return (
    <section className="contaner-fluid-gallery container-fluid pt-5">
      <article className="container-recognition-gallery container">
        <header className="row-header row">
          <section className="col-title col-12  text-center">
            <p className="m-0 subtitle">
              <strong>Si gustas puedes hecharle un ojo a</strong>
            </p>
            <h2 className=" title">
              <strong>Mis reconocimientos</strong>
            </h2>
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
        {/* <section className="row-gallery-imgs row pswp-gallery" id={galleryID}>
          {images.map((image, index) => (
            <div
              className="container-img-gallery col-6 col-md-4 border"
              key={galleryID + "-" + index}
            >
              <a
                href={image.srcImgWebp}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image.srcImgWebp} alt="" />
              </a>
            </div>
          ))}
        </section> */}
      </article>
    </section>
  );
};
