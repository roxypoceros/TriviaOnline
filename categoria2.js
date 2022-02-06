function resultado() {
  //var p1, p2, p3, p4, nota;
  
  // 4ta pregunta
  
  if (document.getElementById('p10').checked==true){
    document.getElementById("textomadonna").style.color = "red";
    //alert("entro 1");
    document.getElementById("textochristinaaguilera").style.color = "black";
    //alert("entro 2");
    document.getElementById("textobritneyspears").style.color = "black";
    //alert("entro 3");
  }
  if (document.getElementById('p11').checked==true){
    document.getElementById("textomadonna").style.color = "black";
    document.getElementById("textochristinaaguilera").style.color = "red";
    document.getElementById("textobritneyspears").style.color = "black";
  
  }
  if (document.getElementById('p12').checked==true){
    document.getElementById("textomadonna").style.color = "black";
    document.getElementById("textochristinaaguilera").style.color = "black";
    document.getElementById("textobritneyspears").style.color = "green";
  
  }
  
  // 5ª pregunta
  
  if (document.getElementById('p13').checked==true){
    document.getElementById("textocorpuschristi").style.color = "green";
    document.getElementById("textohouston").style.color = "black";
    document.getElementById("textodallas").style.color = "black";
  }
  if (document.getElementById('p14').checked==true){
    document.getElementById("textocorpuschristi").style.color = "black";
    document.getElementById("textohouston").style.color = "red";
    document.getElementById("textodallas").style.color = "black";
  
  }
  if (document.getElementById('p15').checked==true){
    document.getElementById("textocorpuschristi").style.color = "black";
    document.getElementById("textohouston").style.color = "black";
    document.getElementById("textodallas").style.color = "red";
  
  }
  
  // 6ª pregunta
  
  
  if (document.getElementById('p16').checked==true){
    document.getElementById("EmmyGrammy").style.color = "red";
    document.getElementById("OscarTony").style.color = "black";
    document.getElementById("GrammyOscar").style.color = "black";
  }
  if (document.getElementById('p17').checked==true){
    document.getElementById("EmmyGrammy").style.color = "black";
    document.getElementById("OscarTony").style.color = "red";
    document.getElementById("GrammyOscar").style.color = "black";
  
  }
  if (document.getElementById('p18').checked==true){
    document.getElementById("EmmyGrammy").style.color = "black";
    document.getElementById("OscarTony").style.color = "black";
    document.getElementById("GrammyOscar").style.color = "green";
  
   
  }
}

function verificar() {
  const total = 3;
  let puntos = 0;
  let myForm = document.forms["myForm"];
  let respuestas = ["Britney Spears", "Corpus Christi", "GrammyOscar"];

  for (let i = 1; i <= total; i++) {
    if (myForm["pregunta" + i].value === respuestas[i - 1]) {
        puntos++;
    }
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Obtuviste " + puntos + " de " + total + " puntos";
}
