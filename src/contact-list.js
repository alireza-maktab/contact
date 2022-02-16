import { deleteContact, getContact, getContacts, postContact } from "./api";
import Contact from "./contact";

export default class ContactList {
  list = [];

  constructor() {
    this.tableElement = document.getElementById("contact-list");
    getContacts().then((res) => {
      this.list = res.map((c) => new Contact(Object.entries(c)));
      this.refresh();
    });
  }

  add(contact) {
    postContact(contact).then(() => {
      this.list.push(contact);
      this.refresh();
    });
  }

  remove(id) {
    deleteContact(id).then(() => {
      const targetIndex = this.list.findIndex((i) => i.id === id);
      this.list.splice(targetIndex, 1);
      this.refresh();
    });
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
    this.tableElement.querySelectorAll(".delete-btn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        this._handleClickDelete(e);
      })
    );
  }

  _handleClickDelete(event) {
    event.preventDefault();
    const targetId = event.target.dataset.id;
    this.remove(targetId);
  }
}
