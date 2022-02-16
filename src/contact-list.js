export default class ContactList {
  list = [];

  constructor() {
    this.tableElement = document.getElementById("contact-list");
  }

  add(contact) {
    this.list.push(contact);
    this.refresh();
  }

  remove(index) {
    this.list.splice(index, 1);
    this.refresh();
  }

  refresh() {
    this._removeAllRow();
    const rowsHtml = this.list.map((c, i) => c.createRowHtml(i)).join("");
    this._changeTableBody(rowsHtml);
    this._setDeleteEventListeners();
  }

  _removeAllRow() {
    this.tableElement
      .querySelector("tbody")
      .querySelectorAll("tr")
      .forEach((c) => c.remove());
  }

  _changeTableBody(content) {
    this.tableElement.querySelector("tbody").innerHTML = content;
  }

  _setDeleteEventListeners() {
    this.tableElement
      .querySelectorAll(".delete-btn")
      .forEach((btn) =>
        btn.addEventListener("click", this._handleClickDelete.bind(this))
      );
  }

  _handleClickDelete(event) {
    const targetIndex = event.target.dataset.index;
    this.remove(targetIndex);
  }
}
