const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
        
    let smallerNumber = Math.min(min, max);
    let biggerNumber = Math.max(min, max);
    
    min = smallerNumber;
    max = biggerNumber;

    let addNum = min + 1;
    let sumNum = min;

    for(let i = min; i < max; i++) {
        sumNum += addNum;
        addNum++;
    }

    return sumNum;
};

console.log(sumAll(5,10));


// Do not edit below this line
module.exports = sumAll;
