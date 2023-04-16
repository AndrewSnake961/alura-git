// let screen = document.querySelector("canvas");
// let brushPaint = screen.getContext("2d");

// brushPaint.fillStyle = "grey";
// brushPaint.fillRect(0,0,600,400);

// function showAlert(event){
//     console.log(event)
//     alert("You just click")
    
// }

// screen.onclick = showAlert;
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 
var colores = ["blue", "red", "green"]; 
var indiceColorActual = 0;

function mostrarMensaje(evento){
    var x = evento.pageX - pantalla.offsetLeft; //pos x
    var y = evento.pageY - pantalla.offsetTop; //pos y
    var d = new Date(); //crea una variable de tipo date
    var hora = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    //Verifica si el número de las horas, minutos o segundos, tiene un solo dígito, 
    //caso positivo le adiciona el cero en la frente para obtener el formato deseado 00:00:00
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    alert("La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y);
}

function drawCircle(event){
    let x = event.pageX -pantalla.offsetLeft;
    let y = event.pageY -pantalla.offsetTop;

    pincel.fillStyle = colores[indiceColorActual];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
    console.log(x + "," + y);
}
pantalla.onclick = drawCircle;

function alterarColor() {
    indiceColorActual++;
    if(indiceColorActual>= colores.length) {
         indiceColorActual = 0; //vuelve para el primer color, blue
    }
    return false; //menú contextual padrón de `canvas` no sea exhibido
}


pantalla.oncontextmenu = alterarColor;
    // Aquí viene la llamada a la función con el evento onclick