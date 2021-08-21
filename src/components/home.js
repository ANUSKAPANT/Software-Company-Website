import React from "react";
import { Link } from 'gatsby';
import Spinner from "./spinner";
import bannerImage from "../images/home-banner.svg";

const Home = (props) => {
  return (
   
      <div id="home" className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="h-100 flex-center">
                <div className="intro-text" data-aos="fade-up">
                  <h1>
                    {props.data ? props.data.header.title : <Spinner />}
                  </h1>
                  <p>
                    <em>{props.data ? props.data.header.paragraph : <Spinner />}</em>
                  </p>
                  <Link className="btn btn-custom btn-lg" to="#about">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-image h-100 flex-center">
                <img src={bannerImage} alt="Banner Image" data-aos="fade-down"/>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Home;
