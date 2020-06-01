import user from './user';
import * as test from './testRamda';

const user1 = new user();
const user1FullName = user1.getFullName('f', 's');

console.log(user1FullName);
