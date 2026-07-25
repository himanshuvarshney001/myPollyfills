console.log("Jai Bholenath");
Array.prototype.myfind = function (callback) {
    if (this === undefined || this ===null)
        throw new TypeError("Apply Array.prototype.myFind apply on null or undefined");
    if (typeof callback !== "function")
        throw new TypeError(callback + "is not a function");
    for (let i = 0; i < this.length; i++)
    {
        if (callback(this[i], i, this))
            return this[i];
    }
    return undefined;
}

const objArray = [
    { name: "himanshu", age: 22 },
    { name: "harsh", age: 24 },
    { name: "Vandana", age: 26 },
]

console.log(objArray.myfind(({ name }) => name === "himanshu"));