const BASE_URL = 'https://pixabay.com/api/';



const API_KEY = '55396511-9fa47eb753a2484966d5aafba'; 





async function getPosts() {
    const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=cars`);
    return await res.json();
}








export {getPosts}

