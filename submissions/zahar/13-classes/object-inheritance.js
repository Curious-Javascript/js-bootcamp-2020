const obj = {
  firstName: 'text',
  lastName: 'text',
  fun() {
    console.log();
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set name(value) {
    this.firstName = value;
  },
};
console.log(obj.fullName);
console.log(obj.fun());
obj.name = 'Ivan';
console.log(obj.fullName);

// *** //

const animal = {
  eat() {
    console.log('eat');
  },
  walk() {},
};

const cat = {
  meow() {},
  __proto__: animal,
};
cat.eat();
cat.meow();

const dog = Object.create(animal);
dog.eat();

const tiger = Object.create(null); // || {}
Object.setPrototypeOf(tiger, animal);
