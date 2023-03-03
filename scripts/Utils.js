const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOverlay);
  window.addEventListener('keydown', closePopupEsc);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOverlay);
  window.removeEventListener('keydown', closePopupEsc);
}

function closePopupOverlay(event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(event.currentTarget);

};

function closePopupEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
};

const popupImage = document.querySelector('.popup__foto');
const popupCaption = document.querySelector('.popup__text');

export {openPopup, closePopup, closePopupOverlay, closePopupEsc, popupImage, popupCaption};
