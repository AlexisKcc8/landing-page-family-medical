import { advantageMe, iconsAboutMe } from "../../data/AboutMe";
import "./stylesAboutMe.scss";
export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="container-fluid min-vh-100 overflow-hidden pt-5"
    >
      <section className="container text-center overflow-hidden">
        <div className="row">
          <p className="m-0" style={{ color: "#3fbbc0" }}>
            <strong>Conoce un poco sobre mi</strong>
          </p>
          <h3 className="m-0 ">
            <strong>Descubre quién está detrás del sitio.</strong>
          </h3>
        </div>

        <article className="row py-3">
          {iconsAboutMe ? (
            iconsAboutMe.map((icon) => (
              <div
                key={icon.id}
                className="col-6 col-md-2 mb-3 mb-md-0 d-flex justify-content-center align-items-center"
              >
                <img src={icon.src} alt={icon.alt} className="m-0 p-0" />
              </div>
            ))
          ) : (
            <h3>Iconos no disponibles</h3>
          )}
        </article>

        <article className="row d-flex pt-3 ">
          <div className="col-12 col-md-6 order-md-2 container-img overflow-hidden py-3">
            <figure className="h-100">
              <img src="/imgs/img-about-me.jpg" alt="img-sobre-mi" />
            </figure>
          </div>
          <div className="col-12 col-md-6 order-md-1 text-start">
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
              {advantageMe ? (
                advantageMe.map((advantage) => (
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
