#!/usr/bin/env node

function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return String(number);
  }
}

for (let i = 1; i <= 20; i++) {
  console.log(fizzbuzz(i));
}