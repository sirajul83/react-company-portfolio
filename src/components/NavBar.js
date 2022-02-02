
import * as React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){

    return (
        <>
            <div className="container-fluid nav-bar p-0">
                <div className="container-lg p-0">
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                        <Link to="/" className="navbar-brand">
                            <h1 className="m-0 text-white display-4"><span className="text-primary">S</span>tep<span className="text-primary">T</span>ech</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="about" className="nav-item nav-link">About</Link>
                                <Link to="service" className="nav-item nav-link">Services</Link>
                                <Link to="team" className="nav-item nav-link">Team</Link>
                                <Link to="contact" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}