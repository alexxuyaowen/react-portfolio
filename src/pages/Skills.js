import JSLogo from '../assets/js-logo.svg';
import JavaLogo from '../assets/java-logo.svg';
import PythonLogo from '../assets/python-logo.svg';
import CLogo from '../assets/c-logo.svg';
import SQLLogo from '../assets/sql-logo.svg';

import ReactLogo from '../assets/react-logo.svg';
// import VueLogo from '../assets/vue-logo.svg';
import AngularLogo from '../assets/angular-logo.svg';
import JQueryLogo from '../assets/jquery-logo.svg';
import BootstrapLogo from '../assets/bootstrap-logo.svg';
import SassLogo from '../assets/sass-logo.svg';
import ReduxLogo from '../assets/redux-logo.svg';
import JestLogo from '../assets/jest-logo.svg';

import ExpressLogo from '../assets/express-logo.svg';
import JiraLogo from '../assets/jira-logo.svg';
import FigmaLogo from '../assets/figma-logo.svg';
import GitLogo from '../assets/git-logo.svg';

const Skills = () => (
  <div className='skills'>
    <div className='skill'>
      <h2>Languages</h2>
      <div className='logos'>
        <img src={JSLogo} alt='JavaScript' />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
          alt='TypeScript'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
          alt='HTML'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
          alt='CSS'
        />
        <img src={JavaLogo} alt='JAVA' />
        <img src={PythonLogo} alt='Python' />
        <img src={CLogo} alt='C++' />
        <img id='sql' src={SQLLogo} alt='SQL' />
      </div>
    </div>

    <div className='skill'>
      <h2>Web Technologies</h2>
      <div className='logos'>
        <img src={ReactLogo} alt='React' />
        {/* <img src={VueLogo} alt='Vue' /> */}
        <img src={AngularLogo} alt='Angular' />
        <img src={JQueryLogo} alt='jQuery' />
        <img src={BootstrapLogo} alt='Bootstrap' />
        <img src='https://mui.com/static/logo.png' alt='Material UI' />
        <img src={SassLogo} alt='Sass' />
        <img src={ReduxLogo} alt='Redux' />
        <img id='jest' src={JestLogo} alt='Jest' />
      </div>
    </div>

    <div className='skill'>
      <h2>Development Tools</h2>
      <div className='logos'>
        <img src={FigmaLogo} alt='Figma' />
        <img
          src='https://avatars.githubusercontent.com/u/6078720?s=200&v=4'
          alt='npm'
        />
        <img src={GitLogo} alt='Git' />
        <img src={JiraLogo} alt='Jira' />
        <img src='https://nodejs.org/static/images/logo.svg' alt='Node' />
        <img id='express' src={ExpressLogo} alt='Express' />
      </div>
    </div>
  </div>
);

export default Skills;
