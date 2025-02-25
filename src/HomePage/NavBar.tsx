import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavBar() {
  const [darkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-light", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          PriyaMehta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="Me" smooth duration={500} style={{ cursor: "pointer" }}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Education" smooth duration={500} style={{ cursor: "pointer" }}>
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="Experience"
                smooth
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to= "Projects" smooth duration={500} style={{ cursor: "pointer" }}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1vL_xsZdCNvpTMl2eCjeLP3nmbRnV_Qed/view?usp=drive_link" style={{ cursor: "pointer" }}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to= "Contact" smooth duration={500} style={{ cursor: "pointer" }}>
                Connect
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
}
