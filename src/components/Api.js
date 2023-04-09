class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //загрузка данных профиля
  avatarInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    }).then(this._checkResponse);
  }
  //загрузка карточек на страницу
  initialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    }).then(this._checkResponse);
  }
  //сохранение данных профиля
  editUserInfo(name, about) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(this._checkResponse);
  }
  //добавление новых карточек
  addCard(name, link) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkResponse);
  }
  //удаление карточки
  deleteCard(cardId){
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
//добавление лайка
  addCardLike(cardId){
    return fetch(`${this._url}cards/${cardId}/Likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //удаление лайка
  deleteCardLike(cardId){
    return fetch(`${this._url}cards/${cardId}/Likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //обновление аватара
  avatar(link){
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    }).then(this._checkResponse);
  }
}

export default Api
