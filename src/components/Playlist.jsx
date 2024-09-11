import React from "react";

const songs = [
  { title: "Painted in Blue", author: "Soul Canvas", duration: "5:55" },
  { title: "Tidal Drift", author: "Echoes of the Sea", duration: "8:02" },
  { title: "Fading Shadows", author: "The Emberlight", duration: "3:01" },
  { title: "Cosmic Drift", author: "Solar Flare", duration: "5:01" },
  { title: "Urban Serenade", author: "Midnight Groove", duration: "4:54" },
  { title: "Whispers in the Wind", author: "Rust & Ruin", duration: "6:13" },
  { title: "Electric Fever", author: "Neon Jungle", duration: "8:41" },
  { title: "Edge of the Abyss", author: "Steel Horizon", duration: "2:27" },
  { title: "Golden Haze", author: "Velvet Waves", duration: "3:15" },
  { title: "Shatter the Silence", author: "Thunderclap Echo", duration: "8:22" },
];

const Playlist = () => {
  return (
    <div className="bg-white p-4 rounded-md h-full overflow-auto">
      <h2 className="text-black text-lg font-bold mb-4">Playlist</h2>
      <ul className="space-y-2">
        {songs.map((song, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            {/* Left-aligned title and artist */}
            <div>
              <div className="text-black font-semibold">{song.title}</div>
              <div className="text-gray-600 text-xs">{song.author}</div>
            </div>
            {/* Right-aligned duration */}
            <div className="text-gray-500 text-xs">{song.duration}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
