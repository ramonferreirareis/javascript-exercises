const fibonacci = function(num) {
   let fib1 = 1;
   let fib2 = 1;
   let sum = 0;
   
   if (typeof num != "number") {
    num = Number(num);
   }

   if (num < 0) return "OOPS";
   if (num === 0) return 0;

   if (num <= 2) {
    return 1;
   } else {
    num -= 2;
    for(let i = 0; i < num; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
       }
   }

   return sum;
};


// Do not edit below this line
module.exports = fibonacci;
