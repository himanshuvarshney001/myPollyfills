console.log("Jai bholenath");
const arr = [1, 2, 4];
Array.prototype.myEvery = function (callback) {
    if (typeof callback !== "function")
        throw new TypeError("this is not a function");
    for (let i = 0; i < this.length; i++)
    {
        if (!callback(this[i], i, this))
            return false;
    }
    return true;
}
console.log(arr.myEvery(ele => ele < 5));