import React from "react";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-black rounded-lg shadow-thin">
      <div className="flex flex-col md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <CurrentlyPlaying />
        </div>
        <div className="flex-1">
          <Playlist />
        </div>
      </div>
    </div>
  );
}
