import UCBLogo from '../assets/ucb-logo.png';

const Education = () => (
  <div className='education'>
    <img
      src={UCBLogo}
      alt='UC Berkeley'
      onClick={() => window.open('https://www.berkeley.edu/', '_blank')}
    />
    <div className='text-box'>
      <h1>University of Califonia, Berkeley</h1>
      <h2>Bachelor of Arts in Computer Science</h2>
      <p>Aug. 2018 - Dec. 2021</p>
      <ul>
        <li
          onClick={() =>
            window.open('https://inst.eecs.berkeley.edu/~cs61a/fa18/', '_blank')
          }
        >
          Structure and Interpretation of Computer Programs
        </li>
        <li
          onClick={() => window.open('https://sp19.datastructur.es/', '_blank')}
        >
          Data Structures
        </li>
        <li
          onClick={() =>
            window.open('https://inst.eecs.berkeley.edu/~cs170/fa20/', '_blank')
          }
        >
          Efficient Algorithms and Intractable Problems
        </li>
        <li
          onClick={() =>
            window.open('https://www.cs160summer2021.com/', '_blank')
          }
        >
          User Interface Design and Development
        </li>
        <li
          onClick={() =>
            window.open(
              'https://www2.eecs.berkeley.edu/Courses/CS169/',
              '_blank'
            )
          }
        >
          Software Engineering
        </li>
        <li
          onClick={() =>
            window.open('https://cs186berkeley.net/fa21/', '_blank')
          }
        >
          Introduction to Database Systems
        </li>
      </ul>
    </div>
  </div>
);
export default Education;
