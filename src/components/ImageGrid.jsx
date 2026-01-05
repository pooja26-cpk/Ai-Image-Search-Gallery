import { useEffect, useRef, useCallback } from 'react';
import ImageCard from './ImageCard.jsx';
import { Spinner } from 'react-bootstrap';

export default function ImageGrid({ images, onLoadMore, onSelectImage, loading }) {
  const observerTarget = useRef(null);
  const loadingRef = useRef(loading);

  // Keep loading ref in sync
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  const handleIntersect = useCallback((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !loadingRef.current && images.length > 0) {
      console.log('Infinite scroll triggered');
      onLoadMore();
    }
  }, [onLoadMore, images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, { 
      threshold: 0.1,
      rootMargin: '100px'
    });

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [handleIntersect]);

  return (
    <div>
      <div className="row g-4" data-testid="image-grid">
        {Array.isArray(images) && images.map((img) => (
          <div key={img?.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <ImageCard image={img} onClick={onSelectImage} />
          </div>
        ))}
      </div>
      
      {!loading && images.length === 0 && (
        <div className="text-center my-5 text-muted">
          <p className="fs-5">No images found. Try a different search term!</p>
        </div>
      )}
      
      {images.length > 0 && (
        <div 
          ref={observerTarget} 
          className="d-flex justify-content-center my-5"
          data-testid="infinite-scroll-trigger"
          style={{ minHeight: '100px' }}
        >
          {loading ? (
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading more...</span>
            </Spinner>
          ) : (
            <div className="text-muted">Scroll for more</div>
          )}
        </div>
      )}
    </div>
  );
}
