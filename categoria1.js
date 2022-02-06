 function resultado() {

    // 1ª pregunta

    if (document.getElementById('p01').checked == true) {
        document.getElementById("textovaticano").style.color = "green";
        document.getElementById("textojamaica").style.color = "black";
        document.getElementById("textoargentina").style.color = "black";


    }
    if (document.getElementById('p02').checked == true) {
        document.getElementById("textojamaica").style.color = "red";
        document.getElementById("textovaticano").style.color = "black";
        document.getElementById("textoargentina").style.color = "black";


    }
    if (document.getElementById('p03').checked == true) {
        document.getElementById("textoargentina").style.color = "red";
        document.getElementById("textojamaica").style.color = "black";
        document.getElementById("textovaticano").style.color = "black";

    }

    // 2ª pregunta

    if (document.getElementById('p04').checked == true) {
        document.getElementById("textoroma").style.color = "red";
        document.getElementById("textoparis").style.color = "black";
        document.getElementById("textovenecia").style.color = "black";

    }
    if (document.getElementById('p05').checked == true) {
        document.getElementById("textoroma").style.color = "black";
        document.getElementById("textoparis").style.color = "green";
        document.getElementById("textovenecia").style.color = "black";


    }
    if (document.getElementById('p06').checked == true) {
        document.getElementById("textoroma").style.color = "black";
        document.getElementById("textoparis").style.color = "black";
        document.getElementById("textovenecia").style.color = "red";
    }

    // 3ª pregunta

    if (document.getElementById('p07').checked == true) {
        document.getElementById("textoguatemala").style.color = "green";
        document.getElementById("textocolombia").style.color = "black";
        document.getElementById("textochile").style.color = "black";

    }
    if (document.getElementById('p08').checked == true) {
        document.getElementById("textoguatemala").style.color = "black";
        document.getElementById("textocolombia").style.color = "red";
        document.getElementById("textochile").style.color = "black";
    }

    if (document.getElementById('p09').checked == true) {
        document.getElementById("textoguatemala").style.color = "black";
        document.getElementById("textocolombia").style.color = "black";
        document.getElementById("textochile").style.color = "red";


    }


}



function verificar() {
  const total = 3;
  let puntos = 0;
  let myForm = document.forms["myForm"];
  let respuestas = ["vaticano", "Paris", "Guatemala"];

  for (let i = 1; i <= total; i++) {
    if (myForm["pregunta" + i].value === respuestas[i - 1]) {
        puntos++;
    }
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Obtuviste " + puntos + " de " + total + " puntos";
}

