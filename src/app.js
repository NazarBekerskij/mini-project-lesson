import { getPosts } from "./api/studentApi";

getPosts("cats").then(res => console.log(res));



const form = document.querySelector(".search-form")
const gallery = document.querySelector(".gallery")
const loadMore = document.querySelector(".load-more-btn")

function createItemsMarkup(array) {
  const items = array.map(({ webformatURL, likes, views, comments, downloads }) => {
    return `
      <li>
        <div class="photo-card">
          <img src="${webformatURL}" alt="" />
          <div class="stats">
            <p class="stats-item"><i class="material-icons">thumb_up</i> ${likes}</p>
            <p class="stats-item"><i class="material-icons">visibility</i> ${views}</p>
            <p class="stats-item"><i class="material-icons">comment</i> ${comments}</p>
            <p class="stats-item"><i class="material-icons">cloud_download</i> ${downloads}</p>
          </div>
        </div>
      </li>
    `;
  }).join("");
  
  gallery.innerHTML = items
}


form.addEventListener("submit", async (event) => {
    event.preventDefault()



    const input = event.target.query.value
    const res = await getPosts(input)
    // console.log(res);
    createItemsMarkup(res.hits)
})






