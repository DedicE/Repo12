// Only change code below this line
function sumFibonacci(num){
    var firsttwo = [0, 1];
    var sumoffibo = 1;
    var counter = itterateupfibo (counter)

                    function itterateupfibo(counter) {
                        return firsttwo[firsttwo.length - 2] +
                                firsttwo[firsttwo.length - 1]
                    }
                    while (counter <= num) {
                        firsttwo.push(counter);
                        if (counter % 2 != 0) { sumoffibo += counter;}
                        counter = itterateupfibo(counter)
                    }

                    return sumoffibo;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;