import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Example content to search through
  const content = [
    "Detective Conan",
    "One Piece",
    "Sword Art Online",
    "Bleach",
    "Ghost in the Shell",
    "Fullmetal Alchemist",
    "Psycho-Pass",
    "The Garden Of Sinners",
    
    // Add more items as needed
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    // Update search results based on the search term
    if (term) {
      const results = content.filter(item => 
        item.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-opacity-10 border border-white border-opacity-30 rounded-lg shadow-lg backdrop-filter backdrop-blur-md"
          : "bg-white"
      }`}
      style={
        scrolled
          ? {
              background: 'rgba(0, 255, 255, 0.09)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white', 
              WebkitBackdropFilter: 'blur(9.1px)',
              border: '1px solid rgba(255, 255, 255, 0.11)',
            }
          : {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
      }
    >
      <div className="flex items-center font-medium justify-between px-4 md:px-8">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <h1 className="md:cursor-pointer text-3xl h-9">
            Anim<span className="text-red-500">8</span>
          </h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <RiCloseFill /> : <RiMenu4Fill />}
          </div>
        </div>

        {/* Search Input */}
        <div className="relative hidden md:flex items-center flex-grow">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-lg p-2 w-full max-w-xs"
          />
          {searchTerm && searchResults.length > 0 && (
            <div className="absolute z-20 bg-white text-black shadow-lg rounded-lg w-full mt-2">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={`/${result.toLowerCase().replace(/\s+/g, '-')}`} // Adjust the path as necessary
                  className="block px-4 py-2 hover:bg-gray-500"
                >
                  {result}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/talk" className="py-7 px-3 inline-block">
              Talk To Anim8
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Links */}
        <ul
          className={`md:hidden bg-white absolute top-0 left-0 z-10 w-full h-screen py-24 pl-4 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/talk" className="py-7 px-3 inline-block">
              Talk To Anim8
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
