import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Marvel = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const marvelMovies = [
      {
        title: "Ultimate Avengers",
        rating: "7.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/640/207/798/avengers-comics-ultimates-avengers-entertainment-other-hd-art-wallpaper-preview.jpg", // Replace with actual image path
        story: "The Avengers, Earth's mightiest heroes, assemble to fight against a powerful enemy threatening the world.",
      },
      {
        title: "Ultimate Avengers 2",
        rating: "6.7",
        backgroundImage: "/path/to/ultimate-avengers-2-poster.jpg",
        story: "The Avengers return to face an even greater threat as they battle the powerful, advanced beings known as the 'Chitauri'.",
      },
      {
        title: "The Invincible Iron Man",
        rating: "6.7",
        backgroundImage: "/path/to/invincible-iron-man-poster.jpg",
        story: "Tony Stark must embrace his destiny as Iron Man while combating the evil forces led by the Mandarin.",
      },
      {
        title: "Doctor Strange: The Sorcerer Supreme",
        rating: "7.4",
        backgroundImage: "/path/to/doctor-strange-poster.jpg",
        story: "After a car accident robs him of his surgical skills, Stephen Strange seeks out a healer who teaches him the mystical arts.",
      },
      {
        title: "Next Avengers: Heroes of Tomorrow",
        rating: "6.2",
        backgroundImage: "/path/to/next-avengers-poster.jpg",
        story: "The next generation of Avengers must band together to defeat the villainous Ultron and save the future.",
      },
      {
        title: "Hulk Vs.",
        rating: "7.0",
        backgroundImage: "/path/to/hulk-vs-poster.jpg",
        story: "The Hulk faces off against Wolverine and Thor in two separate battles that test his strength and resilience.",
      },
      {
        title: "Planet Hulk",
        rating: "7.5",
        backgroundImage: "/path/to/planet-hulk-poster.jpg",
        story: "Banished to a distant planet, the Hulk must fight to survive and become a champion among gladiators.",
      },
      {
        title: "Thor: Tales of Asgard",
        rating: "6.4",
        backgroundImage: "/path/to/thor-tales-of-asgard-poster.jpg",
        story: "Young Thor embarks on a quest to retrieve a powerful artifact and learns valuable lessons about heroism.",
      },
      {
        title: "Iron Man: Rise of Technovore",
        rating: "6.5",
        backgroundImage: "/path/to/iron-man-rise-of-technovore-poster.jpg",
        story: "Tony Stark must confront a new enemy in the form of a tech-based villain who threatens to take over the world.",
      },
      {
        title: "Avengers Confidential: Black Widow & Punisher",
        rating: "6.8",
        backgroundImage: "/path/to/avengers-confidential-poster.jpg",
        story: "Black Widow teams up with the Punisher to stop an organization from using a dangerous weapon.",
      },
      {
        title: "Big Hero 6",
        rating: "7.8",
        backgroundImage: "/path/to/big-hero-6-poster.jpg",
        story: "Hiro, a young robotics prodigy, teams up with a group of friends and a lovable healthcare robot to save their city.",
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        rating: "8.4",
        backgroundImage: "/path/to/spider-man-into-the-spider-verse-poster.jpg",
        story: "Teenager Miles Morales becomes Spider-Man and teams up with other Spider-People from different dimensions to save the multiverse.",
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        rating: "N/A",
        backgroundImage: "/path/to/spider-man-across-the-spider-verse-poster.jpg",
        story: "Miles Morales embarks on an epic adventure across the multiverse, teaming up with new allies and facing greater threats.",
      },
    ];

    setCards(marvelMovies);
  }, []);

  return (
    <div className="main-content pt-20">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div
          className="relative bg-cover bg-center h-64 md:h-80 lg:h-96"
          style={{ backgroundImage: `url('/src/Assets/ToonImages/Marvel/marvel-background.jpg')` }} // Replace with actual image path
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Marvel Universe
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />
              hearts across the globe.
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-purple-800 h-full rounded-full"
                    style={{ width: `${card.rating !== 'N/A' ? card.rating * 10 : 0}%` }}
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

export default Marvel;
