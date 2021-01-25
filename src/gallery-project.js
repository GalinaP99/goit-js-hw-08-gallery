
import images from "./gallery-items.js";

/*<li class="gallery__item">
        <a class="gallery__link" href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg">
            <img class="gallery__image" src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
                data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg" alt="Tulips" />
        </a>
    </li>*/
   // const galleryRef = document.querySelector('js-gallery');
const createImagesList = images => {
    const titleRef = document.createElement('li');
    titleRef.classList.add('gallery__item');
    const anchorRef = document.createElement('a');
    anchorRef.classList.add('gallery__link');
    anchorRef.setAttribute('href', images.original);
    const imagesRef = document.createElement('img');
    imagesRef.classList.add('gallery__image');
    imagesRef.setAttribute('src', images.preview);
    imagesRef.setAttribute('data-source', images.original);
    imagesRef.setAttribute('alt', images.description);
    titleRef.appendChild(anchorRef);
    anchorRef.appendChild(imagesRef);
    return titleRef;
}
/*images.forEach(image => {
console.log(createImagesList(image));
});*/
const imagesList = images.map(image =>
    createImagesList(image));

const refs = {
    gallery: document.querySelector('.js-gallery'),
    largeImage: document.querySelector('.lightbox__image'),
    openModal: document.querySelector('.js-lightbox')
}
    
refs.gallery.append(...imagesList);
refs.gallery.addEventListener('click', onGalleryClick);
function onGalleryClick(event) {
    event.preventDefault();
    const imageRef = event.target;
    console.log("event target: ", imageRef);
    if (imageRef.nodeName !== "IMG") {
        return;
    }
    const largeImageURL = imageRef.dataset.source;
     console.log("edataset source: ",largeImageURL);
    refs.largeImage.src = largeImageURL;
    console.log(largeImageURL);
    //setLargeImageSrc(largeImageURL);
}

/*function setLargeImageSrc(url) {
    refs.largeImage.src = url;
}
refs.openModal.addEventListener("click", toggleModal)
  refs.closeModalBtn.addEventListener("click", toggleModal)

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden")
  }
function setActiveLink(nextActiveLink) {
 // const currentActiveLink = nav.querySelector("a.active");

  if (refs.modal) {
    refs.modal.classList.remove("is-open");
  }

  nextActiveLink.classList.add("is-open");
}*/
