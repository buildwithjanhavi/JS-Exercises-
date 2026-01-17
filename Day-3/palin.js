// Question : Palindrome checker
let original = prompt("Enter a number or a sentence:"); 

let reversed = "";


for (let i = original.length - 1; i >= 0; i--) {
    
    reversed += original[i];
}


if (original === reversed) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}