const swiper = new Swiper('.swiper-container', {
    speed: 1000,
    spacebetween:500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

gsap.registerPlugin(ScrollTrigger);

  let sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    let title = section.querySelectorAll("#title");
    let card = section.querySelectorAll(".card");
    let carroussel = section.querySelectorAll(".swiper-container");
    let video = section.querySelectorAll("iframe");

    gsap.timeline({
      scrollTrigger: {
        start: "top 60%",
        trigger: section,
        toggleActions: "play none none reverse",
      }
    })

    .from(title, 
      {x: -50, opacity: 0})
    .from(card,
      {y: 50, opacity: 0}, '-= 0.75')
    .from(carroussel,
      {y: 50, opacity: 0}, '-= 0.75')
    .from(video,
      {y: 50, opacity: 0}, '-= 0.75')
  });

  let timeout;
  let animation = document.querySelector('.background-anim .sprite');
  
  gsap.to('#main', {
    scrollTrigger: {
      trigger: '#main',
      onUpdate: (e) => {
        animation.classList.remove('idle');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          animation.classList.add('idle');
          animation.classList.remove('scrolldown');
          animation.classList.remove('scrollup');
        }, 500)
        
        if(e.direction == 1) {
          animation.classList.add('scrolldown');
          animation.classList.remove('scrollup');
        } 
        if(e.direction == -1) {
          animation.classList.remove('scrolldown');
          animation.classList.add('scrollup');
        }
      }
    }
  });
