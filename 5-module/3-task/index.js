function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let elem = document.querySelector('.carousel__inner');
  let width = elem.offsetWidth;
  let position = 0;
  carouselArrowRight.onclick = function() {
  position -= width;
  elem.style.transform = `translateX(${position}px)`;
  (position == -width * 3) ?
    carouselArrowRight.style.display = 'none': carouselArrowLeft.style.display = '';
  };
 carouselArrowLeft.onclick = function() {
  position += width;
  elem.style.transform = `translateX(${position}px)`;
  (position == 0) ?
  carouselArrowLeft.style.display = 'none': carouselArrowRight.style.display = '';
 };
 if (position == 0) {
  carouselArrowLeft.style.display = 'none';
 }
}
