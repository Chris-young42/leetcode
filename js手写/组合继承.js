//组合继承

function Parent(name) {
  this.ParentProp = name;
  this.hobbie = ["吃吃"];
}
// Parent.prototype.ParentMethod11 = function () {
//   console.log(9);
// };
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
const Child111 = new Child(1, 1);
console.log(Child111.hobbie);
console.log(Child111.ParentProp);
console.log(Child111.age);
// Child111.ParentMethod11();
