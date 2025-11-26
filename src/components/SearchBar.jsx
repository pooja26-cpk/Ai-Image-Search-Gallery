import { useState } from 'react';

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
    <div className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search images"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button type="button" className="btn btn-primary" onClick={submit}>
        Search
      </button>
    </div>
  );
}

