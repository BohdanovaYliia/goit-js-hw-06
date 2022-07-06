let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

function decreasesValue() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increasesValue() {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decreasesValue);
incrementBtn.addEventListener('click', increasesValue);