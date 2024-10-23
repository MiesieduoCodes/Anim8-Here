
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const DreamWorks = () => {
  const cards = [
    {
      title: "Antz (1998)",
      rating: 6.5,
      backgroundImage: "url('https://wallpapercave.com/wp/wp9988538.jpg')",
      story: "A neurotic worker ant in a totalitarian society tries to win the affection of the princess he loves.",
    },
    {
      title: "The Prince of Egypt (1998)",
      rating: 7.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/660/641/103/movie-the-prince-of-egypt-wallpaper-preview.jpg')",
      story: "An Egyptian prince learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.",
    },
    {
      title: "The Road to El Dorado (2000)",
      rating: 7.0,
      backgroundImage: "url('https://images8.alphacoders.com/824/thumb-1920-824926.jpg')",
      story: "Two swindlers get their hands on a map to the fabled city of gold, El Dorado.",
    },
    {
      title: "Chicken Run (2000)",
      rating: 6.9,
      backgroundImage: "url('https://wallpapercave.com/wp/wp7820489.jpg')",
      story: "When a cockerel flies into a chicken farm, the chickens see him as an opportunity to escape their evil owners.",
    },
    {
      title: "Shrek (2001)",
      rating: 7.9,
      backgroundImage: "url('https://images.alphacoders.com/500/thumbbig-500304.webp')",
      story: "A grumpy ogre must go on a quest to rescue a princess for a lord in order to get his swamp back.",
    },
    {
      title: "Spirit: Stallion of the Cimarron (2002)",
      rating: 7.0,
      backgroundImage: "url('https://images3.alphacoders.com/121/thumb-440-1217984.webp')",
      story: "A wild stallion is captured by humans but refuses to lose hope in his struggle for freedom.",
    },
    {
      title: "Sinbad: Legend of the Seven Seas (2003)",
      rating: 6.7,
      backgroundImage: "url('https://wallpapercave.com/dwp1x/wp12683867.jpg')",
      story: "The sailor Sinbad must retrieve the Book of Peace from the goddess Eris to save his friend Prince Proteus.",
    },
    {
      title: "Shrek 2 (2004)",
      rating: 7.9,
      backgroundImage: "url('https://wallpapercave.com/dwp1x/712YYNC.jpg')",
      story: "Shrek and Fiona visit her parents in the Kingdom of Far Far Away, but things don't go as planned.",
    },
    {
      title: "Shark Tale (2004)",
      rating: 6.0,
      backgroundImage: "url('https://wallpapercave.com/wp/wp7287198.jpg')",
      story: "A small fish takes advantage of the accidental death of a shark to gain fame and fortune.",
    },
    {
      title: "Madagascar (2005)",
      rating: 7.0,
      backgroundImage: "url('https://wallpapercave.com/dwp1x/wp14486446.jpg')",
      story: "A group of zoo animals end up in the wilds of Madagascar and must adapt to their new surroundings.",
    },
    {
      title: "Wallace & Gromit: The Curse of the Were-Rabbit (2005)",
      rating: 7.6,
      backgroundImage: "url('https://resizing.flixster.com/4dcpjaQ10yLmbP1qyyHtU6b1JtY=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36347_i_h8_ad.jpg')",
      story: "Wallace and Gromit investigate garden sabotage in their village, which leads to a giant vegetable competition.",
    },
    {
      title: "Over the Hedge (2006)",
      rating: 6.7,
      backgroundImage: "url('https://wallpapercave.com/wp/wp7453203.jpg')",
      story: "A raccoon convinces a group of forest animals to invade a suburban sprawl to repay a debt of food.",
    },
    {
      title: "Flushed Away (2006)",
      rating: 7.0,
      backgroundImage: "url('https://wallpapers.com/images/featured/flushed-away-4b5su2wq1fuwh5z5.webp')",
      story: "A pampered mouse ends up in the sewers of London, where he has to adapt to a new way of life.",
    },
    {
      title: "Shrek the Third (2007)",
      rating: 6.9,
      backgroundImage: "url('https://wallpapercave.com/wp/wp11162755.jpg')",
      story: "Shrek recruits his friends to install a rebellious prince as the new king of Far Far Away.",
    },
    {
      title: "Bee Movie (2007)",
      rating: 6.1,
      backgroundImage: "url('https://wallpapercave.com/wp/wp3729394.jpg')",
      story: "A bee sues humanity for stealing honey after discovering the truth during a trip outside the hive.",
    },
    {
      title: "Kung Fu Panda (2008)",
      rating: 8.0,
      backgroundImage: "url('https://wallpapercave.com/wp/wp14241047.jpg')",
      story: "An obese panda becomes the Dragon Warrior and must save China from the savage Tai Lung.",
    },
    {
      title: "Madagascar: Escape 2 Africa (2008)",
      rating: 6.9,
      backgroundImage: "url('https://images5.alphacoders.com/732/thumb-1920-732524.jpg')",
      story: "The animals crash-land in Africa, where Alex discovers his royal heritage as the prince of a lion pride.",
    },
    {
      title: "Monsters vs. Aliens (2009)",
      rating: 6.4,
      backgroundImage: "url('https://picfiles.alphacoders.com/111/thumb-1920-111141.jpg')",
      story: "A woman transformed into a giant must join a team of monsters to save Earth from an alien invasion.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main background section */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee4200b4-1ca8-4ef7-9ccb-1b66359eb247/dfzdlcd-c0e41887-185c-4b65-a24f-e88ba60ee8f4.jpg/v1/fill/w_1192,h_670,q_70,strp/dreamworks_wallpaper_by_maxtop9002_dfzdlcd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWU0MjAwYjQtMWNhOC00ZWY3LTljY2ItMWI2NjM1OWViMjQ3XC9kZnpkbGNkLWMwZTQxODg3LTE4NWMtNGI2NS1hMjRmLWU4OGJhNjBlZThmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MmZD7VVsp2Fx8uii0TWUCo0J7Q_JEMyMLnEGYo2twQM')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Dreamworks
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated <br /> classics that have captured hearts across the globe.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: card.backgroundImage,
              }}
            >
              {/* Overlay for text and loading bar */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-2 md:p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                  {card.title}
                </h2>
                <p className="text-white text-sm md:text-base lg:text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="bg-red-400 h-full rounded-full"
                    style={{ width: `${card.rating * 10}%` }}
                  ></div>
                </div>
                <p className="text-white text-sm md:text-base">{card.rating}</p>
                <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
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

export default DreamWorks;
