const slidesContainer = document.querySelector('.slides-container');
let currentIndex = 0;
const totalCount = slidesContainer.children.length;
setInterval(function(){
  currentIndex = (currentIndex + 1) % totalCount;
  slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`
}, 3000);