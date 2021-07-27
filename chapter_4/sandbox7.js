//get a reference to the 'ul'
const ul = document.querySelector('.people')

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

//set a variable html as an empty template string
let html = ``;

people.forEach(person=>{
  //create a html template for each person
  html += `<li style="color: purple">${person}</li>`
})
console.log(html)

ul.innerHTML = html;