import ImageCard from './ImageCard.jsx';
import { Spinner, Button } from 'react-bootstrap';

export default function ImageGrid({ images, onLoadMore, onSelectImage, loading }) {
  return (
    <div>
      <div className="row g-4">
        {Array.isArray(images) && images.map((img) => (
          <div key={img?.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <ImageCard image={img} onClick={onSelectImage} />
          </div>
        ))}
      </div>
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!loading && images.length === 0 && (
        <div className="text-center my-5 text-muted">
          <p className="fs-5">No images found. Try a different search term!</p>
        </div>
      )}
      {!loading && images.length > 0 && (
        <div className="d-flex justify-content-center load-more mt-5">
          <Button 
            variant="primary" 
            className="load-more-btn" 
            onClick={onLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
