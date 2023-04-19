const btnSubmt = document.querySelector("#btn").addEventListener('click', showResult);
const inputName = document.querySelector("#name");
const inputDate = document.querySelector("#birth-date");

function showResult(){
    console.log(inputName.value);
    console.log(inputDate.value);
}