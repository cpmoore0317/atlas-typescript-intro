import React, { useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowUturnLeftIcon,
  ArrowRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

type PlayControlsProps = {
  isFirstSong: boolean;
  isLastSong: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onShuffleToggle: () => void;
  isPlaying: boolean;
  isShuffle: boolean;
};

const PlayControls: React.FC<PlayControlsProps> = ({
  isFirstSong,
  isLastSong,
  onPlayPause,
  onPrevious,
  onNext,
  onShuffleToggle,
  isPlaying,
  isShuffle,
}) => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <button
        onClick={onPrevious}
        disabled={isFirstSong}
        className="hover:text-teal transition-colors"
      >
        <ArrowUturnLeftIcon className="h-6 w-6 text-light-gray" />
      </button>
      <button onClick={onPlayPause} className="hover:text-teal transition-colors">
        {isPlaying ? (
          <PauseIcon className="h-6 w-6 text-light-gray" />
        ) : (
          <PlayIcon className="h-6 w-6 text-light-gray" />
        )}
      </button>
      <button
        onClick={onNext}
        disabled={isLastSong}
        className="hover:text-teal transition-colors"
      >
        <ArrowRightIcon className="h-6 w-6 text-light-gray" />
      </button>
      <button onClick={onShuffleToggle} className="hover:text-teal transition-colors">
        <ArrowPathIcon
          className={`h-6 w-6 ${isShuffle ? "text-teal" : "text-light-gray"}`}
        />
      </button>
    </div>
  );
};

export default PlayControls;
