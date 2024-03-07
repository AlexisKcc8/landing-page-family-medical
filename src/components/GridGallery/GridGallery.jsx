import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import "./stylesGridGallery.scss";
export const GridGallery = (props) => {
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
    <section className="row-grid-gallery  row pswp-gallery " id={galleryID}>
      {images.map((image, index) => (
        <div
          className="container-img-gallery col-3 mb-3"
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
  );
};
