// program to reverse each word in a sentence while maintaining the word order. 
let str = prompt("Enter your sentence:"); 
let result = "";
let currentWord = "";


for (let i = 0; i < str.length; i++) {
    
    
    if (str[i] !== " ") {
        currentWord += str[i];
    }

   
    if (str[i] === " " || i === str.length - 1) {
        let reversed = "";
        
        
        for (let j = currentWord.length - 1; j >= 0; j--) {
            reversed += currentWord[j];
        }
        
        
        result += reversed + (str[i] === " " ? " " : "");
        
        
        currentWord = "";
    }
}

console.log(result);