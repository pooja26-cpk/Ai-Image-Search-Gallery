export async function searchImages(query, page = 1) {
  const ACCESS_KEY = 'HxowJ6Eb4lC8pGruiBKXQePN6_3XqlhMUeRKNyeFcmc';
  const url = new URL('https://api.unsplash.com/search/photos');
  url.searchParams.set('query', query);
  url.searchParams.set('page', String(page));
  url.searchParams.set('client_id', ACCESS_KEY);
  try {
    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return { results: [] }; // Return an empty array on error
  }
}