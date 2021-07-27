//arguements & parameters
const speak = function (name = 'luigi', time = 'night') {
  console.log(`good ${time} ${name}`)
}


// speak('mario', 'morning')
speak()

//Note: 
// 1. the name variable has a local scope and cannot be accessed outside of the function

// 2. the order is important. The order of the arguements must match the order of the parameters.