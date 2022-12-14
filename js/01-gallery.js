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
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
		})
		.join("");
}

gallery.addEventListener("click", imgClick);

function imgClick(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	const modal = basicLightbox.create(` <img src="${e.target.dataset.source}" width="800" height="600">`, {
		onShow: modal =>
			document.querySelector("body").addEventListener("keyup", e => {
				onKeyPressed(e, modal);
			}),
		onClose: modal =>
			document.querySelector("body").removeEventListener("keyup", e => {
				onKeyPressed(e, modal);
			}),
	});
	modal.show();
}

function onKeyPressed(e, modal) {
	if (e.key === "Escape") {
		modal.close();
	}
	console.log(e.key);
}
