import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";


export default function Navbar(){
  
  const handleTop = ()=>{
    window.scrollTo(0, 0);
  }

    return(
       <>

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container text-black text-center text-md-start">
      <Link onClick={handleTop} className="navbar-brand fw-bolder fs-2" to="/"><img src="/img/logo.png" alt=""/> &nbsp; &nbsp;FitFlexo</Link>
      {/* Navbar Toggle Button for Small Screens */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-4 ps-lg-0 text-uppercase">
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" aria-current="page" to="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/trainers">Trainers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/appointments">Appointments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
       </>
    )
}