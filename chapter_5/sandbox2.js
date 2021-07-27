//adding methods to the object

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login: function () {
    console.log('the user logged in')
  },
  logout: function() {
    console.log('the user logged out')
  }
}

user.login()
user.logout()

