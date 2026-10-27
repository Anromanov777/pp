const slidesContainer = document.querySelector('.slides-container');
let currentIndex = 0;
setInterval(function(){
  currentIndex = (currentIndex + 1) % 3;
  slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`
}, 3000);