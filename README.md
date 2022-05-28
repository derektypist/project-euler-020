# Project Euler 020 - Factorial Digit Sum

`n!` means `n x (n-1) x ... x 3 x 2 x 1`

For example, `10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800`, and the sum of the
digits in the number `10!` is `3 + 6 +2 + 8 + 8 + 0 + 0 = 27`.

The aim is to find the sum of digits in the number `100!` and other numbers (e.g. 20!).

Information at [Project Euler 020](https://projecteuler.net/problem=20)

## UX

**Getting Started**

Enter a whole number between 0 and 500 and click on the Submit Button.  You will see the number entered as well as the sum of the digits in the number factorial, unless you have made an invalid input.  For example, if you entered 10, you would expect to get 27.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Entering text other than a number
- Not enter anything in the input field
- Entering a number less than 0 or greater than 500
- Entering a number, but it is not an integer

As a user, I expect the function `sumFactorialDigits(10)` to return a number.

As a user, I expect the function `sumFactorialDigits(10)` to return 27.

As a user, I expect the function `sumFactorialDigits(25)` to return 72.

As a user, I expect the function `sumFactorialDigits(50)` to return 216.

As a user, I expect the function `sumFactorialDigits(75)` to return 432.

As a user, I expect the function `sumFactorialDigits(100)` to return 648.

**Information Architecture**

The function `sumFactorialDigits(n)` returns a number, where `n` is a number between 0 and 500.

## Features

Allows the user to enter a number as well as getting the sum of the digits of the number factorial.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.  In JavaScript, `BigInt` is used.

