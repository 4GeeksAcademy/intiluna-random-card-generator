/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let palos = ["♦", "♥", "♠", "♣"];

//create random number for each element
function getRandom(anArray) {
  let myRandom = Math.floor(Math.random() * anArray.length);
  return anArray[myRandom];
}

// Define colors logic
const myColor = {
  "♥": "red",
  "♦": "red",
  "♠": "black",
  "♣": "black"
};

function getRandomCard() {
  // create a random value to call function just once per palo
  let myRandomPalo = getRandom(palos);
  let myRandomNumber = getRandom(myNumbers);

  //Asign  random values to html DOM
  //a. get target element
  let myTop = document.getElementById("top");
  let myNum = document.getElementById("number");
  let myBottom = document.getElementById("bottom");
  //b. manipulate element
  //console.log(myTop);
  myTop.innerHTML = myRandomPalo;
  myNum.innerHTML = myRandomNumber;
  myBottom.innerHTML = myRandomPalo;

  // Change colors for symbols
  //Manipulate DOM
  myTop.style.color = myColor[myRandomPalo];
  myBottom.style.color = myColor[myRandomPalo];
}

window.onload = getRandomCard();

let button = document.querySelector("#superBoton");

button.addEventListener("click", function() {
  getRandomCard();
});
//button.addEventListener("click", getRandomCard()); //no funciona
// versiones que funcionan
/*button.addEventListener("click", function() {
  getRandomCard();
});
button.addEventListener("click", function() {
  //your code here
  let myRandomPalo = getRandom(palos);
  let myRandomNumber = getRandom(myNumbers);

  //Asign  random values to html DOM
  //a. get target element
  let myTop = document.getElementById("top");
  let myNum = document.getElementById("number");
  let myBottom = document.getElementById("bottom");
  //b. manipulate element
  //console.log(myTop);
  myTop.innerHTML = myRandomPalo;
  myNum.innerHTML = myRandomNumber;
  myBottom.innerHTML = myRandomPalo;

  // Change colors for symbols
  //Manipulate DOM
  myTop.style.color = myColor[myRandomPalo];
  myBottom.style.color = myColor[myRandomPalo];
});
*/

//otra manera
/*let btn = document
  .getElementById("btn-card")
  .addEventListener("click", window.onload);
 */
