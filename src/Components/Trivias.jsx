// src/Trivias.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
const Trivias = () => {
  const [trivias, setTrivias] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = '15c69972'; // Replace with your actual OMDb API key

  useEffect(() => {
    const fetchTrivias = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=movie&t=trivia&apikey=${API_KEY}`);
        const triviaData = response.data.Search; // Adjust based on API response
        setTrivias(triviaData);
      } catch (error) {
        console.error('Error fetching trivia:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrivias();
  }, [API_KEY]);

  if (loading) {
    return (
      <div  className="main-content pt-20">
        <div className="flex flex-col items-center">
          <div className="loader"></div>
          <p className="mt-4 text-xl">Loading Trivias...</p>
        </div>
      </div>
    );
  }

  return (
    <div  className="main-content pt-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-6">Movie Trivias</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {trivias.map((trivia, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{trivia.Title}</h2>
              <p className="text-gray-500">Year: {trivia.Year}</p>
              <p className="mt-2 text-gray-700">More trivia coming soon!</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
            </div>
          </div>
        ))}
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

export default Trivias;