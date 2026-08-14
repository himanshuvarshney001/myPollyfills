console.log("Jai Bhole nath");

Array.prototype.myLastIndexOf = function(value,index=this.length-1){
    for (let i = index; i >=0; i--)
    {
        if (this[i] === value)
            return i;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myLastIndexOf(4));
