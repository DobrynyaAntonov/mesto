const profilePopup = document.querySelector('.profile-popup');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const profileForm = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input-form_type_name');
const jobInput = document.querySelector('.popup__input-form_type_job');
const jobProfile = document.querySelector('.profile__info-job');
const nameProfile = document.querySelector('.profile__info-name');
const closeButtons = document.querySelectorAll('.popup__close');



import { openPopup, closePopup, closePopupOverlay, closePopupEsc} from "./utils.js";

popupOpenButtonElement.addEventListener('click', () => {
  openPopup(profilePopup)
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});


closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);




const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


import Card from "./Card.js";

const sectionElements = document.querySelector('.elements');

function createCardItem(name, link, templateSelector) {
  const card = new Card(name, link, templateSelector);
  return card.generateCard();
}


initialCards.forEach((card) => {
  const cardElement = createCardItem(card.name, card.link, '#template');
  sectionElements.append(cardElement);
});



const addPopup = document.querySelector('.add-popup');
const addOpenButtonElement = document.querySelector('.profile__button-add');

const formElementAdd = document.querySelector('.popup__content-add');
const nameInputAdd = document.querySelector('.popup__input-form_type_name-image');
const srcInputAdd = document.querySelector('.popup__input-form_type_src-image');

addOpenButtonElement.addEventListener('click', () => openPopup(addPopup));

function handleFormSubmitAdd(evt) {
  const cardElement = createCardItem(nameInputAdd.value, srcInputAdd.value, '#template');
  sectionElements.prepend(cardElement);
  closePopup(addPopup);
  evt.target.reset();
  validatorAddCard.toggleButtonState();
}




formElementAdd.addEventListener('submit', handleFormSubmitAdd);

// Валидация форм
import FormValidator from "./FormValidator.js";


const formValidation = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input-form',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-form_type_error',
  errorClass: 'popup__error_visible'
};

const formEditProfile = profilePopup.querySelector('.popup__content');
const validatorEditProfile = new FormValidator(formValidation, formEditProfile);
validatorEditProfile.enableValidation();

const formAddCard = addPopup.querySelector('.popup__content');
const validatorAddCard = new FormValidator(formValidation, formAddCard);
validatorAddCard.enableValidation();


