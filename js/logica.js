var btnEncriptar = document.getElementById("encriptar");
var inputText = document.getElementById("inputText2");
var outPutText = document.getElementById("outPutText2");
btnEncriptar.addEventListener("click", () => {
  var regex = new RegExp("^[a-z]+$");
  var text;
  var newText = "";
  text = inputText.value;
  if (regex.test(text)) {
    for (var x = 0; x < text.length; x++) {
      if (text[x] == "a") {
        newText = newText + "ai";
      } else if (text[x] == "e") {
        newText = newText + "enter";
      } else if (text[x] == "i") {
        newText = newText + "imes";
      } else if (text[x] == "o") {
        newText = newText + "ober";
      } else if (text[x] == "u") {
        newText = newText + "ufat";
      } else {
        newText = newText + text[x];
      }
    }
    outPutText.value = newText;
  } else {
    alert("Solo use minusculas y sin acento");
  }
});
var btnDesencriptar = document.getElementById("desencriptar");
btnDesencriptar.addEventListener("click", () => {
  var text;
  var newtext = "";
  var regex = new RegExp("^[a-z]+$");
  text = inputText.value;
  text = inputText.value;
  if (regex.test(text)) {
    for (var x = 0; x < text.length; x++) {
      if (text[x] == "a" && text[x + 1] == "i") {
        newtext = newtext + "a";
        x = x + 1;
      } else if (
        text[x] == "e" &&
        text[x + 1] == "n" &&
        text[x + 2] == "t" &&
        text[x + 3] == "e" &&
        text[x + 4] == "r"
      ) {
        newtext = newtext + "e";
        x = x + 4;
      } else if (
        text[x] == "i" &&
        text[x + 1] == "m" &&
        text[x + 2] == "e" &&
        text[x + 3] == "s"
      ) {
        newtext = newtext + "i";
        x = x + 3;
      } else if (
        text[x] == "o" &&
        text[x + 1] == "b" &&
        text[x + 2] == "e" &&
        text[x + 3] == "r"
      ) {
        newtext = newtext + "o";
        x = x + 3;
      } else if (
        text[x] == "u" &&
        text[x + 1] == "f" &&
        text[x + 2] == "a" &&
        text[x + 3] == "t"
      ) {
        newtext = newtext + "u";
        x = x + 3;
      } else {
        newtext = newtext + text[x];
      }
    }
    outPutText.value = newtext;
  } else {
    alert("Solo use minusculas y sin acento");
  }
});
var copy = document.getElementById("copiar");
copy.addEventListener("click", () => {
  var copyText = document.getElementById("outPutText2");
  console.log(copyText.value);
  navigator.clipboard.writeText(copyText.value);
  alert("¡Texto copiado!");
});
