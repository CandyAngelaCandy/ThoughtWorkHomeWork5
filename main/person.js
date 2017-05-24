// Write your code here
module.exports = Person;

function Person(name,age){
   this.name=name;
   this.age=age;
   this.introduce= () => {
     return `My name is ${this.name}. I am ${this.age} years old.`
   };
}




