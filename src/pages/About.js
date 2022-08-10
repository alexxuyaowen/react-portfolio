import { Fragment } from 'react';
import Navbar from '../components/Navbar';

import ProfilePic from '../assets/profile.JPG';

const About = props => {
  return (
    <Fragment>
      <Navbar />
      <div className='about'>
        <img src={ProfilePic} alt='Profile Picture' />
        <p>
          Front-end engineer with 4 years of experience in web development, with
          specialization in React, HTML, CSS, and JavaScript with TypeScript,
          alongside with Redux, RESTful API, Material UI, Bootstrap. Experienced
          in writing unit tests using jest and react testing library. Having a
          solid knowledge of node, express and SQL. Able to quickly adapt to new
          technologies as well as effectively communicate and collaborate in a
          team setting.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
