import Navbar from './Navbar'; 
import { Link } from 'react-router-dom';

const ContactLoginPage = () => {
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div className="main-content pt-20"> {/* Add top padding for space from navbar */}
        <div className="relative flex flex-col md:flex-row justify-between gap-12 p-6 md:p-8 min-h-screen bg-gray-100">
          
          {/* Contact Section */}
          <section className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>
            <form className="flex flex-col gap-4">
              <input 
                className="p-3 border rounded w-full" 
                type="text" 
                placeholder="Your Name" 
              />
              <input 
                className="p-3 border rounded w-full" 
                type="email" 
                placeholder="Your Email" 
              />
              <textarea 
                className="p-3 border rounded w-full" 
                placeholder="Your Message" 
                rows="4"
              ></textarea>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </section>

          {/* Login Section */}
          <section className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Login</h2>
            <form className="flex flex-col gap-4">
              <input 
                className="p-3 border rounded w-full" 
                type="email" 
                placeholder="Email Address" 
              />
              <input 
                className="p-3 border rounded w-full" 
                type="password" 
                placeholder="Password" 
              />
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                Login
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            <div>
              <h2 className="text-xl font-bold mb-2">Get the App</h2>
              <p className="text-gray-400">Download our app for the best experience.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">More</h2>
              <ul>
                <li><Link to="/about" className="text-gray-400 hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:underline">Contact</Link></li>
              </ul>
            </div>

          </div>

          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactLoginPage;
