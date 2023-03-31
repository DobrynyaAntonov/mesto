import Popup from './Popup.js';

class PopupWithForm extends Popup{
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__content');
    this._inputs = this._form.querySelectorAll('.popup__input-form');
  }
    setInputValues(values){
      this._inputs.forEach(input => {
        input.value = values[input.name];
      });

    }

  _getInputValues() {
        const values = {};
        this._inputs.forEach(input => {
          values[input.name] = input.value;
        });
        return values;
      }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm
