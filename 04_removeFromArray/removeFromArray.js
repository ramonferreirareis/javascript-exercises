const removeFromArray = function(array, ...numberToRemove) {
    const filteredArray = array.filter(value => !numberToRemove.includes(value));
    return filteredArray;
}








// Do not edit below this line
module.exports = removeFromArray;
