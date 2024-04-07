import { InView } from "react-intersection-observer";
import "./stylesCardPromotion.scss";
export const CardPromotion = (props) => {
  const { data } = props;
  const { promotion } = data;
  const {
    id,
    imagenWebpMovil,
    imagenAvifMovil,
    imagenJpgMovil,
    imagenWebpDesktop,
    imagenAvifDesktop,
    imagenJpgDesktop,
    title,
    description,
    item,
  } = promotion;
  const options = {
    threshold: 0,
    triggerOnce: true,
  };
  return (
    <div className="container p-0 container-card-promotion">
      <div
        className={`row row-card-promotion d-flex ${
          item % 2 === 0 ? "my-5" : ""
        }`}
      >
        <InView {...options}>
          {({ inView, ref }) => (
            <picture
              ref={ref}
              className={`col-12 col-lg-6 col-img-promotion ${
                item % 2 !== 0 ? "order-2" : "order-1"
              } animate__animated ${
                inView ? "animate__fadeIn" : "animate__fadeOut"
              }`}
            >
              <source
                className="img-service"
                type="image/avif"
                srcSet={imagenAvifDesktop}
              />
              <source
                className="img-service"
                type="image/webp"
                srcSet={imagenWebpDesktop}
              />

              <img
                className="img-promotion"
                src={imagenJpgDesktop}
                alt={`imagen ${title}`}
              />
              <span className="promotion">
                <span>
                  Promoción <small>/ {item}</small>
                </span>
              </span>
            </picture>
          )}
        </InView>

        <div
          className={`col-12 col-lg-6 col-text-promotion ${
            item % 2 !== 0 ? "order-1" : "order-2"
          }`}
        >
          <InView {...options}>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`title-promotion animate__animated ${
                  inView ? "animate__fadeIn" : "animate__fadeOut"
                }`}
              >
                {title}
              </p>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`info-promotion animate__animated ${
                  inView ? "animate__fadeIn" : "animate__fadeOut"
                }`}
              >
                {description}
              </p>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};
