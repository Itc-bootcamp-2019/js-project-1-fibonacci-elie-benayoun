// //second milestone
// function firstMilestone() {
//   document.getElementById("n1").innerText = "8";
//   document.getElementById("n2").innerText = "21";
// }
fibonnaciresult();
document.getElementById("mybtn").addEventListener("click", myNumberFibonacci);
document
  .getElementById("select-result")
  .addEventListener("click", fibonnaciresult);
function myNumberFibonacci() {
  document.getElementById("secondNumber").classList.add("result-style");
  document.getElementById("secondNumber").classList.remove("red-server-error");
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
  if (document.getElementById("myCheck").checked === false) {
    myfibonacci(firstNumber);
  } else {
    fibonacci(firstNumber);
  }
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
function myfibonacci(firstNumber) {
  function recursion(firstNumber) {
    if (firstNumber <= 1) {
      return firstNumber;
    } else {
      return recursion(firstNumber - 1) + recursion(firstNumber - 2);
    }
  }
  setTimeout(function() {
    if (firstNumber <= 0) {
      document.getElementById("secondNumber").innerText =
        "server error :can't be less than 0";
      document.getElementById("secondNumber").classList.add("red-server-error");
      document.getElementById("secondNumber").classList.remove("result-style");
    } else if (firstNumber == 42) {
      document.getElementById("secondNumber").innerText =
        "server error :42 is the meaning of life";
      document.getElementById("secondNumber").classList.add("red-server-error");
      document.getElementById("secondNumber").classList.remove("result-style");
    } else {
      let j = recursion(firstNumber);
      console.log(j);
      document.getElementById("secondNumber").innerText = j;
    }

    document.getElementById("secondNumber").classList.remove("disapear");
    document.getElementById("loading").classList.add("disapear");
    document.getElementById("loading-result").classList.add("disapear");
  }, 1000);
}

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

// // milestone 6 and 7 with fetch without save butto
// function fibonacci(firstNumber) {
//   fetch("http://localhost:5050/fibonacci/" + firstNumber)
//     .then(response => {
//       if (response.status === 400) {
//         return response.text();
//       } else {
//         return response.json();
//       }
//     })
//     .then(data => {
//       if (typeof data === "object") {
//         document.getElementById("secondNumber").innerText = data.result;
//         fibonnaciresult();
//       } else {
//         document
//           .getElementById("secondNumber")
//           .classList.add("red-server-error");
//         document.getElementById("secondNumber").innerText =
//           "Server error: " + data;
//         document.getElementById("loading-result").classList.add("disapear");
//       }
//       document.getElementById("loading").classList.add("disapear");
//       document.getElementById("secondNumber").classList.remove("disapear");
//     });
// }

// function fibonnaciresult() {
//   let i;
//   fetch("http://localhost:5050/getFibonacciResults")
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       const sortedActivities = data.results.sort(
//         (a, b) => b.createdDate - a.createdDate
//       );
//       document.getElementById("listResult").innerText = "";
//       for (let i = 0; i <= sortedActivities.length - 1 && i <= 10; i++) {
//         let node = document.createElement("LI");
//         node.innerHTML = `The fibonacci of
//             <b>${sortedActivities[i].number}</b>
//             is
//             <b>${sortedActivities[i].result}</b>
//             done on
//             ${new Date(sortedActivities[i].createdDate)}`;
//         document.getElementById("listResult").appendChild(node);
//       }

//       document.getElementById("loading-result").classList.add("disapear");
//     });
// }
// milestone 7.1 and 8 with save button

async function fibonacci(firstNumber) {
  let response = await fetch("http://localhost:5050/fibonacci/" + firstNumber);
  if (response.status === 400 || response.status === 500) {
    data = await response.text();
  } else {
    data = await response.json();
  }
  if (typeof data === "object") {
    document.getElementById("secondNumber").innerText = data.result;

    fibonnaciresult();
  } else {
    document.getElementById("secondNumber").classList.add("red-server-error");
    document.getElementById("secondNumber").innerText = "Server error: " + data;
    document.getElementById("loading-result").classList.add("disapear");
    document.getElementById("secondNumber").classList.remove("result-style");
  }
  document.getElementById("secondNumber").classList.remove("disapear");
  document.getElementById("loading").classList.add("disapear");
}

async function fibonnaciresult() {
  let response = await fetch("http://localhost:5050/getFibonacciResults");
  data = await response.json();
  if (document.getElementById("select-result").selectedIndex == "3") {
    data.results = data.results.sort((a, b) => b.createdDate - a.createdDate);
  } else if (document.getElementById("select-result").selectedIndex == "2") {
    data.results = data.results.sort((a, b) => a.createdDate - b.createdDate);
  } else if (document.getElementById("select-result").selectedIndex == "0") {
    data.results = data.results.sort((a, b) => a.number - b.number);
  } else {
    data.results = data.results.sort((a, b) => b.number - a.number);
  }

  document.getElementById("listResult").innerText = "";
  for (let i = 0; i <= data.results.length - 1 && i <= 100; i++) {
    let list = document.createElement("LI");
    let fibo = document.createElement("DIV");
    let number = document.createElement("DIV");
    let is = document.createElement("DIV");
    let my_result = document.createElement("DIV");
    let done = document.createElement("DIV");
    let date = document.createElement("DIV");

    fibo.innerHTML = "The Fibonnaci Of ";
    number.innerHTML = `${data.results[i].number}`;
    is.innerHTML = " is ";
    my_result.innerHTML = `${data.results[i].result}`;
    done.innerHTML = ". Calculated at:  ";
    date.innerHTML = `${new Date(data.results[i].createdDate)}`;

    list.appendChild(fibo);
    list.appendChild(number);
    list.appendChild(is);
    list.appendChild(my_result);
    list.appendChild(done);
    list.appendChild(date);

    fibo.className = "inline-div";
    number.className = "bold-number";
    is.className = "inline-div";
    my_result.className = "bold-number";
    done.className = "inline-div";
    date.className = "inline-div";
    document.getElementById("listResult").appendChild(list);
  }

  document.getElementById("loading-result").classList.add("disapear");
}

function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) { 
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
