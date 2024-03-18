import { ItemsSocialMedia } from "@components/ItemsSocialMedia/ItemsSocialMedia";

import "./stylesFooterContact.scss";
export const FooterContact = () => {
  return (
    <footer
      id="contact"
      className="container-fluid-footer-contact container-fluid "
    >
      <section className="container-footer-contact container  px-lg-5">
        <article className="row-footer-contact row d-flex">
          <div className="col-contact col-12 order-2 order-lg-1  col-lg-3 ">
            <h4 className="title-contact m-0">Contacto</h4>
            <p className="description-contact">
              No dudes en ponerte en contacto para comenzar este viaje juntos
              hacia tu bienestar integral. ¡Tu salud es mi prioridad!"
            </p>
            <ul className="list-social-media">
              <ItemsSocialMedia showTitle={true} />
            </ul>
          </div>

          <div className="col-brand col-12 order-1 col-lg-6 px-lg-5">
            <picture className="picture-img-brand m-0 p-0">
              <img
                className="img-brand m-0 p-0"
                src="/imgs/logo-family-medical.png"
                alt=""
              />
            </picture>

            <h5 className="title-brand m-0 p-0">
              <span>Family</span>Medical
            </h5>
            <p className="description-brand">
              La pasión por mi trabajo impulsa cada paso de mi práctica,
              guiándome hacia una atención centrada en el paciente que va más
              allá del simple tratamiento de enfermedades.
            </p>
            <h4 className="subtitle-text">Estamos para servirles!</h4>
          </div>

          <div className="col-schedules col-12 order-3  col-lg-3 ">
            <h4 className="title-schedules m-0">Nuestros Horarios</h4>
            <p className="description-schedules">
              "Consulta nuestros horarios de atención médica familiar para
              reservar citas y planificar visitas. Prioriza la salud de tu
              familia con facilidad."
            </p>
            <ul className="list-schedules m-0 p-0">
              <li className="item-shedules">
                <p className="w-50 text-start">Lunes a viernes</p>
                <p className="w-50 text-end">4:00 pm - 10:00 pm</p>
              </li>
              <li className="item-shedules">
                <p className="w-50 text-start">Sábados y domingos</p>
                <p className="w-50 text-end">
                  8:00 am - 10:00 pm (cita previa)
                </p>
              </li>
            </ul>
          </div>
          <div className="col-copyright col-12 order-4 d-flex justify-content-center aling-items-center p-0">
            <p className="m-0 mt-4 message-copyright">
              Copyright © 2024 <strong>FamilyMedical</strong>. Todos los
              derechos reservados. by <strong>Adrian Fuentes</strong>.
            </p>
          </div>
        </article>
      </section>
    </footer>
  );
};
