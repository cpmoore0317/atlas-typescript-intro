import React, { useEffect, useState } from "react";
import Playlist from "./components/Playlist";

type Song = {
  title: string;
  author: string;
  duration: string;
};

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist");
        const data: Song[] = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
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
        </div>
        <div className="flex-1">
          <Playlist
            songs={songs}
            currentSongIndex={currentSongIndex}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
