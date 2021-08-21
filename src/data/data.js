// import icons
import { 
  faTwitter, faFacebook, faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHeart, faClock, faLightbulb,
  faPiggyBank, faHandHoldingMedical, 
  faUtensils, faDollarSign, faMoneyBillWave, 
  faPhone, faEnvelope, faMapMarker
} from '@fortawesome/free-solid-svg-icons';

// import images
import Client1 from "../images/logo/1.png";
import Client2 from "../images/logo/2.png";
import Client3 from "../images/logo/1.png";
import Client4 from "../images/logo/4.jpg";
import Rails from "../images/tech/rails.jpg";
import ReactJs from "../images/tech/react.png";
import Team1 from "../images/team/1.jpg";
import Team2 from "../images/team/2.png";
import Team3 from "../images/team/3.png";
import Team4 from "../images/team/4.jpg";




export const HomeData = {
  header : {
    title: "Building smarter",
    paragraph: "software and web application"
  },
};

export const AboutData = {
  about: {
    paragraph: `We build technical products and services which can be used by 
    individuals, companies or organizations not only in local industries but 
    also globally to better their daily undertakings. We have worked with multiple 
    national and international clients.`,
    list: [
      {
          color: "rgb(116, 218, 192)",
          icon: faLightbulb,
          title: "WE ARE EXPERIENCED PROBLEM SOLVERS.",
          paragraph: "We have been in business since 2015 and we have profound knowledge in web application development."
      },
      {
          color: "rgb(250, 201, 110)",
          icon: faClock,
          title: "TIMELY DELIVERY.",
          paragraph: "We deliver the work on promised timeline."

      },
      {
          color: "rgb(195, 125, 236)",
          icon: faHeart,
          title: "WE LOVE WHAT WE DO.",
          paragraph: "We enjoy to code."
      },
    ],     
  }
};

export const ServicesData = {
    heading: "Our services",
    card: [
      {
        title:'',
        body: '',
        image: '',
        link: ''
      },
      {
        title:'',
        body: '',
        image: '',
        link: ''
      },
      {
        title:'',
        body: '',
        image: '',
        link: ''
      },
    ]
};

export const ClientsData = {
    heading: "Clients trust us",
    images: [{
        logo: Client1,
        name: "hexa",
      },
      {
        logo: Client2,
        name: "abc"
      },
      {
        logo: Client3,
        name: "cde",
      },
      {
        logo: Client4,
        name:"def",
      },
    ]
};

export const CareersData = {   
    heading: "Work with us",
    why: `At ABC, work is more than a job-it's a perspective that finds an expression. 
          We are commited to providing our people with a great place to develop personally and professionally. 
          Problem solvers with great enthusiasm and knowledge in software and web development are higly motivated to join us.`
    
};

export const TechData = {
    heading: "Technology stack",
    paragraph: "We are proficient in Ruby on Rails and React Js.",
    images: [{
        logo: Rails,
        name: "Ruby on Rails",
      },
      {
        logo: ReactJs,
        name: "React Js"
      },
    ]
};


export const TeamData = {
    heading: "Meet our team",
    paragraph: "We focus on creating clean, modern & modular codebase.",
    employees: [{
        "img": Team1,
        "name": "Asmita Poudel",
        "job": "CO FOUNDER"
      },
      {
        "img": Team2,
        "name": "Sushmit Ghimire",
        "job": "CO FOUNDER"
      }, 
      {
        "img": Team3,
        "name": "Sakar Khatiwada",
        "job": "CO FOUNDER"
      },
      {
        "img": Team4,
        "name": "Bibek Magar",
        "job": "CO FOUNDER"
      }
    ],
};


// data for pages

export const CareerPageData = {
    heading: {
      main_heading: "Join Us", 
      sub_heading1: "Work with us", 
      sub_heading2: "Benefits of woking with us", 
      sub_heading3: "Open Positions",
    },
    paragraph: {
      title: "In delivering success with every solution.",
      why_us1: "",
      why_us2: "",
      benefits: "In addition to working alongside a team of talented individual, you will receive following benefits:",
      opening: "Did not find a position you are interested in? Email us your CV along with what you would like to do at "
    },
    benefits: [
      {
        icon: faMoneyBillWave,
        text:"Competitive Salary"
      },
      {
        icon: faPiggyBank,
        text:"Provident Fund"
      },
      {
        icon: faHandHoldingMedical,
        text:"Health Insurance"
      },
      {
        icon: faUtensils,
        text:"Free Lunch/Snacks"
      },
      {
        icon: faDollarSign,
        text:"Festival Bonus"
      },
    ],
    opening: [
      {
        post: "Frontend Developer(1-2 years, ReactJs)",
        time:"Full time",
        deadline: "12-12-2020",
        link: "/jobs?data=react",
        
      },
      {
        post: "Ruby on Rails Developer(1-2 years)",
        time:"Full time",
        deadline: "12-12-2020",
        link: "/jobs?data=rails",
      },
    ]
};

export const ContactsPageData = {
    main_heading: "Get in touch",
    sub_heading: "Send us a message",
    paragraph: "We will get back to you as soon as possible.",
    social: [
      {
        link: "#",
        icon: faFacebook,
      },
      {
        link: "#",
        icon: faTwitter,
      },
      {
        link: "#",
        icon: faLinkedin,
      },
    ],
    contact: [
      {
        icon: faMapMarker,
        title: "Address",
        content: "Gwarko, Kathmandu",
      },
      {
        icon: faPhone,
        title: "Phone",
        content: " +9779899123456",
      },
      {
        icon: faEnvelope,
        title: "Email",
        content: " abc@example.com",
      },
    ]
};


export const JobData = {
  react: {
    title: "React Developer",
    experience: "1-2 years",
    level: "Intermediate",
    total_position: 2,
    job_type: "full-time",
    salary: "Negotiable",
    education:"Computer Science or equivalent",
    location: "Kathmandu, Nepal",
    deadline: "2020-12-12",
    text: {
      Requirements:[
        "1+ years experience in software development using React",
        "Able to comprehend business logic",
        "Competency with the following",
        "Javascript, React.",
        "Html, CSS, SASS, Material UI, Ant design, and styled components",
        "Unit testing, automated testing, cross-browser testing, cross-device testing",
        "REST API",
        "Webpack, Babel, Npm",
        "Serious about code quality and have high regards for testing, documentation and maintainable code.",
        "Able to prioritize tasks.",
        "Work (rarely) across multiple projects.",
        "Quick learner able to pick evolving technologies.",
        "Punctual and have good work ethics.",
        "Work proactively with minimal supervision.",
        "Highly motivated and enthusiastic.",
      ],
      Roles: [
        "Work on ReactJS facet of projects either in a team or individually.",
        "Deal with large SPAs with huge number of components."
      ],
      Benefits: [
        "Free lunch, snacks and beverages",
        "Health insurance"
      ],
      WorkingDays:[
        "40 hrs per week, 9am-6pm, Monday - Friday",
        "Location: Remote until COVID-19 is neutralized. Gwarko, Kathmandu afterwards."
      ],
      Applying:[
        "Please include your CV and links to your work samples while applying at careers@abc.com."
      ],
    },
  },
  rails: {
    title: "Ruby On Rails Software Developer",
    experience: "1-2 years",
    level: "Intermediate",
    total_position: 3,
    job_type: "full-time",
    salary: "Negotiable",
    education:"Computer Science or equivalent",
    location: "Kathmandu, Nepal",
    deadline: "2020-12-12",
    text:{
      Requirements:[
        "Education: As long as you are good in software engineering, you qualify for applying whether or not you have a college degree.",
        "1+ years experience in Ruby on Rails development.",
        "Proficient in both frontend and backend development.",
        "Strong command over basic web technologies like HTML, CSS, JavaScript, and SQL",
        "Serious about code quality and have high regards for testing, documentation and maintainable code.",
        "Able to prioritize tasks.",
        "Work (rarely) across multiple projects.",
        "Quick learner able to pick evolving technologies.",
        "Punctual and have good work ethics.",
        "Work proactively with minimal supervision.",
        "Highly motivated and enthusiastic.",
      ],
      Roles: [
        "Work on Ruby on Rails project either in a team or individually."
      ],
      Benefits: [
        "Free lunch, snacks and beverages",
        "Health insurance"
      ],
      WorkingDays:[
        "40 hrs per week, 9am-6pm, Monday - Friday",
        "Location: Remote until COVID-19 is neutralized. Gwarko, Kathmandu afterwards."
      ],
      Applying:[
        "Please include your CV and links to your work samples while applying at careers@abc.com."
      ],
    }
  }
};