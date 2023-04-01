import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {profilePopup, popupOpenButtonElement, addPopup, addOpenButtonElement, initialCards, formValidation} from "../utils/utils.js"

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
const imagePopup = new PopupWithImage('.image-popup');

const CardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template', ()=>{
      imagePopup.open(item.name, item.link);
    })
    const cardElement = card.generateCard();
    CardList.addItem(cardElement);
  }
}, '.elements');

imagePopup.setEventListeners();

CardList.renderItems(initialCards);


// новые карточки на страницу
const popupAdd = new PopupWithForm('.add-popup', callNewCard);

function callNewCard (){
  const values = [popupAdd.getInputValues()];
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


