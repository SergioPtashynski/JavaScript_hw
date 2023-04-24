// 1.

//function factorial(n) {
//    if (n === 0 || n === 1) { 
//      return 1;
//    } else { 
//      return n * factorial(n - 1);
//    }
//  }
//  console.log(factorial(7)); 


// 2.

//function isPalindrome(word) {
    
//    if (word.length <= 1) {
//      return true;
//    }
    
//    if (word[0] === word[word.length - 1]) {
//      return isPalindrome(word.slice(1, word.length - 1));
//    } else {
//      return false;
//    }
//  }
//  console.log(isPalindrome('madam')); 
//  console.log(isPalindrome('sportcar')); 


// 3. 

//function increaseLessThanAverage(arr) {
//    const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
//    const result = [];
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i] < avg) {
//        result.push(arr[i] + 1);
//      }
//    }
//    return result;
//  }
  
//  const arr = [1, 2, 3, 4, 5];
//  const result = increaseLessThanAverage(arr);
//  console.log(result); 


// 4.

//function findLongestWord(sentence) {
//    const words = sentence.split(" ");
  
//    let longestWord = "";
//    let longestLength = 0;
  
//    for (let i = 0; i < words.length; i++) {
//      if (words[i].length > longestLength) {
//        longestWord = words[i];
//        longestLength = words[i].length;
//      }
//    }
  
//    return `${longestWord} (${longestLength} letters)`;
//  }
    
//  const sentence = "Коли я був у парку, я побачив дивовижну птаху з яскравими кольоровими оперенням.";
//  const longestWord = findLongestWord(sentence);
//  console.log(longestWord); 


// 5.

//function filterDuplicates(arr) {
//    let duplicates = [];
    
//    for (let i = 0; i < arr.length; i++) {
//      for (let j = i + 1; j < arr.length; j++) {
//        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//          duplicates.push(arr[i]);
//        }
//      }
//   }
    
//    return arr.filter((item) => !duplicates.includes(item));
//  }
  
//  const originalArray = [1, 2, 3, 4, 3, 2, 5];
//  const filteredArray = filterDuplicates(originalArray);
//  console.log(filteredArray); // [1, 4, 5]
  