import { dataAdvantageMe, dataIconsAboutMe } from "@data/AboutMe";
import "./stylesAboutMe.scss";
export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="container-fluid container-fluid-about-me min-vh-100 overflow-hidden"
    >
      <section className="container-about-me container overflow-hidden px-lg-5">
        <header className="row-header row ">
          <p className="m-0 subtitle-section">Conoce un poco sobre mi y</p>
          <h2 className="m-0 p-0 title-section">
            <strong>Descubre quién está detrás del sitio.</strong>
          </h2>
        </header>

        <article className="row-icons row py-3">
          {dataIconsAboutMe ? (
            dataIconsAboutMe.map((icon) => (
              <div
                key={icon.id}
                className="col-icons col-6 col-md-2 mb-3 mb-md-0 "
              >
                <img src={icon.src} alt={icon.alt} className="m-0 p-0" />
              </div>
            ))
          ) : (
            <h3>Iconos no disponibles</h3>
          )}
        </article>

        <article className="row-information row d-flex pt-3 ">
          <div className="col-img col-12 col-lg-6 order-md-2 overflow-hidden py-3">
            <figure className="h-100">
              <img src="/imgs/aboutMe/img-about-me.jpg" alt="img-sobre-mi" />
            </figure>
          </div>

          <div className="col-info col-12 col-lg-6 order-md-1 text-start p-lg-4">
            <h4 className="">
              <strong>Especialista en medicina familiar</strong>
            </h4>

            <p>
              Soy un médico cirujano con especialidad en medicina familiar,
              arraigado en la encantadora ciudad de Mérida. Con un bagaje de 25
              años de experiencia, he tenido el privilegio de dedicar mi vida
              profesional al cuidado de la salud de mis pacientes. Mérida, con
              su rica historia y comunidad diversa, ha sido el escenario
              perfecto donde he podido desarrollar mi pasión por la medicina y
              establecer lazos profundos con quienes confían en mí para su
              bienestar.
            </p>
            <p>
              Cada día, encuentro inspiración en el compromiso de servir a mi
              comunidad y en la oportunidad de brindar atención médica de
              calidad a quienes la necesitan.{" "}
            </p>

            <div className="row">
              {dataAdvantageMe ? (
                dataAdvantageMe.map((advantage) => (
                  <div
                    key={advantage.id}
                    className="d-flex m-0 col-12 col-md-6"
                  >
                    <img
                      className=" m-0 p-0"
                      style={{ width: "2rem", height: "2rem" }}
                      src="/Icons/check.svg"
                      alt="icon-check"
                    />
                    <p>{advantage.title}</p>
                  </div>
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
