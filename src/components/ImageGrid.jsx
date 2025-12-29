import ImageCard from './ImageCard.jsx';

import { Spinner } from 'react-bootstrap';

export default function ImageGrid({ images, onLoadMore, onSelectImage, loading }) {
  return (
    <div>
      <div className="row g-3">
        {Array.isArray(images) && images.map((img) => (
          <div key={img?.id} className="col-md-3 col-sm-6 col-12">
            <ImageCard image={img} onClick={onSelectImage} />
          </div>
        ))}
      </div>
      {loading && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!loading && images.length === 0 && (
        <div className="text-center my-4">
          <p>No images found. Try a different search term!</p>
        </div>
      )}
      {!loading && images.length > 0 && (
        <div className="d-flex justify-content-center load-more">
          <button type="button" className="btn btn-outline-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}