import * as R from 'ramda';

const list = ['a', 'b'];
const result = R.map((text) => `${text}, ${text}`, list);

console.log(result);