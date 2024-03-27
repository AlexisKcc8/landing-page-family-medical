import { ItemsSocialMedia } from '../ItemsSocialMedia/ItemsSocialMedia';
import './stylesCardPrice.scss';
export const CardPrice = (props) => {
  const { data } = props;

  let { title, description, isDark, price, services, packageBelongs } = data;

  services = services === undefined || null ? [] : services;

  return services.length > 0 ? (
    <div
      className={`container-card ${isDark ? 'bg-card-dark' : 'bg-card-light'}`}
    >
      <div className="body-card ">
        <p className="title-card ">{title}</p>
        <p className="description-card ">{description}</p>
        <h3 className="card-price m-0">
          <strong>{price}</strong>
        </h3>
        <a
          href="https://api.whatsapp.com/send/?phone=529999600490&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-contact w-100 border border-black p-3 mt-4 ${
            isDark
              ? 'border-white bg-white text-black'
              : 'border-black text-black'
          }`}
        >
          Enviar WhatsApp
        </a>
        <p className="included mt-4">Qué está incluido:</p>
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
    </div>
  ) : null;
};
