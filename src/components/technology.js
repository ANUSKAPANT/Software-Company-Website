import React from 'react';
import Spinner from './spinner';

const Technology = (props) => {
    return (
        <div id="technology" className="text-center ">
            <div className="container">
                <div className="section-title">
                    <h2>{props.data ? props.data.heading : <Spinner />}</h2>
                    <p className="pt-2">{props.data ? props.data.paragraph : <Spinner />}</p>
                </div>
                 <div className="row">
                    {props.data
                        ? props.data.images.map((d,i) => (
                            <div  key={i} className="pt-5 col-md-5 img" data-aos="zoom-in" data-aos-offset={(i+1)*100}>
                                <span><img src={d.logo} alt="logo"/></span>
                                <p>{d.name}</p>
                            </div>
                        ))
                        : <Spinner />}
                 </div>
            </div>
        </div>
    );
}

export default Technology;
