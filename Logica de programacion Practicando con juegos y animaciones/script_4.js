let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");    
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400); 

let radius = 10;
let xRandom;
let yRandom;


function designcircumference(x,y,radius,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radius,0,2*Math.PI);
    pincel.fill();

}

function cleanScreen(){
    pincel.clearRect(0,0,600,400);
}
let x = 0

function designObjective(x,y){
    
    designcircumference(x,y,radius+20,"red");
    designcircumference(x,y,radius+10,"white");
    designcircumference(x,y,radius,"red");

}

function sortPosition(maxValue){

    return Math.floor(Math.random()*maxValue)
}

function updateScreen(){
    
    cleanScreen();
    xRandom = sortPosition(600);
    yRandom = sortPosition(400);
    designObjective(xRandom,yRandom);
    x++;
 }

setInterval(updateScreen,1000);

function shoot(event){

    let x = event.pageX - pantalla.offsetLeft;
    let y = event.pageY - pantalla.offsetTop;

    if((x < xRandom + radius)  &&
    (x > xRandom - radius) &&
    (y < yRandom + radius) &&
    (y > yRandom - radius)){

        alert("Has acertado");

    }  
}
pantalla.onclick = shoot; 
