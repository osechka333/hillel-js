function getList() {
    const results = Gallery.getAlbumsList();
    const albums = Gallery.getAlbumPhotos(1);
    console.log(albums, results);
}

getList();
