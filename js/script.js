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