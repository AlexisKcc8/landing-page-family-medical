import { ItemsSocialMedia } from "../ItemsSocialMedia/ItemsSocialMedia";
import "./stylesCardPrice.scss";
export const CardPrice = (props) => {
  const { data } = props;

  let { title, img, price, services, packageBelongs } = data;

  services = services === undefined || null ? [] : services;

  return services.length > 0 ? (
    <div className="container-card ">
      <header className="header-card">
        <img src={img} className="w-100 h-100" alt="..." />
      </header>
      <div className="body-card">
        <p className="card-price m-0">
          <strong>Precio del paquete: {price}</strong>
        </p>
        <h5 className="title-card ">
          <strong>{title}</strong>
        </h5>
        <ul className="list-services">
          {services.map((service) => (
            <li className="list-item" key={service.id}>
              <img
                className="icon-check  m-0 p-0"
                src="/Icons/check.svg"
                alt="icon-check"
              />
              {service.title}
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer-card">
        <a
          className="btn-message btn"
          href="https://api.whatsapp.com/send/?phone=529999600490&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar WhatsApp
        </a>
      </footer>
    </div>
  ) : null;
};
