/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Random card Generator");

  let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  //let palosName = ["heart", "diamond", "spade", "club"];
  let palos = ["♦", "♥", "♠", "♣"];

  //console.log(myNumbers);
  //console.log(palos);

  //create random number for each element
  function getRandom(anArray) {
    let myRandom = Math.floor(Math.random() * anArray.length);
    return anArray[myRandom];
  }

  //console.log(getRandom(myNumbers) + getRandom(palos));
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
  // Define colors logic
  const myColor = {
    "♥": "red",
    "♦": "red",
    "♠": "black",
    "♣": "black"
  };

  //console.log(myColor["♦"]);

  //Manipulate DOM
  myTop.style.color = myColor[myRandomPalo];
  myBottom.style.color = myColor[myRandomPalo];
};
