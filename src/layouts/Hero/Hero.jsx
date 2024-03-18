import { InView } from "react-intersection-observer";

import "./stylesHero.scss";

export const Hero = () => {
  const options = {
    threshold: 0,
    triggerOnce: false,
    initialInView: true,
  };

  return (
    <section
      className="container-fluid-hero container-fluid overflow-hidden"
      id="home"
    >
      <article className="container-hero container py-0 m-0">
        <div className="layer">
          <section className="container py-0 min-vh-100 ">
            <div className="row min-vh-100">
              <div className="col-12 container-content ">
                <InView {...options}>
                  {({ ref, inView }) => (
                    <figure
                      ref={ref}
                      className={`figure-logo m-0 mt-5 animate__animated ${
                        inView ? "animate__fadeIn " : "animate__fadeOutLeft"
                      }`}
                    >
                      <img
                        className="m-0"
                        src="/imgs/logo-family-medical.png"
                        alt="Logo-family-medical"
                      />
                    </figure>
                  )}
                </InView>
                {/* <InView {...options}>
                  {({ ref, inView }) => (
                    
                  )}
                </InView> */}
                <InView {...options}>
                  {({ ref, inView }) => (
                    <h2
                      ref={ref}
                      className={`title-brand animate__animated ${
                        inView ? "animate__fadeIn " : "animate__fadeOutLeft"
                      }`}
                    >
                      <strong>
                        <span>Family</span>Medical
                      </strong>
                    </h2>
                  )}
                </InView>
                <InView {...options}>
                  {({ ref, inView }) => (
                    <h2
                      ref={ref}
                      className={`title animate__animated ${
                        inView ? "animate__fadeInDown " : "animate__fadeOutLeft"
                      }`}
                    >
                      Dr. ADRIAN FUENTES
                    </h2>
                  )}
                </InView>
                <InView {...options}>
                  {({ ref, inView }) => (
                    <h3
                      ref={ref}
                      className={`subtitle animate__animated ${
                        inView ? "animate__fadeIn " : "animate__fadeOutLeft"
                      }`}
                    >
                      <strong>MÉDICO CIRUJANO</strong>
                    </h3>
                  )}
                </InView>
                <InView {...options}>
                  {({ ref, inView }) => (
                    <p
                      ref={ref}
                      className={`description animate__animated ${
                        inView ? "animate__fadeIn " : "animate__fadeOutLeft"
                      }`}
                    >
                      "Su familia, nuestra prioridad: atención médica de calidad
                      centrada en usted."
                    </p>
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
