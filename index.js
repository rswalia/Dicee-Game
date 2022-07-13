// alert("Working :-)");

//random number generator between 1-6
var num1 = Math.floor(Math.random() * 6) + 1;
switch(num1){
    case 1 :
        {
            var image1 = document.querySelector(".img1").setAttribute("src", "images/dice1.png");
            break;
        }
    case 2 :
        {
            var image2 = document.querySelector(".img1").setAttribute("src", "images/dice2.png");
            break;
        }
    case 3 :
        {
            var image3 = document.querySelector(".img1").setAttribute("src", "images/dice3.png");
            break;
        }
    case 4 :
        {
            var image4 = document.querySelector(".img1").setAttribute("src", "images/dice4.png");
            break;
        }
    case 5 :
        {
            var image5 = document.querySelector(".img1").setAttribute("src", "images/dice5.png");
            break;
        }
    case 6 :
        {
            var image6 = document.querySelector(".img1").setAttribute("src", "images/dice6.png");
            break;
        }
}

var num2 = Math.floor(Math.random() * 6) + 1;
switch(num2){
    case 1 :
        {
            var image1 = document.querySelector(".img2").setAttribute("src", "images/dice1.png");
            break;
        }
    case 2 :
        {
            var image2 = document.querySelector(".img2").setAttribute("src", "images/dice2.png");
            break;
        }
    case 3 :
        {
            var image3 = document.querySelector(".img2").setAttribute("src", "images/dice3.png");
            break;
        }
    case 4 :
        {
            var image4 = document.querySelector(".img2").setAttribute("src", "images/dice4.png");
            break;
        }
    case 5 :
        {
            var image5 = document.querySelector(".img2").setAttribute("src", "images/dice5.png");
            break;
        }
    case 6 :
        {
            var image6 = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
            break;
        }
}

if(num1 > num2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
}
else if(num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
}
else{
    document.querySelector("h1").innerHTML = "🎭 Draw 🎭";
}

document.querySelector("h1").style.fontSize= "5rem";