# AI Image Search Gallery

## About the Project

AI Image Search Gallery is a React-based web application that allows users to search for images using the Unsplash API. It provides a responsive grid layout to display search results, with features like infinite scrolling (load more), image modal viewing, and dark/light theme toggle.

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Bootstrap 5.3.8, React Bootstrap 2.10.10
- **API**: Unsplash API for image search
- **Linting**: ESLint
- **Language**: JavaScript (ES6+)

## Project Folder Structure

```
f:/Ai-Image-Gallery/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ImageCard.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── ImageModal.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Features

- **Image Search**: Search for images by keywords using the Unsplash API.
- **Responsive Grid Layout**: Displays images in a responsive grid using Bootstrap.
- **Load More**: Paginated loading to fetch more images without reloading the page.
- **Image Modal**: Click on an image to view it in a larger modal window.
- **Theme Toggle**: Switch between light and dark themes, with preference saved in localStorage.
- **Error Handling**: Displays error messages for failed API requests.
- **Loading Indicators**: Shows spinner during data fetching.

## How It Works

1. **Search Functionality**: Users enter a search query in the search bar. The app sends a request to the Unsplash API with the query and page number.

2. **API Integration**: The `api.js` file handles the API calls to Unsplash, using a client ID for authentication. It fetches search results in JSON format.

3. **State Management**: The main `App.jsx` component manages state for the search query, images list, current page, loading status, errors, selected image, and theme.

4. **Rendering**: Images are displayed in a grid using the `ImageGrid` component, which maps over the images array and renders `ImageCard` components.

5. **Interactions**:
   - Clicking "Load More" fetches the next page of results and appends them to the existing list.
   - Clicking an image opens it in an `ImageModal` for detailed viewing.
   - The theme toggle switches between light and dark modes, updating the UI classes accordingly.

6. **Styling**: Bootstrap provides the base styling, with custom CSS in `App.css` for additional theming and layout adjustments.

## Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-image-gallery
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Available Scripts

- `npm run dev`: Starts the development server with hot reloading.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.

## API Key

The app uses the Unsplash API. The client ID is hardcoded in `src/api.js` for demonstration purposes. In a production environment, consider using environment variables to store API keys securely.
