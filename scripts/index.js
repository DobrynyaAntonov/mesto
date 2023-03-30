import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {profilePopup, popupOpenButtonElement, addPopup, addOpenButtonElement, initialCards, formValidation} from "./utils.js"






//попап профиля
const user = new UserInfo('.profile__info-name', '.profile__info-job');
const popupProf = new PopupWithForm('.profile-popup', callProfile);


function callProfile (){
  const values = popupProf._getInputValues();
  user.setUserInfo(values.name, values.job)
}

popupOpenButtonElement.addEventListener('click', ()=>{
  user.getUserInfo();
  popupProf.setInputValues(user.getUserInfo());
  popupProf.setEventListeners();
});
;

// карточки на страницу
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
  const values = popupProf._getInputValues();
  CardList.renderItems([values.name, values.job]);
}

  addOpenButtonElement.addEventListener('click', ()=>{
    popupAdd.open();
    popupAdd.setEventListeners();
    validatorAddCard.toggleButtonState();
  });

// Валидация форм

const formEditProfile = profilePopup.querySelector('.popup__content');
const validatorEditProfile = new FormValidator(formValidation, formEditProfile);
validatorEditProfile.enableValidation();

const formAddCard = addPopup.querySelector('.popup__content');
const validatorAddCard = new FormValidator(formValidation, formAddCard);
validatorAddCard.enableValidation();


