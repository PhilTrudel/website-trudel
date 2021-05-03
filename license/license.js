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

        btn.addEventListener("click", () => {
            bg.src = post.media;
            titre.innerHTML = post.title;
            paragraphe.innerHTML = post.description;
            masque.style.backgroundColor = post.color;
            annee.innerHTML = post.year;
            imageTop.src = post.plateform;
            hero.style.backgroundColor = post.color;
        });
      }); 
  });
