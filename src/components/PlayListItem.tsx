import React from "react";

type PlayListItemProps = {
  title: string;
  artist: string;
  duration: string;
};

const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs text-gray-500">{artist}</p>
      </div>
      <span className="text-xs text-gray-500">{duration}</span>
    </div>
  );
};

export default PlayListItem;
