// Only change code below this line
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    } else if (startNum < endNum){
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    } else {
        return nothing = "The starting number will always be less than or equal to the ending number";
    }
};
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); //0
console.log(rangeOfNumbers(3, 10)); //[3, 4, 5, 6, 7, 8, 9, 10];
console.log(rangeOfNumbers(5, 5)); //6
console.log(rangeOfNumbers(7, 5)); //15

module.exports = rangeOfNumbers;