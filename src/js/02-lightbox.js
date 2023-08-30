import { galleryItems } from './gallery-items.js';
// Change code below this line

// знаходжу контейнер для галереї в HTML
const mainContainerGalleryRef = document.querySelector(".gallery");

// створюю функцію для HTML розмітки галереї на основі масиву galleryItems
function createGalleryCardEl(galleries) {

  // беру метод map для створення рядка HTML для кожного зображення
  return galleries
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> `;
    })
    // єднаю всі нові рядки в один HTML рядок
    .join(""); 
}

// вставляю галерею в контейнер
mainContainerGalleryRef.insertAdjacentHTML(
  "beforeend",
  createGalleryCardEl(galleryItems)
);

// роблю інеціалізіцію SimpleLightbox зі зв'язком до всіх <a> елементів в галереї
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", 
  // затримка перед відображенням підписів
  captionDelay: 250, 
});

console.log(galleryItems);
