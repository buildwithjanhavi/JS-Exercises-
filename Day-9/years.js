//Create a function that takes the age in years and returns the age in days.
let ageInYears = +prompt("Enter your age in years:"); 


function convertYearsToDays(years) {
    return years * 365;
}


let ageInDays = convertYearsToDays(ageInYears);
console.log(ageInDays);