console.log("Jai Bholenath");
// return true when first element meet the condition;
const arr = [1, 2, 3, 4, 5];
console.log(arr.some((value, index) => value > 10));
console.log(arr.some((ele) => ele > 10));

Array.prototype.mySome = function (callback) {
    if (typeof callback !== "function")
        throw new TypeError("this is not a function");
    for (let i = 0; i < this.length; i++)
    {
        if (callback(this[i], i, this))
            return true;
    }
    return false;
}
console.log(arr.mySome(ele => ele > 10));
console.log(arr.mySome(ele => ele < 3));
