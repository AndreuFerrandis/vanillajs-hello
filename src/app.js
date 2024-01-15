/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const excusas = [
  "Se me olvidó",
  "No recibí el mensaje",
  "Tuve problemas técnicos",
  "Tenía una reunión urgente",
  "Mi perro se comió la tarea",
  "Hubo un corte de electricidad",
  "Mi despertador no sonó",
  "Estaba en una llamada importante",
  "Se me acabó la batería del teléfono",
  "Estaba atrapado en el tráfico"
];

function generarExcusa() {
  const indice = Math.floor(Math.random() * excusas.length);

  const excusaElemento = document.getElementById("excusa");
  excusaElemento.textContent = "Esta es mi excusa favorita: " + excusas[indice];
}

generarExcusa();
