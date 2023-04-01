class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    };
  }

  setUserInfo(name, job) {
     this._nameElement.textContent = name;
     this._jobElement.textContent = job;
  }

  updateUserInfo(values) {
    this._nameElement.textContent = values.name;
    this._jobElement.textContent = values.job;
  }

}

export default UserInfo
