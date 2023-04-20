const btnSubmt = document.querySelector("#btn").addEventListener('click', showResult);
const inputName = document.querySelector("#name");
const inputDate = document.querySelector("#birth-date");

function showResult(event){

   const username = inputName.value;
   const birthDay = inputDate.value;

   localStorage.setItem("nome", JSON.stringify(username));
   localStorage.setItem("data de nascimento", JSON.stringify(birthDay));
   const getName = JSON.parse(localStorage.getItem('nome')) || [];;
   const getDate = JSON.parse(localStorage.getItem('data de nascimento')) || [];

   if (getName && getDate){
    const nameElement = document.createElement("p");
    nameElement.textContent = `Nome: ${username}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Data de nascimento: ${birthDay}`;

    const dadosDiv = document.querySelector(".show-data");
    dadosDiv.appendChild(nameElement);
    dadosDiv.appendChild(dateElement);
   }

   inputName.value = "";
   inputDate.value = "";
    
}