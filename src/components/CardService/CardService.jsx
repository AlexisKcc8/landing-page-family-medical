import "./stylesCardService.scss";
export const CardService = (props) => {
  const { data } = props;

  if (data === undefined || data.service === undefined) {
    return null; // Si no hay data, no renderiza nada
  }
  let { orderWiewInfo: orderId, service, bgColor } = data;

  let {
    imagenWebpMovil,
    imagenAvifMovil,
    imagenJpgMovil,
    imagenWebpDesktop,
    imagenAvifDesktop,
    imagenJpgDesktop,
    title,
    description,
    price,
    package: packageBelongs,
  } = service;

  orderId = orderId !== undefined ? orderId : [1, 1];
  bgColor = bgColor !== undefined ? bgColor : "#fff";
  return (
    <article className="container-card-service card h-100  rounded-0 border-0">
      <section className="row-card-service row g-0 h-100 ">
        <aside
          className={`col-img-service col-md-6 order-md-${
            orderId[0] > 1 ? orderId[0] : 1
          }`}
        >
          <div className="layer-img-service">
            <picture className="picture-img-service">
              <source
                media="(min-width: 992px)"
                className="img-service"
                type="image/avif"
                srcSet={imagenAvifDesktop}
              />
              <source
                media="(min-width: 992px)"
                className="img-service"
                type="image/webp"
                srcSet={imagenWebpDesktop}
              />

              <source
                className="img-service"
                type="image/avif"
                srcSet={imagenAvifMovil}
              />
              <source
                className="img-service"
                type="image/webp"
                srcSet={imagenWebpMovil}
              />

              <img
                className="img-service"
                src={imagenJpgDesktop}
                alt={`imagen ${title}`}
              />
              <div className="layer"></div>
            </picture>
          </div>
        </aside>
        <aside
          className={`col-info col-md-6 order-${
            orderId[0] > 1 ? orderId[1] : 1
          } p-3 ${bgColor !== "#fff" ? "text-white" : ""}`}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="body-card card-body ">
            <h5 className="title-card">{title}</h5>
            <p className="text-card">{description}</p>
            <p className="text-card">
              <small className="">
                Incluida en el paquete: {packageBelongs}
              </small>
            </p>
          </div>
        </aside>
      </section>
    </article>
  );
};
