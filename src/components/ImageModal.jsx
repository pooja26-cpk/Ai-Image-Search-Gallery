import { Modal, Button } from 'react-bootstrap';

export default function ImageModal({ show, image, onClose }) {
  const src = image?.urls?.regular || image?.urls?.full || '';
  const name = image?.user?.name || 'Unknown Artist';
  const bio = image?.user?.bio;
  const downloadUrl = image?.links?.download || image?.urls?.full || '';
  
  const handleDownload = async () => {
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
    <Modal show={show} onHide={onClose} centered size="lg" contentClassName="modal-content">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {src && (
          <div className="text-center" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-curr)' }}>
             <img 
               src={src} 
               alt={name} 
               style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }} 
             />
          </div>
        )}
        <div className="p-4">
          {bio && <p className="text-muted mb-3">{bio}</p>}
          <div className="d-flex gap-2">
             {downloadUrl && (
              <Button 
                onClick={handleDownload}
                variant="primary"
                className="flex-grow-1 d-flex align-items-center justify-content-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download High Resolution
              </Button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
