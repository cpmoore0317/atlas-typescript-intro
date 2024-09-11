import React from "react";

const VolumeControl = () => {
  return (
    <div className="w-full flex items-center">
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="0"
        max="100"
        step="1"
      />
    </div>
  );
};

export default VolumeControl;
