import { CardService } from "@components/CardService/CardService";
import { dataServices } from "@data/services";

import "./stylesMyServices.scss";
export const MyServices = () => {
  const getSpecificService = (services, indexService) => {
    indexService = parseInt(indexService);
    return services[indexService];
  };
  return (
    <section
      id="services"
      className="container-fluid-services container-fluid min-vh-100 overflow-hidden"
    >
      <article className="container-services container">
        <header className="row-header-services row text-center mt-5">
          <p className="subtitle m-0">Te ofrecemos siempre</p>
          <h2 className="title  p-0">
            <strong>Servicios Confiables</strong>
          </h2>
        </header>

        <section className="row-grid-services row">
          <article className="col-12 p-0  col-card-service mb-3 mb-md-0">
            <CardService
              data={{ service: getSpecificService(dataServices, 7) }}
            />
          </article>
          <article className="col-12 col-md-6 p-0 mb-3 mb-md-0">
            <CardService
              data={{
                bgColor: "#3fbbc0",
                service: getSpecificService(dataServices, 1),
              }}
            />
          </article>
          <article className="col-12 col-md-6 p-0 mb-3 mb-md-0">
            <CardService
              data={{
                bgColor: "#00ffd91f",
                service: getSpecificService(dataServices, 2),
              }}
            />
          </article>
          <article className="col-12 p-0 col-card-service mb-3 mb-md-0">
            <CardService
              data={{
                orderWiewInfo: [2, 1],
                service: getSpecificService(dataServices, 6),
              }}
            />
          </article>
        </section>
      </article>
    </section>
  );
};
