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
}

close(){
  this._popup.classList.remove('popup_opened');
}


_checkEsc(event){
  if (event.key === 'Escape') {
    this.close();
  };
}

_handleEscClose(){
  window.addEventListener('keydown', this._checkEsc);
}

_closeFunctionOverlay (event) {
      if (event.target === event.currentTarget) {
       this.close();
    }


}

setEventListeners(){
  this._buttonClose.addEventListener('click', this.close);
  this._popup.addEventListener('click', this._closeFunctionOverlay);
  this._handleEscClose();
}
}

export default Popup;
