function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");

changeColorBtn.addEventListener('click', onClickBtnChahgeColor);

function onClickBtnChahgeColor(event) {

  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = `${randomColor}`;
  colorCode.textContent = `${randomColor}`;

};