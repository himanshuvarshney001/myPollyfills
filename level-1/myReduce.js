console.log("Jain bolenath");
// in reduce initial value opetional
Array.prototype.myReduce = function (callback, init) {
    let ans, i;
    if (this.length <= 0 && arguments.length < 2) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    else if (this.length === 0 && arguments.length >= 2)
        return init;
    if (arguments.length >= 2) {
        ans = init;
        i = 0;
    }
    else {
        i = 1;
        ans = this[0];
    }
    for (i; i < this.length; i++) {
        ans = callback(ans, this[i], i, this);
    }
    return ans;
}
const ans = [1, 2, 3];
const ans1 = [];
// console.log(ans1.reduce((acc, ele) => acc + ele));
const result = ans1.myReduce((acc, ele) => acc + ele,[])
console.log(result);