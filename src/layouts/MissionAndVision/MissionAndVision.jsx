import { InView } from "react-intersection-observer";

import "./stylesMissionAndVision.scss";
export const MissionAndVision = () => {
  const options = {
    threshold: 0,
    triggerOnce: false,
    initialInView: true,
  };
  return (
    <section
      id="mision-vision"
      className="container-fluid-mission-and-vision container-fluid overflow-hidden"
    >
      <section className="row-mission-and-vision row ">
        <InView {...options}>
          {({ ref, inView }) => (
            <aside
              ref={ref}
              className={`col-mission col-12 col-lg-6 px-lg-5 animate__animated ${
                inView ? "animate__fadeInLeft " : "animate__fadeOutLeft"
              }`}
            >
              <div className="container px-lg-5">
                <h3 className="title-mission">Nuestra Misión</h3>
                <p className="description-mission">
                  Ofrecer a nuestros pacientes un servicio de calidad, calidez y
                  una atmósfera agradable. Caracterizada por una excelente
                  atención
                </p>
              </div>
            </aside>
          )}
        </InView>
        <InView {...options}>
          {({ ref, inView }) => (
            <aside
              ref={ref}
              className={`col-vision col-12 col-lg-6 px-lg-5 animate__animated ${
                inView ? "animate__fadeInRight " : "animate__fadeOutLeft"
              }`}
            >
              <div className="container px-lg-5">
                <h3 className="title-vision">Nuestra Visión</h3>
                <p className="description-vision">
                  En 2030 ser una empresa reconocida por nuestra atención a
                  nivel local, establecidos firmemente en la mente de nuestros
                  pacientes como la mejor opción.
                </p>
              </div>
            </aside>
          )}
        </InView>
      </section>
    </section>
  );
};
