document.write("<h1>Hola</h1>")
 let screen = document.querySelector("canvas");
 let brushPaint = screen.getContext("2d");


brushPaint.fillStyle ="lightgray" //Property
 brushPaint.fillRect(0,0,600,400); // Function

brushPaint.fillStyle ="green" //Property
 brushPaint.fillRect(0,0,200,400); // Function

brushPaint.fillStyle ="red" //Property

brushPaint.fillRect(400,0,200,400); // Function

brushPaint.fillStyle ="yellow" //Property
brushPaint.beginPath();
brushPaint.moveTo(300,200);
brushPaint.lineTo(200,400);
brushPaint.lineTo(400,400);
brushPaint.fill();

brushPaint.fillStyle ="blue" //Property
brushPaint.beginPath();
brushPaint.arc(300,200,50,0,2*3.14);
brushPaint.fill();