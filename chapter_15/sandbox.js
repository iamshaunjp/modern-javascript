class User {
  constructor(username, email){
    // this.username = 'mario';
    this.username = username;
    this.email = email;
  }
}

const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
const userTwo = new User('mario', 'mario@thenetninja.co.uk');

console.log(userOne, userTwo);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object