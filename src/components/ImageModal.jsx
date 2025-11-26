import { Modal, Button } from 'react-bootstrap';

export default function ImageModal({ show, image, onClose }) {
  const src = image?.urls?.regular || image?.urls?.full || '';
  const name = image?.user?.name || '';
  const download = image?.links?.download || image?.urls?.full || '';
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        {src && <img className="modal-image" src={src} alt={name} />}
        {download && (
          <a href={download} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">
            Download
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

