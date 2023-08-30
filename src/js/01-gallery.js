import { galleryItems } from './gallery-items.js';
// Change code below this line

// імпортую необхідні дані та функцію створення розмітки галереї
import { makeGalleryCardEl } from "./makeGallaryCard.js";

// знаходжу контейнер для галереї в HTML
const gallery = document.querySelector(".gallery");

// встановлюю створену галерею в контейнері
gallery.insertAdjacentHTML("beforeend", makeGalleryCardEl(galleryItems));

// додаю обробник події click для галереї
gallery.addEventListener("click", (e) => {
    // знімаю сбраузерну поведінку для посилань
  e.preventDefault(); 

  // витягую посилання оригінального зображення з атрибута data-source
  const imgSrcOriginal = e.target.dataset.source;

  // перевіряю, чи клікнуто не саму галерею
  if (e.target === gallery) {
    return;
  }

  // роблю екземпляр модалки за допомогою бібліотеки basicLightbox
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgSrcOriginal}">`,
    {
      // обробник подій при відкритті та закритті модалки
      onShow: () => {
        // додаю обробник події keydown для закриття по натисканню клавіші еsc
        document.addEventListener("keydown", onEspClose);
      },
      onClose: () => {
        // прибираю обробник події keydown після закриття модалки
        document.removeEventListener("keydown", onEspClose);
      },
    }
  );

  // відкриваю модальне вікно
  instance.show();

  // обробник події keydown для закриття модального вікна по клавіші Esc
  function onEspClose(e) {
    if (e.key === "Escape") {
        // закриття модального вікна
      instance.close(); 
    }
  }
});
console.log(galleryItems);
