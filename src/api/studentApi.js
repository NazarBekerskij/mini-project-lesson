const BASE_URL = 'http://localhost:3000/posts';



async function getPosts() {
    const res = await fetch(BASE_URL);
    return await res.json();
}




async function createPost(studentData) {
    const options = {   
            method: "POST",
            body: JSON.stringify(studentData),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        const result = await fetch(BASE_URL, options)
        return result
}



export {getPosts}

