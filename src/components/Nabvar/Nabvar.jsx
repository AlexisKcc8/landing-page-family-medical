import { useRef } from "react";
import { linksNabvar } from "../../data/Nabvar";
import "./stylesNabvar.scss";

import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Nabvar = () => {
  const collapsedMenu = useRef();
  const toggleShowMenu = () => {
    collapsedMenu.current.classList.toggle("show");
  };
  return (
    <nav className="container-fluid container-fluid-navbar navbar navbar-expand-lg  fixed-top d-lg-flex flex-lg-column py-0">
      <header className="container-fluid container-social-media-info">
        <section className="container py-1 p-md-2">
          <div className="row">
            <div className="col-12 col-md-6  container-info-open">
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
            <div className="col-12 col-md-6  container-social-media d-none d-md-block">
              <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-end  align-items-center">
                <SocialMedia
                  onlyTheseIcons={["facebook", "whatsapp", "gmail"]}
                />
              </ul>
            </div>
          </div>
        </section>
      </header>

      <section className="container container-navbar-brand-items  h-100 py-2">
        <a className="navbar-brand  w-50" href="index.html">
          <strong>
            <span className="" style={{ color: "#3fbbc0" }}>
              Family
            </span>
            Medical
          </strong>{" "}
          <img src="/Icons/building-hospital.svg" alt="Icon Hospital" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse  w-50 d-lg-flex  justify-content-lg-end"
          ref={collapsedMenu}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            {linksNabvar ? (
              linksNabvar.map((link) => (
                <li key={link.id} className="nav-item  text-center">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href={link.href}
                    onClick={toggleShowMenu}
                  >
                    <strong>{link.title}</strong>
                  </a>
                </li>
              ))
            ) : (
              <h3>Datos no encontrados</h3>
            )}
            <div className="col-12 container-social-media d-md-none">
              <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-end  align-items-center">
                <SocialMedia
                  onlyTheseIcons={["facebook", "whatsapp", "gmail"]}
                />
              </ul>
            </div>
          </ul>
        </div>
      </section>
    </nav>
  );
};
