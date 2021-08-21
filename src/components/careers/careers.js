import React from 'react';
import { Link } from 'gatsby';
import Spinner from "../spinner";

const Careers = (props) => {
    
  return (
          <div id="careers" className="careers-section text-center">
              <div className="container">
                  <div className="col-md-12 col-md-offset-2 section-title">
                      <h2>{props.data ? props.data.heading : <Spinner />}</h2>
                  </div>
                  <div className="careers-text"> 
                          <p data-aos="flip-left" data-aos-offset="100">{props.data ? props.data.why: <Spinner /> }</p>
                          <Link className="btn btn-more btn-lg page-scroll" to="/careers" data-aos="fade-up" data-aos-offset="100">Learn More</Link>
                          {" "}
                  </div>
              </div>
          </div>
  );
}

export default Careers;
