import React from "react";
import Spinner from "./spinner";

const Team = (props) => {
 
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.heading : <Spinner />}</h2>
          <p>{props.data ? props.data.paragraph :<Spinner />}</p>
        </div>
        <div className="row pt-5">
          {props.data
            ? props.data.employees.map((d, i) => (
                <div  key={`${d.name}-${i}`} className="col-md-3 " data-aos="fade-down" data-aos-offset={(i+1)*80}>
                  <div className="thumbnail">
                    <span><img src={d.img} alt="..." className="team-img text-center" /></span>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                  </div>
                </div>
              ))
            : <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default Team;
