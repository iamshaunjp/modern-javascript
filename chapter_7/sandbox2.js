const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = "that username is valid";
  } else {
    //feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long";
  }
});

form.username.addEventListener('keyup', e=>{
  // console.log(e.target.value, form.username.value)
  if(usernamePattern.test(e.target.value)){
    // console.log('passed')
    form.username.setAttribute('class', 'success');
  } else {
    // console.log('failed')
    form.username.setAttribute('class', 'error')
  }
})
