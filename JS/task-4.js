const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

decrBtn.addEventListener('click', hendleDecrement);
incrBtn.addEventListener('click', hendleIncrement);

let counterValue = 0;

function hendleDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function hendleIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}