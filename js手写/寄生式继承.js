function createObj(o) {
  const clone = Object.create(o);
  clone.sayHobbies = function () {
    console.log(this.hob);
  };
  return clone
}
const parent={
    name:1,
    
}
