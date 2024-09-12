import React, { useEffect, useState } from "react";
import Playlist from "./components/Playlist";
import PlayControls from "./components/PlayControls";
import VolumeControls from "./components/VolumeControl";

type Song = {
  title: string;
  author: string;
  duration: string;
};

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist"
        );
        const data: Song[] = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-black rounded-lg shadow-thin">
      <div className="flex flex-col md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <div>
            <h3>Currently Playing</h3>
            {songs.length > 0 && (
              <>
                <p>{songs[currentSongIndex].title}</p>
                <p>{songs[currentSongIndex].author}</p>
              </>
            )}
          </div>
          <PlayControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNextSong}
            onPrevious={handlePreviousSong}
            disablePrevious={currentSongIndex === 0}
            disableNext={currentSongIndex === songs.length - 1}
          />
          <VolumeControls volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
        <div className="flex-1">
          <Playlist
            songs={songs}
            currentSongIndex={currentSongIndex}
            onSongSelect={setCurrentSongIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
