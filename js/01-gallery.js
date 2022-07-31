import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createImgMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}">
        </div>`;
		})
		.join("");
}
