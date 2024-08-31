// Task 1: Variables and Data Types

let employeeName = "Jon Snow";
const employeeID = 101;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["DragonGlass", "Crown", "DireWolf"];
const productDetails = {
    productName: products,
    price: 99.99,
    inStock: true,
}

console.log(products, productDetails);



// Task 3: Assignment Operators

let accountBalance = 1000;
console.log("Account Balance:", accountBalance); // accountBalance = 1000

accountBalance += 500; // accountBalance = 1500
console.log("Updated Account Balance:", accountBalance);

accountBalance -= 200; // accountBalance = 1300
console.log("Updated Account Balance:", accountBalance);

accountBalance *= 2; // accountBalance = 2600
console.log("Updated Account Balance:", accountBalance);

accountBalance /= 5 //accountBalance = 520
console.log("Updated Account Balance:", accountBalance);

accountBalance %= 50; // accountBalance = 20
console.log("Updated Account Balance:", accountBalance);



// Task 4: Comparison Operators

let employeeScore1 = 9.9;
let employeeScore2 = 6.3; 

console.log(employeeScore1 > employeeScore2); // Output: True
console.log(employeeScore1 < employeeScore2); // Output: False
console.log(employeeScore1 >= employeeScore2); // Output: True
console.log(employeeScore1 <= employeeScore2); // Output: False
console.log(employeeScore1 === employeeScore2); // Output: False
console.log(employeeScore1 !== employeeScore2); // Output: True