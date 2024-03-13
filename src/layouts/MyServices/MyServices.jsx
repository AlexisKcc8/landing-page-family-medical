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
      className="container-fluid-services container-fluid min-vh-100 "
    >
      <article className="container-services container">
        <header className="row-header row text-center ">
          <p className="subtitle-section m-0">Te ofrecemos siempre</p>
          <h2 className="title-section m-0 p-0">
            <strong>Servicios confiables y de la mejor calidad.</strong>
          </h2>
        </header>

        <section className="row-grid-services row  ">
          <article className="col-12 p-0  mb-3 mb-lg-0">
            <CardService
              data={{
                service: getSpecificService(dataServices, 7),
              }}
            />
          </article>
          <article className="col-12 col-lg-6 p-0 mb-3 mb-lg-0">
            <CardService
              data={{
                bgColor: "#1b544f",
                service: getSpecificService(dataServices, 1),
              }}
            />
          </article>
          <article className="col-12 col-lg-6 p-0 mb-3 mb-lg-0">
            <CardService
              data={{
                bgColor: "#1c6961",
                service: getSpecificService(dataServices, 2),
              }}
            />
          </article>
          <article className="col-12 p-0 mb-3 mb-lg-0">
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
