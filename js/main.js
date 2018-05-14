//myArray with 5 diff strings
var myArray = [ 'sam', 'ariana', 'glenda', 'christian', 'william'];
console.log('myArray');

// for loop through every string
for(var i = 0; i < myArray.length; i++) {
    console.log(myArray[i].length);
};
myArray.reverse();
console.log(myArray);

var mySecondArray = [33, 44, 11, 99, 22];
// sort the array smallest to biggest
mySecondArray.sort();
console.log(mySecondArray);

//sort the array biggest to smallest
mySecondArray.sort().reverse();
console.log(mySecondArray);

//an array with 3 strings
var myThirdArray = ['appple', 'orange', 'peach'];
myThirdArray.push('pinapple', 'watermelon');
console.log(myThirdArray);

//remove the first string with shift() method
myThirdArray.shift();
console.log(myThirdArray);