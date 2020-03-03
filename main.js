// //second milestone
// function firstMilestone() {
//   document.getElementById("n1").innerText = "8";
//   document.getElementById("n2").innerText = "21";
// }

function myNumberFibonacci() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("secondNumber").style.display = "none";
  console.log("hello");
  firstNumber = document.getElementById("firstNumber").value;
  if (firstNumber > 50 || isNaN(firstNumber)) {
    document.getElementById("secondNumber").innerText = "Wrong vallue";
    document.getElementById("secondNumber").style.display = "inline-block";
    return;
  }

  // third and fourth milestone
  // function fibonacci(firstNumber) {
  //    lastresult=1;
  //    lastlastresult=0;
  //   let result = 1;
  //   if (firstNumber == 0) {
  //     result = 0;
  //   } else {
  //     for (let i = 1; i < firstNumber; i++) {
  //       result = lastresult + lastlastresult;
  //       lastlastresult = lastresult;
  //       lastresult = result;
  //     }
  //   }
  //   return result;
  // }

  //4.1 milestone
  // function fibonacci(firstNumber) {
  //     if (firstNumber <= 1) {
  //       return firstNumber;
  //     } else {
  //       return (
  //         fibonacci(firstNumber - 1) +
  //         fibonacci(firstNumber - 2)
  //       );
  //     }
  //   }

  //5 milestone
  function fibonacci(firstNumber) {
    let http = new XMLHttpRequest();
    const url = "http://localhost:5050/fibonacci/" + firstNumber;
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
      if (http.readyState==4 && http.status==200)
      {
        const f=http.responseText;
        console.log(JSON.parse(f).result);
        return JSON.parse(f).result;
        

        
      }
  };
    }


  

  let secondNumber = fibonacci(firstNumber);
  document.getElementById("secondNumber").innerText = secondNumber;
  document.getElementById("loading").style.display = "none";
  document.getElementById("secondNumber").style.display = "inline-block";
  let x = document.createElement("div");
  let t = document.createTextNode(
    "the fibonacci of " + firstNumber + " is " + secondNumber
  );
  x.appendChild(t);
  document.body.appendChild(x);
}
