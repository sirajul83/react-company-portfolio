import * as React from "react";
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <>
        <div id="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link to="/" className="navbar-brand">
                        <img src="img/logo.png" alt="Logo" />
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item nav-link ">Home</Link>
                            <Link to="about" className="nav-item nav-link">About</Link>
                            <Link to="service" className="nav-item nav-link">Service</Link>
                            <Link to="portfolio" className="nav-item nav-link">Portfolio</Link>
                            <Link to="pricing" className="nav-item nav-link">Pricing</Link>
                            <Link to="contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
}