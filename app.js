function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 5));
console.log(addition(-3, -6));
console.log(addition(7, 3));

function hoursIntoSeconds(hour) {
    return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));


function calcPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(3, 2));
console.log(calcAreaOfTriangle(10, 10));
console.log(calcAreaOfTriangle(20, 20));

function appendFrontend(string) {
    return string + 'Frontend';
}

console.log(appendFrontend('Apple'));
console.log(appendFrontend('Banana'));
console.log(appendFrontend('Orange'));


function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

function lessThanOrEqualToZero(number) {
    return number <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

function isNotZero(num) {
    return num !== 0;
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(""));

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4,2));
console.log(calcRemainder(7,8));
console.log(calcRemainder(9,8));

function isOdd(number) {
    return number % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

function isLoggedInAndSubscribed(`LOGGED_IN`, `SUBSCRIBED`) {
    if `LOGGED_IN` 
}
