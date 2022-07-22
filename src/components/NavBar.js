import { NavLink } from 'react-router-dom';
import contactIcon from '../images/contact-icon.png';
// import IoIosContact from 'react-icons'

const Navbar = () => {
  const links = [

    {
      id: 1,
      path: '/',
      text: 'BOOKS',
      className: 'BOOKS',
    },
    {
      id: 2,
      path: '*',
      text: 'CATEGORIES',
      className: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navBar">
      <h1 className="Bookstore-CMS">BooksStore CMS</h1>

      <ul className="navItems">
        {links.map((link) => (
          <li className={link.className} key={link.id}>
            <NavLink to={link.path} activeclassname="active-link" exact="true" style={{ textDecoration: 'none' }}>
              {link.text}
              {' '}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="Oval">

        <img src={contactIcon} className="Mask" alt="contact-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
