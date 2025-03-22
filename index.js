import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="49351847-475dcb2d908ee06e87d68c158",m="https://pixabay.com/api/";function h(o){const t=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${t}`).then(i=>{if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return i.json()})}function p(){document.querySelector(".loader-container").classList.remove("is-hidden")}function y(){document.querySelector(".loader-container").classList.add("is-hidden")}function g(){const o=document.querySelector(".gallery");o&&(o.innerHTML="")}function b(o){const t=document.querySelector(".gallery");if(!t)return;const i=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:c,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <div class="photo-card">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${n}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${c}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${l}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${u}
              </p>
            </div>
          </div>
        </a>
      </li>
    `).join("");t.innerHTML=i}const L=document.getElementById("search-form");let S=new d(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.currentTarget,i=t.elements.searchQuery.value.trim();if(!i){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}g(),p(),h(i).then(s=>{s.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(s.hits),S.refresh())}).catch(s=>{a.error({title:"Error",message:`An error occurred: ${s.message}`,position:"topRight"})}).finally(()=>{y(),t.reset()})}
//# sourceMappingURL=index.js.map
