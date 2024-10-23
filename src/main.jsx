import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import App from "./App"; // Import your main site component
import Pixar from './Components/Pixar';
import About from "./Components/About";
import DreamWorks from "./Components/DreamWorks";
import Disney from "./Components/Disney";
import Netflix from "./Components/Netflix";
import Marvel from "./Components/Marvel";
import Get from "./Components/GetTheApp";
import DC from "./Components/DC";
import Talk from "./Components/TalkToUs";
import Toons from "./Components/ToonedIn";
import Trivias from "./Components/Trivias";
import Trailers from "./Components/Trailers"
import AnimeF from "./Components/AnimeFilms";
import AnimeS from "./Components/AnimeSeries";
import WhatsGood from "./Components/Whatsup";
import DetectiveConan from "./Components/DetectiveConan";
import OnePiece from "./Components/OnePiece";
import Sword from "./Components/Sword";
import Lupin from "./Components/Lupin";
import Bleach from "./Components/Bleach";
import Ghost from "./Components/GhostInAShell";
import Psycho from "./Components/Psycho";
import FullMetal from "./Components/FullMetalAlchemist";
import Garden from "./Components/The Garden of Sinners";
import Pokemon from "./Components/Pokemon"; 
// import Login from "../src/login"; // Import additional components for routes

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main component
  },
  {
    path: "/about",
    element: <About />, // Main component
  },
  {
    path: "/trivias",
    element: <Trivias />, // Example additional route
  },
  {
    path: "/anime-films",
    element: <AnimeF />, // Example additional route
  },
  {
    path: "/trailers",
    element: <Trailers />, // Example additional route
  },
  {
    path: "/anime-series",
    element: <AnimeS />, // Example additional route
  },
  {
    path: "/toonedin",
    element: <Toons />, // Example additional route
  },
  {
    path: "/whatsgood",
    element: <WhatsGood />, // Example additional route
  },
  {
    path: "/pixar",
    element: <Pixar />, // Example additional route
  },
  {
    path: "/dreamworks",
    element: <DreamWorks />, // Example additional route
  },
  {
    path: "/disney",
    element: <Disney />, // Example additional route
  },
  {
    path: "/netflix",
    element: <Netflix />, // Example additional route
  },
  {
    path: "/marvel",
    element: <Marvel />, // Example additional route
  },
  {
    path: "/dc",
    element: <DC />, // Example additional route
  },
  {
    path: "/get",
    element: <Get />, // Example additional route
  },
  {
    path: "/talk",
    element: <Talk />, // Example additional route
  },
  {
    path: "/detective",
    element: <DetectiveConan />, // Example additional route
  },
  {
    path: "/one-piece",
    element: <OnePiece />, // Example additional route
  },
  {
    path: "/sword",
    element: <Sword />, // Example additional route
  },
  {
    path: "/lupin",
    element: <Lupin />, // Example additional route
  },
  {
    path: "/bleach",
    element: <Bleach />, // Example additional route
  },
  {
    path: "/ghost",
    element: <Ghost />, // Example additional route
  },
  {
    path: "/psycho",
    element: <Psycho />, // Example additional route
  },
  {
    path: "/fullmetal",
    element: <FullMetal />, // Example additional route
  },
  {
    path: "/fullmetal",
    element: <FullMetal />, // Example additional route
  },
  {
    path: "/garden",
    element: <Garden />, // Example additional route
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
