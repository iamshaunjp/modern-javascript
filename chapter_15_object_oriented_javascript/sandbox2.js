 class User {
  constructor(username, email){
    this.username = username
    this.email = email
  }
  login(){
    console.log(`${this.username} just logged in`)
  }
  logout(){
    console.log(`${this.username} just logged out`)
  }
}

const userOne = new User('mario', 'mario@learn.ca')
const userTwo = new User('luigi','luigi@learn.ca')

console.log(userOne, userTwo)
userOne.logout()
userTwo.logout()
