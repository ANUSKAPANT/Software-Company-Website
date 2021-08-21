import React, {useEffect} from 'react';
import { Link } from 'gatsby';
import Spinner from "../spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ContactsPageData} from '../../data/data';
import AOS from "aos";
import 'aos/dist/aos.css';


const ContactsPage = (props) => {
  const { main_heading, sub_heading, paragraph, social, contact } = ContactsPageData;

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div id="contact">
      <div className="contact-social text-center">
        <h1 data-aos={"fade-down"}>{main_heading ? main_heading : <Spinner />}</h1>
          <div className="social">
            <ul>
              {social ? social.map((d,i) => {
                return(
                  <li key={i} data-aos="fade-left" data-aos-delay={(i+1)*100}>
                    <Link className="icon" to={d.link}>
                      <FontAwesomeIcon icon={d.icon}/>
                    </Link>
                  </li>
              )}): <Spinner />}
            </ul>
          </div>       
      </div>

      <div className="contact-message">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <div className="section-title">
                  <h2>{sub_heading ? sub_heading : <Spinner />}</h2>
                  <p>{paragraph ? paragraph : <Spinner />}</p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate data-aos="fade-up">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <button type="submit" className="btn btn-custom">
                    Send Message
                  </button>
                </form>
            </div>

            <div className="col-md-4 contact-info">     
              <h3>Contact Info</h3>
              {contact ? contact.map((d,i) => {
                return(
                 <div className="contact-item" key={i} data-aos="fade-up" data-aos-offset={(i+1) * 80}>
                   <div className="icon">
                     <FontAwesomeIcon icon={d.icon} />
                   </div>
                   <div className="text">
                     <span>
                      {d.title}
                    </span>
                     <p>{d.content}</p>
                   </div>
                 </div>
              )}) : <Spinner /> }
            </div>            
          </div>
        </div>       
      </div>
    </div>
  
  );
}

export default ContactsPage;
