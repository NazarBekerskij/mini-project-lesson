async function t(a,e=1){try{let t=await fetch(`https://pixabay.com/api/?key=55396511-9fa47eb753a2484966d5aafba&q=${a}&page=${e}&per_page=12&image_type=photo&orientation=horizontal`);return await t.json()}catch(t){console.log(t)}}t("cats").then(t=>console.log(t));let a=document.querySelector(".search-form"),e=document.querySelector(".gallery"),s=document.querySelector(".load-more-btn"),i=1,o="";function c(t){return t.map(({webformatURL:t,likes:a,views:e,comments:s,downloads:i})=>`
      <li>
        <div class="photo-card">
          <img src="${t}" alt="" />
          <div class="stats">
            <p class="stats-item"><i class="material-icons">thumb_up</i> ${a}</p>
            <p class="stats-item"><i class="material-icons">visibility</i> ${e}</p>
            <p class="stats-item"><i class="material-icons">comment</i> ${s}</p>
            <p class="stats-item"><i class="material-icons">cloud_download</i> ${i}</p>
          </div>
        </div>
      </li>
    `).join("")}a.addEventListener("submit",async a=>{a.preventDefault();let l=a.target.query.value,n=await t(l);i=1,o=l,s.classList.remove("is-hidden"),e.innerHTML=c(n.hits)}),s.addEventListener("click",async()=>{i+=1;let a=await t(o,i);e.innerHTML+=c(a.hits)});
//# sourceMappingURL=mini-project-lesson.1906a85c.js.map
