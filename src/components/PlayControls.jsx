import React from "react";
import { PlayIcon, ArrowUturnLeftIcon, ArrowRightIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const PlayControls = () => {
  return (
    <div className="flex justify-between items-center w-full px-4">
      <button className="hover:text-teal transition-colors">
        <ArrowUturnLeftIcon className="h-6 w-6 text-light-gray" />
      </button>
      <button className="hover:text-teal transition-colors">
        <PlayIcon className="h-6 w-6 text-light-gray" />
      </button>
      <button className="hover:text-teal transition-colors">
        <ArrowRightIcon className="h-6 w-6 text-light-gray" />
      </button>
      <button className="hover:text-teal transition-colors">
        <ArrowPathIcon className="h-6 w-6 text-light-gray" />
      </button>
    </div>
  );
};

export default PlayControls;
