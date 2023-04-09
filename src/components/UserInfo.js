class UserInfo {
  constructor(nameSelector, jobSelector, avatarElement) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarElement);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    };
  }

  setUserInfo(data) {
     this._nameElement.textContent = data.name;
     this._jobElement.textContent = data.about;
     this._avatarElement.src = data.avatar;
  }
}
export default UserInfo
