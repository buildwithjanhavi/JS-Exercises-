//Question : program that takes three inputs from the user in a single execution: A string, An array of integers

//A year (number). The program should perform the following tasks:

//Count and display the number of vowels and consonants in the given string.

//Check whether the string is a palindrome.

//Generate and display the reversed version of the string.
//Find and display the second largest number from the given integer array.

//Determine whether the given year is a leap year.


let inputString = prompt("Enter a string:");
let year = +prompt("Enter a year:"); 


let nums = [8-12]; 


let vowelsCount = 0;
let consonantsCount = 0;
let reversedStr = "";


for (let i = 0; i < inputString.length; i++) {
    
    let char = inputString[i];
    
    
    let lowerChar = char.toLowerCase(); 
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        vowelsCount++;
    } 
    else if (lowerChar >= 'a' && lowerChar <= 'z') {
        consonantsCount++;
    }
}


for (let i = inputString.length - 1; i >= 0; i--) {
    
    reversedStr += inputString[i]; 
}

// 5. PALINDROME CHECK

if (inputString === reversedStr) {
    console.log(inputString + " is a palindrome.");
} else {
    console.log(inputString + " is not a palindrome.");
}

// 6. FIND SECOND LARGEST

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > largest) {
        secondLargest = largest; 
        largest = nums[i]; 
    } else if (nums[i] > secondLargest && nums[i] !== largest) {
        secondLargest = nums[i];
    }
}

// 7. LEAP YEAR DETERMINATION

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap Year");
} else {
    console.log(year + " is not a leap Year");
}



console.log("Vowels: " + vowelsCount);
console.log("Consonants: " + consonantsCount);
console.log("Reversed String: " + reversedStr);
console.log("Second Largest Number: " + secondLargest);