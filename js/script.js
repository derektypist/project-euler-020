// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<0 || num> 500 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 0 and 500.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The sum of the digits in the number ${num}! is ${sumFactorialDigits(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
     Function to Find Factorial of a given number n
     bigIntFactorial(1) returns 1
     bigIntFactorial(2) returns 2
*/
function bigIntFactorial(n) {
    return n<=1 ? BigInt(1) : BigInt(n) * bigIntFactorial(n-1);
}

/*
    Function to return the sum of the digits in the factorial of n
    sumFactorialDigits(10)  returns 27
    sumFactorialDigits(100) returns 648
*/
function sumFactorialDigits(n) {
    return bigIntFactorial(n).toString().split('').reduce((a,b) => a + Number(b),0);
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo") = txt;
}