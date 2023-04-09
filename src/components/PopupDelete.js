import Popup from './Popup.js';

class PopupDelete extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__content');
    this._submitButton = this._form.querySelector('.popup__submit');
  }
  setButtonText(text) {
    this._submitButton.textContent = text;
  }
  open(cardId, cardElement){
    super.open()
    this._cardId = cardId;
    this._cardElement = cardElement;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._cardId, this._cardElement);
    });
  }
}
export default PopupDelete
