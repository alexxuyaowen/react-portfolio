import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header className='header'>
      <h1>
        <NavLink to='/'>Alex Xu</NavLink>
      </h1>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => isActive && 'active'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/experience'
              className={({ isActive }) => isActive && 'active'}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/education'
              className={({ isActive }) => isActive && 'active'}
            >
              Education
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/projects' activeClassName='active'>
              Projects
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to='/skills'
              className={({ isActive }) => isActive && 'active'}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => isActive && 'active'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
