const button = document.querySelector(`.button`);

button.addEventListener("click", function () {
  const arrayLength = document.querySelector(`.number`).value;
  let numbersArray = [];
  for (let i = 0; i < arrayLength; i++) {
    numbersArray.push(Math.floor(Math.random() * 100));
  }
  alert(numbersArray);
});
