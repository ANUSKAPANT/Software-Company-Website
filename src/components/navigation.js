import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Logo from "../images/brand.png";


let lastScrollY = 0;

const Navigation  = (props) => {
  const [color, setColor] = useState(" ");
  
  useEffect( () => {
    window.addEventListener('scroll', handleScroll, true);
    return ()  => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = (e) => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 85) {
      setColor( "bg-white");
    }
    else {
      setColor(" ");
    }
  };

  
  return (
    <nav id="head" className={`navbar fixed-top  navbar-expand-md navbar-light ${color} bgColor ${props.bgColor} `} >
      <div className="container">

        <Link className=" page-scroll navbar-brand" to="/" ><img src={Logo} width="100" height="60" className="d-inline-block align-top" alt="" /></Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className=" nav navbar-nav ml-auto align">
              <li>
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/#about" activeClassName="active">About</Link>
              </li>
              <li >
                <Link to="/#services" activeClassName="active" >Services</Link>
              </li>
              <li>
                <Link to="/careers"  activeClassName="active" >Careers</Link>
              </li>
              <li>
                <Link to="/contact"   activeClassName="active" >Contact Us</Link>
              </li>
            </ul>
        </div>
      </div> 
    </nav>
  );
}

export default Navigation;


