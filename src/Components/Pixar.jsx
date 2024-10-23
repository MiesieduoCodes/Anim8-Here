import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; 

const Pixar = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Predefined data for Pixar movies
    const movieData = [
      {
        title: "Toy Story",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/407/622/339/toy-story-barbie-bullseye-toy-story-buzz-lightyear-wallpaper-preview.jpg", // Replace with actual image path
        story: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
      },
      {
        title: "A Bug's Life",
        rating: "7.2",
        backgroundImage: "https://images.bauerhosting.com/legacy/empire-tmdb/films/9487/images/gOvW00ZMoEiyRwXVkHPfBictPAl.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=768&q=80", // Replace with actual image path
        story: "A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
      },
      {
        title: "Toy Story 2",
        rating: "7.9",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/160/504/941/toy-story-toy-story-2-buzz-lightyear-woody-toy-story-wallpaper-preview.jpg", // Replace with actual image path
        story: "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.",
      },
      {
        title: "Monsters, Inc.",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/803/629/189/cartoon-gate-friends-statues-wallpaper-preview.jpg", // Replace with actual image path
        story: "In order to power the city, monsters have to scare children so they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
      },
      {
        title: "Finding Nemo",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/700/141/259/finding-nemo-disney-movies-fish-wallpaper-preview.jpg", // Replace with actual image path
        story: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      },
      {
        title: "The Incredibles",
        rating: "8.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/770/993/260/movie-the-incredibles-dash-parr-elastigirl-wallpaper-preview.jpg", // Replace with actual image path
        story: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      },
      {
        title: "Cars",
        rating: "7.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/759/811/822/disney-lightning-mcqueen-mcqueen-cars-movie-wallpaper-preview.jpg", // Replace with actual image path
        story: "A hotshot race car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
      },
      {
        title: "Ratatouille",
        rating: "8.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/988/734/385/paris-pixar-disney-company-movies-ratatouille-entertainment-movies-hd-art-wallpaper-preview.jpg", // Replace with actual image path
        story: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      },
      {
        title: "WALL-E",
        rating: "8.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg", // Replace with actual image path
        story: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      },
      {
        title: "Up",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/673/107/786/up-movie-pixar-animation-studios-movies-sky-wallpaper-preview.jpg", // Replace with actual image path
        story: "78-year-old Carl sets out to fulfill his dream of seeing the wilds of South America by tying thousands of balloons to his home.",
      },
      {
        title: "Toy Story 3",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/387/50/364/toy-story-3-box-toy-wallpaper-preview.jpg", // Replace with actual image path
        story: "The toys are mistakenly delivered to a daycare center instead of the attic before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned.",
      },
      {
        title: "Cars 2",
        rating: "6.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/529/30/493/cartoon-pixar-cars-2-cars-2-wallpaper-preview.jpg", // Replace with actual image path
        story: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix, but the road to the championship becomes rocky as Mater gets caught up in espionage.",
      },
      {
        title: "Brave",
        rating: "7.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/162/491/699/4k-brave-princess-merida-disney-princess-wallpaper-preview.jpg", // Replace with actual image path
        story: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
      },
      {
        title: "Monsters University",
        rating: "7.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/276/933/303/monsters-university-disney-wallpaper-preview.jpg", // Replace with actual image path
        story: "A look at the relationship between Mike Wazowski and James P. 'Sulley' Sullivan during their days at Monsters University, when they weren't necessarily the best of friends.",
      },
      {
        title: "Inside Out",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/554/758/458/movie-inside-out-anger-inside-out-disgust-inside-out-wallpaper-preview.jpg", // Replace with actual image path
        story: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions – Joy, Fear, Anger, Disgust and Sadness – conflict on how best to navigate a new city, house, and school.",
      },
      {
        title: "The Good Dinosaur",
        rating: "6.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/1018/439/828/movies-hollywood-movies-wallpaper-preview.jpg", // Replace with actual image path
        story: "In a world where dinosaurs and humans live side by side, an Apatosaurus named Arlo makes an unlikely human friend.",
      },
      {
        title: "Finding Dory",
        rating: "7.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/822/890/520/movie-finding-dory-dory-finding-nemo-wallpaper-preview.jpg", // Replace with actual image path
        story: "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
      },
      {
        title: "Cars 3",
        rating: "6.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/939/452/923/lightning-mcqueen-4k-poster-cars-3-wallpaper-preview.jpg", // Replace with actual image path
        story: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
      },
      {
        title: "Coco",
        rating: "8.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/165/365/163/pixar-animation-2017-miguel-rivera-wallpaper-preview.jpg", // Replace with actual image path
        story: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      },
      {
        title: "Incredibles 2",
        rating: "7.6",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/722/1011/788/movie-incredibles-2-bob-parr-dash-parr-wallpaper-preview.jpg", // Replace with actual image path
        story: "The Incredibles family takes on a new mission, which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
      },
      {
        title: "Toy Story 4",
        rating: "7.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/927/177/132/movie-toy-story-4-buzz-lightyear-forky-toy-story-jessie-toy-story-hd-wallpaper-preview.jpg", // Replace with actual image path
        story: "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
      },
      {
        title: "Onward",
        rating: "7.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/162/169/131/movie-onward-onward-movie-pixar-hd-wallpaper-preview.jpg", // Replace with actual image path
        story: "Two elven brothers embark on a quest to bring their father back for one day.",
      },
      {
        title: "Soul",
        rating: "8.1",
        backgroundImage: "https://wallpapercave.com/wp/wp8207832.jpg", // Replace with actual image path
        story: "A musician, whose passion for music is in decline, finds himself in a strange land between Earth and the afterlife.",
      },
      {
        title: "Luca",
        rating: "7.4",
        backgroundImage: "https://picfiles.alphacoders.com/422/thumb-1920-422532.jpg", // Replace with actual image path
        story: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
      },
      {
        title: "Turning Red",
        rating: "7.0",
        backgroundImage: "https://wallpapercave.com/wp/wp13496045.jpg", // Replace with actual image path
        story: "A 13-year-old girl named Mei Lee transforms into a giant red panda whenever she gets too excited.",
      },
      {
        title: "Lightyear",
        rating: "6.1",
        backgroundImage: "https://images5.alphacoders.com/126/thumb-1920-1267703.jpg", // Replace with actual image path
        story: "While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg, who is attempting to steal his fuel source.",
      },
      // Add more movies as needed
    ];

    setCards(movieData);
  }, []);

  return (
    <div className="main-content pt-20">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://wallpapers.com/images/featured/pixar-cx81w1x378htuj4p.webp')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Pixar
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />hearts across the globe.
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

export default Pixar;
