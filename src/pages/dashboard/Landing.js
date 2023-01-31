// import React from 'react';
import Wrapper from '../../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import main from '../../assets/images/main.svg'
import dev from '../../assets/images/dev.svg'

export default function Landing(){

  return (
    <div>
      <Wrapper>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h3>Hello,</h3>
            <h1>
              My name is <span>Joy</span>! 
            </h1>
            <p>
              I am a <span>Software Engineer</span>, <span>an IT Instructor</span> and a <span>Scrum Master</span> 
            </p>
            <p>and I build fully working web applications.</p>
            <Link to="/projects" className='btn'>Go to My Projects</Link>
          </div>
          <img src={dev} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </div>
  );
};


