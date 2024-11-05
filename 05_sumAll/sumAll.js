const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
        
    let smallerNumber = Math.min(num1, num2);
    let biggerNumber = Math.max(num1, num2);
    
    num1 = smallerNumber;
    num2 = biggerNumber;

    let addNum = num1 + 1;
    let sumNum = num1;

    for(let i = 1; i < num2; i++) {
        sumNum += addNum;
        addNum++;
    }

    return sumNum;
};

console.log(sumAll(4,1));


// Do not edit below this line
module.exports = sumAll;
