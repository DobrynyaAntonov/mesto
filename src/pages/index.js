import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete.js";
import { profilePopup, popupOpenButtonElement, addPopup, addOpenButtonElement, formValidation, nameElement, aboutElement, avatarElement, avatarPopup, buttonAvatar } from "../utils/utils.js"
import '../pages/index.css';

//копия класса api
const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-62/',
  headers: {
    "content-type": "application/json",
    Authorization: '9628d3d6-8ccc-41bd-966b-650c10695cc6'
  }
})

let userId;

//добавление на страницу информации в профиль
const profileInfo = api.avatarInfo();
profileInfo
  .then(data => {
    userId = data._id;
    user.setUserInfo(data);
    const cardsInitial = api.initialCards();
    cardsInitial
      .then((res) => {
        const cards = res.reverse();
        cardList.renderItems(cards);

      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

//добавление на страницу карточек с сервера
const popupDelete = new PopupDelete('.delete-popup', (cardId, cardElem) => {
  popupDelete.setButtonText('Удаление...');
  api.deleteCard(cardId)
    .then(() => {
      cardElem.remove();
      popupDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupDelete.setButtonText('Да');
    });
});
popupDelete.setEventListeners();

//экземпдяр класса section
const cardList = new Section({
  renderer: (item) => {
    const card = new Card(item, '#template', () => {
      imagePopup.open(item.name, item.link);
    }, (cardId, cardElem) => {
      popupDelete.open(cardId, cardElem);
    }, (cardId, Likes) => {
      if (Likes.some(like => like._id === userId)) {
        api.deleteCardLike(cardId)
          .then((res) => {
            card.updateLikesCounter(res.likes);
            card.toggleLike();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.addCardLike(cardId)
          .then((res) => {
            card.updateLikesCounter(res.likes);
            card.toggleLike();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
      userId);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.elements');

// слушатель, чтобы открывалась карточка
const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

//попап профиля
const user = new UserInfo('.profile__info-name', '.profile__info-job', '.profile__avatar');
const popupEditProfile = new PopupWithForm('.profile-popup', (data) => {
  popupEditProfile.setButtonText('Сохранение...');
  api
    .editUserInfo(data.name, data.job)
    .then((res) => {
      user.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.setButtonText('Сохранить');
    });
});

function openPopupWithUserInfo() {
  const userInfo = user.getUserInfo();
  popupEditProfile.setInputValues(userInfo);
  popupEditProfile.open();
  validatorEditProfile.toggleButtonState();
}
popupEditProfile.setEventListeners();
popupOpenButtonElement.addEventListener('click', openPopupWithUserInfo);

//добавление новых карточек на страницу
const popupAddCard = new PopupWithForm('.add-popup', (values) => {
  popupAddCard.setButtonText('Сохранение...');
  api
    .addCard(values.name, values.link)
    .then((data) => {
      cardList.renderItems([data]);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.setButtonText('Сохранить');
    });
});

popupAddCard.setEventListeners();

addOpenButtonElement.addEventListener('click', () => {
  popupAddCard.open();
  validatorAddCard.toggleButtonState();
});
//обновление аватара
const popupAvatar = new PopupWithForm('.avatar-popup', (values) => {
  popupAvatar.setButtonText('Сохранение...');
  api
    .avatar(values.link)
    .then((data) => {
      avatarElement.src = data.avatar;
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.setButtonText('Сохранить');
    });
});

popupAvatar.setEventListeners();

buttonAvatar.addEventListener('click', () => {
  popupAvatar.open();
  validatorAvatar.toggleButtonState();
});

// Валидация форм
const formEditProfile = profilePopup.querySelector('.popup__content');
const validatorEditProfile = new FormValidator(formValidation, formEditProfile);
validatorEditProfile.enableValidation();

const formAddCard = addPopup.querySelector('.popup__content');
const validatorAddCard = new FormValidator(formValidation, formAddCard);
validatorAddCard.enableValidation();

const formAvatar = avatarPopup.querySelector('.popup__content');
const validatorAvatar = new FormValidator(formValidation, formAvatar);
validatorAvatar.enableValidation();
