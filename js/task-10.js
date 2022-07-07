function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    inputEl: document.querySelector("#controls > input"),
    createBtn: document.querySelector("[data-create]"),
    destroyBtn: document.querySelector("[data-destroy]"),
    boxesContainer: document.querySelector("#boxes"),
}

let amount;
let width = 30;
let height = 30;

refs.inputEl.addEventListener('input', onInputChange);
refs.createBtn.addEventListener('click', onClickCreateBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onInputChange(event) {
  amount = event.currentTarget.value;
};

function onClickCreateBoxes() {
  createBoxes(amount);
};

function createBoxes(amount) {
  const divArray = [];
    
  for (let i = 0; i < amount; i += 1) {
      const color = getRandomHexColor();
        
      const element = document.createElement('div');
      
        element.style.backgroundColor = color;
        element.style.width = `${width}px`;
        width += 10; 
        element.style.height = `${height}px`;
        height += 10;

      divArray.push(element);
  };

  refs.boxesContainer.append(...divArray);
};

function destroyBoxes() {
    refs.boxesContainer.innerHTML = "";
};

