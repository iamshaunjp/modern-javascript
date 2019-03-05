console.log('dom.js file');

// dom queries
const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
};

const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

const contact = 'mario@thenetninja.co.uk';

// styleBody();
// addTitle('hello, world from dom.js');

export { styleBody, addTitle, contact };