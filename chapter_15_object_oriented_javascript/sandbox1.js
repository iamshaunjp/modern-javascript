 class User {
   constructor(username, email){
     //set up properties
     this.username = username
     this.email = email
   }
 }

 const userOne = new User('mario', 'mario@learn.ca')
 const userTwo = new User('luigi','luigi@learn.ca')

 console.log(userOne, userTwo)

 // the 'new' keyword
 // 1 - it creates a new empty object {}
 // 2 - it binds the value of 'this' keyword to the new empty object
 // 3 - it calls the constructor function to 'build' the object