import "./stylesCardService.scss";
export const CardService = (props) => {
  const { data } = props;

  if (data === undefined || data.service === undefined) {
    return null; // Si no hay data, no renderiza nada
  }
  let { orderWiewInfo: orderId, service, bgColor } = data;

  let {
    imagenAvif,
    imagenWebp,
    imagenJpg,
    title,
    description,
    price,
    package: packageBelongs,
  } = service;

  orderId = orderId !== undefined ? orderId : [1, 1];
  bgColor = bgColor !== undefined ? bgColor : "#fff";
  return (
    <div className="container-card-service card h-100  rounded-0 border-0">
      <div className="row-card-service row g-0 h-100 overflow-hidden">
        <picture
          className={`picture-img-service col-md-6 order-md-${
            orderId[0] > 1 ? orderId[0] : 1
          }`}
        >
          <source
            className="img-fluid w-100 h-100"
            type="image/avif"
            srcSet={imagenAvif}
          />
          <source
            className="img-fluid w-100 h-100"
            type="image/webp"
            srcSet={imagenWebp}
          />

          <source />
          <img
            src={imagenJpg}
            className="img-fluid w-100 h-100"
            alt={`imagen-${title}`}
          />
        </picture>
        <div
          className={`col-info col-md-6 order-${
            orderId[0] > 1 ? orderId[1] : 1
          } p-3`}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="body-card card-body ">
            <h5 className="title-card">{title}</h5>
            <p className="text-card">{description}</p>
            <p className="text-card">
              <small className="text-body-secondary">
                Incluida en el paquete: {packageBelongs}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
