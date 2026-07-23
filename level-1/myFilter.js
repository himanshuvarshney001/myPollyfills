console.log("Jai Bholenath");
// Array.prototype.myfilter;
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
       if (!(i in this)) continue;
        if (callback(this[i], i, this))
            result.push(this[i]);
    }
    return result;
};
const arr = [
    {
        name: "himanshu",
        clas: "MCA",
    },
    {
        name: "Mayank",
        clas: "MCA"
    },
    {
        name: "Vivek",
        clas: "Btech"
    },
    { 
        name:"Ram"
    }
];
const result = arr.myFilter(({ name, clas }) => clas === "MCA");
console.log(result);

