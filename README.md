# FunctionalList.js

A 100% functional list implementation in js

- Pure Magic.
- 100% Based on λ expressions.
- Easy to use.

# Instalation

```sh
  $ npm i functional-list
```

# Example

```js
const { head, tail, List, print } = require("./FunctionalList");

const l = List(1, 2, 3, 5, 6, 7, 8);

const one = head(l); //one === 1
const two = head(tail(l)); //two === 2

print(l); //console.logs "List(1, 2, 3, 4, 5, 6, 7, 8)"
print(tail(l)); //console.logs "List(2, 3, 4, 5, 6, 7, 8)"
```

# How it works

Please read the code to understand until we write something here.
More is yet to come...
