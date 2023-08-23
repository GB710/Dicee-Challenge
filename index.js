var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png"; //the full access to the image
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2); //access to the second image - that's why we write [1]
//and change the attribute src to any of the images 1 - 6

if (randomImageSrc > randomImageSrc2)
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
else if (randomImageSrc < randomImageSrc2)
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
else document.querySelector("h1").innerHTML = "Draw!";
