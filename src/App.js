

import soya from './assets/soya.jpeg'


import './App.css';


import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


import NavBar from './Components/NavBar';

// import ReactPlayer from 'react-player'

import Timeline from './Components/Timeline';

function App() {


  const [opacity, setOpacity] = useState(0);

  useEffect(()=>{
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const threshold = 300;
      if (scrollTop > threshold) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <div className='main'>
        <div className='overlay'></div>

        <video playsInline autoPlay loop muted>
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/close-up-of-programming-an-app-on-the-computer-screen_s78gw9vtg__c52988994e395a2dce1fd5a58623abb4__P360.mp4" type="video/webm"/>
        </video>

        <div className='content'>
          <h1 style={{color: 'white'}}>Soya Diaoune</h1>
          <span>Software Developer</span>
        </div>
      </div>
      <div className={`text-fade-in ${opacity === 1 ? "fade-in" : ""}`} style={{opacity}}>
      <section className='App-section' id="profile">
        
        <div className='flexbox-container'>
          <div className='flexbox-text'>
          <div  className={'div-description'}>
          <h1>Profile</h1>
          <br/>
          <p>A software developer who excels at prioritizing and professionally completing tasks. Often recognized for promoting teamwork among fellow employees and described as an enthusiastic worker seeking several years of experience in the tech industry. Focused on team building, leading a project, and moving forward to collaborate with the team members to further enhance the company's success and reputation.</p>
          </div>
          </div>
          <div className="flexbox-image">
            <img src={soya} alt="image" style={{width: '100%'}} />
          </div>
        </div>
      </section>
      </div>
            <section className='App-section' id="skills">
        <div className='flexbox-container'>
          <div className="flexbox-image">
            <img src='https://codecondo.com/wp-content/uploads/2014/04/12-Free-Books-for-Learning-Theoretical-Computer-Science.jpg' alt="image" style={{width: '100%'}} />
          </div>
          <div className='flexbox-text'>
          <div  className='div-description'>
          <h1>Skills</h1>
          <h2>Development Platforms and Runtime Environments</h2>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Node.js</li>
            <li>Postman</li>
            <li>Spring</li>
            <li>Anchor-Solana</li>
            <li>web3.js</li>
            <li>Shopify AI</li>
            <li>Helio Pay (Solana)</li>
            <li>AWS</li>
            <li>Google Cloud</li>
          </ul>
          <h2>Programming Languages</h2>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>C</li>
            <li>Rust</li>
            <li>Swift</li>
            <li>Java</li>
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h2>Frameworks</h2>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Ionic</li>
            <li>Flask</li>
            <li>React Native</li>
          </ul>
          </div>
          </div>
        </div>
      </section>
      <div>
      <section className='App-section' id="projects">
        <div className='flexbox-container'>
          <div className="flexbox-image">
            <img src='https://business.orlando.org/wp-content/uploads/sites/3/2020/01/20170427_EDC_1006-1650x1100.jpg' alt="image" style={{width: '100%'}} />
          </div>
          <div className='flexbox-text'>
          <div  className='div-description'>
          <h1>Projects and Experience</h1>
          <br/>
          <p>
          Soya is a highly skilled software developer with a strong track record of effectively prioritizing and completing projects. With several years of experience in the tech industry, he is well-known for promoting teamwork and collaboration among colleagues. He has a passion for team building and has demonstrated leadership skills by successfully leading several projects. Soya's main focus is on working with his team members to drive company success and enhance its reputation.
          </p>
          <br/>
          <Timeline />
          </div>
          </div>
          
        </div>
      </section>
      </div>
      <section className='App-section' id="contact">
        <div className='flexbox-container'>
          <div className='flexbox-text'>
          <div  className='div-description'>
          <h1>Contact</h1>
          <br/>
          <h2>Email</h2>
          <p>
          <span>soyadiaoune@gmail.com</span>
          </p>
          <br/>
          <h2>LinkedIn</h2>
          <p>
          <a href="https://www.linkedin.com/in/soya-diaoun%C3%A9-27062089/" target="_blank">Link</a>
          </p>
          <br/>
          <h2>Devpost</h2>
          <p>
          <a href="https://devpost.com/sdiaoune" target="_blank">Link</a>
          </p>
          </div>
          </div>
          <div className="flexbox-image">
            <img src='https://paubox.com/wp-content/uploads/2022/09/Untitled-design-6.png' alt="image" style={{width: '100%'}} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
