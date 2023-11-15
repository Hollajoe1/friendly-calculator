function handClick(value){
  var displayElement = document.getElementById("display");
  displayElement.value += value;
}

function clearDisplay(){
  document.getElementById("display").value = "";
}

function calculateResult(){
  var displayElement = document.getElementById("display");
  displayElement.value = eval(displayElement.value);
}

