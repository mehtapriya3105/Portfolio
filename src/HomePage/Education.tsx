import "./Education.css";
export default function Education() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-2">EDUCATION</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="apland-timeline-area">
            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft",
                }}
              ></div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="timeline-text">
                      <h4>Northeastern University</h4>
                      <h5>Masters in Computer Science</h5>
                      <p>GPA : 3.7/4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft",
                }}
              ></div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="timeline-text">
                      <h4>Nirma University</h4>
                      <h5>Bachelors in Computer Science</h5>
                      <p>GPA : 3.5/4.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
