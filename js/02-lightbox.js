import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galMarkup = galleryMarkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galMarkup);

function galleryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
        <a class="gallery__item" 
        href=${original}>
  <img 
  class="gallery__image" 
  src=${preview}
  alt=${description} />
    </a>
     `;
		})
		.join("");
}

// gallery.addEventListener("click", openModal);

// function openModal(e) {
// 	e.preventDefault();
// 	if (e.target.clasllList.contains("gallery__image")) return;
// }

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});

// let gal = new SimpleLightbox(".gallery a");
// gal.on("show.simplelightbox", function openModal(e) {
// 	e.preventDefault();
// 	if (e.target.clasllList.contains("gallery__image")) return;
// });
