export function firstNameValidator(value) {
  if (!value) {
    throw "first name is required!";
  }

  if (value.length > 30) {
    throw "first name must less than 30 character!";
  }
}

export function lastNameValidator(value) {
  if (!value) {
    throw "last name is required!";
  }
}

export function phoneNumberValidator(value) {
  if (value.length !== 11) {
    throw "phone number must be 11 character!";
  }

  if (isNaN(Number(value))) {
    throw "there is some invalid character!";
  }
}
