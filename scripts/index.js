const popupElement = document.querySelector ('.popup');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close');
const popupOpenButtonElement = document.querySelector ('.profile__button-edit');

let formElement = document.querySelector ('.popup__content');
let nameInput = document.querySelector('.popup__input-form_name');
let jobInput = document.querySelector('.popup__input-form_job');
let jobProfile = document.querySelector('.profile__info-job');
let nameProfile = document.querySelector('.profile__info-name');

const openPopup = function() {
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupElement.classList.add ('popup_opened');
}

const closePopup = function() {
  popupElement.classList.remove ('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);



function handleFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);

