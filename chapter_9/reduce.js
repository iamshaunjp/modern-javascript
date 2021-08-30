//REDUCE method - return a single value based on the accumulator, which we can add to it as we iterate the array
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((accumulator, current) => {
//   if (current > 50) {
//     accumulator++;
//   }
//   return accumulator;
// }, 0);
// console.log(result);

const scores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

const marioTotal = scores.reduce((acc, curr)=>{
  if(curr.player === 'mario'){
    acc += curr.score //adding the current score to the accumulator
  }
  return acc
},0)

console.log(marioTotal)