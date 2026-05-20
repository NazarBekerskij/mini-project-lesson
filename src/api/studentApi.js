const BASE_URL = 'http://localhost:3000/posts';



async function getPosts(){
    try{
        const res = await fetch(`${BASE_URL}`)
        const data = await res.json()
        return data
    } catch{

    }
}







