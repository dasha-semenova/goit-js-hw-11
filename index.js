import{a as f,S as m,i}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const g="https://pixabay.com/api/",y="52805756-0bb10a10045fa9da16982d34a";async function h(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(g,{params:o})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${e.likes}</li>
          <li><b>Views:</b> ${e.views}</li>
          <li><b>Comments:</b> ${e.comments}</li>
          <li><b>Downloads:</b> ${e.downloads}</li>
        </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){u.innerHTML=""}function F(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}const p=document.querySelector(".form"),l=p.querySelector("input[name='search-text']"),c={position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",iconUrl:"./img/error-pic.svg",iconColor:"#FFFFFF",progressBar:!0,progressBarColor:"#B51B1B",close:!0,timeout:5e3,pauseOnHover:!0,width:"432px",height:"88px",padding:"20px",borderRadius:"4px",class:"custom-error-toast"};p.addEventListener("submit",v);async function v(s){s.preventDefault();const o=l.value.trim();if(!o){i.warning({message:"Please enter a search term!",position:"topRight"});return}w(),F();try{const e=await h(o);if(!e.hits||e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",...c});return}L(e.hits)}catch{i.error({message:"Something went wrong. Please try again later.",...c})}finally{S(),l.value=""}}
//# sourceMappingURL=index.js.map
