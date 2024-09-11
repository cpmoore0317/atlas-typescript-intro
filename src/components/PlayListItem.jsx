import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300 hover:bg-gray-100 transition-colors">
      <div className="text-left"> {/* added text-left */}
        <h3 className="text-black text-lg font-semibold">{title}</h3>
        <p className="text-medium-gray text-sm">{genre}</p>
      </div>
      <span className="text-medium-gray text-sm">{length}</span>
    </div>
  );
};

export default PlayListItem;
