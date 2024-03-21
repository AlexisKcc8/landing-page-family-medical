import { InView } from 'react-intersection-observer';

import { CardService } from '@components/CardService/CardService';
import { dataServices } from '@data/services';

import './stylesMyServices.scss';
export const MyServices = () => {
  const getSpecificService = (services, indexService) => {
    indexService = parseInt(indexService);
    return services[indexService];
  };

  const options = {
    threshold: 0,
    triggerOnce: true,
  };
  return (
    <section
      id="services"
      className="container-fluid-services container-fluid min-vh-100 "
    >
      <article className="container-services container overflow-hidden">
        <header className="row-header row text-center ">
          <InView>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`subtitle-section m-0 animate__animated ${
                  inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                }`}
              >
                Te ofrecemos siempre
              </p>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={`title-section m-0 p-0 animate__animated ${
                  inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                }`}
              >
                <strong>Servicios confiables y de la mejor calidad.</strong>
              </h2>
            )}
          </InView>
        </header>

        <section className="row-grid-services row  ">
          <InView {...options}>
            {({ inView, ref }) => (
              <article
                ref={ref}
                className={`col-12 p-0  mb-3 mb-lg-0 animate__animated ${
                  inView ? 'animate__fadeInLeft' : 'animate__fadeOutRight'
                }`}
              >
                <CardService
                  data={{
                    service: getSpecificService(dataServices, 7),
                  }}
                />
              </article>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <article
                ref={ref}
                className={`col-12 col-lg-6 p-0 mb-3 mb-lg-0 animate__animated ${
                  inView ? 'animate__fadeInLeft' : 'animate__fadeOutRight'
                }`}
              >
                <CardService
                  data={{
                    bgColor: '#1b544f',
                    service: getSpecificService(dataServices, 1),
                  }}
                />
              </article>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <article
                ref={ref}
                className={`col-12 col-lg-6 p-0 mb-3 mb-lg-0 animate__animated ${
                  inView ? 'animate__fadeInRight' : 'animate__fadeOutLeft'
                }`}
              >
                <CardService
                  data={{
                    bgColor: '#1c6961',
                    service: getSpecificService(dataServices, 2),
                  }}
                />
              </article>
            )}
          </InView>
          <InView {...options}>
            {({ inView, ref }) => (
              <article
                ref={ref}
                className={`col-12 p-0 mb-3 mb-lg-0 animate__animated ${
                  inView ? 'animate__fadeInRight' : 'animate__fadeOutLeft'
                }`}
              >
                <CardService
                  data={{
                    orderWiewInfo: [2, 1],

                    service: getSpecificService(dataServices, 6),
                  }}
                />
              </article>
            )}
          </InView>
        </section>
      </article>
    </section>
  );
};
