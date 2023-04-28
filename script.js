/*const btnSubmt = document.querySelector("#btn").addEventListener('click', showResult);
const inputName = document.querySelector("#name");
const inputDate = document.querySelector("#birth-date");

function showResult(event){
   event.preventDefault()
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
    
}*/

const btnSubmt = document.querySelector("#btn").addEventListener("click", showResult);
const inputElementName = document.querySelector("#name");
const inputElementDate = document.querySelector("#birth-date");

function showResult(event) {
  event.preventDefault();
  setDataLocalStorage();
  console.log(setDataLocalStorage)
  getDataLocalStorage();
}

function setDataLocalStorage(localName, localDate) {
  const local = localStorage.setItem("name", JSON.stringify(username));
  const localD = localStorage.setItem("birthDate", JSON.stringify(birthDate));  
  const username = inputElementName.value;
  const birthDay = inputElementDate.value; 
}


function getDataLocalStorage(getName, getDate) {  
  const getName = JSON.parse(localStorage.getItem("name"));
  const getDate = JSON.parse(localStorage.getItem("birthDate"));

  const dataFormatada = birthDay.split("-").reverse().join("/")

 if (getName && getDate) {
    inputElementName.value = getName;
    inputElementDate.value = getDate;    
     const nameElement = document.createElement("p");
    nameElement.textContent = `Nome: ${localName}`;

  const dateElement = document.createElement("p");
  dateElement.textContent = `Data de nascimento: ${dataFormatada}`;

  const dadosDiv = document.querySelector(".show-data");
  dadosDiv.appendChild(nameElement);
  dadosDiv.appendChild(dateElement);
   } 
  }
