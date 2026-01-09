function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const parent = {
  name: "1",
};
const Child1 = createObj(parent);
console.log(Child1.name);
