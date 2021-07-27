//callbacks & foreach
const myFunc = (callbackFunc) => {
  //do something
  let value = 50
  callbackFunc(value)
}

myFunc((value) => {
  //do something
  console.log(value)
})

// what callback function does:
// pass a function into another function as an arguement, and at some point in another function, that callback function will probably be called and maybe passed value which we can take in.

//forEach is a method which iterate over an array
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

//below forEach method iterate through [people], for each element inside the array, it calls this callback function
people.forEach((person, index) => {
  console.log(index, person) //this will be called 5 times because there are 5 elements in the [people]
})

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson)
