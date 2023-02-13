import { galleryItems } from './gallery-items.js';
// Change code below this line
const createListItemsMarkup = (items) => {
    return items.map(({ preview, description, original }) => {
      return `
    <div class="gallery__item ">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            data-source="${original}"
            >
        </a>
    </div>`; 
    }).join('');
}
const createLightBoxMarkup= (element) =>{
    return `<img width="1280" src="${element.dataset.source}" alt="${element.alt}">`
}

const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createListItemsMarkup(galleryItems);

galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const closeLightBox = (event) =>{
        if(event.code === 'Escape'){
            instance.close();
        }
    }
    const instance = basicLightbox.create(createLightBoxMarkup(event.target),
    {
        onShow: () => window.addEventListener('keydown', closeLightBox),
        onClose: () => window.removeEventListener('keydown', closeLightBox),
    }
    );
    instance.show();
});