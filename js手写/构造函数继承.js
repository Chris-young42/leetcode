// 构造函数继承
function Parent(name) {
  this.ParentProp = name;
  this.hobbie = ["吃吃"];
}
Parent.prototype.parentMethod1 = function () {
  console.log("1"); //无法拿到
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

const Child11 = new Child("shfdg", 1);
console.log(Child11.ParentProp);
