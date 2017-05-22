// Nos traemos los elementos que vamos a utilizar

var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa = document.getElementById("rosa");
var azul = document.getElementById("azul");
var verde = document.getElementById("verde");
var amarillo = document.getElementById("amarillo");

contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

azul.style.position = "absolute";
azul.style.top = "250px"; /* sumamos los 200px de alto de la caja rosa mas los 50px de padding que le agregamos al contenedor"
azul.style.right = "0";