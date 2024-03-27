import { InView } from 'react-intersection-observer';

import './stylesHero.scss';
export const Hero = () => {
  return (
    <section className="container-fluid-hero container-fluid" id="home">
      <article className="container-hero container py-0 m-0">
        <div className="layer">
          <section className="container py-0 min-vh-100 ">
            <div className="row min-vh-100">
              <div className="col-12 container-content ">
                <InView>
                  {({ inView, ref }) => (
                    <picture
                      ref={ref}
                      className={`picture-logo m-0 mt-5 animate__animated ${
                        inView ? 'animate__fadeIn' : 'animate__fadeOut'
                      }`}
                    >
                      <source
                        className="img-service"
                        type="image/avif"
                        srcSet="/imgs/logo-family-medical.avif"
                      />
                      <source
                        className="img-service"
                        type="image/webp"
                        srcSet="/imgs/logo-family-medical.webp"
                      />
                      <img
                        className="m-0  logo-family-medical"
                        src="/imgs/logo-family-medical.png"
                        alt="Logo family medical"
                      />
                    </picture>
                  )}
                </InView>
                <InView>
                  {({ inView, ref }) => (
                    <h2
                      ref={ref}
                      className={`title-brand animate__animated ${
                        inView ? 'animate__fadeIn' : 'animate__fadeOut'
                      }`}
                    >
                      <strong>
                        <span>Family</span>Medical
                      </strong>
                    </h2>
                  )}
                </InView>
                <InView>
                  {({ inView, ref }) => (
                    <h2
                      ref={ref}
                      className={`title animate__animated ${
                        inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                      }`}
                    >
                      Dr. ADRIAN FUENTES
                    </h2>
                  )}
                </InView>
                <InView>
                  {({ inView, ref }) => (
                    <h1
                      ref={ref}
                      className={`subtitle animate__animated ${
                        inView ? 'animate__fadeIn' : 'animate__fadeOut'
                      }`}
                    >
                      <strong>MÉDICO CIRUJANO / MÉDICO FAMILIAR</strong>
                    </h1>
                  )}
                </InView>
              </div>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
};
