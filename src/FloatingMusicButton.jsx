// src/FloatingMusicButton.jsx
import { useState } from 'react';
import { MdQueueMusic } from "react-icons/md"; // Removed MdSkipNext since it's not used

const FloatingMusicButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMusicDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusicDialog}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MdQueueMusic size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded p-4">
          <h3 className="text-lg font-bold">Music Queue</h3>
          <ul>
            <li>Current Track: Track 1</li>
            <li>Next: Track 2</li>
            <li>Track 3</li>
          </ul>
          <button onClick={toggleMusicDialog} className="mt-2 bg-red-500 text-white p-2 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingMusicButton;
