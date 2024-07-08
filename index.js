// 1. Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// 2. Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// 4. Write a function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = 'some initial value';

// 6. Write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will cause an error
}
