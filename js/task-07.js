const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener('input', onInputChangeFont);

function onInputChangeFont(event) {
    
    const textFontSize = event.currentTarget.value;

    text.style.fontSize = `${textFontSize}px`;
};