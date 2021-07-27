//Object in Arrays

// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50},
// ]

// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50},
  ],
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  },
  logBlogs() {
    console.log('this user has written the following blogs')
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes)
    })
  },
}

user.logBlogs()
// console.log(this)
