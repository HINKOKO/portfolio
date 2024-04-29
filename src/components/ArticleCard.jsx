import { FaBookOpenReader } from 'react-icons/fa6';

const ArticleCard = ({ imgUrl, title, desc, mediumUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <a
            href={mediumUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <div className="h-full bg-[#181818] rounded-t-xl opacity-0 hover:opacity-80 transition-all duration-500"></div>
            <FaBookOpenReader className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white text-[#ADB7BE] cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
