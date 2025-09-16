const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

let map;

function iniMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lag: 150.644 },
    zoom: 8,
  });
}

window.iniMap = iniMap;
