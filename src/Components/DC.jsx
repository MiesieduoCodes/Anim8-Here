import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const DCMovies = () => {
  const cards = [
    {
      title: "Batman: Mask of the Phantasm",
      rating: 7.7,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_mask_of_the_phantasm.jpg')",
      story: "The Dark Knight must contend with the mysterious figure of the Phantasm while investigating a series of murders.",
    },
    {
      title: "Batman & Mr. Freeze: SubZero",
      rating: 7.2,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_and_mr_freeze.jpg')",
      story: "Batman must confront Mr. Freeze to save Batgirl, who has been kidnapped.",
    },
    {
      title: "Batman: Mystery of the Batwoman",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_mystery_of_the_batwoman.jpg')",
      story: "Batman investigates the identity of a mysterious new hero, Batwoman, who is targeting Gotham's crime lords.",
    },
    {
      title: "Batman: Gotham Knight",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_gotham_knight.jpg')",
      story: "A collection of animated short films that feature the adventures of Batman in Gotham City.",
    },
    {
      title: "Wonder Woman",
      rating: 7.4,
      backgroundImage: "url('/src/Assets/ToonImages/DC/wonder_woman.jpg')",
      story: "When an American pilot crashes on her sheltered island, Wonder Woman leaves home to restore peace.",
    },
    {
      title: "Green Lantern: First Flight",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/green_lantern_first_flight.jpg')",
      story: "A test pilot is selected to become the first human Green Lantern.",
    },
    {
      title: "Superman/Batman: Public Enemies",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/superman_batman_public_enemies.jpg')",
      story: "Superman and Batman must team up to clear their names when they are framed for a crime.",
    },
    {
      title: "Batman: Under the Red Hood",
      rating: 8.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_under_the_red_hood.jpg')",
      story: "Batman faces a mysterious new vigilante known as Red Hood, who has his own methods of justice.",
    },
    {
      title: "Superman/Batman: Apocalypse",
      rating: 7.3,
      backgroundImage: "url('/src/Assets/ToonImages/DC/superman_batman_apocalypse.jpg')",
      story: "Superman and Batman must team up to protect the powerful Wonder Girl from Darkseid.",
    },
    {
      title: "All-Star Superman",
      rating: 7.5,
      backgroundImage: "url('/src/Assets/ToonImages/DC/all_star_superman.jpg')",
      story: "Superman embarks on a journey to complete his final tasks before facing his ultimate fate.",
    },
    {
      title: "Green Lantern: Emerald Knights",
      rating: 7.2,
      backgroundImage: "url('/src/Assets/ToonImages/DC/green_lantern_emerald_knights.jpg')",
      story: "A group of Green Lanterns recounts their stories to a new recruit.",
    },
    {
      title: "Batman: Year One",
      rating: 7.4,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_year_one.jpg')",
      story: "Batman begins his fight against crime in Gotham City.",
    },
    {
      title: "Justice League: Doom",
      rating: 7.4,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_doom.jpg')",
      story: "Vandal Savage obtains the Justice League's files and uses them to defeat them.",
    },
    {
      title: "Superman vs. The Elite",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/superman_vs_the_elite.jpg')",
      story: "Superman faces off against a group of super-powered individuals who operate outside the law.",
    },
    {
      title: "Batman: The Dark Knight Returns, Part 1",
      rating: 8.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_dark_knight_returns_part_1.jpg')",
      story: "Batman comes out of retirement to face a new breed of criminals.",
    },
    {
      title: "Batman: The Dark Knight Returns, Part 2",
      rating: 8.4,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_dark_knight_returns_part_2.jpg')",
      story: "Batman faces off against Superman as tensions rise between heroes.",
    },
    {
      title: "Superman: Unbound",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/superman_unbound.jpg')",
      story: "Superman must save Earth from the threat of Brainiac.",
    },
    {
      title: "Justice League: The Flashpoint Paradox",
      rating: 8.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_flashpoint_paradox.jpg')",
      story: "The Flash must navigate an alternate timeline to save the world.",
    },
    {
      title: "Son of Batman",
      rating: 7.1,
      backgroundImage: "url('/src/Assets/ToonImages/DC/son_of_batman.jpg')",
      story: "Batman discovers he has a son, Damian, who is raised by the League of Assassins.",
    },
    {
      title: "Batman: Assault on Arkham",
      rating: 7.5,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_assault_on_arkham.jpg')",
      story: "The Suicide Squad is sent to Arkham Asylum to retrieve a dangerous weapon.",
    },
    {
      title: "Justice League: Throne of Atlantis",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_throne_of_atlantis.jpg')",
      story: "Aquaman must reclaim his throne and unite the Justice League against an Atlantean threat.",
    },
    {
      title: "Batman vs. Robin",
      rating: 7.1,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_vs_robin.jpg')",
      story: "Batman and his son, Damian, must confront a new enemy while dealing with their complicated relationship.",
    },
    {
      title: "Batman: Bad Blood",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_bad_blood.jpg')",
      story: "When Batman goes missing, his allies must find him while facing new threats.",
    },
    {
      title: "Justice League vs. Teen Titans",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_vs_teen_titans.jpg')",
      story: "The Teen Titans must team up with the Justice League to confront a demonic threat.",
    },
    {
      title: "Batman: The Killing Joke",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_killing_joke.jpg')",
      story: "The Joker's origin story is revealed as he targets Batgirl.",
    },
    {
      title: "Justice League Dark",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_dark.jpg')",
      story: "A new threat leads to the formation of the Justice League Dark.",
    },
    {
      title: "Teen Titans: The Judas Contract",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/teen_titans_the_judas_contract.jpg')",
      story: "The Teen Titans face betrayal from within as a new villain emerges.",
    },
    {
      title: "Batman and Harley Quinn",
      rating: 6.5,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_and_harley_quinn.jpg')",
      story: "Batman teams up with Harley Quinn to stop a dangerous new threat.",
    },
    {
      title: "Batman: Gotham by Gaslight",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/batman_gotham_by_gaslight.jpg')",
      story: "In a Victorian-era Gotham, Batman faces Jack the Ripper.",
    },
    {
      title: "Justice League: The Fatal Five",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_the_fatal_five.jpg')",
      story: "The Justice League must stop a new threat from the future.",
    },
    {
      title: "Superman: Red Son",
      rating: 7.0,
      backgroundImage: "url('/src/Assets/ToonImages/DC/superman_red_son.jpg')",
      story: "What if Superman landed in the Soviet Union instead of Kansas?",
    },
  ];

  return (
    <div className="main-content pt-20">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('/src/Assets/ToonImages/DC/dc_background.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of DC
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br /> hearts across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
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
                    style={{ width: `${card.rating ? card.rating * 10 : 0}%` }}
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

export default DCMovies;
