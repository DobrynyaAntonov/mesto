const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');

const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input-form_type_name');
const jobInput = document.querySelector('.popup__input-form_type_job');
const jobProfile = document.querySelector('.profile__info-job');
const nameProfile = document.querySelector('.profile__info-name');

const openPopup = function () {
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupElement.classList.add('popup_opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
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


initialCards.forEach(function (item) {
  const fotoElement = template.content.querySelector('.element').cloneNode(true);
  fotoElement.querySelector('.element__text').textContent = item.name;
  fotoElement.querySelector('.element__foto').src = item.link;
  fotoElement.querySelector('.element__foto').alt = item.name;
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
    openImage(item);
  });

  sectionElements.append(fotoElement);

});

const openImage = function (item) {
  imageElement.classList.add('image_opened');
  image.src = item.link;
  imageText.textContent = item.name;
  image.alt = item.name;
}



const addElement = document.querySelector('.add');
const addCloseButtonElement = addElement.querySelector('.add__close');
const addOpenButtonElement = document.querySelector('.profile__button-add');

const formElementAdd = document.querySelector('.add__content');
const nameInputAdd = document.querySelector('.add__input-form_type_name');
const srcInputAdd = document.querySelector('.add__input-form_type_src');


const openAdd = function () {

  addElement.classList.add('add_opened');
}

const closeAdd = function () {
  addElement.classList.remove('add_opened');
}

addOpenButtonElement.addEventListener('click', openAdd);
addCloseButtonElement.addEventListener('click', closeAdd);



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
    imageElement.classList.add('image_opened');
    image.src = fotoElement.querySelector('.element__foto').src;
    imageText.textContent = fotoElement.querySelector('.element__text').textContent;
    image.alt = fotoElement.querySelector('.element__foto').alt;
  });

  sectionElements.prepend(fotoElement);
  closeAdd();
  nameInputAdd.value = '';
  srcInputAdd.value = '';

};
formElementAdd.addEventListener('submit', handleFormSubmitAdd);


const imageElement = document.querySelector('.image');
const imageCloseButtonElement = imageElement.querySelector('.image__close');
const imageFotoOpen = document.querySelector('.element__foto');
const image = document.querySelector('.image__foto');
const imageText = document.querySelector('.image__text');




const closeImage = function () {
  imageElement.classList.remove('image_opened');
}

imageCloseButtonElement.addEventListener('click', closeImage);

