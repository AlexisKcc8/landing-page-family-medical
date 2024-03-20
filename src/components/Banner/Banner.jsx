import { dataIconBanner } from '@data/banner';
import './styleBanner.scss';
import { InView } from 'react-intersection-observer';
export const Banner = () => {
  return (
    <section className="container-fluid container-fluid-banner">
      <article className="container py-0 overflow-hidden">
        <div className="row py-3">
          {dataIconBanner ? (
            dataIconBanner.map((item) => (
              <InView key={item.id}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`col-12 col-md-3 item-banner animate__animated ${
                      inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                    }`}
                  >
                    <div className="card-item-banner" data-wow-delay="0.2s">
                      <div className="content">
                        <figure className="figure-icon ">
                          <img src={item.icon} alt={`icon-${item.title}`} />
                        </figure>
                        <div className="text-start  p-0 text-white">
                          <h4 className="title">{item.title}</h4>
                          <p className="m-0">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))
          ) : (
            <h2>Informacion no disponible</h2>
          )}
        </div>
      </article>
    </section>
  );
};
