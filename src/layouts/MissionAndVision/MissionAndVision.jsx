import "./stylesMissionAndVision.scss";
export const MissionAndVision = () => {
  return (
    <section
      id="mision-vision"
      className="container-fluid-mission-and-vision container-fluid overflow-hidden"
    >
      <section className="row-mission-and-vision row ">
        <aside className="col-mission col-12 col-lg-6 px-lg-5">
          <div className="container px-lg-5">
            <h3 className="title-mission">Nuestra Misión</h3>
            <p className="description-mission">
              Ofrecer a nuestros pacientes un servicio de calidad, calidez y una
              atmósfera agradable. Caracterizada por una excelente atención
            </p>
          </div>
        </aside>
        <aside className="col-vision col-12 col-lg-6 px-lg-5">
          <div className="container px-lg-5">
            <h3 className="title-vision">Nuestra Visión</h3>
            <p className="description-vision">
              En 2030 ser una empresa reconocida por nuestra atención a nivel
              local, establecidos firmemente en la mente de nuestros pacientes
              como la mejor opción.
            </p>
          </div>
        </aside>
      </section>
    </section>
  );
};
