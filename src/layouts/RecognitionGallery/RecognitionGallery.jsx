import "./stylesRecognitionGallery.scss";
import { CarouselGallery } from "../../components/carouselGallery/CarouselGallery";
import { recognitions } from "../../data/galleryRecognition";

export const RecognitionGallery = () => {
  return (
    <section className="container-fluid contaner-fluid-gallery pt-5">
      <article className="container">
        <header className="row">
          <div className="col-12 container-title-and-subtitle text-center">
            <p className="m-0 subtitle">
              <strong>Si gustas puedes hecharle un ojo a</strong>
            </p>
            <h2 className=" title">
              <strong>Mis reconocimientos</strong>
            </h2>
          </div>
        </header>

        <section className="row d-md-none">
          <div className="col-12">
            <CarouselGallery
              galleryID={recognitions.galleryID}
              images={recognitions.images}
            />
          </div>
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
