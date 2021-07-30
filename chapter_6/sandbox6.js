//add, remove, toggle classes


// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

const content = document.querySelectorAll('p')

content.forEach((p) => {
  if (p.textContent.includes('error')) {
    p.classList.add('error')
  }
  if (p.textContent.includes('success')) {
    p.classList.add('success')
  }
})

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');