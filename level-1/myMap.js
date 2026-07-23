console.log("Jai BholeNath");
Array.prototype.myMap = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++)
        result.push(callBack(this[i],i,this));
    return result;
}
// ===============================================
// Test Case 1 - Double Numbers
// ===============================================
console.log("========== Test Case 1 ==========");
const arr1 = [1, 2, 3];
console.log(arr1.myMap((value) => value * 2));
// Expected:
// [2,4,6]
// ===============================================

// Test Case 2 - Square Numbers
// ===============================================
console.log("\n========== Test Case 2 ==========");
const arr2 = [2, 3, 4];
console.log(arr2.myMap((value) => value * value));
// Expected:
// [4,9,16]
// ===============================================

// Test Case 3 - Convert to String
// ===============================================
console.log("\n========== Test Case 3 ==========");
const arr3 = [1, 2, 3];
console.log(arr3.myMap((value) => value.toString()));
// Expected:
// ["1","2","3"]
// ===============================================

// Test Case 4 - Uppercase Strings
// ===============================================
console.log("\n========== Test Case 4 ==========");
const arr4 = ["js", "react", "node"];
console.log(arr4.myMap((word) => word.toUpperCase()));
// Expected:
// ["JS","REACT","NODE"]
// ===============================================

// Test Case 5 - Objects
// ===============================================
console.log("\n========== Test Case 5 ==========");
const users = [
    { name: "Alice" },
    { name: "Bob" }
];
console.log(users.myMap((user) => user.name));
// Expected:
// ["Alice","Bob"]
// ===============================================

// Test Case 6 - Using Index
// ===============================================
console.log("\n========== Test Case 6 ==========");
const arr6 = [10, 20, 30];
console.log(arr6.myMap((value, index) => value + index));
// Expected:
// [10,21,32]
// ===============================================

// Test Case 7 - Using Original Array
// ===============================================
console.log("\n========== Test Case 7 ==========");
const arr7 = [1, 2, 3];
console.log(arr7.myMap((value, index, array) => value + array.length));
// Expected:
// [4,5,6]
// ===============================================

// Test Case 8 - Empty Array
// ===============================================
console.log("\n========== Test Case 8 ==========");
const arr8 = [];
console.log(arr8.myMap((value) => value));
// Expected:
// []
// ===============================================
// Test Case 9 - Boolean Mapping
// ===============================================

console.log("\n========== Test Case 9 ==========");
const arr9 = [1, 2, 3];
console.log(arr9.myMap((value) => value % 2 === 0));
// Expected:
// [false,true,false]
// ===============================================

// Test Case 10 - Mixed Data Types
// ===============================================
console.log("\n========== Test Case 10 ==========");
const arr10 = [1, "Hello", true];
console.log(arr10.myMap((value) => typeof value));
// Expected:
// ["number","string","boolean"]
// ===============================================

// Test Case 11 - Nested Arrays
// ===============================================
console.log("\n========== Test Case 11 ==========");
const arr11 = [[1], [2], [3]];
console.log(arr11.myMap((value) => value[0] * 10));
// Expected:
// [10,20,30]
// ===============================================

// Test Case 12 - Return Objects
// ===============================================
console.log("\n========== Test Case 12 ==========");
const arr12 = [1, 2, 3];
console.log(arr12.myMap((value) => ({ number: value })));
// Expected:
// [{number:1},{number:2},{number:3}]
// ===============================================

// Test Case 13 - Return Arrays
// ===============================================
console.log("\n========== Test Case 13 ==========");
const arr13 = [1, 2, 3];
console.log(arr13.myMap((value) => [value, value * 2]));
// Expected:
// [[1,2],[2,4],[3,6]]
// ===============================================

// Test Case 14 - Original Array Should Not Change
// ===============================================
console.log("\n========== Test Case 14 ==========");
const arr14 = [1, 2, 3];
const mapped14 = arr14.myMap((value) => value * 100);
console.log(mapped14);
console.log(arr14);
// Expected:
// [100,200,300]
// [1,2,3]
// ===============================================

// Test Case 15 - Single Element
// ===============================================
console.log("\n========== Test Case 15 ==========");
const arr15 = [50];
console.log(arr15.myMap((value) => value + 1));
// Expected:
// [51]
// ===============================================

// Test Case 16 - Return undefined
// ===============================================
console.log("\n========== Test Case 16 ==========");
const arr16 = [1, 2, 3];
console.log(arr16.myMap(() => undefined));
// Expected:
// [undefined,undefined,undefined]
// ===============================================

// Test Case 17 - Return null
// ===============================================
console.log("\n========== Test Case 17 ==========");
const arr17 = [1, 2];
console.log(arr17.myMap(() => null));
// Expected:
// [null,null]
// ===============================================

// Test Case 18 - Return NaN
// ===============================================
console.log("\n========== Test Case 18 ==========");
const arr18 = [1, 2];
console.log(arr18.myMap(() => NaN));
// Expected:
// [NaN,NaN]
// ===============================================

// Test Case 19 - Callback Called Correct Number of Times
// ===============================================
console.log("\n========== Test Case 19 ==========");
const arr19 = [1, 2, 3, 4];
let count = 0;
arr19.myMap(() => {
    count++;
});
console.log(count);
// Expected:
// 4
// ===============================================

// Test Case 20 - Array of Functions
// ===============================================
console.log("\n========== Test Case 20 ==========");
const arr20 = [
    () => 10,
    () => 20,
    () => 30
];
console.log(arr20.myMap((fn) => fn()));
// Expected:
// [10,20,30]
console.log("\n🎉 All myMap Test Cases Completed.");