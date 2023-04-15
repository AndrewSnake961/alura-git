// document.write("<h1>Hola</h1>")


function drawSquare(x,y,color){
    let screen = document.querySelector("canvas");
    let brushPaint = screen.getContext("2d");
    brushPaint.fillStyle =color; //Property
    brushPaint.fillRect(x,y,50,50); // Function
    brushPaint.strokeStyle = "black";
    brushPaint.strokeRect(x,y,50,50);

}

function dibujarRectangulo(x,y,color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    let altura = Math.round(Math.random()*50)
    pincel.fillStyle = color;
    pincel.fillRect(x,y,50,altura); 
    pincel.strokeStyle = "black";
    pincel.strokeRect(x,y,50,altura);
}
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 420);
function dibujarCirculo(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function dibujarFlor(x,y) {
    dibujarCirculo(x, y+20, 10, "blue");
    dibujarCirculo(x, y, 10, "red");
    dibujarCirculo(x, y-20, 10, "yellow");
    dibujarCirculo(x-20, y, 10, "orange");
    dibujarCirculo(x+20, y, 10, "black");
  }

  for(let x= 30; x < 600; x = x + 60 ){
    for(let y= 30; y < 400; y = y + 60 ){
    dibujarFlor(x,y);
  }
}
 

   
    
    
// let x=0
// while(x<600){
//     drawSquare(x,0,"red")
//     drawSquare(x,50,"yellow")
//     drawSquare(x,100,"green");
//     x = x +50;
// }

// for(let x=0;x<600;x = x+50){
//     drawSquare(x,0,"red")
//     drawSquare(x,50,"yellow")
//     drawSquare(x,100,"green");

// }

// brushPaint.fillStyle ="green" //Property
//  brushPaint.fillRect(0,0,200,400); // Function

// brushPaint.fillStyle ="red" //Property

// brushPaint.fillRect(400,0,200,400); // Function

// brushPaint.fillStyle ="yellow" //Property
// brushPaint.beginPath();
// brushPaint.moveTo(300,200);
// brushPaint.lineTo(200,400);
// brushPaint.lineTo(400,400);
// brushPaint.fill();

// brushPaint.fillStyle ="blue" //Property
// brushPaint.beginPath();
// brushPaint.arc(300,200,50,0,2*3.14);
// brushPaint.fill();