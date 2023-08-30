export function makeGalleryCardEl(galleres) {
    return galleres
      .map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
              <a class="gallery__link" href="${original}">
               <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
              </a>
             </div> `;
      })
      .join("");
  }