const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

// get documents
db.collection('recipes').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    addRecipe(doc.data(), doc.id);
  });
}).catch(err => {
  console.log(err);
});

// save documents
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('recipes').add(recipe).then(() => {
    console.log('recipe added');
  }).catch(err => {
    console.log(err);
  });
});

// deleting data
list.addEventListener('click', e => {
  // console.log(e)
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    db.collection('recipes').doc(id).delete().then(() => {
      console.log('recipe deleted');
    });
  }
});