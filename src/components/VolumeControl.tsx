import React from "react";

type VolumeControlProps = {
  volume: number;
  onVolumeChange: (value: number) => void;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(Number(event.target.value));
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default VolumeControl;
