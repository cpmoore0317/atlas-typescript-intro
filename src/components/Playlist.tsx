import React from "react";
import PlayListItem from "./PlayListItem";

type Song = {
  title: string;
  author: string;
  duration: string;
};

type PlaylistProps = {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
};

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongIndex, onSongSelect }) => {
  return (
    <div className="bg-white p-4 rounded-md h-full overflow-auto">
      <h2 className="text-black text-lg font-bold mb-4">Playlist</h2>
      <ul className="space-y-2">
        {songs.map((song, index) => (
          <li key={index}>
            <PlayListItem
              title={song.title}
              artist={song.author}
              duration={song.duration}
              isSelected={index === currentSongIndex}
              onClick={() => onSongSelect(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
