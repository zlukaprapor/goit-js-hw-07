const inputElement = document.querySelector('#validation-input');
const data_lengthElement = Number(inputElement.dataset.length);

inputElement.addEventListener('focus', onInputFocus);
inputElement.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputElement.classList.remove('invalid');
  inputElement.classList.remove('valid');
}

function onInputBlur(event) {
  const lengthEl = event.currentTarget.value;
  if (lengthEl.length !== data_lengthElement) {
    return inputElement.classList.add('invalid');
  }
  return inputElement.classList.add('valid');
}
