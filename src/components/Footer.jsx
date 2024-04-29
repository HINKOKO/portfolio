import { FaPizzaSlice } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 h-28 mx-auto w-full border-t border-5">
      <div className="flex flex-row items-center justify-center">
        <h3 className="text-white mr-2">Made with &#10084; by Pizzolini</h3>
        <FaPizzaSlice className="h-5 w-5 text-[#c97a30]" />
      </div>
    </footer>
  );
};

export default Footer;
