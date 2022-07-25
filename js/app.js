const mailList = [`fakemail@gmail.com`, `prova@gmail.com`, `ciao@gmail.com`];
let userMail;
const submit = document.querySelector(`.button`);
console.log(mailList);

submit.addEventListener("click", function () {
  userMail = document.querySelector(`.email`).value;
  console.log(userMail);

  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userMail) {
      const userScore = Math.floor(Math.random() * 6);
      const computerScore = Math.floor(Math.random() * 6);
      if (userScore > computerScore) {
        console.log(`Hai vinto`);
      } else if (userScore < computerScore) {
        console.log(`Hai perso`);
      } else {
        console.log(`Hai pareggiato`);
      }

      console.log(userScore, computerScore);

      i = mailList.length;
    }
  }
});
