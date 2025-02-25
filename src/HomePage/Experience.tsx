import "./Education.css";
export default function Education() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-2">EXPERIENCE</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="apland-timeline-area">
            <div className="single-timeline-area">
              <div
                className="timeline-date wow fadeInLeft"
                data-wow-delay="0.1s"
              ></div>
              <div className="row">
                <div>
                  <div className="single-timeline-content d-flex wow fadeInLeft">
                    <div className="d-flex align-items-center">
                      {/* Left Section: Company & Role */}
                      <div style={{ width: "40%" }}>
                        <h5>Rapidops Solutions Inc</h5>
                        <h4>Data Science Intern</h4>
                      </div>

                      {/* Vertical Line */}
                      <div
                        className="border-start border-3 border-dark mx-3"
                        style={{ height: "60px" }}
                      ></div>

                      {/* Right Section: Responsibilities */}
                      <div>
                        <ul>
                          <li>
                            Developed a lightweight application for named entity
                            recognition (NER) to extract essential information.
                          </li>
                          <li>
                            Integrated NER system into the main chatbot project
                            to enhance functionality.
                          </li>
                          <li>
                            Engineered a transformer model achieving 97%
                            accuracy in identifying person names, dates, times,
                            and organization names.
                          </li>
                        </ul>
                      </div>
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
                <div>
                  <div className="single-timeline-content d-flex wow fadeInLeft">
                    <div className="d-flex align-items-center">
                      {/* Left Section: Company & Role */}
                      <div style={{ width: "40%" }}>
                        <h5>Nirma University</h5>
                        <h4>Research Intern</h4>
                      </div>

                      {/* Vertical Line */}
                      <div
                        className="border-start border-3 border-dark mx-3"
                        style={{ height: "60px" }}
                      ></div>

                      {/* Right Section: Responsibilities */}
                      <div>
                        <ul>
                          <li>
                            Created a lip movement recognition system with a
                            database to track lip movements and identify spoken
                            words.
                          </li>
                          <li>
                            Utilized CNN and modified neural network models to
                            detect lips in images and predict the corresponding
                            words spoken.
                          </li>
                         
                        </ul>
                      </div>
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
