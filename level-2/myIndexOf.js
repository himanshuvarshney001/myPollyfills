console.log("Jai Bhole nath");
// myIndexOf(value);
// myIndexOf(value,startIndex);

Array.prototype.myIndexOf = function(value,index=0){
    for (let i = index; i < this.length; i++)
    {
        if (this[i] === value)
            return i;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myIndexOf(4));
