import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createMarkUp = galleryItems
  .map(
    ({ preview, original, description }) => `<a class="gallery__item"
       href="${original}">
       <img class="gallery__image"
       src="${preview}"
       alt="${description}" />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createMarkUp);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});
