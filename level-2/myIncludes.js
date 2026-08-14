console.log("Jai Bholenath");
// this is a method of Array instance determine the particular value is exist or not 
// includes return always true and false if value is present then return true otherwise return false
// Syntax
// 1) arr.myIncludes(searchElement)
// 2) arr.myIncludes(searchElement,startIndex);

Array.prototype.myIncludes = function (value,index=0){
    for (let i = index; i < this.length; i++)
    {
        if (this[i] === value || (Number.isNaN(this[i]) && Number.isNaN(value)))
            return true;
    }
    return false;
}

const arr = [1, 2, 3, 4];
console.log(arr.myIncludes(5));

console.log([NaN].myIncludes(NaN));