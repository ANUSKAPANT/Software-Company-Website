import React, {useEffect} from 'react'
import Home from '../components/home';
import About from '../components/about';
import Services from '../components/services/services';
import Clients from '../components/clients';
import Careers from '../components/careers/careers';
import Technology from '../components/technology';
import Team from '../components/team';
import Layout from '../components/layout';
import "../styles/index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  HomeData,
  AboutData,
  ServicesData,
  ClientsData,
  CareersData,
  TechData,
  TeamData,
} from "../data/data";

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (   
      <Layout>
        <Home data={HomeData}/>
        <About data={AboutData}/>
        <Services data={ServicesData}/>
        <Clients data={ClientsData}/>
        <Careers data={CareersData}/>
        <Technology data={TechData}/>
        <Team data={TeamData}/>
      </Layout> 
  );
}

export default IndexPage;



