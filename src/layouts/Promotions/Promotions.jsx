import { CardPromotion } from "@components/CardPromotion/CardPromotion";
import { dataPromotions } from "@data/Promotions";
import { InView } from "react-intersection-observer";

import "./stylesPromotions.scss";
export const Promotions = () => {
  return (
    <section className="container-fluid container-fluid-promotions">
      <article className="container px-lg-5">
        <header className="row row-header-promotions mb-5">
          <div className="col-12 col-header-promotions text-center">
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`m-0 subtitle-section animate__animated ${
                    inView ? "animate__fadeInDown" : "animate__fadeOut"
                  }`}
                >
                  Prioriza la salud de los tuyos y
                </p>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <h2
                  ref={ref}
                  className={`m-0 p-0 title-section title-section__promotions  animate__animated ${
                    inView ? "animate__fadeInDown" : "animate__fadeOut"
                  }`}
                >
                  <strong>
                    ¡Descubre Promociones Especiales para el Bienestar Familiar!
                  </strong>
                </h2>
              )}
            </InView>
          </div>
        </header>
        <div className="row row-promotions">
          {dataPromotions.length > 0
            ? dataPromotions.map((promotion) => (
                <div key={promotion.id} className="col-12 col-card-promotion">
                  <CardPromotion
                    data={{
                      promotion: promotion,
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </article>
    </section>
  );
};
