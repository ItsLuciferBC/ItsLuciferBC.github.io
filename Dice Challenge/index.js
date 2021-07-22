var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6)+1;
var n1 = Math.floor(randomNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + n1 + ".png")

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6)+1;
var n2 = Math.floor(randomNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + n2 + ".png")

if (n1 > n2){
    document.querySelector("h1").innerHTML="Player1 wins";
} else if (n1 < n2){
document.querySelector("h1").innerHTML="Player2 wins" ;
} else if (n1 == n2) {
document.querySelector("h1").innerHTML="Draw";
}
