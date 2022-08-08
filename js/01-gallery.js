import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(galleryItem =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
            />
        </a>
    </div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);


galleryRef.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
        }
    })
})