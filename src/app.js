import { getPosts } from "./api/studentApi";

getPosts("cats").then(res => console.log(res));

const form = document.querySelector(".search-form")
const gallery = document.querySelector(".gallery")
const loadMore = document.querySelector(".load-more-btn")

let page = 1;
let currentQuery = "";

function createItemsMarkup(array) {
  return array.map(({ webformatURL, likes, views, comments, downloads }) => {
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
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const input = event.target.query.value;
  const res = await getPosts(input);

  page = 1;
  currentQuery = input;
  loadMore.classList.remove("is-hidden");
  gallery.innerHTML = createItemsMarkup(res.hits);
});

loadMore.addEventListener("click", async () => {
  page += 1;
  const res = await getPosts(currentQuery, page);
  gallery.innerHTML += createItemsMarkup(res.hits);
});