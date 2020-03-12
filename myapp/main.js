document.getElementById("mybutton").addEventListener("click", fibonacci);
function fibonacci() {
  mynumber = document.getElementById("myinput").value;
  fetch("http://localhost:3000/fibonacci/" + mynumber)
    .then(res => {
      return res.text();
    })
    .then(date => {
      document.getElementById("result").innerText = date;
    });

  fetch("http://localhost:3000/getFibonacciResults")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}
