import { InView } from 'react-intersection-observer';

import './stylesBannerMessage.scss';
export const BannerMessage = () => {
  return (
    <section className="container-fluid container-fluid-banner-message px-lg-5">
      <article className="container container-banner-message">
        <div className="row row-banner-message">
          <div className="col-12 col-banner-message ">
            <InView>
              {({ inView, ref }) => (
                <img
                  ref={ref}
                  className={` message animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                  src="/Icons/integral.png"
                  alt="icono medicina integral"
                />
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <h2
                  ref={ref}
                  className={`p-0 m-0 my-2 message animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  &#34;Su familia, nuestra prioridad: atención médica de calidad
                  centrada en usted.&rdquo;
                </h2>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`p-0 m-0 title-brand animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  FamilyMedical©️
                </p>
              )}
            </InView>
          </div>
        </div>
      </article>
    </section>
  );
};
