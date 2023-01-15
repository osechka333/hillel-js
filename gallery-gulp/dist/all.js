class Gallery {
    static ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums/';
    static PHOTOS_URL = 'https://jsonplaceholder.typicode.com/albums/id/photos';

    static request(url = '', method = 'GET', body) {
        return fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`Failed request with the status: ${response.status}`);
            })
    }

    static getAlbumsList() {
        return this
            .request(this.ALBUMS_URL)
            .catch(() => {
                throw new Error(`Failed to get the list of albums`);
            });
    }

    static getAlbumPhotosList(albumId) {
        const newUrl = this.PHOTOS_URL.replace('id', albumId);
        return Gallery
            .request(newUrl)
            .catch(() => {
                throw new Error(`Failed to get the photos of the album`);
            });
    }
}
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
    e.preventDefault();
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
