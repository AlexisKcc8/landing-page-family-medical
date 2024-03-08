import { CardPrice } from "@components/CardPrice/CardPrice";
import { dataServices } from "@data/services";
import "./stylesPrices.scss";
export const Prices = () => {
  const filterServicesByPackage = (services, idPackage) => {
    idPackage = idPackage.toString();
    return services.filter((service) => service.package === idPackage);
  };

  return (
    <section
      id="prices"
      className="container-fluid-prices container-fluid min-vh-100 "
    >
      <article className="container-prices container py-4">
        <header className="row-header row text-center">
          <p className="m-0 subtitle-section">Nuevos paquetes</p>
          <h2 className="title-section m-0 p-0">
            <strong>
              Se el primero en aprovechar nuestros nuevos precios.
            </strong>
          </h2>
        </header>

        <section className="row-cards row mt-3 ">
          <div className="col-12 col-md-4 mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center">
            <CardPrice
              data={{
                title: "Paquete 1: Asesoría médica",
                img: "/imgs/Prices/img-paquete1.jpg",
                price: "$80.00",
                services: filterServicesByPackage(dataServices, 1),
                packageBelongs: "1",
              }}
            />
          </div>
          <div className="col-12 col-md-4  mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center">
            <CardPrice
              data={{
                title: "Paquete 2: Consulta médica",
                img: "/imgs/Prices/img-paquete2.jpg",
                price: "$300.00",
                services: filterServicesByPackage(dataServices, 2),
                packageBelongs: "2",
              }}
            />
          </div>
          <div className="col-12 col-md-4 mb-3 p-0 d-md-flex justify-content-md-center align-items-md-center">
            <CardPrice
              data={{
                title: "Paquete 3: Consulta a domicilio",
                img: "/imgs/Prices/img-paquete3.jpg",
                price: "Personalizado",
                services: filterServicesByPackage(dataServices, 3),
                packageBelongs: "3",
              }}
            />
          </div>
        </section>
      </article>
    </section>
  );
};
