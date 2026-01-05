import { Modal, Button } from 'react-bootstrap';

export default function ImageModal({ show, image, onClose }) {
  const src = image?.urls?.regular || image?.urls?.full || '';
  const name = image?.user?.name || 'Unknown Artist';
  const bio = image?.user?.bio;
  const download = image?.links?.download;
  
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
             {download && (
              <Button 
                href={download} 
                target="_blank" 
                rel="noreferrer" 
                variant="primary"
                className="flex-grow-1"
              >
                Download High Res
              </Button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
