function fibonacci() {
  let firstNumber = document.getElementById("firstNumber").value;
  let lastresult = 1;
  let lastlastresult = 0;
  let result = 0;
  for (let i = 1; i < firstNumber; i++) {
    result = lastresult + lastlastresult;
    lastlastresult = lastresult;
    lastresult = result;
  }
  document.getElementById("secondNumber").innerText = result;
}
