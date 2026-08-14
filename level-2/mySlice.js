console.log("Jai Bholenath");
// slice is method of Array instance return the shallow copy of the portion of the array
// Syntax
// 0) arr.slice();
// 1) arr.slice(start);
// 2) arr.slice(start,end) // end is optional and not included

const arr = [1, 2, 3, 4,5];
// console.log(arr.slice(0, 0));
// console.log(arr.slice(-2,2));
Array.prototype.mySlice = function (start = 0, end = this.length) {
    if (start < 0)
        start = this.length + start;
    if (end < 0)
        end = this.length + end;
    // slice() mein agar calculated start 0 se bhi chhota ho, to start ko 0 treat kiya jata hai.
    start = Math.max(0, start);
    end = Math.min(end, this.length);
    const ans = [];
    for (let i = start; i < end; i++)
    {
        ans.push(this[i]);
    }
    return ans;
}
console.log(arr.mySlice(-2));  
console.log(arr.mySlice(-3));  
console.log(arr.mySlice(-4, -1));
console.log(arr.mySlice(-3, -1)); 
console.log(arr.mySlice(-5, -2)); 
console.log(arr.mySlice(-2, 5)); 
console.log(arr.mySlice(-10, 3));
console.log(arr.slice(-10, 3));
console.log(arr.slice(-2,5))