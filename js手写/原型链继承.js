// 原型链继承
function Parent() {
  this.ParentProp = "父亲示例";
}

Parent.prototype.parentMethod = function () {
  console.log(1);
};
function Child() {
  this.ChildProp = "子类示例属性";
}

Child.prototype = new Parent();
Child.prototype.constructor =Child
const Child1 = new Child();
console.log(Child1.ParentProp);