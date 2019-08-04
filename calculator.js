// function greeting() {
//     var name = 
// }


function add() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    sum = num1 + num2;
    document.getElementById("sumAnswer").innerHTML = sum;
}

function multiply() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    product = num1 * num2;
    document.getElementById("productAnswer").innerHTML = product;
}

function divide() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    quotient = num1 / num2;
    document.getElementById("quotientAnswer").innerHTML = quotient;
}


function subtract() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    difference = num1 - num2;
    document.getElementById("differenceAnswer").innerHTML = difference;
}