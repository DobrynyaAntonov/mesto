class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._template = document.querySelector(this._templateSelector);
    this._handleCardClick = handleCardClick;
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
    cardImage.addEventListener('click', this._handleCardClick);
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector('.element__foto');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    const cardCaption = this._cardElement.querySelector('.element__text');
    cardCaption.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;

