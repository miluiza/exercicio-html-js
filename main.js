const form = document.getElementById("verifica_numeros");
const btn = document.querySelector("verificar");
const a = document.querySelector("A");
const b = document.querySelector("B");

function valida(a,b) {
        return(a>b)
}

function getMessage(a, b) {
  const isGreaterOrEqualOrLess = b == a ? "igual" : b > a ? "maior" : "menor";
  const message = `O número B = ${b} é ${isGreaterOrEqualOrLess} que o número A = ${a}`;
  return message;
}

form.addEventListener("submit", function (e) {
        e.preventDefault();
  const formData = new FormData(e.target);
  const { a, b } = Object.fromEntries(formData);

  const containnerMsgSucess = document.querySelector(".message_sucess");
  containnerMsgSucess.innerHTML = getMessage(a, b);
  containnerMsgSucess.getElementsByClassName.display = "block";
  inputA.value = "";
  inputB.value = "";
});