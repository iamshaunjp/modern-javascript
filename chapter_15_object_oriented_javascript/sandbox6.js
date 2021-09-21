// constructor functions - how class works under the hood

function User(username, email){
  this.username = username
  this.email = email
  this.login = function(){
    console.log(`${username} has logged in`)
  }
}

//  class User {
//    constructor(username, email){
//      this.username = username
//      this.email = email
//    }
//  }

 const userOne = new User('mario', 'mario@learn.ca')
 const userTwo = new User('luigi','luigi@learn.ca')

 console.log(userOne, userTwo)

 userOne.login()