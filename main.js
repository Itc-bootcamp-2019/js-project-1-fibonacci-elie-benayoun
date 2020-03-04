// //second milestone
// function firstMilestone() {
//   document.getElementById("n1").innerText = "8";
//   document.getElementById("n2").innerText = "21";
// }
function myNumberFibonacci() {
  document.getElementById("beware").classList.add("disapear");
  document.getElementById("loading").classList.remove("disapear");
  document.getElementById("loading-result").classList.remove("disapear");
  document.getElementById("secondNumber").classList.add("disapear");
  firstNumber = document.getElementById("firstNumber").value;
  document.getElementById("firstNumber").classList.remove("red-input");
  if (firstNumber > 50) {
    document.getElementById("loading").classList.add("disapear");
    document.getElementById("secondNumber").classList.remove("disapear");
    document.getElementById("beware").classList.remove("disapear");
    document.getElementById("firstNumber").classList.add("red-input");
    document.getElementById("loading-result").classList.add("disapear");
    return;
  }
  fibonacci(firstNumber);
}

// third and fourth milestone
// function fibonacci(firstNumber) {
//    let lastresult=1;
//    let lastlastresult=0;
//     let result = 1;
//   if (firstNumber == 0) {
//     result = 0;
//   } else {
//     for (let i = 1; i < firstNumber; i++) {
//       result = lastresult + lastlastresult;
//       lastlastresult = lastresult;
//       lastresult = result;
//     }
//   }
//   document.getElementById("secondNumber").innerText = result;
// }

// 4.1 milestone
// function fibonacci(firstNumber) {
//   function recursion(firstNumber) {
//     if (firstNumber <= 1) {
//       return firstNumber;
//     } else {
//       return recursion(firstNumber - 1) + recursion(firstNumber - 2);
//     }
//   }
//   let j = recursion(firstNumber);
//   console.log(j);
//   document.getElementById("secondNumber").innerText = j;
// }

// //5 milestone
// function fibonacci(firstNumber) {
//   let http = new XMLHttpRequest();
//   const url = "http://localhost:5050/fibonacci/" + firstNumber;
//   http.open("GET", url, true);
//   http.send();
//   http.onreadystatechange = function() {
//     if (http.readyState == 4 && http.status == 200) {
//       const f = http.responseText;
//       console.log(JSON.parse(f).result);
//       document
//         .getElementById("secondNumber")
//         .classList.remove("red-server-error");
//       document.getElementById("secondNumber").innerText = JSON.parse(f).result;
//       document.getElementById("loading").classList.add("disapear");
//       document.getElementById("secondNumber").classList.remove("disapear");
//     } else {
//       document.getElementById("secondNumber").classList.add("red-server-error");
//       document.getElementById("secondNumber").innerText = "Server error ";
//       if (firstNumber == 42) {
//         document.getElementById("secondNumber").innerText =
//           "server error: 42 is the meaning of life";
//       }
//       document.getElementById("loading").classList.add("disapear");
//       document.getElementById("secondNumber").classList.remove("disapear");
//     }
//   };
// }

// //7 milestone
function fibonacci(firstNumber) {
  fetch("http://localhost:5050/fibonacci/" + firstNumber)
    .then(response => {
      return response.json();
    })
    .then(data => {
      document
        .getElementById("secondNumber")
        .classList.remove("red-server-error");
      document.getElementById("secondNumber").innerText = data.result;
      document.getElementById("loading").classList.add("disapear");
      document.getElementById("secondNumber").classList.remove("disapear");
      fibonnaciresult();
    })
    .catch(error => {
      document.getElementById("secondNumber").classList.add("red-server-error");
      document.getElementById("secondNumber").innerText = "Server error ";
      if (firstNumber == 42) {
        document.getElementById("secondNumber").innerText =
          "server error: 42 is the meaning of life";
      }
      document.getElementById("loading").classList.add("disapear");
      document.getElementById("secondNumber").classList.remove("disapear");
    });
}

function fibonnaciresult() {
  let i;
  fetch("http://localhost:5050/getFibonacciResults")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const sortedActivities = data.results.sort(
        (a, b) => b.createdDate - a.createdDate
      );
      let listActivities = [];
      for (let i = 0; i < sortedActivities.length - 1 && i <= 10; i++) {
        listActivities.push("The fibonacci of " +sortedActivities[i].number +" is " +sortedActivities[i].result +" done on " +new Date(sortedActivities[i].createdDate));

        // console.log(listActivities[i]);
      }
      document.getElementById("listResult").innerText="";
      for(let j=0;j<=listActivities.length-1;j++){
      var node = document.createElement("LI");              
      var textnode = document.createTextNode(listActivities[j]);        
      node.appendChild(textnode);                              
      document.getElementById("listResult").appendChild(node)
      }

      document.getElementById("loading-result").classList.add("disapear");
    });
}
