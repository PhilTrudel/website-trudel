const arrow = document.querySelector('.arrow-down');
const token = 'rQC1sA1Fi7ALbrWVbK9ADEr64fSS3EYD'; // Utiliser votre propre clé
const keyword = 'hot';
const grid = document.querySelector('.grid');


//animation GSAP
gsap.timeline().to(arrow, 
  {y: 10, ease: 'back.in', yoyo: true, repeat: -1});