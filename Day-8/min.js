let minutes = +prompt("Enter minutes to convert:");

function convertToSeconds(min) {
    return min * 60;
}


let result = convertToSeconds(minutes);
console.log(result);