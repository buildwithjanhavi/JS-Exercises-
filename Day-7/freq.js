// Question : Find the maximum occurring element in an array.

let nums = [11-14]; 
let counts = {}; 
let maxElement = null; 
let maxCount = 0;


for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    
    if (counts[currentNum] === undefined) {
        counts[currentNum] = 1; 
    } else {
        counts[currentNum]++; 
    }

  
    if (counts[currentNum] > maxCount) {
        maxCount = counts[currentNum];
        maxElement = currentNum;
    }
}

console.log("The maximum occurring element is:", maxElement); // -3 mostly answer hoga 