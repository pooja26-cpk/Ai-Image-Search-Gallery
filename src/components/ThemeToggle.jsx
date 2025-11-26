export default function ThemeToggle({ currentTheme, toggleTheme }) {
  const isDark = currentTheme === 'dark';
  const icon = isDark ? '☀️' : '🌙';
  const label = isDark ? 'Light' : 'Dark';
  const variant = isDark ? 'btn-outline-light' : 'btn-outline-dark';
  return (
    <button type="button" className={`btn ${variant} d-flex align-items-center gap-2`} onClick={toggleTheme} aria-label={`Toggle ${label} mode`}>
      <span style={{ fontSize: '1.1rem' }}>{icon}</span>
      <span>{label} Mode</span>
    </button>
  );
}
