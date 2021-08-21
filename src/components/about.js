import React from 'react';
import Spinner from './spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = (props) => { 
  return (
      <div id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="about-text" data-aos="fade-down">
                <h2>About Us</h2>
                <p>{props.data ? props.data.about.paragraph: <Spinner />}</p>
              </div>
            </div>
            <div className="col-md-6 why"> 
              {props.data
              ? props.data.about.list.map((d, i) => (
                  <div  key={i} className="about-why row" data-aos="fade-down" data-aos-offset={(i+1) * 50}>
                     <div className="col-md-1 icon"><FontAwesomeIcon icon={d.icon} className="icon" style={{backgroundColor: d.color,}}/></div>
                     <div className="col-md-10 text new">
                      <h4>{d.title}</h4>
                      <p>{d.paragraph}</p>
                      </div>
                  </div>
                ))
              : <Spinner />} 
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
