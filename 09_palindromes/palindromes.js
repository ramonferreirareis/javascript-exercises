const palindromes = function (string) {
    const rawString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedString = string.split("").reverse().join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    if (rawString === reversedString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
