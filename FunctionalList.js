function Cell(first, second) {
  return (choice) => {
    if (choice === 1) return first;
    else if (choice === 2) return second;
  };
}

module.exports.head = function head(cell) {
  return cell(1);
};

module.exports.tail = function tail(cell) {
  return cell(2);
};

module.exports.List = function List(/**/) {
  const args = Array.from(arguments);
  const first = Cell(args.pop(), null);
  let list = first;
  while (args.length !== 0) {
    list = Cell(args.pop(), list);
  }
  return list;
};

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

module.exports.print = function print(list) {
  const head = module.exports.head;
  const tail = module.exports.tail;

  let str = "List(";

  (function print_h(string, list) {
    if (isFunction(list) && head(list) !== null) {
      string += String(head(list));
      if (isFunction(tail(list)) && head(tail(list)) !== null) string += ", ";
      print_h(string, tail(list));
    } else {
      string += ")";
      console.log(string);
    }
  })(str, list);
};
