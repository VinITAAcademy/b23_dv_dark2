
//we provide video start
const imgclose = document.querySelector('.vidio-block-picture');

imgclose.onclick = function(){
    imgclose.style.display='none';

    const youtubeOpen = document.querySelector('.block2_youtube');
    youtubeOpen.style.display='block';
}
//"we provide video end"

let swiper2 = new Swiper("#logo-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-logo",
    prevEl: ".swiper-button-prev-logo",
  },
});

//specialities swiper initializing swiper start
const swiper = new Swiper('#swiper-specialities', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//specialities swiper initializing swiper end