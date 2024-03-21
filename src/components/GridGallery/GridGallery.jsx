// import { useEffect } from 'react';
// import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import 'photoswipe/style.css';

import './stylesGridGallery.scss';
export const GridGallery = (props) => {
  const { galleryID, images } = props;
  // useEffect(() => {
  //   let lightbox = new PhotoSwipeLightbox({
  //     gallery: '#' + galleryID,
  //     children: 'a',
  //     pswpModule: () => import('photoswipe'),
  //   });
  //   lightbox.init();
  //   return () => {
  //     lightbox.destroy();
  //     lightbox = null;
  //   };
  // }, []);

  return (
    <section className="row-grid-gallery  row pswp-gallery " id={galleryID}>
      {images.map((image, index) => (
        <div
          className="container-img-gallery col-sm-4 col-lg-6  border rounded-0 p-0 overflow-hidden"
          key={galleryID + '-' + index}
        >
          <a
            className="link-img-recognition"
            href={image.srcImgWebp}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
          >
            <picture className="picture-img-recognition">
              <source
                className="img-recognition"
                srcSet={image.srcImgAvif}
                alt={`imagen-${image.title}`}
              />
              <source
                className="img-recognition"
                srcSet={image.srcImgWebp}
                alt={`imagen-${image.title}`}
              />

              <img
                className="img-recognition"
                src={image.srcImgJpg}
                alt={`imagen-${image.title}`}
              />
              <div className="layer">
                <p>Da click, para una mejor visualización.</p>
              </div>
            </picture>
          </a>
        </div>
      ))}
    </section>
  );
};
