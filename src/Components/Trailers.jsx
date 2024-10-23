import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { FaHeart, FaShare, FaPlus } from 'react-icons/fa';

// Initial trailers data
const initialTrailersData = [
  {
    id: 1,
    title: 'Scissor Seven - Season 3',
    videoUrl: 'https://www.dailymotion.com/video/x83zei2',
    synopsis: 'Action-packed adventure...',
  },
  {
    id: 2,
    title: 'Movie 2',
    videoUrl: 'https://www.dailymotion.com/video/x83zei2',
    synopsis: 'Heartwarming drama...',
  },
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'https://www.dailymotion.com/video/x83zei2',
    synopsis: 'Epic fantasy tale...',
  },
  {
    id: 4,
    title: 'Movie 4',
    videoUrl: 'https://www.dailymotion.com/video/x83zei2',
    synopsis: 'Thrilling mystery...',
  },
  {
    id: 5,
    title: 'Movie 5',
    videoUrl: 'https://www.dailymotion.com/video/x83zei2',
    synopsis: 'Inspiring story...',
  },
  // Add more trailers as needed
];

const ReelsPage = () => {
  const videoRefs = useRef([]);
  const [trailersData, setTrailersData] = useState(initialTrailersData);
  const [likes, setLikes] = useState(new Array(initialTrailersData.length).fill(false));
  const [favorites, setFavorites] = useState(new Array(initialTrailersData.length).fill(false));

  // Handle video playback when the trailer is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videoRefs.current.forEach(video => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  // Infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreTrailers();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trailersData]);

  const loadMoreTrailers = () => {
    const newTrailers = [
      {
        id: trailersData.length + 1,
        title: `Movie ${trailersData.length + 1}`,
        videoUrl: `trailer${trailersData.length + 1}.mp4`,
        synopsis: 'New exciting story...',
      },
      {
        id: trailersData.length + 2,
        title: `Movie ${trailersData.length + 2}`,
        videoUrl: `trailer${trailersData.length + 2}.mp4`,
        synopsis: 'Another thrilling adventure...',
      },
    ];
    setTrailersData(prevTrailers => [...prevTrailers, ...newTrailers]);
    setLikes(prevLikes => [...prevLikes, ...new Array(newTrailers.length).fill(false)]);
    setFavorites(prevFavorites => [...prevFavorites, ...new Array(newTrailers.length).fill(false)]);
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <div style={{
      background: 'radial-gradient(circle, rgba(190, 30, 45, 0.8), rgba(1, 1, 20, 0.95))',
      padding: '20px',
    }}>
      <Navbar />
      <div className="flex flex-col items-center space-y-8 p-4">
        {trailersData.map((trailer, index) => (
          <motion.div
            key={trailer.id}
            className="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-lg overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'radial-gradient(circle, rgba(5, 10, 80, 0.9), rgba(190, 30, 45, 0.8))',
              padding: '20px',
            }}
          >
            <div className="relative h-[70vh] md:h-[60vh] lg:h-[80vh]">
              {trailer.videoUrl.includes('dailymotion') ? (
                <iframe
                  ref={el => (videoRefs.current[index] = el)}
                  src={`https://www.dailymotion.com/embed/video/${trailer.videoUrl.split('/').pop()}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              ) : (
                <video
                  ref={el => (videoRefs.current[index] = el)}
                  src={trailer.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  style={{ width: '100%', height: '100%' }}
                ></video>
              )}
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-2xl font-bold">{trailer.title}</h2>
                <p className="text-gray-400">{trailer.synopsis}</p>
              </div>
            </div>

            <div className="absolute right-4 bottom-10 flex flex-col items-center space-y-4">
              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleLike(index)}
              >
                <FaHeart
                  className={`text-3xl ${likes[index] ? 'text-red-500' : 'text-white'}`}
                />
                <span className="text-sm">{likes[index] ? 'Liked' : 'Like'}</span>
              </button>

              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleFavorite(index)}
              >
                <FaPlus
                  className={`text-3xl ${favorites[index] ? 'text-green-500' : 'text-white'}`}
                />
                <span className="text-sm">{favorites[index] ? 'Favorited' : 'Favorite'}</span>
              </button>

              <button className="flex flex-col items-center text-white">
                <FaShare className="text-3xl" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;