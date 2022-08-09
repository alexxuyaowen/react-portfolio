import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header className='header'>
      <h1 className='myName'>
        <NavLink to='/'>Alex Xu</NavLink>
      </h1>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/experience' activeClassName='active'>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to='/education' activeClassName='active'>
              Education
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/projects' activeClassName='active'>
              Projects
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/skills' activeClassName='active'>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
