//declaracion de las variables
var guradaCanvas2 = document.getElementById("canvas3");
var dimension2 = guradaCanvas2.getContext("2d");
console.log(dibujarLinea);
var lineas = 60;
var l=0;
var yi, xf, yi2, xf2, xf3;

//iterador de lineas con while para formar curva
while (l<lineas)
{
  yi = 5 * l;
  xf = 5 * (l + 1);
  dibujarLinea("blue", 0, yi, xf, 300);

  console.log(l);
  yi = 5 * l;
  xf = 5 * (l + 1);
  dibujarLinea("red", 300, yi, xf, 0);

  yi2 = 310 - (5 * l + 10);
  xf = 5 * (l + 1);
  dibujarLinea("green", 300, xf, yi2, 300,);

  yi = 5 * l;
  xf2 = 300 - (5 * l + 10);

  dibujarLinea("#07f2db", xf2, 0, 0, yi);

  l++;
}

// Estrella gris en el centro del dibujo
dibujarLinea("gray", 0, 150, 300, 150);
dibujarLinea("gray", 150, 0, 150, 300);
dibujarLinea("gray", 0, 0, 300, 300);
dibujarLinea("gray", 300, 0, 0, 300);

//Cuadrado negro
dibujarLinea("black", 1, 1, 1, 300);
dibujarLinea("black", 1, 300, 300, 300);
dibujarLinea("black", 300, 300, 300, 1);
dibujarLinea("black", 300, 1, 1, 1);

//creacion de la funcion para dibujar lineas
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
  dimension2.beginPath();
  dimension2.strokeStyle = color;
  dimension2.moveTo(xInicial, yInicial);
  dimension2.lineTo(xFinal, yFinal);
  dimension2.stroke();
  dimension2.closePath();
}
