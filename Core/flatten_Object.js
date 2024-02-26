let Obj = {
  name: "Sudhanshu",
  age: 24,
  address: {
    city: "Delhi",
    pinCode: 110092,
  },
};

function flattedObj(Obj, parent, res = {}) {
  for (let key in Obj) {
    let propName = parent ? parent + "_" + key : key;
    if (typeof Obj[key] === "object") {
      flattedObj(Obj[key], propName, res);
    } else {
      res[propName] = Obj[key];
    }
  }
  return res;
}

const Updatedobject = flattedObj(Obj);
console.log(Updatedobject);
