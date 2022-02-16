import ContactList from "./contact-list";
import Contact from "./contact";
import { showValidationError } from "./utils";
import "./style.scss";

const contactsTable = new ContactList();

function handleSubmit(e) {
  e.preventDefault();
  const formElement = e.target;

  formElement.querySelectorAll(".is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
  });

  formElement.querySelectorAll(".invalid-feedback").forEach((el) => {
    el.remove();
  });

  formElement.classList.add("was-validated");

  if (!formElement.checkValidity()) {
    return;
  }

  const formData = new FormData(formElement);
  const validationResult = Contact.validate(formData);

  if (!validationResult.isValid) {
    formElement.classList.remove("was-validated");
    validationResult.errors.forEach((err) => showValidationError(err));
    return;
  }

  const contact = new Contact(formData);
  contactsTable.add(contact);
}

document.forms[0].addEventListener("submit", handleSubmit);
