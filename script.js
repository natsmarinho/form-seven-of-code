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
  getDataLocalStorage();
}

function setDataLocalStorage() {
  const name = inputElementName.value;
  const birthDate = inputElementDate.value;

  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("birthDate", JSON.stringify(birthDate));
}

function getDataLocalStorage() {
   const username = inputElementName.value;
   const birthDay = inputElementDate.value;

  const getName = JSON.parse(localStorage.getItem("name"));
  const getDate = JSON.parse(localStorage.getItem("birthDate"));
  
   const data = inputElementDate.valueAsDate
   const dia = (data.getDate()+1).toString().padStart(2, '0');
   const mes = (data.getMonth() + 1).toString().padStart(2, '0');
   const ano = data.getFullYear();
   let localData = `${dia}/${mes}/${ano}`;
   console.log(localData)

  if (getName && getDate) {
    inputElementName.value = getName;
    inputElementDate.value = getDate;  
    const nameElement = document.createElement("p");
  nameElement.textContent = `Nome: ${username}`;

  const dateElement = document.createElement("p");
  dateElement.textContent = `Data de nascimento: ${localData}`;

  const dadosDiv = document.querySelector(".show-data");
  dadosDiv.appendChild(nameElement);
  dadosDiv.appendChild(dateElement);
   }
  }