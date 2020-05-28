class Animal {
  name = 'default';

  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log('eat');
  }

  walk() {}

  debug(text) {
    console.log(text);
  }

  sayMyName() {
    console.log(this.name);
    this.debug('say my name executed.');
  }

  sayMyType() {
    console.log(this.type);
  }

  get animalName() {
    // getter
    console.log(this.name);
    return `${this.name} ${this.type}`;
  }

  set animalName(text) {
    // setter
    this.name = text;
    console.log(text);
  }
}

// instantiating
const animal = new Animal('kind');
console.log(animal);
animal.animalName = 'newName';
console.log(animal);

// inheritance
class Cat extends Animal {
  constructor(...args) {
    super(...args); // overloading parent constructor
    this.debug('cat was created');
  }

  eatBread() {
    super.eat(); // using parent method
    console.log('kitty eats');
  }

  meow() {
    console.log('meow');
  }
}

// instantiating
const kitty = new Cat('wild');
console.log(kitty);
kitty.eat();
kitty.eatBread();
