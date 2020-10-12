var r = document.getElementById("circulo");
var redondo = r.getContext("2d");

for (var i = 0; i < 360; i+=3)
{
  vuelta(i, "red", 250, 50, 50);
  vuelta(i, "green", 150, 200, 50);
  vuelta(i, "blue", 50, 50, 50);

}

  linea("black", 150, 200, 250, 50);
  linea("black", 250, 50, 50, 50);
  linea("black", 50, 50, 150, 200);

  cuadro ("red",250, 50, 50);
  cuadro ("green",150, 200, 50);
  cuadro ("blue",50, 50, 50);

function vuelta (angulo, color, xi, yi, radio)
{
  var xf = (radio * Math.cos(angulo * Math.PI/180));
  var yf =(radio * Math.sin(angulo * Math.PI/180));

  redondo.beginPath();
  redondo.strokeStyle = color;
  redondo.lineWidth = 0.3;
  redondo.moveTo (xi, yi);
  redondo.lineTo(xi + xf, yi - yf);
  redondo.stroke();
  redondo.closePath();

}

function cuadro(color, xc, yc, r)
{
   var a = (xc-r);
   var b = (xc+r);
   var c = (yc-r);
   var d = (yc+r);

  //linea continua
  redondo.beginPath();
  redondo.strokeStyle = color;
  redondo.lineWidth = 1;
  redondo.moveTo (a, c);
  redondo.lineTo(b, c);
  redondo.moveTo (a, c);
  redondo.lineTo(a, d);
  redondo.moveTo (b, c);
  redondo.lineTo(b, d);
  redondo.moveTo (a, d);
  redondo.lineTo(b, d);
  redondo.stroke();
  redondo.closePath();
}

function linea (color, x1, y1, x2, y2)
{
  redondo.beginPath();
  redondo.strokeStyle = color;
  redondo.lineWidth = 1.5;
  redondo.moveTo (x1, y1);
  redondo.lineTo(x2, y2);
  redondo.stroke();
  redondo.closePath();

}
