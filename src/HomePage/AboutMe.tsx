import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope,  FaFile } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe() {
  const roles = ["Developer", "Student", "Data Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const deletingSpeed = 80;
  const pauseBetweenWords = 1000;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="about-container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {/* Name & Role Typing Effect */}
      <h1 className="fw-bold display-3 text-white">PRIYA MEHTA</h1>
      <h3 className="fs-4 mt-2 text-light">
        I am <span className="fw-bold text-warning">{text}</span>
      </h3>

      {/* Social Icons */}
      <div className="d-flex justify-content-center gap-4 mt-4">
        <a href="https://github.com/mehtapriya3105" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="text-dark hover-effect" />
        </a>
        <a href="https://www.linkedin.com/in/priya-mehta31/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="text-primary hover-effect" />
        </a>
        <a href="mailto:mehtapriya3105@gmail.com">
          <FaEnvelope size={40} className="text-danger hover-effect" />
        </a>
        <a href="https://drive.google.com/file/d/1vL_xsZdCNvpTMl2eCjeLP3nmbRnV_Qed/view?usp=drive_link">
          <FaFile size={40} className=" hover-effect" />
        </a>
      </div>

      {/* Custom Styles */}
      <style>{`
        .about-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background: url('/me1.jpeg') no-repeat center center/cover;
        }

        .about-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Opacity overlay */
        }

        .about-container h1, 
        .about-container h3, 
        .about-container .d-flex {
          position: relative;
          z-index: 1; /* Ensures text is above the background */
        }

        .hover-effect:hover {
          transform: scale(1.1);
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}
