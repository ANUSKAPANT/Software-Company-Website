import React from 'react'
import {Link} from 'gatsby';
import Logo from "../images/brand.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>  {
    return (       
        <footer id="footer" className="site-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{width:'100px', height:'60px'}} src={Logo} alt=""/>
                        </div>
                        <div className="col-md-4">
                            <h4>Navigate</h4>
                            <ul className="footer-nav">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="#services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/careers/#opening">Openings</Link></li>
                                <li><Link to="#clients">Clients</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="address">
                                <h4>Contact Us</h4>
                                <p>ABC Tech Labs</p>
                                <p>Sugam Tole, Gwarko</p>
                                <p>Kathmandu, Nepal</p>
                                <p>+9779899123456</p>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-sm-2">
                            <div className="footer-social text-left text-md-right">
                                <Link to="#" className="pl-0 pr-3"><FontAwesomeIcon icon={faFacebook} /></Link>
                                <Link to="#" className="pl-3 pr-3"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="#" className="pl-3 pr-3"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="#" className="pl-3 pr-3"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-left">
                            <span className="copyright-text">© 2020 ABC Tech Labs | All rights reserved.</span>
                        </div>

                    </div>
                </div>
            </div>
	    </footer>

    );
}

export default Footer;


        




