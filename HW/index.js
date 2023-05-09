// 1.

//function printDelayed() {
//  setTimeout(() => {
//    console.log("Hello, world!");
//  }, 5000);
//}

//printDelayed(); 

// 2.

//let data = { name: 'Serhii', age: 25 };


//function fetchData() {
 
//  console.log('Дані успішно оновлено!');
//}


//setTimeout(fetchData, 10000);

// 3.

//function getTimeRemaining() {
//  const now = new Date();
//  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
//  const remainingTime = endOfDay.getTime() - now.getTime();
//  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
//  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
//  const seconds = Math.floor((remainingTime / 1000) % 60);
//  return { hours, minutes, seconds };
//}

//function displayTimeRemaining() {
//  const { hours, minutes, seconds } = getTimeRemaining();
//  console.log(`Залишилось ${hours} годин, ${minutes} хвилин, ${seconds} секунд до кінця дня`);
//}

//setInterval(displayTimeRemaining, 5000);

// 4.

//function getCurrentTime() {
//  const now = new Date();
//  const hours = now.getHours().toString().padStart(2, '0');
//  const minutes = now.getMinutes().toString().padStart(2, '0');
//  const seconds = now.getSeconds().toString().padStart(2, '0');
//  return `${hours}:${minutes}:${seconds}`;
//}

//console.log(getCurrentTime());

// 5.

//function getCurrentDate() {
//  const date = new Date();
//  const day = date.getDate();
//  const month = date.getMonth() + 1;
//  const year = date.getFullYear();
//  return `${day}.${month}.${year}`;
//}
//console.log(getCurrentDate());

// 6.

//function daysToNewYear() {
//  const today = new Date();
//  const nextYear = new Date(today.getFullYear() + 1, 0, 1);
//  const msPerDay = 24 * 60 * 60 * 1000; // кількість мілісекунд у дні
//  const daysLeft = Math.round((nextYear - today) / msPerDay);

//  return daysLeft;
//}
//console.log(`До Нового року залишилось ${daysToNewYear()} днів!`);


