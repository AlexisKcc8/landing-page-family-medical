import { iconBanner } from "../../data/banner";
import "./styleBanner.scss";
export const Banner = () => {
  return (
    <section className="container-fluid ">
      <article className="container p-0 overflow-hidden">
        <div className="row py-3">
          {iconBanner ? (
            iconBanner.map((item) => (
              <div key={item.id} className="col-12 col-md-3 item-banner">
                <div className="card-item-banner" data-wow-delay="0.2s">
                  <div className="content">
                    <figure className="figure-icon">
                      <img src={item.icon} alt={`icon-${item.title}`} />
                    </figure>
                    <h4 className="title">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>Informacion no disponible</h2>
          )}
        </div>
      </article>
    </section>
  );
};
