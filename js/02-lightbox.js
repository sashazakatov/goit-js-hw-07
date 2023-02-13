import { galleryItems } from './gallery-items.js';
// Change code below this line

const createListItemsMarkup = (items) => {
    return items.map(({preview, description, original}) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
        </a>`; 
    }).join('');
}

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createListItemsMarkup(galleryItems);


galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
    gallery.open();
    gallery.on('closed.simplelightbox', gallery.close);
}, {once:true});