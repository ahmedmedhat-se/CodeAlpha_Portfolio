import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark p-5">
                <Link className="navbar-brand" to="/About">Ahmed Medhat</Link>

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
                        "IT Technician | Web-Developer | Programming Enthusiast"
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
            <section className="about-me">
            <h2>About Me</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjQ4OTM5NHx8ZW58MHx8fHx8" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">IT Tech</h5>
                            <p className="card-text">
                                I am a dedicated IT Technician specializing in programming and web development, driven by a passion for
                                problem-solving and innovation. Throughout my career, I have actively participated in numerous
                                competitions, consistently demonstrating my expertise and commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://www.societyforscience.org/wp-content/uploads/2019/08/20180517_Overhead_of_Floor_08_KR.jpg" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">My Journey</h5>
                            <p className="card-text">
                                My journey in competitive arenas has been marked by significant achievements. I am proud to
                                have reached
                                the finals of several prestigious Republican and international competitions, where I
                                showcased my skills
                                and creativity. These experiences have not only honed my technical abilities but also earned
                                me numerous
                                awards and certificates for my contributions to the field.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://t4.ftcdn.net/jpg/06/20/76/37/360_F_620763712_lzjIErP2KxS5vhLoTV6tlJH7QKEX1NF7.jpg" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Level-Up</h5>
                            <p className="card-text">
                                Beyond competitions, I am deeply committed to staying at the forefront of technological
                                advancements and
                                leveraging my expertise to solve complex challenges in programming and web development. My
                                journey
                                continues to be fueled by a relentless pursuit of knowledge and a passion for innovation,
                                driving me to
                                deliver impactful solutions in the IT industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Navbar;
