let bg = document.querySelector(".bg");
let nav = document.querySelector(".nav");
let titre = document.querySelector(".title");
let paragraphe = document.querySelector(".content");
let masque = document.querySelector(".shadow");
let annee = document.querySelector(".annee");
let imageTop = document.querySelector(".plateforme");
let hero = document.querySelector(".background");

fetch("json/warcraft.json")
  .then((response) => response.json())
  .then((article) => {
      article.games.forEach(post => {
        let btn = document.createElement("button");
        btn.setAttribute("data-id", post.id);
        btn.innerText = post.title;
        nav.appendChild(btn);
        document.addEventListener('load', (event) => {
            event++;
            console.log(event);
            HMTL(event[0]);
        });
        btn.addEventListener("click", () => {
          HMTL(post);  
        });
      }); 
  });

function HMTL(art) {
    bg.src = art.media;
    titre.innerHTML = art.title;
    paragraphe.innerHTML = art.description;
    masque.style.backgroundColor = art.color;
    annee.innerHTML = art.year;
    imageTop.src = art.plateform;
    hero.style.backgroundColor = art.color;
}