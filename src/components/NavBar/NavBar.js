import fotoLogo from '../../assets/extras/esfera.jpg';
import fotoName from '../../assets/extras/logo.png';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <div id="bg-nav">      
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="name">
          <img src={fotoName} alt="" className="name" />
        </div>
        <div className="container-fluid">
          <a className="navbar-brand" href="#navbar"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a className="nav__enlace">
                  <NavLink to="/">
                    <img src={fotoLogo} width="50" height="150" alt="name" className="logo" />
                  </NavLink>
                </a>
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <NavLink to="/">
                      Inicio
                    </NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page">
                    <NavLink to="/category/indumentaria">
                      Indumentaria
                    </NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" >
                    <NavLink to="/category/peluches">
                      Peluches
                    </NavLink>
                  </a>
                </li>
              </ul>
              <div>
                <div className="submit">
                  <a className="btn btn-outline-dark" id="btn-new">
                    <NavLink to="*">
                      Registrarse
                    </NavLink>
                  </a>
                  <a className="btn btn-outline-dark" id="btn-new" >
                    <NavLink to="*">
                      Iniciar Sesión
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li className="nav-item">
              <a className="nav-link ">
                <NavLink to="/cart/">
                  <div >                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </div>
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;