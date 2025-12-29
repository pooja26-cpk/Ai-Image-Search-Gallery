import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const submit = () => {
    if (typeof onSearch === 'function') onSearch(term);
  };

  const clearSearch = () => {
    setTerm('');
    if (typeof onSearch === 'function') onSearch('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search images"
        aria-label="Search images"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {term && (
        <Button variant="outline-secondary" onClick={clearSearch}>
          Clear
        </Button>
      )}
      <Button variant="primary" onClick={submit}>
        Search
      </Button>
    </InputGroup>
  );
}