import { InView } from "react-intersection-observer";

import { CardPrice } from "@components/CardPrice/CardPrice";
import { dataServices } from "@data/services";

export const Prices = () => {
  const filterServicesByPackage = (services, idPackage) => {
    idPackage = idPackage.toString();
    return services.filter((service) => service.package === idPackage);
  };

  const options = {
    threshold: 0,
    triggerOnce: true,
  };

  return (
    <section id="prices" className="container-fluid-prices container-fluid ">
      <article className="container-prices container">
        <header className="row-header row text-center">
          <InView>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`m-0 subtitle-section animate__animated ${
                  inView ? "animate__fadeInDown" : "animate__fadeOut"
                }`}
              >
                Elaboramos nuevos paquetes para que puedas
              </p>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={`title-section m-0 p-0 animate__animated ${
                  inView ? "animate__fadeInDown" : "animate__fadeOut"
                }`}
              >
                <strong>Aprovechar nuestros nuevos precios.</strong>
              </h2>
            )}
          </InView>
        </header>

        <section className="row-cards row mt-3 ">
          <InView {...options}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-12 col-md-6 col-lg-4 mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center animate__animated ${
                  inView ? "animate__slideInLeft" : "animate__fadeOut"
                }`}
              >
                <CardPrice
                  data={{
                    title: "Paquete 1: Asesoría médica",
                    description:
                      "Ideal para tener acceso a orientación médica de calidad a un precio asequible. Garantizamos respuestas claras y precisas para sus inquietudes de salud.",
                    price: "$80.00",
                    services: filterServicesByPackage(dataServices, 1),
                    packageBelongs: "1",
                  }}
                />
              </div>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-12 col-md-6 col-lg-4 mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center animate__animated ${
                  inView ? "animate__fadeIn" : "animate__fadeOut"
                }`}
              >
                <CardPrice
                  data={{
                    title: "Paquete 2: Consulta a domicilio",
                    description:
                      "Creado para proporcionarle atención médica de calidad sin la molestia de desplazarse a una clínica u hospital. Estaremos encantados de visitarlo en la comodidad de su hogar.",
                    isDark: true,
                    price: "Personalizado",
                    services: filterServicesByPackage(dataServices, 2),
                    packageBelongs: "2",
                  }}
                />
              </div>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-12 col-md-6 col-lg-4  mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center animate__animated ${
                  inView ? "animate__fadeInRight" : "animate__fadeOut"
                }`}
              >
                <CardPrice
                  data={{
                    title: "Paquete 3: Consulta médica",
                    description:
                      "Diseñado con el objetivo de brindarle la atención médica que necesita para sentirse seguro y respaldado en cada paso de su viaje hacia la salud óptima.",
                    price: "$300.00",
                    services: filterServicesByPackage(dataServices, 3),
                    packageBelongs: "3",
                  }}
                />
              </div>
            )}
          </InView>
        </section>
      </article>
    </section>
  );
};
