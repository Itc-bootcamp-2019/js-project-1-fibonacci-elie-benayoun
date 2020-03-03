fibonacci(){
let firstNumber=5;
let lastresult=1;
let lastlastresult=0;
let result=0;
for (let i=1;i<firstNumber;i++){
    result=lastresult+lastlastresult;
    lastlastresult=lastresult;
    lastresult=result;
}
document.getElementById("firstNumber").innerText = firstNumber;
document.getElementById("secondNumber").innerText = result;
}