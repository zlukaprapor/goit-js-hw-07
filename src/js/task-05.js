const refs = {
    inputElement: document.querySelector('#name-input'),
    spamElement: document.querySelector('#name-output'),
}


refs.inputElement.addEventListener('input', onInputChange);

function onInputChange(event) {
   
    if (event.currentTarget.value === '') {
        refs.spamElement.textContent = 'незнакомец'
    } else {refs.spamElement.textContent = event.currentTarget.value;}
    }
