function generarRandom(arrayLenght) {
  return Math.floor(Math.random() * arrayLenght);
}

function getWho() {
  const who = ["Maggie", "Bart", "Lisa", "Marge", "Ned Flanders"];
  return who[generarRandom(who.length)];
}

function getAction() {
  const action = ["comió", "meó", "aplastó", "rompió"];
  return action[generarRandom(action.length)];
}

function getWhat() {
  const what = [
    "mis deberes",
    "las llaves",
    "el coche",
    "la comida",
    "el libro"
  ];
  return what[generarRandom(what.length)];
}

function getWhen() {
  const when = [
    "antes de clase",
    "justo ahora",
    "cuando he acabado",
    "durante mi almuerzo",
    "encuanto estaba rezando"
  ];
  return when[generarRandom(when.length)];
}

function emitirAlert(respuesta) {
  // utilizo join para mezclar las palabras y cambiar la coma
  // por el caracter espacio (puede utilizar lo que quieras)
  document.getElementById("respuesta").innerHTML = respuesta.join(" ");
}

function generarExcusa() {
  let respuesta = [];
  respuesta.push(getWho());
  respuesta.push(getAction());
  respuesta.push(getWhat());
  respuesta.push(getWhen());

  emitirAlert(respuesta);
}
