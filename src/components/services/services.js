import React from 'react';
import { Link } from 'gatsby';
import Spinner from "../spinner";

const Services = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container title">
                <h2>{props.data ? props.data.heading : <Spinner />}</h2>  
            </div>

            <div className="container">
                <div className="cards-1">
                    <div className="row">
                        <div className="card" data-aos="fade-left" data-aos-offset="100">
                            {/* <div className="card-header bg-info">
                            </div> */}
                            <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facilis corporis cumque fugit distinctio alias numquam vero? Doloribus quae ipsum provident error corrupti libero soluta, necessitatibus saepe, repellendus, tempora cumque.</p>
                            </div>
                            <div className="card-footer bg-faded">
                                <Link className="btn-learn" to="#">Learn More</Link>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-left" data-aos-offset="200">
                            {/* <div className="card-header bg-info">

                            </div> */}
                            <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas sint! Est, nemo fuga maxime tempora quod molestiae ut porro assumenda? Rem dolorum nesciunt, mollitia voluptate voluptas veritatis deserunt aperiam.</p>
                            </div>
                            <div className="card-footer">
                                <Link className="btn-learn" to="#">Learn More</Link>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-left" data-aos-offset="300">
                            {/* <div className="card-header bg-info">
                            </div> */}
                            <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. lorem</p>
                            </div>                   
                            <div className="card-footer">
                                <Link className="btn-learn" to="#">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    );
}

export default Services;

