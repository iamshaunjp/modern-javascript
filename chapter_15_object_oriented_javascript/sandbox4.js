// class inheritance (subclasses)
 class User {
  constructor(username, email){
    this.username = username
    this.email = email
    this.score = 0
  }
  login(){
    console.log(`${this.username} just logged in`)
    return this
  }
  logout(){
    console.log(`${this.username} just logged out`)
    return this
  }
  increScore(){
    this.score ++
    console.log(`${this.username} has a score of ${this.score}`)
    return this
  }
}

class Admin extends User {
   deleteUser(userBeingDeleted){
    users = users.filter(user => user.username !== userBeingDeleted.username)
   }
}

const userOne = new User('mario', 'mario@learn.ca')
const userTwo = new User('luigi','luigi@learn.ca')
const userThree = new Admin('shaun','shaun@learn.ca')


let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)
console.log(users)