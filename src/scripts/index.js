import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {profilePopup, popupOpenButtonElement, addPopup, addOpenButtonElement, initialCards, formValidation} from "./utils.js"

import '../pages/index.css';





//попап профиля
const user = new UserInfo('.profile__info-name', '.profile__info-job');
const popupProf = new PopupWithForm('.profile-popup', callProfile);

function callProfile(data) {
  user.setUserInfo(data.name, data.job);
}

function openPopupWithUserInfo() {
  const userInfo = user.getUserInfo();
  popupProf.setInputValues(userInfo);
  popupProf.open();

}
popupProf.setEventListeners();

popupOpenButtonElement.addEventListener('click', openPopupWithUserInfo);


// добавление карточек на старницу
const ImagePopupOpen = new PopupWithImage('.image-popup');

const CardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template', ()=>{
      ImagePopupOpen.open(item.name, item.link);
      ImagePopupOpen.setEventListeners();
    })
    const cardElement = card.generateCard();
    CardList.addItem(cardElement);
  }
}, '.elements');

CardList.renderItems(initialCards);


// новые карточки на страницу
const popupAdd = new PopupWithForm('.add-popup', callNewCard);

function callNewCard (){
  const values = [popupAdd._getInputValues()];
  CardList.renderItems(values);
}

  popupAdd.setEventListeners();

  addOpenButtonElement.addEventListener('click', ()=>{
    popupAdd.open();
    validatorAddCard.toggleButtonState();
  });



// Валидация форм

const formEditProfile = profilePopup.querySelector('.popup__content');
const validatorEditProfile = new FormValidator(formValidation, formEditProfile);
validatorEditProfile.enableValidation();

const formAddCard = addPopup.querySelector('.popup__content');
const validatorAddCard = new FormValidator(formValidation, formAddCard);
validatorAddCard.enableValidation();


