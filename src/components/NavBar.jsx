import { useState, useEffect } from 'react';
import { FaHamburger, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '/persologo.jpg';
import MenuOverlay from './MenuOverlay';

const links = [
  {
    title: 'About',
    path: 'about',
  },
  {
    title: 'Works',
    path: 'works',
  },
  {
    title: 'Writing',
    path: 'writing',
  },
  {
    title: 'Contact',
    path: 'contact',
  },
];

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNavOpen(false);
    }
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed h-fit top-0 left-0 right-0 z-10 bg-black bg-opacity-95">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          to="top"
          smooth={true}
          spy={true}
          className="group logo flex items-center p-6 ml-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="w-14 h-14 rounded-full mr-3 ring-2 group-hover:ring-4 group-hover:ring-purple-600 ring-purple-700"
          />
          <span className="text-bold text-xl font-medium text-gray-500 group-hover:translate-x-2 group-hover:text-white">
            Anthony Pizzoni
          </span>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaHamburger />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaWindowClose />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto mr-8" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 gap-2 mr-5 text-xl">
            {links.map((l, idx) => (
              <li key={idx}>
                <Link
                  activeClass="active"
                  to={l.path}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="text-white pb-2 hover:font-bold hover:text-purple-600 hover:border-b-4 hover:border-b-purple-600 cursor-pointer"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={links} closeMenu={closeMenu} /> : null}
    </nav>
  );
};

export default NavBar;
