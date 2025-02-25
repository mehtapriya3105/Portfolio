import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Movie Recommendation System",
    description:"Built a movie recommendation system with FastAPI (Python) for the backend, ReactJS for the frontend, and MongoDB (Pymongo) for data storage. Implemented content-based filtering to tailor recommendations based on user preferences.",
    image: "/movie.png",
    github : "https://github.com/mehtapriya3105/Movie-Recomendation-System.git",
  },
  {
    title: "Photo Enhance",
    description:
     "Developed a photo editing application with a Java-Swing UI for the frontend and a Java-based backend, integrated with a CI/CD pipeline. Designed features such as flipping, filters, image splitting, compression, and dithering.",
    image: "/photo.png",
    github : "https://github.com/mehtapriya3105/Photo-Editor.git",
  },
  {
    title: "Online Foood Ordering System",
    description:
      "Developed a web-based food ordering platform using Django (Python) for the backend, HTML/CSS/JavaScript for the frontend, and MySQL for database management.Enabled customers to order food online, restaurants to manage menus and orders, and delivery agents to track and fulfill deliveries.",
    image: "/food.jpg",
    github : "https://github.com/mehtapriya3105/Food-Delivery-System.git",
  },
 
  {
    title: "Travel Recomenndation System",
    description:
      "Developed a web scraper using BeautifulSoup to extract travel data for any given city and country. Implemented features to calculate road distance between cities and recommend places based on user ratings and cosine similarity. Provided insights on the best day and time to visit, user reviews, nearby attractions, and attraction categories.",
    image: "/travell.png",
    github : "https://github.com/mehtapriya3105/Travel-Buddy.git",

  },
  {
    title: "Personal Portfolio",
    description: "Developed using React",
    image: "/portfolio.png",
    github : "https://github.com/mehtapriya3105/Portfolio.git",
  },
  {
    title: "Canvas Application",
    description:
      "Created a canvas based clone which dynamically takes the data and displays it.",
    image: "/canvas.png",
    github : "https://github.com/mehtapriya3105/webdev.git",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 2
    );
  };

  return (
    <div className="p-4 m-4">
      <div>
      <h1 className="text-center p-3 m-2">PROJECTS</h1>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Left Button */}
        <div style={{ position: "absolute", left: "20px", zIndex: 10 }}>
          <motion.button
            onClick={handlePreviousProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={transition}
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "10px",
            }}
          >
            <FaChevronLeft />
          </motion.button>
        </div>

        {/* Project Container */}
        <div
          style={{
            width: "70%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 50px", // Space between the buttons and the project content
            borderRadius: "10px",
            
            }}
          >
            <div
            style={{
              display: "flex",
              width: "55%",
              position: "relative",
              gap: "20px",
            }}
            >
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={transition}
              style={{ display: "flex", width: "100%" }}
              
            >
              {projects.map((project, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                flex: "0 0 85%",
                padding: "10px",
                background: "white",
                borderRadius: "15px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                margin : "20px",
                paddingBlock: "10px",
                border: "1px solid #ccc",
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
                transform:
                  hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                zIndex: hoveredIndex === index ? 10 : 1,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                <h2>{project.title}</h2>
                <img
                src={project.image}
                alt={project.title}
                style={{ width: "60%", height: "auto" , alignSelf: "center"}}
                
                />
                <p>{project.description}</p>
                <button onClick={() => window.open(project.github, "_blank")} className= "btn btn-primary">
                View on GitHub
                </button>
              </motion.div>
              ))}
            </motion.div>
            </div>
          </div>

          {/* Right Button */}
        <div style={{ position: "absolute", right: "20px", zIndex: 10 }}>
          <motion.button
            onClick={handleNextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={transition}
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "10px",
            }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
