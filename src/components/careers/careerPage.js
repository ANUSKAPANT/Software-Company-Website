import React, {useEffect} from 'react';
import {Link} from 'gatsby';
import Spinner from "../spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CareerPageData}  from "../../data/data";
import AOS from "aos";
import 'aos/dist/aos.css';


const CareerPage = (props) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    const { heading, paragraph, opening, benefits } = CareerPageData;
    return (
        <div id="career" className="text-center">
            <div className="bgteam title">
                <h2 data-aos="flip-left">{heading ? heading.main_heading : <Spinner />}</h2>
                <p data-aos="flip-right" data-aos-offset="100">{paragraph ? paragraph.title : <Spinner />}</p>
            </div>
            <div className="description">
                <div className="title">
                    <h2>{heading ? heading.sub_heading1 : <Spinner />}</h2>
                </div>
                <div className="career-text"> 
                    <p>{paragraph ? paragraph.why_us1 : <Spinner />}</p>  
                    <p>{paragraph ? paragraph.why_us2 : <Spinner />}</p>  
                    <Link className="btn btn-more" to="#opening" data-aos="zoom-in">See open positions</Link>
                </div>
            </div>

            <div className="benefits">
                <h2>{heading ? heading.sub_heading2 : <Spinner />}</h2>
                <p>{paragraph ? paragraph.benefits : <Spinner />}</p>
                <div className="row">
                    {benefits ? benefits.map((d,i) => {
                        return(
                        <div className="col-md-2" key={i} data-aos="fade-down" data-aos-offset={(i+1)*80}>
                            <FontAwesomeIcon className="block"  icon={d.icon} />
                            <p>{d.text}</p>
                        </div>
                    )}) : "Loading..."} 
                </div>
            </div>

            <div id="opening" className="opening">
                <h2>{heading ? heading.sub_heading3 : <Spinner />}</h2>
                <p>{paragraph ? paragraph.opening : <Spinner />}<a href="mailto:careers@abc.com" style={{textDecoration:"underline"}}>careers@abc.com</a>.</p>
                <table className="table table-hover" data-aos="fade-up">
                    <thead>
                        <tr>
                        <th>Posting Title </th>
                        <th>Job Type</th>
                        <th>Deadline</th>
                        <th aria-label="button" />
                        </tr>
                    </thead>
                    <tbody>
                        {opening
                        ? opening.map((d, i) => (
                            <tr key={i}>
                            <td>{d.post}</td>
                            <td>{d.time}</td>
                            <td>{d.deadline}</td>
                            <td><Link className="btn btn-learn" to={d.link} >Learn More</Link></td>
                            </tr>
                        ))
                        : <Spinner />}
                    </tbody>
                </table>
            </div>           
        </div>
    );
}

export default CareerPage;
