const mailList = [`fakemail@gmail.com`, `prova@gmail.com`, `ciao@gmail.com`];
let userMail;
const submit = document.querySelector(`.button`);
let flag;

submit.addEventListener("click", function () {
  userMail = document.querySelector(`.email`).value;
  console.log(userMail);

  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userMail) {
      flag = true;
      i = mailList.length;
    }
  }
  if (flag) {
    console.log(`La mail che hai inserito è presente nel nostro database`);
  } else {
    console.log(`La mail che hai inserito non è presente nel nostro database`);
  }
});
