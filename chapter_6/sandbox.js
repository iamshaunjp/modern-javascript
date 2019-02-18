const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});