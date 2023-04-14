document.write("<h1>Hola</h1>")
 let screen = document.querySelector("canvas");
 let brushPaint = screen.getContext("2d");


// brushPaint.fillStyle ="lightgray" //Property
//  brushPaint.fillRect(0,0,600,400); // Function

brushPaint.fillStyle ="green" //Property
 brushPaint.fillRect(0,0,200,400); // Function

brushPaint.fillStyle ="red" //Property
 brushPaint.fillRect(400,0,200,400); // Function