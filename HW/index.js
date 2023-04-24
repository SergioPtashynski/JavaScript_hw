// 1. 

//function getHypotenuse(a, b) {
    

//    let sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2);
//    let hypotenuse = Math.sqrt(sumOfSquares);
//    
//    return hypotenuse;
//  }

//  let a = 6;
//  let b = 8;
//  let c = getHypotenuse(a, b);
  
//  console.log("Гіпотенуза прямокутного трикутника з катетами " + a + " та " + b + " дорівнює " + c);
  
// 2.

//function getRandomNumber(min, max, precision) {
    
//    let randomNumber = Math.random() * (max - min) + min;
//    let roundedNumber = +randomNumber.toFixed(precision);
    
//    return roundedNumber;
//  }
//  let randomNum = getRandomNumber(5, 3, 9);
  
//  console.log("Випадкове число з точністю до 2 знаків після коми: " + randomNum);

// 3.

//function reverseArray(arr) {
    
//    let reversedArray = arr.reverse();
//    return reversedArray;
//  }
  
//  let numbers = [1, 2, 3, 4, 5];
//  let reversedNumbers = reverseArray(numbers);
  

//  console.log("Масив чисел у зворотному порядку: " + reversedNumbers);
  
// 4.

//function sumEvenNumbers(arr) {
    
//    let evenNumbers = arr.filter(function(num) {
//      return num % 2 === 0;
//    });
    
//    let sum = evenNumbers.reduce(function(total, num) {
//      return total + num;
//    }, 0);
    
//    return sum;
//  }
  
//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let sumOfEvenNumbers = sumEvenNumbers(numbers);
  
//  console.log("Масив чисел: " + numbers);
//  console.log("Сума парних чисел у масиві: " + sumOfEvenNumbers);

// 5.


// 6.

//function multiplicationTable(number) {
//    for (let i = 1; i <= 10; i++) {
//      let result = number * i;
//      console.log(number + " * " + i + " = " + result);
//    }
//  }
  
//  multiplicationTable(5);

// 7.

//function uniqueNumbers(numbers) {
//    let unique = [];
  
//    for (let i = 0; i < numbers.length; i++) {
//      if (unique.indexOf(numbers[i]) === -1) {
//        unique.push(numbers[i]);
//      }
//    }
  
//    return unique;
//  }
  
//  let numbers = [1, 2, 3, 2, 4, 3, 5];
//  let unique = uniqueNumbers(numbers);
//  console.log(unique); 

// 8.

//function findLongestString(arr) {
//    let longest = "";
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i].length > longest.length) {
//        longest = arr[i];
//      }
//    }
//    return longest;
//  }
//  console.log (findLongestString(["mercedes", "bus", "refrigerator"]))

// 9.


// 10.

//function toLowerCaseArray(arr) {
//    const lowerCaseArr = [];
//    for (let i = 0; i < arr.length; i++) {
//      lowerCaseArr.push(arr[i].toLowerCase());
//    }
//    return lowerCaseArr;
//  }

//const arr = ["MeRCeDes", "BaNaNa", "UKRaine"];
//const lowerCaseArr = toLowerCaseArray(arr);
//console.log(lowerCaseArr); 

// 11.

//function average(numbers) {
//    let sum = 0;
//    for (let i = 0; i < numbers.length; i++) {
//      sum += numbers[i];
//    }
//    return sum / numbers.length;
//  }

//const numbers = [5, 5, 25, 35];
//console.log(average(numbers)); 

