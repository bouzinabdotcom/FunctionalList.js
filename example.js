const { head, tail, List, print } = require("./FunctionalList");

const l = List(1, 2, 3, 5, 6, 7, 8);

const one = head(l); //one === 1
const two = head(tail(l)); //two === 2

print(l); //console.logs "List(1, 2, 3, 4, 5, 6, 7, 8)"
print(tail(l)); //console.logs "List(2, 3, 4, 5, 6, 7, 8)"
