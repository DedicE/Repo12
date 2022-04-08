// Only change code below this line
function myRecursion(array, i) {
    if(i <= 0){
        return 0;
    } else {
        return myRecursion(array, i - 1) + array[i - 1];
    }
}; 
console.log(myRecursion([1], 0)) //0
console.log(myRecursion([1, 2, 3, 4], 2)) //3
console.log(myRecursion([1, 2, 3, 4], 3)) //6
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5)) //15
// Only change code above this line


