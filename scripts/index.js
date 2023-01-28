const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.profile-popup');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input-form_type_name');
const jobInput = document.querySelector('.popup__input-form_type_job');
const jobProfile = document.querySelector('.profile__info-job');
const nameProfile = document.querySelector('.profile__info-name');
const closeButtons = document.querySelectorAll('.popup__close');

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', () => openPopup(profilePopup));

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});




function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

formElement.addEventListener('submit', handleFormSubmit);



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

const sectionElements = document.querySelector('.elements')
const element = document.querySelector('.element');
const template = document.querySelector('#template');

const imagePopup = document.querySelector('.image-popup');
const imageFotoOpen = document.querySelector('.element__foto');
const image = document.querySelector('.popup__foto');
const imageText = document.querySelector('.popup__text');

const createCard = (name, link) => {
  const fotoElement = template.content.querySelector('.element').cloneNode(true);
  fotoElement.querySelector('.element__text').textContent = name;
  fotoElement.querySelector('.element__foto').src = link;
  fotoElement.querySelector('.element__foto').alt = name;

  const buttonLike = fotoElement.querySelector('.element__like');
  buttonLike.addEventListener('click', function (evt) {
    const evtTarget = evt.target;
    evtTarget.classList.toggle('element__like_active');
  });

  const deleteBtn = fotoElement.querySelector('.element__delete');
  deleteBtn.addEventListener('click', () => {
    fotoElement.remove();
  });

  fotoElement.querySelector('.element__foto').addEventListener("click", () => {
    imagePopup.classList.add('popup_opened');
    image.src = fotoElement.querySelector('.element__foto').src;
    imageText.textContent = fotoElement.querySelector('.element__text').textContent;
    image.alt = fotoElement.querySelector('.element__foto').alt;
  });
  return fotoElement;
 };

const renderCard = (name, link) => {
  sectionElements.append(createCard(name, link));
}

initialCards.forEach((item) => {
  renderCard(item.name, item.link);
});


const addPopup = document.querySelector('.add-popup');
const addOpenButtonElement = document.querySelector('.profile__button-add');

const formElementAdd = document.querySelector('.popup__content-add');
const nameInputAdd = document.querySelector('.popup__input-form_type_name-image');
const srcInputAdd = document.querySelector('.popup__input-form_type_src-image');



addOpenButtonElement.addEventListener('click', () => openPopup(addPopup));




function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const fotoElement = template.content.querySelector('.element').cloneNode(true);
  fotoElement.querySelector('.element__text').textContent = nameInputAdd.value;
  fotoElement.querySelector('.element__foto').src = srcInputAdd.value;
  fotoElement.querySelector('.element__foto').alt = nameInputAdd.value;
  const deleteBtn = fotoElement.querySelector('.element__delete');
  deleteBtn.addEventListener('click', () => {
    fotoElement.remove();
  });
  const buttonLike = fotoElement.querySelector('.element__like');
  buttonLike.addEventListener('click', function (evt) {
    const evtTarget = evt.target;
    evtTarget.classList.toggle('element__like_active');
  });

  fotoElement.querySelector('.element__foto').addEventListener("click", () => {
    imagePopup.classList.add('popup_opened');
    image.src = fotoElement.querySelector('.element__foto').src;
    imageText.textContent = fotoElement.querySelector('.element__text').textContent;
    image.alt = fotoElement.querySelector('.element__foto').alt;
  });

  sectionElements.prepend(fotoElement);
  closePopup(addPopup);
  evt.target.reset();

};
formElementAdd.addEventListener('submit', handleFormSubmitAdd);



