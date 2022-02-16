export function showValidationError(fieldError) {
  const inputElem = document.querySelector(
    `input[name="${fieldError.fieldName}"]`
  );
  inputElem.classList.add("is-invalid");
  const errorElement = document.createElement("div");
  errorElement.className = "invalid-feedback";
  errorElement.innerText = fieldError.message;
  inputElem.parentElement.append(errorElement);
}
