var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 

function designcircumference(x,y,radius){
    pincel.fillStyle = "blue"
    pincel.beginPath();
    pincel.arc(x,y,radius,0,2*Math.PI);
    pincel.fill();

}

function cleanScreen(){
    pincel.clearRect(0,0,600,400);
}
let x = 0
let sentido = 1;
function updateScreen(){
    
    cleanScreen();
    if(x > 600){
        sentido = -1;
    }else if(x < 0){
        sentido = 1;
    }
    designcircumference(x,20,10);
    x = x + sentido;
        
}

setInterval(updateScreen,10);
// for(let x = 20;x < 600; x++){               

//     // setInterval(designcircumference(20,20,10),1000)

// }