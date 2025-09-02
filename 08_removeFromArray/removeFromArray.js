const removeFromArray = function(arr, ...valsToRemove) {
    // index = arr.findIndex(num=> num===n);
    // arr.splice(index,1);
    // return arr;
    return arr.filter(ele => !valsToRemove.includes(ele));

};
removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);



// Do not edit below this line
module.exports = removeFromArray;
