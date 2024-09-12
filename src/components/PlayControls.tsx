import React, { useState } from "react";
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon, ArrowsRightLeftIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";

type PlayControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  disablePrevious: boolean;
  disableNext: boolean;
  onShuffleToggle: () => void;
  isShuffling: boolean;
  volume: number;
  onVolumeChange: (value: number) => void;
};

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  disablePrevious,
  disableNext,
  onShuffleToggle,
  isShuffling,
  volume,
  onVolumeChange,
}) => {
  const [speed, setSpeed] = useState(1); // State for speed (1x, 2x, 3x)

  const handleSpeedClick = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1)); // Cycle through 1x, 2x, 3x
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-4">
        {/* Speed Button */}
        <button onClick={handleSpeedClick} className="text-gray-500 hover:text-black">
          {speed}x
        </button>

        {/* Back Button */}
        <button onClick={onPrevious} disabled={disablePrevious}>
          <BackwardIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        </button>

        {/* Play/Pause Button */}
        <button onClick={onPlayPause}>
          {isPlaying ? (
            <PauseIcon className="h-6 w-6 text-gray-500 hover:text-black" />
          ) : (
            <PlayIcon className="h-6 w-6 text-gray-500 hover:text-black" />
          )}
        </button>

        {/* Forward Button */}
        <button onClick={onNext} disabled={disableNext}>
          <ForwardIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        </button>

        {/* Shuffle Button */}
        <button onClick={onShuffleToggle}>
          <ArrowsRightLeftIcon
            className={`h-6 w-6 ${isShuffling ? "text-black" : "text-gray-500"} hover:text-black`}
          />
        </button>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center space-x-2">
        <SpeakerWaveIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default PlayControls;
