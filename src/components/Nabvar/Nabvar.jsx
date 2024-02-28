export const Nabvar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fluid bg-white fixed-top d-lg-flex flex-lg-column py-0">
      <div
        className=" m-0 p-0"
        style={{ backgroundColor: "#3fbbc0", width: "100%", height: "1.5rem" }}
      ></div>
      <div className="container  h-100 py-2">
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
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <strong>
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#inicio"
                >
                  Inicio
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link text-dark" href="#">
                  Servicios
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link text-dark" href="#">
                  Misión y Visión
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link text-dark" href="#">
                  Facilidades
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                {" "}
                <a className="nav-link text-dark" href="#">
                  Preciós
                </a>
              </strong>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>Más</strong>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
