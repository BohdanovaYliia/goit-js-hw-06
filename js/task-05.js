const input = document.querySelector("#name-input");
const nameInTitle = document.querySelector("#name-output");

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const name = event.currentTarget.value;
    
    nameInTitle.textContent = name;

    if (name === "") {
        nameInTitle.textContent = "Anonymous";
    };
};