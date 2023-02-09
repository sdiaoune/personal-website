import React from 'react';
import '../App.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">Apr 2017</div>
        <div className="timeline-content">
        Won Third Place at <a href='https://devpost.com/software/studybuddies-1h8xg0' target='_blank'>sudo HackStetson</a>
        </div>
      </div>
      <div className="vl"></div>
      <div className="timeline-item">
        <div className="timeline-year">June 2017</div>
        <div className="timeline-content">
        Software Developer Assistant at <a href="https://www.orangemali.com/" target='_blank'>Orange S.A.</a>
        </div>
      </div>
      <div className="vl"></div>
      <div className="timeline-item">
        <div className="timeline-year">June 2019</div>
        <div className="timeline-content">
        Graduated from <a href='https://www.fiu.edu/' target="_blank">Florida International University</a> with a degree in Computer Science
        <br/>
        <br/>
        Data Analyst at <a href='https://www.wellsfargo.com/' target="_blank">Wells Fargo</a>
        </div>
      </div>
      <div className="vl"></div>
      <div className="timeline-item">
        <div className="timeline-year">Jan 2021</div>
        <div className="timeline-content">
        Systems Operations Senior Analyst at <a href='https://www.wellsfargo.com/' target="_blank">Wells Fargo</a>
        </div>
      </div>
      <div className="vl"></div>
      <div className="timeline-item">
        <div className="timeline-year">Apr 2022</div>
        <div className="timeline-content">
        Built a Bambara dictionary with English/French translations called <a href='http://mande.media/letter/a' target="_blank">Mande.Media</a> (Built with React/Node/PostgreSQL)
        </div>
      </div>
      <div className="vl"></div>
      <div className="timeline-item">
        <div className="timeline-year">Feb 2023</div>
        <div className="timeline-content">
        Deployed <a href='https://thesinifoundation.org/' target="_blank">The Sini Foundation Website</a>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
