import "./stylesHero.scss";
export const Hero = () => {
  return (
    <section className="container-fluid-hero container-fluid" id="home">
      <article className="container-hero container ">
        <div className="layer">
          <section className="container min-vh-100 ">
            <div className="row min-vh-100">
              <div className="col-12 container-content ">
                <figure className="figure-logo m-0 mt-5">
                  <img
                    className="m-0"
                    src="/imgs/logo-family-medical.png"
                    alt=""
                  />
                </figure>
                <h2 className="title-brand">
                  <strong>
                    <span>Family</span>Medical
                  </strong>
                </h2>
                <h2 className="title">Dr. ADRIAN FUENTES</h2>
                <h3 className="subtitle">
                  <strong>MÉDICO CIRUJANO</strong>
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
