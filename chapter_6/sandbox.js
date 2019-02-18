// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});





