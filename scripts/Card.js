import {openPopup, closePopup, closePopupOverlay, closePopupEsc} from "./Utils.js";

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._template = document.querySelector(this._templateSelector);
  }

  _getTemplate() {
    const cardElement = this._template.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const cardLikeButton = this._cardElement.querySelector('.element__like');
    cardLikeButton.addEventListener('click', () => {
      cardLikeButton.classList.toggle('element__like_active');
    });

    const cardDeleteButton = this._cardElement.querySelector('.element__delete');
    cardDeleteButton.addEventListener('click', () => {
      this._cardElement.remove();
    });

    const cardImage = this._cardElement.querySelector('.element__foto');
    cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleCardClick() {
    const popupImage = document.querySelector('.popup__foto');
    const popupCaption = document.querySelector('.popup__text');

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    openPopup(document.querySelector('.image-popup'));
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    const cardImage = this._cardElement.querySelector('.element__foto');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    const cardCaption = this._cardElement.querySelector('.element__text');
    cardCaption.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
export default Card;
