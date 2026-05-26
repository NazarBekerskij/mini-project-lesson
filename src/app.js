// import { getPosts } from "./api/studentApi";

// // getPosts("cats").then(res => console.log(res));

// const form = document.querySelector(".search-form")
// const gallery = document.querySelector(".gallery")
// const loadMore = document.querySelector(".load-more-btn")

// let page = 1;
// let currentQuery = "";

// function createItemsMarkup(array) {
//   return array.map(({ webformatURL, likes, views, comments, downloads }) => {
//     return `
//       <li>
//         <div class="photo-card">
//           <img src="${webformatURL}" alt="" />
//           <div class="stats">
//             <p class="stats-item"><i class="material-icons">thumb_up</i> ${likes}</p>
//             <p class="stats-item"><i class="material-icons">visibility</i> ${views}</p>
//             <p class="stats-item"><i class="material-icons">comment</i> ${comments}</p>
//             <p class="stats-item"><i class="material-icons">cloud_download</i> ${downloads}</p>
//           </div>
//         </div>
//       </li>
//     `;
//   }).join("");
// }

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const input = event.target.query.value;
//   const res = await getPosts(input);

//   page = 1;
//   currentQuery = input;
//   loadMore.classList.remove("is-hidden");
//   gallery.innerHTML = createItemsMarkup(res.hits);
// });


// loadMore.addEventListener("click", async () => {
//   page += 1;
//   console.log(page);
  
//   const res = await getPosts(currentQuery, page);
//   gallery.innerHTML += createItemsMarkup(res.hits);
// });






const url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=5&apikey=EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data._embedded.events));