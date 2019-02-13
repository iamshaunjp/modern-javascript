// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));