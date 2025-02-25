import "bootstrap/dist/css/bootstrap.min.css";

export default function Me() {
  return (
    <div className="text-center p-3">
      <h1 className="fs-2 fw-bold mb-4">ABOUT ME</h1>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/me2.jpeg"
            alt="Me"
            style={{ width: "200px", height: "220px", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="text-center text-md-start w-50">
          <p className="text-muted">
            I'm Priya Mehta, a master's student in Computer Science at
            Northeastern University with a strong background in software
            development and machine learning. Proficient in Python, Java, and
            SQL, I have experience working with web technologies, cloud
            platforms, and AI frameworks like TensorFlow and PyTorch. Passionate
            about problem-solving and impactful projects, I thrive on challenges
            and continuous learning—always fueled by coffee!
          </p>
        </div>
      </div>
    </div>
  );
}
