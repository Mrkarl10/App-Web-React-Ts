//import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <Link to="/">
                    <img src="./FOG-ESSENTIALS-1200-X-630_1_1200x.webp" width="150" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-white" to="/compra">Shop now</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-white" to="/contacto">Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;




