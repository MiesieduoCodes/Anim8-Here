import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Disney = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Disney animated movies data
    const disneyMovies = [
      {
        title: "Lilo & Stitch",
        rating: "7.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/780/383/751/movie-lilo-and-stitch-wallpaper-preview.jpg", // Replace with actual image path
        story: "A young girl adopts a unique pet who turns out to be a notorious extra-terrestrial fugitive.",
      },
      {
        title: "Treasure Planet",
        rating: "7.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/954/990/373/treasure-planet-disney-science-fiction-steampunk-hd-wallpaper-preview.jpg", // Replace with actual image path
        story: "A Disney animated version of 'Treasure Island.' The only difference is that the island is a planet.",
      },
      {
        title: "Brother Bear",
        rating: "6.8",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/581/973/261/1brotherbear-adventure-animation-bear-wallpaper-preview.jpg", // Replace with actual image path
        story: "A young Inuit hunter seeks vengeance on a bear, only to be magically changed into a bear himself.",
      },
      {
        title: "Chicken Little",
        rating: "5.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/472/16/943/chicken-little-funny-hd-wallpaper-wallpaper-preview.jpg", // Replace with actual image path
        story: "After ruining his reputation with the town, a courageous chicken must come to the rescue of his fellow citizens when aliens start an invasion.",
      },
      {
        title: "The Princess and the Frog",
        rating: "7.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/661/606/473/movie-the-princess-and-the-frog-wallpaper-preview.jpg", // Replace with actual image path
        story: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",
      },
      {
        title: "Tangled",
        rating: "7.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/16/77/288/tangled-movie-rapunzel-wallpaper-preview.jpg", // Replace with actual image path
        story: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
      },
      {
        title: "Frozen",
        rating: "7.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/987/132/956/snow-snowflakes-ice-deer-wallpaper-preview.jpg", // Replace with actual image path
        story: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      },
      {
        title: "Wreck-It Ralph",
        rating: "7.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/290/558/366/cartoon-movie-wreck-it-ralph-wallpaper-preview.jpg", // Replace with actual image path
        story: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
      },
      {
        title: "Big Hero 6",
        rating: "7.8",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/900/725/263/baymax-big-hero-6-hiro-hamada-big-hero-6-tadashi-hamada-big-hero-6-big-hero-6-wallpaper-preview.jpg", // Replace with actual image path
        story: "A special bond develops between a plus-sized inflatable robot and a prodigy, who team up with a group of friends to form a band of high-tech heroes.",
      },
      {
        title: "Zootopia",
        rating: "8.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/459/924/918/zootopia-rabbit-cartoon-fox-wallpaper-preview.jpg", // Replace with actual image path
        story: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
      },
      {
        title: "Moana",
        rating: "7.6",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/141/820/1006/disney-princesses-moana-vaiana-sea-cartoon-movie-wallpaper-preview.jpg", // Replace with actual image path
        story: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the ocean's call to seek out the Demigod to set things right.",
      },
      {
        title: "Raya and the Last Dragon",
        rating: "7.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/134/1023/771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg",
         // Replace with actual image path
        story: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      },
      // Add more movies as needed...
    ];

    setCards(disneyMovies);
  }, []);

  return (
    <div className="main-content pt-20">
    <Navbar />

    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/279/89/75/goofy-mickey-mouse-donald-duck-daisy-and-pluto-disney-hd-wallpapers-1920%C3%971200-wallpaper-preview.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Discover the Magic of Disney
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
            Explore our collection of animated walt disney magic that have captured <br />hearts over the years.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
            }}
          >
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {card.title}
              </h2>
              <p className="text-white text-lg text-center mb-2">{card.story}</p>
              <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="bg-purple-800 h-full rounded-full"
                  style={{ width: `${card.rating * 10}%` }}
                ></div>
              </div>
              <p className="text-white text-lg">{card.rating}</p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                onClick={() => alert(`Downloading ${card.title}`)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Get the App</h2>
            <p className="text-gray-400">Download our app for the best experience.</p>
            <div className="mt-4">
              <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
              <br />
              <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
            </div>
          </div>

          <div>
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
        <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
};

export default Disney;
