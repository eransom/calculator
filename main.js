

var outputArea = document.querySelector("#result");
var firstEntry = []
console.log(firstEntry)
var operator = []
console.log(operator)
var secondEntry = []



function getNumber (numberClicked) {
  outputArea.innerHTML = numberClicked;
}

function add (operatorClicked) {
  firstEntry.push(parseInt(outputArea.innerHTML));
  operator.push("+")
  outputArea.innerText = ""
}

function subtract () {
  firstEntry.push(parseInt(outputArea.innerHTML));
  operator.push("-")
  outputArea.innerText = ""
}


function mult () {
  firstEntry.push(parseInt(outputArea.innerHTML));
  operator.push("*")
  outputArea.innerText = ""
}

function divide () {
  firstEntry.push(parseInt(outputArea.innerHTML));
  operator.push("/")
  outputArea.innerText = ""
}


function getTotal (equalClicked) {
  secondEntry.push(parseInt(outputArea.innerHTML));
  if (operator[0] === "+") {
    z = +firstEntry + +secondEntry;
  } else if (operator[0] === "-") {
    z = +firstEntry - +secondEntry;
  } else if (operator[0] === "*") {
    z = +firstEntry * +secondEntry;
  } else if (operator[0] === "/") {
    z = +firstEntry / +secondEntry;
  }
  outputArea.innerText = z
  console.log(getTotal);
}
