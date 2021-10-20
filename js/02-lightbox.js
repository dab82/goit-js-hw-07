import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const imgMarkup = galleryItems
	.map(({ preview, original, description }) => {
		return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
</a></li>`;
	})
	.join("");

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

const forOpenLightbox = {
	captionsData: "alt",
	captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery__item", forOpenLightbox);
