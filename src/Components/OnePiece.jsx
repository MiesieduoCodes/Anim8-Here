import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import { MdSkipNext } from "react-icons/md";
import { Link } from 'react-router-dom'; // Adjust the import path as needed

const OnePiece = () => {
  const movies = [
    "One Piece: The Movie (1999)",
    "Clockwork Island Adventure (2001)",
    "Chopper's Kingdom on the Island of Strange Animals (2002)",
    "Dead End Adventure (2003)",
    "Curse of the Sacred Sword (2004)",
    "Baron Omatsuri and the Secret Island (2005)",
    "Giant Mecha Soldier of Karakuri Castle (2006)",
    "The Desert Princess and the Pirates: Adventures in Alabasta (2007)",
    "Episode of Chopper Plus: Fuyu ni Saku, Kiseki no Sakura (2008)",
    "One Piece: Strong World (2009)",
    "Straw Hat Chase (2011)",
    "One Piece: Z (2012)",
    "One Piece: Gold (2016)",
    "One Piece: Stampede (2019)",
    "One Piece: Red (2022)",
  ];

  const story = "Join Monkey D. Luffy and his crew of Straw Hat Pirates as they embark on epic adventures across the Grand Line, searching for the ultimate treasure known as One Piece. Along the way, they face powerful foes, uncover hidden secrets, and forge unbreakable bonds of friendship.";

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

export default OnePiece;