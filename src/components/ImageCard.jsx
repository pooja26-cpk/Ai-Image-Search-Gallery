export default function ImageCard({ image, onClick }) {
  const src = image?.urls?.small || image?.urls?.thumb || '';
  const name = image?.user?.name || 'Unknown Artist';
  
  const handleClick = () => {
    if (typeof onClick === 'function') onClick(image);
  };

  return (
    <div className="image-card-wrapper">
      <div className="image-card" onClick={handleClick} role="button">
        <div className="image-card-img-wrapper">
          <img src={src} alt={name} loading="lazy" />
        </div>
        <div className="image-overlay">
          <div className="image-info">
            <div className="text-truncate">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
