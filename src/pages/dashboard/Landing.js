// import React from 'react';
// import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';

export default function Landing(){

  return (
    <div>
      {/* <Wrapper> */}
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Welcome to my Web Portfolio
            </h1>
            <p>
              I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
              bottle single-origin coffee chia. Aesthetic post-ironic venmo,
              quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
              narwhal.
            </p>
            <Link to="/projects" className='btn'>Projects</Link>
          </div>
        </div>
      {/* </Wrapper> */}
    </div>
  );
};


