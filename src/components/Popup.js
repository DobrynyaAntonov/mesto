class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__close');
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._checkEsc = this._checkEsc.bind(this);
    this._closeFunctionOverlay = this._closeFunctionOverlay.bind(this);
  }

  open(){
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._checkEsc);
  }

  close(){
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._checkEsc);
  }

  _checkEsc(event){
    if (event.key === 'Escape') {
      this.close();
    };
  }

  _closeFunctionOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners(){
    this._buttonClose.addEventListener('click', this.close);
    this._popup.addEventListener('click', this._closeFunctionOverlay);
  }
}

export default Popup;
