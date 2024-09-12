import React, { useState, useEffect } from "react";
import PlayControls from "./components/PlayControls";
import Playlist from "./components/Playlist";

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<any[]>([]); // Fetch playlist data from API
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song
  const [isPlaying, setIsPlaying] = useState(false); // Play/pause state
  const [isShuffling, setIsShuffling] = useState(false); // Shuffle state
  const [volume, setVolume] = useState(50); // Volume state (0-100)

  // Fetch playlist from API
  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist"
      );
      const data = await response.json();
      setPlaylist(data);
    };
    fetchPlaylist();
  }, []);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongIndex(randomIndex);
    } else if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const toggleShuffle = () => {
    setIsShuffling((prev) => !prev);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-black rounded-lg shadow-thin">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Currently Playing Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex flex-col items-center">
            {playlist.length > 0 && (
              <div className="text-center mb-4">
                <img
                  src={playlist[currentSongIndex]?.coverArt || "/placeholder.png"}
                  alt="Cover Art"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold">{playlist[currentSongIndex].title}</h3>
                <p className="text-gray-500">{playlist[currentSongIndex].artist}</p>
              </div>
            )}
            
            <div className="mb-4">
              <PlayControls
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onNext={handleNext}
                onPrevious={handlePrevious}
                disablePrevious={currentSongIndex === 0}
                disableNext={currentSongIndex === playlist.length - 1}
                onShuffleToggle={toggleShuffle}
                isShuffling={isShuffling}
                volume={volume}
                onVolumeChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>

        {/* Playlist Section */}
        <div className="flex-1">
          <Playlist songs={playlist} currentSongIndex={currentSongIndex} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
