const popupElement = document.querySelector ('.popup');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close');
const popupOpenButtonElement = document.querySelector ('.profile__button-edit');


const togglePopupVisibility = function() {
  popupElement.classList.toggle ('popup__is-opened');
}

popupOpenButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

let formElement = document.querySelector ('.popup__content');
let nameInput = document.querySelector('.popup__input-form_name');
let jobInput = document.querySelector('.popup__input-form_job');
let closeSubmit = document.querySelector ('.popup__submit')

function handleFormSubmit (evt) {
  evt.preventDefault();

  document.querySelector('.profile__info-name').textContent = nameInput.value;
  document.querySelector('.profile__info-job').textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

closeSubmit.addEventListener('click', togglePopupVisibility);
