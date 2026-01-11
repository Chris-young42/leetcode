class subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  constructor(data) {
    this.data = data;
  }
  update(data) {
    console.log(data);
  }
}

const obj1=new Observer(1)
const obj2=new Observer(2)
const OBBB=new subject()
OBBB.addObserver(obj1)
OBBB.addObserver(obj2)
OBBB.notify(11111)
