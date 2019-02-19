// protype.yabbaDabba = function () {
//   console.log('Yabba dabba doo!');
// };

// protype.speak = function () {
//   console.log(['Hello, my name is', `${name}`]);
// };


class Parent {
  constructor(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  yabbaDabba() {
    console.log('Yabba dabba doo!');
  }
  
  speak() {
    return `Hello, my name is ${this.name}`;
  }
  
}


const fred = new Parent({
  'gender': 'Male',
  'age': 35,
  'name': 'Fred',
  'homeTown': 'Bedrock'
});



const wilma = new Parent({
  'gender':'Female', 
  'age': 37,
  'name': 'Wilma',
  'homeTown': 'Bedrock'
});

console.log("***** Parents *****");
console.log("1.", fred);
console.log("2.", fred.speak());
console.log("3.", wilma);
console.log("4.", wilma.speak());

class Child extends Parent {
  constructor(childAttributes) {
    super(childAttributes);
    this.isChild = childAttributes.isChild; // a special attribute to Child
  }

  checkIfChild() {
    if(this.isChild) {
      return `My name is ${this.name}.\nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
    }
  }
  
}


// protype.checkIfChild = function() {
//   if(isChild) {
//     console.log(`My name is ${name}.`);
//     // \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;);
//   }
// };

// protype = Object.create(Parent.protype);

const pebbles = new Child({
  'gender': 'Female',
  'age': 3,
  'name': 'Pebbles',
  'homeTown': 'Bedrock',
  isChild: true
  });

console.log("***** Child *****");
console.log("5.", pebbles);
console.log("6.", pebbles.speak());
console.log("7.", pebbles.checkIfChild());
console.log("8.", pebbles.yabbaDabba());