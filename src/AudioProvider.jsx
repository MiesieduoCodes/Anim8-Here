import { createContext, useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();  // Reload the audio source when track changes
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);  // Start playing the new track automatically
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, audioTracks, currentTrack, isPlaying, togglePlay, changeTrack }}
    >
      <audio ref={audioRef} src={audioTracks[currentTrack].src} />
      {children} {/* Pass down the children components */}
    </AudioContext.Provider>
  );
};

// Add PropTypes validation
AudioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAudio = () => useContext(AudioContext);
