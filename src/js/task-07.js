const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

inputElement.addEventListener('input', onInput);
function onInput(event) {
  const font = event.currentTarget.value;
  spanElement.style.fontSize = `${font}px`;
}
