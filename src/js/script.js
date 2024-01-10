
//we provide video start
const imgclose = document.querySelector('.vidio-block-picture');

imgclose.onclick = function(){
    imgclose.style.display='none';

    const youtubeOpen = document.querySelector('.block2_youtube');
    youtubeOpen.style.display='block';
}
//"we provide video end"
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });