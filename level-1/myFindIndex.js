console.log("Jai Bholenath ki");
const arr = [1, 2, 3, 4, 5];
// console.log(arr.findIndex((ele) => ele === 7));

Array.prototype.myFindIndex = function (callback) {
    if (typeof callback !== "function")
        throw new TypeError(callback + "not a function");
    for (let i = 0; i < this.length; i++)
    {
        if (callback(this[i],i, this))
            return i;
    }
    return -1;
}
console.log(arr.myFindIndex((ele)=>ele===8));