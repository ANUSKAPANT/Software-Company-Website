import React from 'react';
import {useLocation} from '@reach/router';
import queryString from 'query-string'
import { JobData } from '../../data/data';

const Opening = () => {

    const location = useLocation();
    const query = queryString.parse(location.search);
    const {react, rails} = JobData;
    const data = query.data === "react" ? {...react} : {...rails};
    
    return (
        <div id="opening" className="opening pt-5 ml-5 pb-5">
            <div className="container pt-5">
                <h2 className="pt-5 pb-3">{data.title}</h2>
                <table>                      
                    <tr>
                        <th aria-label="columns" />
                        <th aria-label="columns" />
                    </tr>
                    <tr>
                        <td><strong>Experience: </strong></td>
                        <td> {data.experience}</td>
                    </tr>
                    <tr>
                        <td><strong>Level: </strong></td>
                        <td> {data.level}</td>
                    </tr>
                    <tr>
                        <td colSpan="1"><strong>Total Positions: </strong></td>
                        <td> {data.total_position}</td>
                    </tr>
                    <tr>
                        <td><strong>Job Type: </strong></td>
                        <td> {data.job_type}</td>
                    </tr>
                    <tr>
                        <td><strong>Salary: </strong></td>
                        <td> {data.salary}</td>
                    </tr>
                    <tr>
                        <td ><strong>Education: </strong></td>
                        <td> {data.education}</td>
                    </tr>
                    <tr>
                        <td><strong>Location: </strong></td>
                        <td> {data.location}</td>
                    </tr>
                    <tr>
                        <td><strong>Apply Before: </strong></td>
                        <td> {data.deadline}</td> 
                    </tr> 
                </table>
                 
                <div className=" text-left pt-3 pr-5">
                    <ul>
                        {Object.keys(data.text).map((key) => {
                            return(
                                <div key={key}> 
                                    <p className="pt-3 ">{key}:</p>
                                    {data.text[key].map((d,i) => {
                                        return(
                                            <li key={i} className="text-muted">{d}</li>
                                        );
                                    })}
                                </div>
                            );
                        })}   
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Opening;
