
var cajaTexto = document.getElementById("Caja");
var cajaTexto1 = document.getElementById("Caja1");
var cajaTexto2 = document.getElementById("salida");
var boton = document.getElementById("boton");
var resultado = document.getElementById("salida");
var n1, n2, n3;

boton.addEventListener("click", clickBoton);

function clickBoton()
{
  if (cajaTexto.value=="" || cajaTexto1.value=="")
  {
    alert("Una o ambas cajas están en blanco! \n coloca los numeros por favor");
  }
  else
  {

    n1 = parseInt(cajaTexto.value);
    n2 = parseInt(cajaTexto1.value);
    n3 = n1 * n2;
    cajaTexto2.value = n3.toString();
  }

}
