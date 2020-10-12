
var guradaCanvas1 = document.getElementById("canvas2");
var dimension1 = guradaCanvas1.getContext("2d");
console.log(dibujarLinea);

dibujarLinea("black", 100, 100, 100, 200);
dibujarLinea("red", 100, 200, 200, 200);
dibujarLinea("yellow", 100, 100, 200, 100);
dibujarLinea("brown", 200, 100, 200, 200);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
  dimension1.beginPath();
  dimension1.strokeStyle = color;
  dimension1.moveTo(xInicial, yInicial);
  dimension1.lineTo(xFinal, yFinal);
  dimension1.stroke();
  dimension1.closePath();
}
