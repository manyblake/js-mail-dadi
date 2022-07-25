const numbersArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const numbersArrayIndex = numbersArray.length - 1;

if (numbersArrayIndex >= 4) {
  for (let i = numbersArrayIndex; i > numbersArrayIndex - 5; i--) {
    console.log(numbersArray[i]);
  }
} else {
  console.log(`Non ci sono abbastanza elementi nell'array`);
}
