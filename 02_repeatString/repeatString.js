const repeatString = function(string, num) {
    if (num === 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        let repeatedString = string;
        for (i = 1; i < num; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
