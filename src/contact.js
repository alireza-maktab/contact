import {
  firstNameValidator,
  lastNameValidator,
  phoneNumberValidator,
} from "./validations";

export default class Contact {
  constructor(formData) {
    const validFieldNames = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "gender",
      "nationality",
    ];
    for (const [name, value] of formData) {
      if (validFieldNames.includes(name)) {
        this[name] = value;
      }
    }
    validFieldNames.forEach((propName) => {
      if (!this.hasOwnProperty(propName)) {
        this[propName] = null;
      }
    });
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  createRowHtml(index) {
    return `
        <tr>
          <td>${index + 1}</td>
          <td>${this.getFullName()}</td>
          <td>${this.email}</td>
          <td>${this.phone}</td>
          <td>${this.gender}</td>
          <td>${this.nationality}</td>
          <td>
            <button data-index="${index}" type="button" class="btn btn-danger delete-btn">Delete</button>
          </td>
        </tr>
      `;
  }

  static validate(formData) {
    const errors = [];
    for (const [name, value] of formData) {
      try {
        switch (name) {
          case "firstName":
            firstNameValidator(value);
            break;
          case "lastName":
            lastNameValidator(value);
            break;
          case "phone":
            phoneNumberValidator(value);
            break;
        }
      } catch (err) {
        const error = {
          fieldName: name,
          message: err,
        };
        errors.push(error);
      }
    }
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
