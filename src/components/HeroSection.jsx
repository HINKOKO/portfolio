import { TypeAnimation } from 'react-type-animation';
import profile from '/profile.png';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-auto mt-6 ml-6 text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-green-100">
              Hello there, {''}
            </span>
            <br></br>
            <div className="text-white">
              <TypeAnimation
                sequence={[
                  "I'm Anthony, Mainframe Developer",
                  1000,
                  'I mostly build with COBOL, and Golang',
                  1000,
                  'And I love modern web, cats and good whiskey !',
                  2000,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={Infinity}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Currently COBOL developer at IBM, and a cybersecurity enthusiast by night. I'm always on the lookout for a good vulnerability to crack.
          </p>
          <div>
            <button className="font-semibold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-700 to-purple-400 hover:bg-slate-200 text-white">
              <a href="mailto:pizzoni.anthony@gmail.com">Hire Me</a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-700 to-purple-200 hover:bg-slate-200 text-white mt-3">
              <a href="/CV_Pizzoni_Anthony_12-08-25.pdf" download>
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                  Download CV
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-2">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={profile}
              alt="avatar"
              className="absolute -translate-x-1/2 -translate-y-1/3 top-1/4 left-1/2"
            ></img>
          </div>
        </div>
        <hr className="mx-auto bg-white z-20 h-10 w-80%" />
      </div>
    </section>
  );
};

export default HeroSection;
