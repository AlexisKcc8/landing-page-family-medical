import { InView } from 'react-intersection-observer';
import { ItemsSocialMedia } from '@components/ItemsSocialMedia/ItemsSocialMedia';
import { TextLogo } from '@components/TextLogo/TextLogo';

import './stylesFooterContact.scss';
export const FooterContact = () => {
  return (
    <footer
      id="footer-contact"
      className="container-fluid-footer-contact container-fluid "
    >
      <section className="container-footer-contact container  px-lg-5 overflow-hidden">
        <article className="row-footer-contact row d-flex">
          <div className="col-contact col-12 order-2 order-lg-1  col-lg-3 ">
            <InView>
              {({ inView, ref }) => (
                <h4
                  ref={ref}
                  className={`title-contact m-0 animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Contacto
                </h4>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`description-contact animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  No dudes en ponerte en contacto para comenzar este viaje
                  juntos hacia tu bienestar integral. ¡Tu salud es mi prioridad!
                </p>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <ul
                  ref={ref}
                  className={`list-social-media animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  <ItemsSocialMedia showTitle={true} />
                </ul>
              )}
            </InView>
          </div>

          <div className="col-brand col-12 order-1 col-lg-6 px-lg-5">
            <InView>
              {({ inView, ref }) => (
                <picture
                  ref={ref}
                  className={`picture-img-brand m-0 p-0 animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  <source
                    className="img-brand m-0 p-0"
                    type="image/avif"
                    srcSet="/imgs/logo-family-medical.avif"
                  />
                  <source
                    className="img-brand m-0 p-0"
                    type="image/webp"
                    srcSet="/imgs/logo-family-medical.webp"
                  />
                  <img
                    className="img-brand m-0 p-0"
                    src="/imgs/logo-family-medical.png"
                    alt="logo family medical"
                  />
                </picture>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <TextLogo
                    classTextLogo={`title-brand m-0 p-0 animate__animated ${
                      inView ? 'animate__fadeIn' : 'animate__fadeOut'
                    }`}
                  />
                </div>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`description-brand animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  No espere más para cuidar su salud y la de su familia. ¡Agende
                  una cita con Family Medical hoy mismo y dé el primer paso
                  hacia una vida más saludable y feliz!
                </p>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <h4
                  ref={ref}
                  className={`subtitle-text animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Estamos para servirles!
                </h4>
              )}
            </InView>
          </div>

          <div className="col-schedules col-12 order-3  col-lg-3 ">
            <InView>
              {({ inView, ref }) => (
                <h4
                  ref={ref}
                  className={`title-schedules m-0 animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Nuestros Horarios
                </h4>
              )}
            </InView>
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`description-schedules animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  &#34;Consulta nuestros horarios de atención médica familiar
                  para reservar citas y planificar visitas. Prioriza la salud de
                  tu familia con facilidad.&rdquo;
                </p>
              )}
            </InView>

            <ul className="list-schedules m-0 p-0">
              <InView>
                {({ inView, ref }) => (
                  <li
                    ref={ref}
                    className={`item-shedules animate__animated ${
                      inView ? 'animate__fadeIn' : 'animate__fadeOut'
                    }`}
                  >
                    <p className="w-50 text-start">Lunes a viernes</p>
                    <p className="w-50 text-end">4:00 pm - 10:00 pm</p>
                  </li>
                )}
              </InView>
              <InView>
                {({ inView, ref }) => (
                  <li
                    ref={ref}
                    className={`item-shedules animate__animated ${
                      inView ? 'animate__fadeIn' : 'animate__fadeOut'
                    }`}
                  >
                    <p className="w-50 text-start">Sábados y domingos</p>
                    <p className="w-50 text-end">
                      8:00 am - 10:00 pm (cita previa)
                    </p>
                  </li>
                )}
              </InView>
            </ul>
          </div>
          <div className="col-copyright col-12 order-4 d-flex justify-content-center aling-items-center p-0">
            <InView>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`m-0 mt-4 message-copyright animate__animated ${
                    inView ? 'animate__fadeIn' : 'animate__fadeOut'
                  }`}
                >
                  Copyright © 2024 <strong>FamilyMedical</strong>. Todos los
                  derechos reservados. by <strong>Carlos Fuentes</strong>.
                </p>
              )}
            </InView>
          </div>
        </article>
      </section>
    </footer>
  );
};
