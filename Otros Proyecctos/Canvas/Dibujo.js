var guradaCanvas = document.getElementById("canvas1");
var dimension = guradaCanvas.getContext("2d");
console.log(dimension);

dimension.beginPath();
dimension.strokeStyle = "blue";
dimension.moveTo(100, 100);
dimension.lineTo(100,200);
dimension.stroke();
dimension.closePath();

dimension.beginPath();
dimension.strokeStyle = "red";
dimension.moveTo(100, 200);
dimension.lineTo(0,200);
dimension.stroke();
dimension.closePath();

dimension.beginPath();
dimension.strokeStyle = "green";
dimension.moveTo(100, 100);
dimension.lineTo(0,100);
dimension.stroke();
dimension.closePath();

dimension.beginPath();
dimension.strokeStyle = "violet";
dimension.moveTo(0, 200);
dimension.lineTo(0,100);
dimension.stroke();
dimension.closePath();
