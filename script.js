let bar = document.querySelector('.bar')
let time = document.querySelector('.time')
let navbar = document.querySelector('.navbar')

bar.addEventListener('click',()=>{
    navbar.classList.add('active')
})
time.addEventListener('click', ()=>{
    navbar.classList.remove('active')
    navbar.style.transition = ".2s"
})

var swiper = new Swiper(".review-container", {
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    grabCursor: true,
});