const arrow = document.querySelector('.arrow-down');
const token = 'rQC1sA1Fi7ALbrWVbK9ADEr64fSS3EYD'; // Utiliser votre propre clé
const keyword = 'hot';
const grid = document.querySelector('.grid');

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${token}&tag=${keyword}&rating=G`)
.then(response => response.json())
.then(result => { 
  console.log(result);

  grid.innerHTML = `<img src="${result.data.images.original.url}">`;
});


//animation GSAP
gsap.timeline().to(arrow, 
  {y: 10, ease: 'back.in', yoyo: true, repeat: -1});