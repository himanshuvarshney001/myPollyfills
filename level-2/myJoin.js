// The join() method of Array instances returns a new string that is the concatenation of all elements in this array, separated by commas or a specified separator string. If the array has only one item, that item's stringification is returned without using the separator.

console.log("Jai Bholenath");
// syntax of join
// 1) arr.join();
// 2) arr.join(sep);

Array.prototype.myJoin = function (sep = ",") {
    if (this.length === 0)
        return "";
    if (this.length === 1)
        return String(this[0]);
    const ans=this.reduce((acc, value) => acc + sep + value, "");
    return ans.slice(1);
}

const arr = [1, 2, 3, 4];
console.log(arr.myJoin("|"));
