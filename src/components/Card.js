class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._template = document.querySelector(this._templateSelector).content;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
    this._handleDeleteClick = handleDeleteClick;
    this._IdImage = data._id;
    this._handleLikeClick = handleLikeClick;
  }

  updateLikesCounter(like) {
    const likesCounter = this._cardElement.querySelector('.element__number-like');
    likesCounter.textContent = like.length;
  }

  _getTemplate() {
    const cardElement = this._template.cloneNode(true).children[0];
    return cardElement;
  }

  toggleLike() {
    this._cardLikeButton.classList.toggle('element__like_active');
  }

  deleteCard() {
    this._cardElement.remove();
  }


  _handleImageClick() {
    this._handleCardClick();
  }


  _setEventListeners() {
    this._cardLikeButton = this._cardElement.querySelector('.element__like');
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeClick(this._IdImage, this._likes)
    });

    const cardDeleteButton = this._cardElement.querySelector('.element__delete');
    if (this._cardOwnerId === this._userId) {
      cardDeleteButton.addEventListener('click', () => { this._handleDeleteClick(this._IdImage, this._cardElement) });
    } else {
      cardDeleteButton.remove();
    }

    const cardImage = this._cardElement.querySelector('.element__foto');
    cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  setLiked() {
    this._cardLikeButton.classList.add('element__like_active');
  }

  setUnliked() {
    this._cardLikeButton.classList.remove('element__like_active');
  }


  isliked(){
    if (this._likes.some(like => like._id === this._userId)) {
      this.setLiked();
    } else {
      this.setUnliked();
    }
  }



  generateCard() {
    this._cardElement = this._getTemplate();
    this.updateLikesCounter(this._likes);
    this._cardImage = this._cardElement.querySelector('.element__foto');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    const cardCaption = this._cardElement.querySelector('.element__text');
    cardCaption.textContent = this._name;

    this._setEventListeners();

    this.isliked();

    return this._cardElement;
  }
}


export default Card;

