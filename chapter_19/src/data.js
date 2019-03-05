const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false }
];

// export default users;

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};

export { getPremUsers, users as default };