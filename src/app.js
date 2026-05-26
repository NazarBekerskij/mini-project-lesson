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






// const url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=5&apikey=EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD';

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data._embedded.events));












const API_KEY = "EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";

const eventsList = document.querySelector(".events__list");

function getEvents() {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=20&countryCode=US`
  ).then(response => response.json());
}

function createEventsMarkup(array) {
  return array.map(event => {
    const image = event.images[0].url;
    const title = event.name;
    const date = event.dates.start.localDate;
    const place = event._embedded.venues[0].name;

    return `
      <li class="events__item">
        <article class="event-card">
          <img class="event-card__image" src="${image}" alt="${title}" />
          <h2 class="event-card__title">${title}</h2>
          <p class="event-card__date">${date}</p>
          <p class="event-card__place">${place}</p>
        </article>
      </li>
    `;
  }).join("");
}

getEvents().then(data => {
  const events = data._embedded.events;

  eventsList.innerHTML = createEventsMarkup(events);
});