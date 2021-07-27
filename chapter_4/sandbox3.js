//returning values

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2
  return area //area now is a returned value, but a local scope and cannot be accessed outside of the function
}

//below is short form
const calcArea2 = function (radius) {
  return 3.14 * radius ** 2
}

const area = calcArea(5) //set the returned value to a new constant, and it now has a global scope

console.log(area) //now we can use the value outside of the function


