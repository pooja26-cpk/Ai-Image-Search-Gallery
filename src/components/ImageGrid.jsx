import ImageCard from './ImageCard.jsx';

export default function ImageGrid({ images, onLoadMore, onSelectImage }) {
  return (
    <div>
      <div className="row g-3">
        {Array.isArray(images) && images.map((img) => (
          <div key={img?.id} className="col-md-3 col-sm-6 col-12">
            <ImageCard image={img} onClick={onSelectImage} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center load-more">
        <button type="button" className="btn btn-outline-primary" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

