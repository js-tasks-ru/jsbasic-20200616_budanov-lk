import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = document.createElement('div');

  constructor(product) {
   
    this.elem.classList.add('card');
    

    let div1 = document.createElement('div');
    div1.classList.add('card__top');

    let img = document.createElement('img');
    img.setAttribute('src', `/assets/images/products/${product.image}`);
    img.classList.add('card__image');
    img.setAttribute('alt', 'product'); 
    div1.appendChild(img);

    let span = document.createElement('span');
    span.classList.add('card__price');
    span.innerHTML = `€${product.price.toFixed(2)}`;
    div1.appendChild(span);

    this.elem.prepend(div1);

    let div2 = document.createElement('div');
    div2.classList.add('card__body');

    let div3 = document.createElement('div');
    div3.classList.add('card__title');
    div3.innerHTML = `${product.name}`;
    div2.appendChild(div3);

    let button = document.createElement('button');
    button.setAttribute('type','button');
    button.classList.add('card__button');

    let img2 = document.createElement('img');
    img2.setAttribute('src','/assets/images/icons/plus-icon.svg');
    img2.setAttribute('alt','icon');
    button.appendChild(img2);

    div2.appendChild(button);
    this.elem.append(div2);
    
    let cardButton = this.elem.querySelector('.card__button');
    cardButton.onclick = function() {
      cardButton.dispatchEvent(new CustomEvent('product-add', {
        detail: product.id,
        bubbles: true
      }));

    };
  };
  

}

