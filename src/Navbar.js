import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark p-5">
                <Link className="navbar-brand" to="/CodeAlpha_Portfolio">Ahmed Medhat</Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-items">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbar-items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/certificates">Certificates</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <header>
                <div className="home-landing" id="Home">
                    <h2>
                        Hi, it's me Ahmed!
                    </h2>
                    <p>
                        Based in Alexandria, Egypt,
                        I am an IT Tech with 3 years of experience in programming and web development.
                        As a junior scientific researcher,
                        I am passionate about integrating innovative solutions and research-driven insights into my work.
                        Combining technical skills with creative design,
                        I focus on delivering impactful digital experiences through dynamic web applications and visually appealing graphics.
                        <br /><br />
                    </p>
                    <h2>
                        Headlines:
                        "IT Technician | MERN Stack Developer | Programming Enthusiast".
                    </h2>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
