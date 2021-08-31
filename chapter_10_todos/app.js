//ADD TODOS
//1. get a reference to this form, and store it to a variable called addForm
const addForm = document.querySelector('.add');

//4. since we want to inject the template string into the <ul>, we need to get a reference of it
const list = document.querySelector('.todos');

//3. create a function to generate a template for the todo in <li> tag, and inject into the DOM.
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  //5. inject the template into the list
  list.innerHTML += html;
};

//2. attach a submit event listener to the form. We are not listening to the submit event, and we take the event as a parameter into the callback function
addForm.addEventListener('submit', e => {
  //below method prevents the web page from reloading
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//DELETE TODOS
//1. attach event listener to the list (ul)
//2. when we click on the element, we check whether the target element was 'delete' (the trash can)
//3. if it was, then remove the parent element of that trash can; if not we do nothing
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

//SEARCH TODOS
//1. get a reference of the input field directly (not the form with the class of search), becasue we are listening to a keyup event on the input, not a submit eventon the form.
const search = document.querySelector('.search input');

//4. create a function that filters out the todos that does not include the term and add a class to them; and filters out the todos that include the term and remove the class from them.
const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

//2. attach a keyup event listener to the input
search.addEventListener('keyup', e => {
  //3. get the user input, and trim it
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
