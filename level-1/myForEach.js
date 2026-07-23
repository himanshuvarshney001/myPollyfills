// Array.prototype.myforEach
console.log("Jai Bolenath, Jai jagnnath");
Array.prototype.myForEach = function (callbackFunction){
    for (let i = 0; i < this.length; i++)
        callbackFunction(this[i],i,this);
};

console.log("--------- Test Case-1 ---------")
function print(a) {
    console.log(a);
}
print(10, 20, 30);


console.log("--------- Test Case-2 ---------");
const arr = ["A", "B", "C"];
arr.myForEach((value, index) => {
    console.log(value, index);
});

console.log("----------Test Case-3 ---------");
const arr1 = [10, 20];
arr1.myForEach((value, index, array) => {
    console.log(array === arr1);
});


console.log("--------Test Case-4------------");
const arr2 = [1, 2, 3, 4];
let sum = 0;
arr2.myForEach((value) => {
    sum += value;
});
console.log(sum);

console.log("---------Test Case-5-----------");
const arr3 = [];
arr3.myForEach((value) => {
    console.log(value);
});
console.log("Done");


console.log("---------Test Case -6----------");
const users = [
    { name: "Alice" },
    { name: "Bob" }
];
users.myForEach((user) => {
    console.log(user.name);
});


console.log("-------Test Caes -7----------");
const arr4 = [1, 2, 3];
arr.myForEach((value, index, array) => {
    array[index] = value * 10;
});
console.log(arr);


console.log("--------Test Case -8 ---------");
const arr5 = [1, 2, 3];
const result = arr.myForEach((value) => value * 2);
console.log(result);


console.log("-------Test case -9----------");
const arr = [5, 10, 15];
let count = 0;
arr.myForEach(() => {
    count++;
});
console.log(count);


console.log("------Test Case -10---------");
const arr = ["JavaScript", "Polyfill"];
arr.myForEach((word) => {
    console.log(word.toUpperCase());
});

// Array.prototype.myMap
//Normal working of map
// const arr1 = [1, 2, 3, 4, 5];
// const result = arr1.map((ele) => ele * 2);
// console.log(result);

// myMap
// Array.prototype.myMap = function (callBack) {
//     const result = [];
//     for (let i = 0; i < this.length; i++)
//         result.push(callBack(this[i]));
//     return result;
// }
// const result = arr1.myMap((ele) => ele * 2);
// console.log(result);

//myFilter
// Normal function work on array and return filetered items fileter on the basis of user condition
// const arr = [2, 3, 4, 5, 7, 3, 0];
// // const result = arr.filter((ele) => ele % 2 === 0)
// // console.log(result);

// Array.prototype.myfilter = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++)
//     {
//         if (callback(this[i],i))
//             result.push(this[i]);
//     }
//     return result;
// }
// const result = arr.myfilter((value,index) => value % 2 === 0 && index>0);
// console.log(result);