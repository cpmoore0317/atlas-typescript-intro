import React from "react";

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-left"> {/* updated from text-center to text-left */}
      <h1 className="text-black text-2xl font-bold">{title}</h1>
      <p className="text-medium-gray text-sm">{author}</p>
    </div>
  );
};

export default SongTitle;
