import React from "react";
import Spinner from './spinner';

const Clients = (props) => {

  return (
    <div id="clients" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.heading : <Spinner />}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.images.map((d,i) => (
                <div  key={`${i}`} className="col-xs-6 col-md-3" data-aos="fade-up" data-aos-offset={(i+1)*70}>
                  <div className="thumbnail">
                    <span><img src={d.logo} alt="logo"/></span>
                  </div>
                </div>
              ))
            : <Spinner />}
        </div>
      </div>
    </div>
  );
  
}

export default Clients;
