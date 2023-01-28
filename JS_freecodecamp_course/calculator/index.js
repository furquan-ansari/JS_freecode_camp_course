let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let sumEl = document.getElementById('sum-el')
function add(){
console.log("add clicked");
sumEl.textContent = "Sum: " + (num1 + num2)
}

function substract(){
sumEl.textContent = "Subtracted: " + (num1 - num2)
}

function divide(){
    sumEl.textContent = "Divid: " + (num1 / num2)
}

function multiply(){
    sumEl.textContent = "Multiply: " + (num1 * num2)
}




