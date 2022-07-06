const input = document.querySelector("#name-input");
const nameInTitle = document.querySelector("#name-output");

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameInTitle.textContent = event.currentTarget.value;
};