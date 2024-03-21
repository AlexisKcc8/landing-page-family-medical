import { useRef } from 'react';

import { ItemsSocialMedia } from '@components/ItemsSocialMedia/ItemsSocialMedia';
import { dataLinksNabvar } from '@data/Nabvar';

import './stylesNabvarMenu.scss';
export const NabvarMenu = () => {
  const $btnNabvarMenu = useRef(null);
  const $layerNabvarMenu = useRef(null);
  const handleToggleNabvarMenu = () => {
    $layerNabvarMenu.current.classList.toggle('show-layer-nabvar-menu');
    document.body.classList.toggle('scroll-oculto');
  };

  return (
    <nav className="container-fluid-navbar container-fluid  navbar navbar-expand-lg  fixed-top d-lg-flex flex-lg-column py-0 ">
      <header className="container-fluid-social-media-info container-fluid ">
        <section className="container-social-media-info container py-1 p-md-2">
          <div className="row-info-social-media row">
            <div className="col-info-schedule col-12 col-md-6">
              <figure className="p-0 figure-clock">
                <img
                  className=""
                  src="/Icons/clock-watch.svg"
                  alt="icono-reloj"
                />
              </figure>
              <h6 className="info-text m-0 p-0">
                Horario: L a V de 4:00 pm a 10:00 pm, S y D de 8:00 am a 10:00
                pm (previa cita).
              </h6>
            </div>
          </div>
        </section>
      </header>

      <section className="container-brand-items-links container  py-2 px-lg-5 d-flex ">
        <a className="brand-navbar navbar-brand" href="index.html">
          <strong>
            <span>Family</span>Medical
          </strong>
          <img src="/Icons/building-hospital.svg" alt="Icon Hospital" />
        </a>

        <button
          ref={$btnNabvarMenu}
          className="btn-menu-burguer m-0 p-0 "
          onClick={handleToggleNabvarMenu}
        >
          <img
            className="w-100 h-100"
            src="/Icons/menu-burguer.svg"
            alt="icon-menu-burguer"
          />
        </button>

        <article
          ref={$layerNabvarMenu}
          className="layer-nabvar-menu"
          onClick={handleToggleNabvarMenu}
        >
          <nav
            className="container-nabvar-menu"
            onClick={handleToggleNabvarMenu}
          >
            <header className="header-nabvar-menu">
              <h4 className="m-0 p-0 text-logo">
                <strong>
                  <span>Family</span>Medical
                </strong>
              </h4>
              <button
                className="btn-close-navbar-menu"
                onClick={handleToggleNabvarMenu}
              >
                <img
                  className="w-100 h-100"
                  src="/Icons/close.svg"
                  alt="icon-close-menu"
                />
              </button>
            </header>

            <ul className="list-navbar-items navbar-nav ">
              {dataLinksNabvar ? (
                dataLinksNabvar.map((link) => (
                  <li key={link.id} className="navbar-item nav-item ">
                    <a
                      className="nabvar-link nav-link"
                      aria-current="page"
                      href={link.href}
                      onClick={handleToggleNabvarMenu}
                    >
                      <strong>{link.title}</strong>
                    </a>
                  </li>
                ))
              ) : (
                <h3>Datos no encontrados</h3>
              )}
            </ul>

            <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-end  align-items-center mt-4">
              <ItemsSocialMedia
                onlyTheseIcons={['facebook', 'whatsapp', 'gmail']}
              />
            </ul>
            <p className={` mt-4 message-copyright `}>
              Copyright © 2024 <strong>FamilyMedical</strong>. Todos los
              derechos reservados. by <strong>Adrian Fuentes</strong>.
            </p>
          </nav>
        </article>
      </section>
    </nav>
  );
};
