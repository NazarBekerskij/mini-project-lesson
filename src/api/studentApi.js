const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55396511-9fa47eb753a2484966d5aafba';
let per_page = 12;

async function getPosts(query, page = 1) {
  try {
    const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export { getPosts };