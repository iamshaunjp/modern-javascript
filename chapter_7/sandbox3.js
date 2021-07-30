const para = document.querySelector('p');

// para.innerText += 'ninjas are awesome!'

const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text'
// })

const content = document.querySelector('.content');

// console.log(content.innerHTML)

// content.innerHTML += '<h2>This is the new h2</h2>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`
})