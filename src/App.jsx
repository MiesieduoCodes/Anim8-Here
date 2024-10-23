import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/Components/Navbar";
import { Link, BrowserRouter as Router } from "react-router-dom"; 
import { useState, useRef, useEffect, useCallback } from "react"; 
import { MdSkipNext, MdQueueMusic } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai"; // For favorites
import { AudioProvider } from "./AudioProvider";
import FloatingMusicButton from "./FloatingMusicButton";

const App = () => {
  const audioTracks = [
    {
      title: "Rosario Vampire Theme Song",
      src: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_All_I_Ever_Wanted_-_90_BPM_E_Min.mp3?v=1649185626",
      background: "https://picfiles.alphacoders.com/422/thumb-1920-422532.jpg",
    },
    {
      title: "Bleach Season One Theme Song",
      src: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_I_Don_t_Need_You_-_100_BPM_G_Min.mp3?v=1649185626",
      background: "https://images5.alphacoders.com/126/thumb-1920-1267703.jpg",
    },
  ];

  const styles = `
  .wavy-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10"><path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="blue" stroke-width="2"/></svg>');
    background-size: 200% 100%;
    animation: wave 2s linear infinite;
  }

  @keyframes wave {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const audioRef = useRef(null);
  const scrubberRef = useRef(null);


  const playAudio = async () => {
    try {
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const changeTrack = async (index) => {
    setCurrentTrack(index);
    audioRef.current.src = audioTracks[index].src;
    try {
      await audioRef.current.load();
      await playAudio();
    } catch (error) {
      console.error("Error changing track:", error);
    }
  };

  const randomizeTrack = () => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    changeTrack(randomIndex);
  };

  const handleTrackEnd = useCallback(() => {
    randomizeTrack();
  }, []);

  const toggleFavorite = () => setIsFavorite((prev) => !prev);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleTrackEnd);
      return () => {
        audioElement.removeEventListener("ended", handleTrackEnd);
      };
    }
  }, [handleTrackEnd]);

  const handleScrub = (event) => {
    const scrubber = scrubberRef.current;
    const scrubberWidth = scrubber.offsetWidth;
    const offsetX = event.clientX - scrubber.getBoundingClientRect().left;
    const newTime = (offsetX / scrubberWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const updateScrubber = () => {
      const scrubber = scrubberRef.current;
      const duration = audioRef.current.duration || 0;
      const currentTime = audioRef.current.currentTime || 0;
      const percentage = (currentTime / duration) * 100;
      scrubber.style.setProperty("--progress", `${percentage}%`);
    };

    const intervalId = setInterval(updateScrubber, 1000);
    return () => clearInterval(intervalId);
  }, [currentTrack]);

  useEffect(() => {
    changeTrack(currentTrack);
  }, []);

  return (
    <AudioProvider>
        <div className="main-content pt-20">
          <Navbar />

          <div className="relative z-0 h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={audioTracks[currentTrack].background}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-10 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${audioTracks[currentTrack].background})` }}
              />
            </AnimatePresence>

            <div className="relative flex inset-0 z-10 items-center justify-center h-full bg-black bg-opacity-50 px-4">
              <main className="flex flex-col md:flex-row justify-between gap-16 items-center">
                <section className="text-center md:text-left">
                  <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl text-white font-bold"
                  >
                    Welcome to Anim8
                  </motion.h1>
                  <p className="text-white text-sm md:text-lg mt-4">
                    Your One-Stop site for Top-Rated Anime Content
                  </p>

                  <div className="mt-8">
                    <h2 className="text-white text-lg md:text-xl mb-4">
                      Currently Playing: <span className="text-red-500">{audioTracks[currentTrack].title}</span>
                    </h2>

                    {/* Scrubber bar */}
                    <div
                      ref={scrubberRef}
                      onClick={handleScrub}
                      className="relative w-full h-2 mb-4 cursor-pointer overflow-hidden"
                      style={{
                        background: `linear-gradient(to right, blue var(--progress), gray var(--progress))`,
                      }}
                    >
                      <div className="wavy-background"></div>
                    </div>

                    {/* Music control buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <button
                        onClick={() => changeTrack(currentTrack === audioTracks.length - 1 ? 0 : currentTrack + 1)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                      >
                        <MdSkipNext size={24} />
                      </button>
                      <button
                        onClick={toggleFavorite}
                        className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-500'} hover:bg-red-700 transition-colors duration-300`}
                      >
                        <AiOutlineHeart size={24} />
                      </button>
                      <button
                        onClick={randomizeTrack}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                      >
                        <MdQueueMusic size={24} />
                      </button>
                    </div>

                    {/* Audio element */}
                    <audio ref={audioRef} />
                  </div>
                </section>

                <section className="w-full max-w-sm md:max-w-md">
                  <form
                    className="bg-black bg-opacity-70 p-6 rounded-lg flex flex-col gap-4"
                  >
                    <h1 className="text-2xl md:text-3xl text-white font-bold text-center">Log in to Anim8</h1>
                    <input
                      className="w-full p-2 rounded border text-black"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      className="w-full p-2 rounded border text-black"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className="mt-3 bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
                </section>
              </main>
            </div>
          </div>

          {/* Floating music button */}
          <FloatingMusicButton
            currentTrack={currentTrack}
            changeTrack={changeTrack}
            audioTracks={audioTracks}
          />
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
    </AudioProvider>
  );
};

export default App;
