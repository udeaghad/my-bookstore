import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [

    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '*',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navBar">
      <h1>BooksStore CMS</h1>

      <ul className="navItems">
        {links.map((link) => (
          <li className="item" key={link.id}>
            <NavLink to={link.path} activeclassname="active-link" exact="true">
              {link.text}
              {' '}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
