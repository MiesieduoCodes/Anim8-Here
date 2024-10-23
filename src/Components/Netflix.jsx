import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Netflix = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const netflixMovies = [
        {
          title: "Klaus",
          rating: "8.2",
          backgroundImage: "/path/to/klaus-poster.jpg", // Replace with actual image path
          story: "A selfish postman and a reclusive toymaker form an unlikely friendship, delivering joy to a cold, dark town.",
        },
        {
          title: "The Willoughbys",
          rating: "6.4",
          backgroundImage: "https://wallpapercave.com/wp/wp6249468.jpg", // Replace with actual image path
          story: "Convinced they'd be better off raising themselves, the Willoughby children hatch a plan to send their selfish parents on vacation.",
        },
        {
          title: "Over the Moon",
          rating: "6.3",
          backgroundImage: "https://wallpapercave.com/wp/wp6249468.jpg", // Replace with actual image path
          story: "In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.",
        },
        {
          title: "Soul",
          rating: "8.0",
          backgroundImage: "https://wallpapercave.com/wp/wp8207832.jpg", // Replace with actual image path
          story: "A middle-school band teacher's life takes a new direction when his soul is separated from his body after a near-death experience.",
        },
        {
          title: "The Mitchells vs. the Machines",
          rating: "7.7",
          backgroundImage: "https://wallpapercave.com/wp/wp8995076.jpg", // Replace with actual image path
          story: "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
        },
        {
          title: "Wish Dragon",
          rating: "7.2",
          backgroundImage: "https://wallpapercave.com/wp/wp9347563.jpg", // Replace with actual image path
          story: "A young man and a wish-granting dragon embark on an adventure to show the boy the beauty of life and human connection.",
        },
        {
          title: "Extinct",
          rating: "5.4",
          backgroundImage: "https://images7.alphacoders.com/117/thumb-1920-1172674.jpg", // Replace with actual image path
          story: "Two Flummels, small, donut-shaped animals, accidentally time-travel to the future and learn that their species has become extinct.",
        },
        {
          title: "Vivo",
          rating: "6.7",
          backgroundImage: "https://wallpapercave.com/wp/wp9624137.jpg", // Replace with actual image path
          story: "Vivo, a music-loving kinkajou, embarks on the journey of a lifetime to deliver a song to a beloved performer.",
        },
        {
          title: "My Little Pony: A New Generation",
          rating: "6.8",
          backgroundImage: "https://wallpapercave.com/wp/wp9932154.jpg", // Replace with actual image path
          story: "Equestria's divided pony races must come together to restore harmony in this new animated adventure.",
        },
        {
          title: "The Sea Beast",
          rating: "7.1",
          backgroundImage: "https://images7.alphacoders.com/132/thumb-1920-1321564.jpeg", // Replace with actual image path
          story: "A young girl stows away on the ship of a legendary sea monster hunter, embarking on a grand adventure.",
        },
        {
          title: "Puss in Boots: The Last Wish",
          rating: "7.8",
          backgroundImage: "https://images4.alphacoders.com/129/thumb-1920-1297183.jpg", // Replace with actual image path
          story: "Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives.",
        },
        {
          title: "Apollo 10½: A Space Age Childhood",
          rating: "7.3",
          backgroundImage: "https://media.themoviedb.org/t/p/w500_and_h282_face/3yAoVcQR1i7Zgm7yNxy58i3RzCi.jpg", // Replace with actual image path
          story: "A man narrates stories of his life as a 10-year-old boy in 1969 Houston, weaving together tales of nostalgia and space adventure.",
        },
        {
          title: "Nimona",
          rating: "7.4",
          backgroundImage: "https://wallpapercave.com/wp/wp12502250.jpg", // Replace with actual image path
          story: "A shapeshifting teen joins forces with a knight to fight an oppressive regime.",
        },
        {
          title: "The Magician's Elephant",
          rating: "6.8",
          backgroundImage: "https://www.motionpictures.org/wp-content/uploads/2023/03/The_Magicians_Elephant_00_27_38_07.jpg", // Replace with actual image path
          story: "An orphan boy is told by a fortune teller that an elephant will lead him to his long-lost sister.",
        },
        {
          title: "The Amazing Maurice",
          rating: "6.3",
          backgroundImage: "https://images7.alphacoders.com/132/thumb-1920-1321332.jpeg", // Replace with actual image path
          story: "Maurice, a streetwise cat, leads a band of rats to create a money-making scheme by pretending to solve a town’s rat problem.",
        },
        {
          title: "The Boss Baby: Family Business",
          rating: "5.9",
          backgroundImage: "https://wallpapercave.com/wp/wp5346867.jpg", // Replace with actual image path
          story: "The Templeton brothers have become adults and drifted apart, but a new boss baby brings them together.",
        },
        {
          title: "Naya’s Dream",
          rating: "6.1",
          backgroundImage: "/path/to/nayas-dream-poster.jpg", // Replace with actual image path
          story: "A magical dreamworld opens up for a young girl trying to protect her home and family.",
        },
        {
          title: "Raya and the Last Dragon",
          rating: "7.3",
          backgroundImage: "https://c4.wallpaperflare.com/wallpaper/134/1023771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg", // Replace with actual image path
          story: "A young warrior sets out to find the last dragon and save her people from an ancient evil.",
        },
        {
          title: "Luck",
          rating: "6.3",
          backgroundImage: "https://images8.alphacoders.com/125/thumb-1920-1254691.jpg", // Replace with actual image path
          story: "An unlucky girl discovers the world's luckiest place and teams up with magical creatures to turn her fortune around.",
        },
        {
          title: "Back to the Outback",
          rating: "6.5",
          backgroundImage: "https://wallpapercave.com/wp/wp10431048.jpg", // Replace with actual image path
          story: "Tired of being locked in a reptile house, a group of Australia's deadliest creatures plot their escape to the Outback.",
        },
      ];


    setCards(netflixMovies);
  }, []);

  return (
    <div className="main-content pt-20">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div
          className="relative bg-cover bg-center h-64 md:h-80 lg:h-96"
          style={{ backgroundImage: `url('https://wallpapers.com/images/featured/video-on-demand-wwar5riu8muamrn5.webp')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Netflix
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Dive into our curated selection of animated classics that have
              <br />
              enchanted audiences worldwide, just like your favorite Netflix originals.
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
                    style={{ width: `${parseFloat(card.rating) * 10}%` }}
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

export default Netflix;
