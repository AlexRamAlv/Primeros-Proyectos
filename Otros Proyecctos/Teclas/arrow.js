var teclas = {LEFT:37, UP: 38, RIGHT: 39, DOWN:40};

document.addEventListener("keyup", presionBoton);

var cuadrado = document.getElementById("trazos");
var dim = cuadrado.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, dim);

//creacion de la funcion para dibujar lineas
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lugar)
{
  lugar.beginPath();
  lugar.strokeStyle = color;
  lugar.lineWidth = 5;
  lugar.moveTo(xInicial, yInicial);
  lugar.lineTo(xFinal, yFinal);
  lugar.stroke();
  lugar.closePath();
}

function presionBoton(evento)
{

  switch (evento.keyCode)
  {
    case teclas.LEFT:
    console.log("Izquierda");
    break;
    case teclas.UP:
    console.log("Arriba");
    break;
    case teclas.RIGHT:
    console.log("Derecha");
    break;
    case teclas.DOWN:
    console.log("Abajo");
    break;

    default:
    console.log("No son flechas");
    break;
  }

}
