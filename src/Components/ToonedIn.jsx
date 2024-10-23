import Navbar from "./Navbar";
import { MdSkipNext } from "react-icons/md";
import { Link } from 'react-router-dom'; 
const ToonedIn = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-black flex p-[20px] h-full mt-[200px] text-white justify-between flex-col">
          <div className="flex gap-8 flex-col">
          <h2 className="text-2xl">Lets Get You</h2>
          <h1 className="text-6xl">&ldquo;In-Toon&ldquo;</h1>
          <button className="w-full md:w-[190px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                  <MdSkipNext className="text-2xl" /> Watch All Trailers
                </button>
          </div>
        </div>


        <section className="w-full h-full ">

        </section>
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
  )
}

export default ToonedIn