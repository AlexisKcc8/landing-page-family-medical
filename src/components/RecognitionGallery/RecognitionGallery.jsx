import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./stylesRecognitionGallery.scss";
export const RecognitionGallery = (props) => {
  const { galleryID, images } = props;

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section className="container-fluid pt-5">
      <article className="container">
        <header className="row">
          <div className="col-12 text-center">
            <p className="m-0">Si gustas puedes hecharle un ojo a</p>
            <h2 className="m-0 p-0">
              <strong>Mis reconocimientos</strong>
            </h2>
          </div>
        </header>

        <section className="row-gallery-imgs row pswp-gallery" id={galleryID}>
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
        </section>
      </article>
    </section>
  );
};
