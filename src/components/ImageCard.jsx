import { Card } from 'react-bootstrap';

export default function ImageCard({ image, onClick }) {
  const src = image?.urls?.small || image?.urls?.thumb || '';
  const name = image?.user?.name || '';
  const handleClick = () => {
    if (typeof onClick === 'function') onClick(image);
  };
  return (
    <Card className="image-card" onClick={handleClick} role="button">
      <Card.Img variant="top" src={src} alt={name} />
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

