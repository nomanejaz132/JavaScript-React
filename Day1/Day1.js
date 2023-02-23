// 1
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(8, 6));

// 2
const greeting = (name) => {
  return `Hello, ${name}`;
};

console.log(greeting('JavaScript'));

// 3
let sum = 0;
const sumOfArray = (arr) => {
  arr.map((i) => (sum += i));
  return sum;
};

console.log(sumOfArray([1, 2, 3, 4, 5]));

// 4
const calculateBMI = (w, h) => {
  return w / (h * h);
};

console.log(calculateBMI(72, 1.79));

// 5
const lengthOfString = (str) => {
  return str.length;
};

console.log(lengthOfString('JavaScript'));

// 6
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseString('hello world'));

// 7
const greetingUser = (user) => {
  return `Hello ${user.firstName} ${user.lastName}!`;
};

console.log(greetingUser({ firstName: 'Usman', lastName: 'Ejaz' }));

// 8
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize('javaScript'));

// 9

const arrayCapitalize = (arr) => {
  return arr.map((i) => i.toUpperCase());
};

console.log(arrayCapitalize(['javascript', 'python', 'java', 'kotlin']));

// 10
const isPalindrome = (str) => {
  const strReverse = str.split('').reverse().join('');
  return str === strReverse;
};

console.log(isPalindrome('non'));
