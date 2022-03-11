var randomNumber1 = Math.floor((Math.random() * 6 ) + 1 );
var randomDiceImge1 = "dice" + randomNumber1 + ".png";
var randomDiceImgeSrc1 = "images/" + randomDiceImge1;
document.querySelector(".img1").setAttribute("src", randomDiceImgeSrc1);


var randomNumber2 = Math.floor((Math.random() * 6 ) + 1 );
var randomDiceImge2 = "dice" + randomNumber2 + ".png";
var randomDiceImgeSrc2 = "images/" + randomDiceImge2;
document.querySelector(".img2").setAttribute("src", randomDiceImgeSrc2);

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = " Player 1 Wins !!!"
}
else if (randomNumber1 < randomNumber2){
	document.querySelector("h1").innerHTML = " Player 2 Wins !!!"
}
else{
	document.querySelector("h1").innerHTML = " Draw !!!"
}