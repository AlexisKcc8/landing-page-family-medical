import { useRef } from "react";

import { ItemsSocialMedia } from "@components/ItemsSocialMedia/ItemsSocialMedia";
import { TextLogo } from "@components/TextLogo/TextLogo";
import { dataLinksNabvar } from "@data/Nabvar";

import "./stylesNabvarMenu.scss";
export const NabvarMenu = () => {
  const $btnNabvarMenu = useRef(null);
  const $layerNabvarMenu = useRef(null);
  const handleToggleNabvarMenu = () => {
    $layerNabvarMenu.current.classList.toggle("show-layer-nabvar-menu");
  };

  return (
    <nav className="container-fluid-navbar container-fluid  navbar navbar-expand-lg  fixed-top d-lg-flex flex-lg-column py-0 ">
      <header className="container-fluid-info container-fluid ">
        <section className="container-info container py-2 px.lg-4  ">
          <div className="row-info row p-0 m-0">
            <div className="col-info-schedule col-12 d-flex justify-content-center align-items-center">
              <div className="container-img-text text-center">
                <figure className="p-0 m-0 figure-img">
                  <img
                    className="w-100 h-100"
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
          </div>
        </section>
      </header>

      <section className="container-brand-items-links container  py-2 px-4 px-lg-5 d-flex ">
        <div className="d-flex align-items-center justify-content-center">
          <TextLogo />
          <img src="/Icons/building-hospital.svg" alt="Icon Hospital" />
        </div>
        <button
          ref={$btnNabvarMenu}
          className="btn-menu-burguer m-0 p-0 d-lg-none"
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
            <header className="header-nabvar-menu d-lg-none">
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

            <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-end  align-items-center mt-4 d-lg-none">
              <ItemsSocialMedia
                onlyTheseIcons={["facebook", "whatsapp", "gmail"]}
              />
            </ul>
            <p className={` mt-4 message-copyright d-lg-none`}>
              Copyright © 2024 <strong>FamilyMedical</strong>. Todos los
              derechos reservados. by <strong>Carlos Fuentes</strong>.
            </p>
          </nav>
        </article>

        <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-end  align-items-center d-none d-lg-flex">
          <ItemsSocialMedia
            onlyTheseIcons={["facebook", "whatsapp", "gmail"]}
          />
        </ul>
      </section>
    </nav>
  );
};
