import { Fragment } from 'react';
import Navbar from '../components/Navbar';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='contacts'>
        <div
          className='contact'
          onClick={() =>
            window.open('https://github.com/alexxuyaowen', '_blank')
          }
        >
          <GitHubIcon />
          <h1>alexxuyaowen</h1>
        </div>

        <div className='contact'>
          <EmailIcon />
          <h1>alexxuyaowen@gmail.com</h1>
        </div>

        <div className='contact'>
          <PhoneIcon />
          <h1>(424)-421-1304</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
