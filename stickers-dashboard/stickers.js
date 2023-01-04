const STICKERS_CONTAINER = '#stickersContainer';
const STICKER_SELECTOR = '.sticker';
const ADD_STICKER_BUTTON = '#addBtn';
const DELETE_STICKER_SELECTOR = '.deleteBtn';
const EDIT_STICKER_SELECTOR = '.editInput';

let stickerList = [];

let defaultEmptyNote  = { description: '' };

const $stickersListElements = $(STICKERS_CONTAINER)
    .on('click', DELETE_STICKER_SELECTOR, onDeleteBtnClick)
    .on('click', EDIT_STICKER_SELECTOR, onInputClickEdit)
;

$(ADD_STICKER_BUTTON).on('click', onAddBtnClick);

init();

function onDeleteBtnClick(e) {
    e.preventDefault();
    const $stickerToRemove = getElement(e);
    const $stickerIdToRemove = getElementId($stickerToRemove);

    deleteSticker($stickerIdToRemove);
}

function onInputClickEdit(e) {
    e.preventDefault();
    const $stickerToUpdate = getElement(e);
    console.log($stickerToUpdate);

}

function onAddBtnClick(){
    createSticker(defaultEmptyNote);
}

function init() {
    Dashboard.getStickersList().then((list) => {
        stickerList = list;
        displayList(stickerList);
    })
        .catch(displayWarning);
}

function getElement(e) {
   const $sticker = e.target.closest(STICKER_SELECTOR);
   return $sticker;
}

function getElementId(sticker) {
    return sticker.dataset.id;
}

function findElementById(stickerId) {
    return $stickersListElements.find(`[data-id="${stickerId}"]`);
}

function setData(data) {
    return (stickerList = data);
}

function deleteSticker(stickerId) {
    setData(stickerList.filter((el) => el.id != stickerId));
    deleteStickerElement(stickerId);
    Dashboard.delete(stickerId).then(() => {
        alert('Sticker was successfully deleted')
    });
}

function deleteStickerElement(stickerId) {
    const $stickerToDelete =  findElementById(stickerId);
    $stickerToDelete.remove();
}

function createSticker(data) {
    Dashboard.create(data)
        .then((newSticker) => {
            stickerList.push(newSticker);
            showAddedSticker(newSticker);
        });
}

function showAddedSticker(data) {
    const $stickerEl = $(generateHTML(data));

    $stickersListElements.append($stickerEl);
}

function displayList(list) {
    const stickersHTMLCollection = list.map(generateHTML);

    $(STICKERS_CONTAINER).html(stickersHTMLCollection);
}
function generateHTML(data) {
    return `
          <div class="sticker" data-id="${data.id}">
            <h2>Note: ${data.id}</h2>
            <span class="deleteBtn glyphicon glyphicon-remove"></span>
            <textarea class="editInput" name="description">${data.description}</textarea>
          </div>
  `;
}
function displayWarning(e) {
    alert(e.message);
}