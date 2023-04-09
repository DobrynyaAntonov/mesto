const profilePopup = document.querySelector('.profile-popup');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const addPopup = document.querySelector('.add-popup');
const addOpenButtonElement = document.querySelector('.profile__button-add');
const nameElement = document.querySelector('.profile__info-name');
const aboutElement = document.querySelector('.profile__info-job');
const avatarElement = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.avatar-popup');
const buttonAvatar = document.querySelector('.profile__button-avatar')

const formValidation = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-form_type_error',
  errorClass: 'popup__error_visible'
};

export { profilePopup, popupOpenButtonElement, addPopup, addOpenButtonElement, formValidation, nameElement, aboutElement, avatarElement, avatarPopup, buttonAvatar };
