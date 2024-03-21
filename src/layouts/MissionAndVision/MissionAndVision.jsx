import { InView } from 'react-intersection-observer';

import './stylesMissionAndVision.scss';
export const MissionAndVision = () => {
  return (
    <section
      id="mision-vision"
      className="container-fluid-mission-and-vision container-fluid "
    >
      <section className="row-mission-and-vision row ">
        <aside className={`col-mission col-12 col-lg-6 px-lg-5 `}>
          <div className="container px-lg-5">
            <InView>
              {({ inView, ref }) => (
                <h3
                  ref={ref}
                  className={`title-mission animate__animated ${
                    inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                  }`}
                >
                  Nuestra Misión
                </h3>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`description-mission animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Ofrecer a nuestros pacientes un servicio de calidad, calidez y
                  una atmósfera agradable. Caracterizada por una excelente
                  atención
                </p>
              )}
            </InView>
          </div>
        </aside>
        <aside className={`col-vision col-12 col-lg-6 px-lg-5 `}>
          <div className="container px-lg-5">
            <InView>
              {({ inView, ref }) => (
                <h3
                  ref={ref}
                  className={`title-vision  animate__animated ${
                    inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                  }`}
                >
                  Nuestra Visión
                </h3>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`description-vision animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  En 2030 ser una empresa reconocida por nuestra atención a
                  nivel local, establecidos firmemente en la mente de nuestros
                  pacientes como la mejor opción.
                </p>
              )}
            </InView>
          </div>
        </aside>
      </section>
    </section>
  );
};
