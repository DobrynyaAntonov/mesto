class Section {
  constructor({ items, renderer }, containerSelector){
    this._containerSelector = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }

  renderItems(data) {
        data.forEach(item => this._renderer(item));
      }

  addItem(element){
    this._containerSelector.prepend(element)
  }
}
export default Section;
