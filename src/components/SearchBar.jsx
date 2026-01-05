import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const submit = () => {
    if (typeof onSearch === 'function') onSearch(term);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="search-container">
      <Form.Control
        className="modern-input"
        placeholder="Search for high-quality images..."
        aria-label="Search images"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <Button 
        variant="primary" 
        className="search-btn" 
        onClick={submit}
      >
        Search
      </Button>
    </div>
  );
}
