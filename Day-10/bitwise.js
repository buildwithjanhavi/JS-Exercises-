let num1 = +prompt("Enter first number:"); 
let num2 = +prompt("Enter second number:");



// Bitwise AND Function
function calculateBitwiseAND(n1, n2) {
    return n1 & n2; 
}

// Bitwise OR Function
function calculateBitwiseOR(n1, n2) {
    return n1 | n2;
}

// Bitwise XOR Function
function calculateBitwiseXOR(n1, n2) {
    return n1 ^ n2;
}


let resultAND = calculateBitwiseAND(num1, num2);
let resultOR = calculateBitwiseOR(num1, num2);
let resultXOR = calculateBitwiseXOR(num1, num2);


console.log("Bitwise AND Result: " + resultAND);
console.log("Bitwise OR Result: " + resultOR);
console.log("Bitwise XOR Result: " + resultXOR);