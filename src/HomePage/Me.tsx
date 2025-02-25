import "bootstrap/dist/css/bootstrap.min.css";

export default function Me() {
  return (
    <div className="text-center p-3">
      <h1 className="fs-2 fw-bold mb-4">ABOUT ME</h1>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img src="/me2.jpeg" alt="Me"  style={{ width: "200px", height: "220px", objectFit: "cover" }} />
        </div>

        {/* Text Section */}
        <div className="text-center text-md-start w-50">
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est
            neque accusantium, eligendi porro veniam magni iusto inventore,
            exercitationem quo ratione ipsum culpa debitis. Rem iste totam porro
            dolorum quasi! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Odit est neque accusantium, eligendi porro veniam magni iusto
            inventore, exercitationem quo ratione ipsum culpa debitis. Rem iste
            totam porro dolorum quasi!
          </p>
        </div>
      </div>
    </div>
  );
}
