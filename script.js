// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let randomPass = document.getElementById("generate-btn");
let genOne = document.getElementById("gen-pass-one");
let genTwo = document.getElementById("gen-pass-two");

randomPass.addEventListener("click", function () {
  genOne.textContent = "";
  genTwo.textContent = "";
  for (let i = 0; i <= 15; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    genOne.textContent += characters[randomIndexOne];
    genTwo.textContent += characters[randomIndexTwo];
  }
});
