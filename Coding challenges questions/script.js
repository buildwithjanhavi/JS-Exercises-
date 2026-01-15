// Question 1: to  find number of vowels in a string. take the output from the user. 
let str = prompt("enter a string:"); 
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++; 
    }
}
console.log("total vowels are :", vowelCount);
