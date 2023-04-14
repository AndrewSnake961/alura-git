let screen = document.querySelector("canvas");
let brushPaint = screen.getContext("2d");

brushPaint.fillStyle = "darkgreen"
 brushPaint.fillRect(50,50,350,300); // Function

brushPaint.fillStyle ="black" //Property
brushPaint.fillRect(100,110,90,90); // Function
brushPaint.fillRect(260,110,90,90); // Function
brushPaint.fillRect(190,200,70,100); // Function
brushPaint.fillRect(150,240,40,110); // Function
brushPaint.fillRect(260,240,40,110); // Function

