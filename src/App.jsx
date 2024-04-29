import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Works from './components/Works';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]" id="top">
      <NavBar />
      <div className="flex-1 container mt-36 mx-auto px-12 py-4">
        <HeroSection />
        <Presentation />
        <Works />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
