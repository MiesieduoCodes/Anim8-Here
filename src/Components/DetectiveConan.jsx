import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import { MdSkipNext } from "react-icons/md";
import { Link } from 'react-router-dom';

const DetectiveConan = () => {
  const movies = [
    "The Time-Bombed Skyscraper (1997)",
    "The Fourteenth Target (1998)",
    "The Last Wizard of the Century (1999)",
    "Captured in Her Eyes (2000)",
    "Countdown to Heaven (2001)",
    "The Phantom of Baker Street (2002)",
    "Crossroad in the Ancient Capital (2003)",
    "Magician of the Silver Sky (2004)",
    "Strategy Above the Depths (2005)",
    "The Private Eyes' Requiem (2006)",
    "Jolly Roger in the Deep Azure (2007)",
    "Full Score of Fear (2008)",
    "The Raven Chaser (2009)",
    "The Lost Ship in the Sky (2010)",
    "Quarter of Silence (2011)",
    "Eleventh Striker (2012)",
    "Private Eye in the Distant Sea (2013)",
    "Dimensional Sniper ",
    "Sunflowers of Inferno",
    "The Darkest Nightmare ",
    "Crimson Love Letter ",
    "Zero the Enforcer ",
    "The Fist of Blue Sapphire",
    "The Scarlet Bullet",
    "The Bride of Halloween ",
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  return (
    <div>
      <Navbar />
      <div className="relative bg-cover bg-center h-[50vh] md:h-80 lg:h-96" style={{ backgroundImage: `url(${RinYoshidaImage})` }}> 
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="mt-4 text-base md:text-lg text-white text-center md:w-[40%]">{story}</p>
            <a href="">
              <button className="w-full md:w-[150px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                <MdSkipNext className="text-2xl" /> Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-4">Pokémon Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-lg">{movie}</p>
              <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                  onClick={() => alert(`Downloading ${movie}`)}
                >
                  Download
                </button>
            </div>
          ))}
          
        </div>
        
      </div>         
      <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Get the App</h2>
            <p className="text-gray-400">Download our app for the best experience.</p>
            <div className="mt-4">
              <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
              <br />
              <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">More</h2>
            <ul>
              <li>
                <Link to="/about" className="text-gray-400 hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()}Anim8. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default DetectiveConan;