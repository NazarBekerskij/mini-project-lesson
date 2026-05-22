import { getPosts } from "./api/studentApi";

getPosts("cats").then(res => console.log(res));



const form = document.querySelector(".search-form")







form.addEventListener("submit", async (event) => {
    event.preventDefault()



    const input = event.target.query.value
    const res = await getPosts(input)
    console.log(res);
    
})







