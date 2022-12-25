'use strict'

const PHOTOS_LIST = '#photosContainer';
const ALBUMS_LIST = '#albumsLinksContainer';
const ALBUM_SELECTOR = '.albumLink';
const DEFAULT_ALBUM = 0;

const containerForAlbums =  document.querySelector(ALBUMS_LIST);
const containerForPhotos = document.querySelector(PHOTOS_LIST);

containerForAlbums.addEventListener('click', onContainerForAlbumsClick);

init();

function onContainerForAlbumsClick(e) {
    const selectedAlbum = e.target.closest(ALBUM_SELECTOR);
    let albumId = selectedAlbum.dataset.id;
         if (albumId) {
            getAlbumPhotos(albumId);
         }
}

function init() {
    Gallery.getAlbumsList().then((list) => {
        const albumId = list[DEFAULT_ALBUM].id;
        console.log(albumId);

        displayList(list);
        getAlbumPhotos(albumId);
    })
    .catch(displayError);
}

function displayList(list) {
    const html = list.map(generateAlbumLinkHTML).join('');
    containerForAlbums.innerHTML = html;
}

function generateAlbumLinkHTML(album) {
    return `
    <div class="albumLink" data-id="${album.id}">
        <a href="#" id="link">${album.title}</a>
    </div>
  `;
}
function getAlbumPhotos(id) {
    Gallery.getAlbumPhotosList(id)
        .then(displayPhotos)
        .catch(displayError);
}
function displayPhotos(photos) {
    const html = photos.map(generatePhotoHTML).join('');
    containerForPhotos.innerHTML = html;
}

function generatePhotoHTML(photo) {
    return `<img src=${photo.thumbnailUrl}/>`;
}
function displayError(e) {
    alert(e.message);
}
