const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect: 'flip',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  let zones = document.querySelectorAll(".section");

  zones.forEach(section => {
    let title = section.querySelectorAll("#title");
    let list = section.querySelectorAll(".list");
    let image = section.querySelectorAll(".image");
    let btn = section.querySelectorAll(".btn");

    gsap.timeline({
      scrollTrigger: {
        start: "top 60%",
        trigger: section,
        toggleActions: "play none none reverse",
      }
    })

    .from(title, 
      {x: -50, opacity: 0})
    .from(list,
      {x: -50, opacity: 0}, '-= 0.5')
    .from(image,
      {y: 50, opacity: 0}, '-= 0.5')
    .from(btn,
      {y: 50, opacity: 0}, '-= 0.5')
  });

  let timeout;
  let animation = document.querySelector('.background-animDisco .spriteDisco');
  
  gsap.to('.background-animDisco', {
    scrollTrigger: {
      trigger: '.background-animDisco',
      scrub: true,
      markers: false,
      start: '30% 100%',
      end: "0% 30%",
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