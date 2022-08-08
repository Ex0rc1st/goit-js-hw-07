import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(galleryItem =>
    `<a class="gallery__link" href="${galleryItem.original}">
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
        />
    </a>
    `).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
	captionDelay: 250
})