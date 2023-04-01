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

  _toggleLike() {
    this._cardLikeButton.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  _handleImageClick() {
    this._handleCardClick();
  }


  _setEventListeners() {
    this._cardLikeButton = this._cardElement.querySelector('.element__like');
    this._cardLikeButton.addEventListener('click', () => {
      this._toggleLike();
    });

    const cardDeleteButton = this._cardElement.querySelector('.element__delete');
    cardDeleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    const cardImage = this._cardElement.querySelector('.element__foto');
    cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
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

