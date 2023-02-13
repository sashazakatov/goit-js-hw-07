import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createListItemsMarkup = (items) => {
    return items.map(({preview, description, original}) => {
      return `
    <li class="gallery__item ">
        <a class="gallery__link" href="large-image.jpg">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
        </a>
    </li>`; 
    }).join('');
}

galleryRef.innerHTML = createListItemsMarkup(galleryItems);