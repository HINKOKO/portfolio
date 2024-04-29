import { Link } from 'react-scroll';

const MenuOverlay = ({ links, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };
  return (
    <ul className="flex flex-col items-center">
      {links.map((l, idx) => (
        <li key={idx} className="mb-3 text-lg font-semibold">
          <Link
            activeClass="active"
            to={l.path}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="text-white mb-8 hover:font-bold hover:text-purple-600 cursor-pointer"
            onClick={handleClick}
          >
            {l.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
