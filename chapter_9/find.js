//FIND method - iterate an array and fire a callback function for each item in the array. As soon as it passes a certain condition(i.e. the item is over 50), it will return that value and it won't carry on through the rest of the values in the array.

//In short, it finds out the first value that passes a certain condition and ignore the rest
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find((score) => score > 50);

console.log(firstHighScore)