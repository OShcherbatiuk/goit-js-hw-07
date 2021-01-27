const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')

inputRef.addEventListener('input', hendleInput);


function hendleInput () {
    if (inputRef.value === '') {
        outputRef.textContent = 'незнакомец';
    } else {
        outputRef.textContent = inputRef.value;
    }
};



