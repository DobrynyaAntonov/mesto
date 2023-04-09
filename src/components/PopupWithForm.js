import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__content');
    this._inputs = this._form.querySelectorAll('.popup__input-form');
    this._submitButton = this._form.querySelector('.popup__submit');
  }
  setInputValues(values) {
    this._inputs.forEach(input => {
      input.value = values[input.name];
    });
  }

  getInputValues() {
    const values = {};
    this._inputs.forEach(input => {
      values[input.name] = input.value;
    });
    return values;
  }

  setButtonText(text) {
    this._submitButton.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this.getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
export default PopupWithForm
