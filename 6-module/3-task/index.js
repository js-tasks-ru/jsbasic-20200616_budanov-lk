import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = document.createElement('div');
  constructor(slides) {
    this.slides = slides;

    this.elem.classList.add('carousel');

    let butRight = document.createElement('div');
    butRight.classList.add('carousel__arrow');
    butRight.classList.add('carousel__arrow_right');
    this.elem.appendChild(butRight);

    let imgButRight = document.createElement('img');
    imgButRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    imgButRight.setAttribute('alt', 'icon');
    butRight.appendChild(imgButRight);

    let butLeft = document.createElement('div');
    butLeft.classList.add('carousel__arrow');
    butLeft.classList.add('carousel__arrow_left');
    this.elem.appendChild(butLeft);

    let imgButLeft = document.createElement('img');
    imgButLeft.setAttribute('src', 'assets/images/icons/angle-left-icon.svg');
    imgButLeft.setAttribute('alt', 'icon');
    butLeft.appendChild(imgButLeft);

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    this.elem.appendChild(carouselInner);


    for(let slide of this.slides) {
      let carouselSlide = document.createElement('div');
      carouselSlide.classList.add('carousel__slide');
      carouselSlide.setAttribute('data-id', `${slide.id}`);
      carouselInner.appendChild(carouselSlide);

      let img = document.createElement('img');
      img.setAttribute('src', `/assets/images/carousel/${slide.image}`);
      img.classList.add('carousel__img');
      img.setAttribute('alt', 'slide');
      carouselSlide.appendChild(img);

      let carouselCaption = document.createElement('div');
      carouselCaption.classList.add('carousel__caption');
      carouselSlide.appendChild(carouselCaption);

      let span = document.createElement('span');
      span.classList.add('carousel__price');
      span.innerHTML = `€${slide.price.toFixed(2)}`;
      carouselCaption.appendChild(span);

      let caroselTitle = document.createElement('div');
      caroselTitle.classList.add('carousel__title');
      caroselTitle.innerHTML = `${slide.name}`;
      carouselCaption.appendChild(caroselTitle);

      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('carousel__button');
      carouselCaption.appendChild(button);

      let imgPrice = document.createElement('img');
      imgPrice.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      imgPrice.setAttribute('alt', 'icon');
      button.appendChild(imgPrice);

      button.onclick = () => {
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: slide.id,
          bubbles: true
        }));
      }
    }

      let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
      let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
      let buttons = this.elem.querySelectorAll('.carousel__arrow');
      let position = 0;

      if (position == 0) {
        carouselArrowLeft.style.display = 'none';
      }

    function initCarousel() {
      let inner = document.querySelectorAll('.carousel__slide');
      let innerContainer = document.querySelector('.carousel__inner');
      let innerWidth = 0;

      for (let n = 0; n < inner.length; n++) {
        innerWidth += inner[n].offsetWidth;
      }

      let slide = document.querySelector('.carousel__slide');
      let slideWidth = slide.offsetWidth;

      if (event.currentTarget.classList.contains('carousel__arrow_left')) {

        position -= slideWidth;
      } else {
        position += slideWidth;
      };

      if (position == 0) {
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
      }
      if (position >= innerWidth - slideWidth) {
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrowRight.style.display = '';
      };
      innerContainer.style.transform = `translateX(-${position}px)`;
    };

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", initCarousel, true);
    }

  }

}
