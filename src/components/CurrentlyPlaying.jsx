import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
import placeholderSvg from "../assets/placeholder.svg"; // Import the SVG directly

// Example song data
const currentSong = {
  imageUrl: placeholderSvg, 
  altText: "Cover Art",
  title: "Painted in Blue",
  author: "Soul Canvas",
};

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-4 bg-white">
      <div>
        <CoverArt imageUrl={currentSong.imageUrl} altText={currentSong.altText} />
        <SongTitle title={currentSong.title} author={currentSong.author} />
      </div>
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;
