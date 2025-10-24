const removeFromArray = function(array, ...removals) {

    const newArray = [];
    array.forEach((item) => {
        if (!removals.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
