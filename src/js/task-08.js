const refs = {
  inputEl: document.querySelector('input'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector('#boxes'),
};

let divEls = document.createElement('ul');

refs.inputEl.addEventListener('input', onInput);
refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function onInput() {
  console.log(refs.inputEl.value);
}

function createBoxes(amount) {
  amount = refs.inputEl.value;
  if (amount === '') {
    return console.log('Введите число');
  }
  let sizeDiv = 20;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    sizeDiv += 10;
    divEl.style.width = `${sizeDiv}px`;
    divEl.style.height = `${sizeDiv}px`;
    divEl.style.margin = '10px';

    divEls.appendChild(divEl);
    random_bg_color(divEl);
  }
  refs.boxesEl.appendChild(divEls);
  console.log(refs.boxesEl);
}

function destroyBoxes() {
  console.log('clear');
  refs.inputEl.value = '';
  divEls.remove();
  window.location.reload();
}

function random_bg_color(elem) {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  console.log(bgColor);

  elem.style.background = bgColor;
}
