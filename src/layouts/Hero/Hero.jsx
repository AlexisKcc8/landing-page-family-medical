import "./Hero.css";
export const Hero = () => {
  return (
    <section
      className="bg-danger container-fluid my-container-fluid"
      id="inicio"
    >
      <article className="container">
        <div className="layer">
          <section className="container min-vh-100">
            <div className="row min-vh-100">
              <div className="col-12 container-content ">
                <figure className="figure-logo m-0 mt-5">
                  <img
                    className="m-0"
                    src="/imgs/logo-family-medical.png"
                    alt=""
                  />
                </figure>
                <h2 className="title">ADREAN FUENTES</h2>
                <h3 className="subtitle">
                  <strong>Especialista Medico Familiar</strong>
                </h3>
                <p className="description">
                  "Su familia, nuestra prioridad: atención médica de calidad
                  centrada en usted."
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
};
