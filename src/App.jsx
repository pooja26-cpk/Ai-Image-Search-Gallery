import { useState } from 'react';
import { Container, Navbar, Alert } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import ThemeToggle from './components/ThemeToggle';
import { searchImages } from './api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return 'dark';
    if (saved === 'light') return 'light';
    return 'light';
  });

  const uniqueById = (arr) => {
    const seen = new Set();
    const out = [];
    for (const item of arr || []) {
      const id = item?.id;
      if (!id) continue;
      if (seen.has(id)) continue;
      seen.add(id);
      out.push(item);
    }
    return out;
  };

  const handleSearch = async (q) => {
    const term = (q || '').trim();
    if (!term) return;
    setLoading(true);
    setError(null); // Clear previous errors
    setQuery(term);
    setPage(1);
    setImages([]);
    try {
      const data = await searchImages(term, 1);
      const results = Array.isArray(data?.results) ? data.results : [];
      setImages(uniqueById(results));
    } catch (e) {
      setError("Failed to fetch images. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!query) return;
    setLoading(true);
    setError(null); // Clear previous errors
    const next = page + 1;
    try {
      const data = await searchImages(query, next);
      const nextImages = Array.isArray(data?.results) ? data.results : [];
      setImages((prev) => uniqueById([...prev, ...nextImages]));
      setPage(next);
    } catch (e) {
      setError("Failed to load more images. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const selectImage = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar className={`navbar-custom ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'}>
        <Container className="justify-content-between">
          <div className="brand-title">AI Image Search Gallery</div>
          <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
        </Container>
      </Navbar>
      <Container className="grid-container">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} />
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <ImageGrid images={images} onLoadMore={loadMore} onSelectImage={selectImage} loading={loading} />
      </Container>
      <ImageModal show={!!selectedImage} image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default App;