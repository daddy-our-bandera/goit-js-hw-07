import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openImg);

const createMarkUp = galleryItems
  .map(
    ({ preview, original, description }) => `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createMarkUp);

let instance = "";
function openImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src=${evt.target.dataset.source}>`);
  instance.show();
  document.addEventListener("keydown", onModalCloseToEscape);
}

function onModalCloseToEscape(evt) {
  if (evt.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onModalCloseToEscape);
  }
}
