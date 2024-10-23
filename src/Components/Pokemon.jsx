import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import { MdSkipNext } from "react-icons/md";
import { Link } from 'react-router-dom';

const Pokemon = () => {
    const movies = [
        "Pokémon the Movie: Volcanion and the Mechanical Marvel",
        "Pokémon the Movie: I Choose You!",
        "Pokémon the Movie: The Power of Us",
        "Pokémon: Mewtwo Strikes Back—Evolution",
        "Pokémon: Detective Pikachu",
        "Pokémon the Movie: Secrets of the Jungle",
        "Pokémon the Movie: Turning Back into the Indigo League",
        "Pokémon the Movie: Secrets of the Jungle - Special Edition",
    ];

    const story = "Pokémon the Movie: I Choose You! follows Ash Ketchum as he embarks on his journey to become a Pokémon Master. Alongside his first Pokémon, Pikachu, Ash encounters various challenges, meets new friends, and ultimately confronts the legendary Pokémon Ho-Oh.";

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
}

export default Pokemon;