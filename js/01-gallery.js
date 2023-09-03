import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

const gallery = document.querySelector(".gallery");

let itemsPhoto = "";

for (let obj of galleryItems) {
  itemsPhoto += `<li class='gallery__item'>
        <a class='gallery__link' href='${obj.preview}' onclick='return false'>
            <img class='gallery__image' src='${obj.preview}' data-source='${obj.original}' atl='${obj.description}'>
        </a>
    </li>`;
}
gallery.insertAdjacentHTML("beforeend", itemsPhoto);

let instance;

gallery.addEventListener("click", (ev) => {
  if (ev.target.nodeName !== "IMG") return;

  instance = basicLightbox.create(`
        <img src="${ev.target.dataset.source}" atl="${ev.target.atl}">
    `);
  instance.show();

  gallery.addEventListener("keydown", (ev) => {
    if (ev.code === "Escape") instance.close();
  });
});

// console.log(instance.show)
// import * as basicLightbox from 'basiclightbox'

// let itemsPhoto = galleryItems.map(el => {
//     const elements = document.createElement('li');
//     const photoElements = document.createElement('img')
//     photoElements.
//     elements.appendChild(photoElements)
//     console.log(elements)
//     return elements;

// });

// gallery.append(...itemsPhoto)

// console.log(galleryItems);
