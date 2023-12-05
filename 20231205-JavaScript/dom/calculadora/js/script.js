document.addEventListener("DOMContentLoaded", function () {
  const pantalla = document.getElementById("pantalla");
  const botones = document.getElementsByTagName("button");

  const CANTIDAD_DECIMALES = 6;
  let valorPantalla = "";

  function agregarNumero(valor) {
    valorPantalla += valor;
    pantalla.value = valorPantalla;
  }

  function agregarOperador(operador) {
    valorPantalla += " " + operador + " ";
    pantalla.value = valorPantalla;
  }

  function limpiarPantalla() {
    valorPantalla = "";
    pantalla.value = valorPantalla;
  }

  function calcular() {
    let num1;
    let num2;
    let operador;
    let valores;

    valores = valorPantalla.split(" ");
    num1 = parseFloat(valores[0]);
    num2 = parseFloat(valores[2]);
    operador = valores[1];

    switch (operador) {
      case "+":
        valorPantalla = num1 + num2;
        break;

      case "-":
        valorPantalla = num1 - num2;
        break;

      case "*":
        valorPantalla = num1 * num2;
        break;

      case "/":
        if (num2 !== 0) {
          valorPantalla = num1 / num2;
        } else {
          pantalla.value = "Error";
          return;
        }
        break;

      default:
        pantalla.value = "Error";
        return;
    }

    pantalla.value = parseFloat(valorPantalla).toFixed(CANTIDAD_DECIMALES);
  }

  for (const boton of botones) {
    boton.addEventListener("click", function () {
      const valor = boton.textContent;

      switch (valor) {
        case "=":
          calcular();
          break;

        case "C":
          limpiarPantalla();
          break;

        case "+":
        case "-":
        case "*":
        case "/":
          agregarOperador(valor);
          break;

        default:
          agregarNumero(valor);
          break;
      }
    });
  }
});
