const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInput)

function onInput() {
    const inputLength = Number(inputRef.dataset.length);
    inputRef.value.length === inputLength
        ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
        : (inputRef.classList.add('invalid'), inputRef.classList.remove('valid'))
};