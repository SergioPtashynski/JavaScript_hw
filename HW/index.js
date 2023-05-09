// 1.
//const myCat = {
//  name: 'марс',
//  species: 'дворняга',
//  age: 1,
// characteristics: ['грайливий', 'спокійний', 'незалежний', 'чистоплотний']
//};

//console.log(myCat);

// 2.
//function displayCatProperties(cat) {
//  for (let property in cat) {
//    console.log(property + ': ' + cat[property]);
//  }
//}

//displayCatProperties(myCat);

// 3.

//function changeCatProperty(cat, property, value) {
//  cat[property] = value;
//}

//console.log('До зміни:', myCat);
//changeCatProperty(myCat, 'age', 4);
//console.log('Після зміни:', myCat);

// 4.

//const car1 = {
//  brand: 'Toyota',
//  model: 'Camry',
//  year: 2021,
//  features: ['leather seats', 'sunroof', 'backup camera'],
//};

//const car2 = {
//  brand: 'Honda',
//  model: 'Accord',
//  year: 2022,
//  features: ['heated seats', 'moonroof', 'blind spot camera'],
//};

//if (car1 === car2) {
//  console.log('Ці дві машини однакові');
//} else {
// console.log('Ці дві машини різні');
//}

// 5.

//const myObject = {
//  name: 'John',
//  age: 30,
//  city: 'New York',
//};

//function deleteProperty(obj, prop) {
//  delete obj[prop];
//}

//console.log('До видалення:', myObject);

//deleteProperty(myObject, 'age');

//console.log('Після видалення:', myObject);

// 6. 

//const user = {
//  name: 'Serhii Murcielago',
//  email: 'smurcielago@example.com',
//  password: 'mypassword123',
//  age: 25,
//  address: {
//    street: 'Chersonska street',
//    city: 'Kyiv',
//    zip: '777',
//    country: 'UA'
//  }
//};

//console.log(user);

// 7.

//function checkPassword(user, password) {
//  return user.password === password;
//}

//const user = {
//  name: 'Serhii Murcielago',
//  email: 'smurcielago@example.com',
//  password: 'mypassword123',
//  age: 25,
//  address: {
//    street: 'Chersonska street',
//    city: 'Kyiv',
//    zip: '777',
//    country: 'UA'
//  }
//};

//const inputPassword = 'mypassword123';
//console.log(checkPassword(user, inputPassword)); // true

//const wrongPassword = 'wrongpassword';
//console.log(checkPassword(user, wrongPassword)); // false

// 8.

//function printObjectProperties(obj) {
//  for (let prop in obj) {
//    console.log(`${prop}: ${obj[prop]}`);
//  }
//}

//const myObject = {
//  name: 'John',
//  age: 30,
//  gender: 'male'
//};

//printObjectProperties(myObject);

// 9.

//const onlineShop = {
//  name: 'My Online Shop',
//  address: 'Chersonska Street',
//  products: [
//    {
//      name: 'Laptop',
//      price: 1000,
//      brand: 'Apple'
//    },
//    {
//      name: 'Smartphone',
//      price: 800,
//      brand: 'Samsung'
//    },
//    {
//      name: 'Tablet',
//      price: 500,
//      brand: 'Microsoft'
//   }
//  ]
//};

//console.log(onlineShop);

// 10.



// 11. 

//let postOffice = {
//  address: "вул. Шевченка, 1, м. Київ",
//  workHours: "пн-пт: 9:00 - 18:00, сб: 9:00 - 16:00",
//  packages: [
//    { id: 1, sender: "Сергій Олександрович", recipient: "Сергій Васильович", status: "відправлено" },
//    { id: 2, sender: "Сергій Васильович", recipient: "Сергій Сергійович", status: "доставлено" },
//    { id: 3, sender: "Сергій Сергійович", recipient: "Сергій Олександрович", status: "передано до відділення" },
//  ],
//};
//console.log(postOffice);

// 12.


