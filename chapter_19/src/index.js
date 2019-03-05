// import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);
