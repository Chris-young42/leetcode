function createObj(o) {
  const clone = Object.create(o);
  clone.sayHobbies = function () {
    console.log(this.hob);
  };
  return clone;
}
const parent = {
  name: 1,
  hob: [2],
};
const child = createObj(parent);
child.sayHobbies();
child.hob.push(3);
console.log(child.hob);
console.log(parent.hob);

