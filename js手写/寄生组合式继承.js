function inheritPrototype(Child, Parent) {
  const prototype = Object.create(Parent.prototype);
  
  prototype.constructor = Child;
  Child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.hobbies = ["reading"];
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
inheritPrototype(Child, Parent);

const c = new Child("c", 10);
c.sayName(); // c
