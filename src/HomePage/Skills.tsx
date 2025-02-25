import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Assuming you will create a custom CSS file for styling

export default function Skills() {
  return (
    <div className="m-4 p-3">
      
      <h2 className="m-7 text-center p-3 m-3">SKILLS</h2>
      <div className="container text-center d-flex justify-content-evenly">
        {/* Programming Languages Section */}
        <div className="mb-5 border p-2 g-col-6 card" style= {{width: "18rem"}}>
          <h4 className="section-heading">Programming Languages</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              alt="Java"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="Python"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              alt="C"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              alt="C++"
              className="skill-icon"
            />
          </div>
        </div>
       
        {/* Web Development Section */}
        <div className="mb-5 border p-2 g-col-6 card" style= {{width: "18rem"}}>
          <h4 className="section-heading">Web Development</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
              alt="Django"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="Bootstrap"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              alt="CSS"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              alt="HTML"
              className="skill-icon"
            />
          </div>
        </div>

        {/* Databases Section */}
        <div className="mb-5 border p-2 g-col-6 card" style= {{width: "18rem"}}>
          <h4 className="section-heading">Databases</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              alt="MySQL"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
              className="skill-icon"
            />
          </div>
        </div>
      </div>

      <div className="container text-center mt-5 d-flex flex-row justify-content-evenly">
        {/* Machine Learning Libraries Section */}
        <div className="mb-5 border pt-2 pl-2 pr-2 card" style= {{width: "18rem", borderEndEndRadius : "-15rem"}}>
          <h4 className="section-heading">Machine Learning Libraries</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
              alt="TensorFlow"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg"
              alt="PyTorch"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg"
              alt="Keras"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
              alt="Scikit-Learn"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
              alt="NumPy"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
              alt="OpenCV"
              className="skill-icon"
            />
          </div>
        </div>

        {/* Other Tools & Technologies Section */}
        <div className="mb-5 border p-2 g-col-6 card" style= {{width: "18rem"}}>
          <h4 className="section-heading">Other Tools & Technologies</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
              alt="Git"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
              alt="Linux"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original-wordmark.svg"
              alt="Hadoop"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
              alt="Docker"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg"
              alt="Kubernetes"
              className="skill-icon"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="AWS"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              alt="Postman"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original-wordmark.svg"
              alt="RabbitMQ"
              className="skill-icon"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg"
              alt="JUnit"
              className="skill-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
