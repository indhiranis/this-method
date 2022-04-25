function display(name,age){
    this.name="jk";
    this.age=25;
}
const person=new display();
display.prototype.gender="male"//syntax to add an object constructor function (objectConstructorName.prototype.key="value";)
console.log(person.prototype);
console.log(person.gender);