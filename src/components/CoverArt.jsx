const CoverArt = ({ imageUrl, altText }) => {
  return (
    <div className="cover-art">
      <img src={imageUrl} alt={altText} className="w-full h-auto rounded-md" />
    </div>
  );
};

export default CoverArt;
