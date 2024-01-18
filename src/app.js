/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let action = ["se comió", "orinó en", "aplastó", "rompió"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  function generarExcusa() {
    let excusa = `${who[Math.floor(Math.random() * who.length)]} ${
      action[Math.floor(Math.random() * action.length)]
    } ${what[Math.floor(Math.random() * what.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }`;
    return excusa;
  }

  document.getElementById("excuse").innerHTML = generarExcusa();
};
