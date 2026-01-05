export default function ImageCard({ image, onClick }) {
  const src = image?.urls?.small || image?.urls?.thumb || '';
  const name = image?.user?.name || 'Unknown Artist';
  const downloadUrl = image?.links?.download || image?.urls?.full || '';
  
  const handleClick = () => {
    if (typeof onClick === 'function') onClick(image);
  };

  const handleDownload = async (e) => {
    e.stopPropagation(); // Prevent opening the modal
    if (!downloadUrl) return;
    
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name.replace(/\s+/g, '-')}-${image?.id || 'image'}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to opening in new tab
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="image-card-wrapper">
      <div className="image-card" onClick={handleClick} role="button">
        <div className="image-card-img-wrapper">
          <img src={src} alt={name} loading="lazy" />
        </div>
        <div className="image-overlay">
          <div className="image-info d-flex justify-content-between align-items-center w-100">
            <div className="text-truncate flex-grow-1">{name}</div>
            {downloadUrl && (
              <button
                onClick={handleDownload}
                className="btn btn-sm btn-light rounded-circle ms-2 download-btn"
                aria-label="Download image"
                title="Download"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
