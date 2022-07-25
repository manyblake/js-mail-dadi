const button = document.querySelector(`.button`);

button.addEventListener("click", function () {
  const arrayLength = document.querySelector(`.array-length`).value;
  const extract = document.querySelector(`.extract-numbers`).value;
  let numbersArray = [];

  for (let index = 0; index < arrayLength; index++) {
    numbersArray.push(Math.floor(Math.random() * 100));
  }

  const numbersArrayIndex = arrayLength - 1;

  if (numbersArrayIndex >= extract) {
    for (let i = numbersArrayIndex; i > numbersArrayIndex - extract; i--) {
      console.log(numbersArray[i]);
    }
  } else {
    console.log(`Non ci sono abbastanza elementi nell'array`);
  }
});
