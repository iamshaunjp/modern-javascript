// prototypal inheritance

function User(username, email){
  this.username = username
  this.email = email
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`)
  return this
}
User.prototype.logout = function(){
  console.log(`${this.username} has logged out`)
  return this
}

function Admin(username, email, title){
  User.call(this, username, email)
  this.title = title
}

Admin.prototype = Object.create(User.prototype)
 const userOne = new User('mario', 'mario@learn.ca')
 const userTwo = new User('luigi','luigi@learn.ca')
 const userThree = new Admin('shaun', 'shaun@learn.ca', 'expert')

 Admin.prototype.deleteUser = function(){
   // delete a user
 }

 console.log(userOne, userTwo, userThree)

 userOne.login().logout()