import { galleryItems } from './gallery-items.js';
// Change code below this line
const createListItemsMarkup = (items) => {
    return items.map(({ preview, description, original }) => {
      return `
    <li class="gallery__item ">
        <a class="gallery__link" href="original">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            data-source="${original}"
            >
        </a>
    </li>`; 
    }).join('');
}
const closeLightBox = (lightBox) => {
    window.addEventListener('keydown', (event) => {
        if(event.code !== 'Escape') return; lightBox.close()
        { once: true }
    })
}

const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createListItemsMarkup(galleryItems);

galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const lightBox = basicLightbox.create(`
    <img width="1280" src="${event.target.dataset.source}" alt="${event.target.alt}">`, 
    {onShow: () => closeLightBox(lightBox)});
    lightBox.show();
});