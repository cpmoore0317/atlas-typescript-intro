import React from "react";
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";

type PlayControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  disablePrevious: boolean;
  disableNext: boolean;
};

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  disablePrevious,
  disableNext,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button onClick={onPrevious} disabled={disablePrevious}>
        <BackwardIcon className="h-6 w-6 text-gray-500 hover:text-black" />
      </button>
      <button onClick={onPlayPause}>
        {isPlaying ? (
          <PauseIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        ) : (
          <PlayIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        )}
      </button>
      <button onClick={onNext} disabled={disableNext}>
        <ForwardIcon className="h-6 w-6 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
};

export default PlayControls;
