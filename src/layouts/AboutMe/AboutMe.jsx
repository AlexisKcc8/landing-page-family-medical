import { dataAdvantageMe, dataIconsAboutMe } from '@data/AboutMe';
import './stylesAboutMe.scss';
import { InView } from 'react-intersection-observer';
export const AboutMe = () => {
  const options = {
    threshold: 0,
    triggerOnce: true,
  };

  return (
    <section
      id="about-me"
      className="container-fluid container-fluid-about-me min-vh-100"
    >
      <section className="container-about-me container overflow-hidden px-lg-5">
        <header className="row-header row ">
          <InView>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`m-0 subtitle-section animate__animated ${
                  inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                }`}
              >
                Conoce un poco sobre mi y
              </p>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={`m-0 p-0 title-section animate__animated ${
                  inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                }`}
              >
                <strong>Descubre quién está detrás del sitio.</strong>
              </h2>
            )}
          </InView>
        </header>

        <article className="row-icons row py-3">
          {dataIconsAboutMe ? (
            dataIconsAboutMe.map((icon) => (
              <InView key={icon.id} {...options}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`col-icons col-6 col-md-2 mb-3 mb-md-0 animate__animated ${
                      inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                    }`}
                  >
                    <img src={icon.src} alt={icon.alt} className="m-0 p-0" />
                  </div>
                )}
              </InView>
            ))
          ) : (
            <h3>Iconos no disponibles</h3>
          )}
        </article>

        <article className="row-information row d-flex pt-3 ">
          <div className="col-img col-12 col-lg-6 order-md-2 overflow-hidden ">
            <InView {...options}>
              {({ inView, ref }) => (
                <picture
                  ref={ref}
                  className={`figure-image animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  <source
                    media="(min-width: 992px)"
                    className="img-service"
                    type="image/avif"
                    srcSet="/imgs/aboutMe/img-about-me-desktop.avif"
                  />
                  <source
                    media="(min-width: 992px)"
                    className="img-service"
                    type="image/webp"
                    srcSet="/imgs/aboutMe/img-about-me-desktop.webp"
                  />

                  <source
                    className="img-service"
                    type="image/avif"
                    srcSet="/imgs/aboutMe/img-about-me.avif"
                  />
                  <source
                    className="img-service"
                    type="image/webp"
                    srcSet="/imgs/aboutMe/img-about-me.webp"
                  />

                  <img
                    className="image-about-me"
                    src="/imgs/aboutMe/img-about-me.jpg"
                    alt="imagen sobre mi"
                  />
                </picture>
              )}
            </InView>
          </div>

          <div className="col-info col-12 col-lg-6 order-md-1 text-start p-lg-4">
            <InView {...options}>
              {({ inView, ref }) => (
                <h4
                  ref={ref}
                  className={`my-3 mt-lg-0 animate__animated ${
                    inView ? 'animate__fadeInDown' : 'animate__fadeOut'
                  }`}
                >
                  <strong>Especialista en medicina familiar</strong>
                </h4>
              )}
            </InView>
            <InView {...options}>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Soy un médico cirujano con especialidad en medicina familiar,
                  arraigado en la encantadora ciudad de Mérida. Con un bagaje de
                  25 años de experiencia, he tenido el privilegio de dedicar mi
                  vida profesional al cuidado de la salud de mis pacientes.
                  Mérida, con su rica historia y comunidad diversa, ha sido el
                  escenario perfecto donde he podido desarrollar mi pasión por
                  la medicina y establecer lazos profundos con quienes confían
                  en mí para su bienestar.
                </p>
              )}
            </InView>
            <InView {...options}>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Cada día, encuentro inspiración en el compromiso de servir a
                  mi comunidad y en la oportunidad de brindar atención médica de
                  calidad a quienes la necesitan.{' '}
                </p>
              )}
            </InView>

            <div className="row">
              {dataAdvantageMe ? (
                dataAdvantageMe.map((advantage) => (
                  <InView {...options} key={advantage.id}>
                    {({ inView, ref }) => (
                      <div
                        ref={ref}
                        className={`d-flex m-0 col-12 col-md-6 animate__animated ${
                          inView ? 'animate__fadeIn' : 'animate__fadeOut'
                        }`}
                      >
                        <img
                          className=" m-0 p-0"
                          style={{ width: '2rem', height: '2rem' }}
                          src="/Icons/check.svg"
                          alt="icon-check"
                        />
                        <p>{advantage.title}</p>
                      </div>
                    )}
                  </InView>
                ))
              ) : (
                <h2>Datos no encontrados</h2>
              )}
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};
