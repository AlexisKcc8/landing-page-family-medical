import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { InView } from 'react-intersection-observer';

import './stylesCarouselGallery.scss';
export const CarouselGallery = (props) => {
  const { galleryID, images } = props;

  const itemActive = useRef();

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    const firtsItemActive = itemActive.current;

    if (firtsItemActive.getAttribute('index-active') == images.length - 1) {
      firtsItemActive.classList.add('active');
    }

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <InView>
      {({ inView, ref }) => (
        <div
          id="carouselExampleCaptions"
          ref={ref}
          className={`carousel slide container-fluid-carousel overflow-hidden animate__animated ${
            inView ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        >
          <div
            className="carousel-inner pswp-gallery carousel-inner-items overflow-hidden"
            id={galleryID}
          >
            {images ? (
              images.map((image, index) => (
                <div
                  index-active={index}
                  className="carousel-item"
                  ref={itemActive}
                  key={galleryID + '-' + index}
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
              ))
            ) : (
              <p>Sin certificados por el momento</p>
            )}
          </div>
          <button
            className="carousel-control-prev carousel-control-btns "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carousel-control-btns"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </InView>
  );
};
