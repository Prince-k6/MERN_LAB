//1.define a car object

let car = {
    make: "Toyota",
    model: "Corrola",
    year: 2022
}

//2.Print the original object and its properties
console.log("\n-----original object-----");
console.log("Car details : ", car);
console.log("propertes : ", Object.keys(car));

//3.delete the second property model
delete car.model;

//4.print the object after deletion to verify
console.log("\n-----After Deletion-----");
console.log("Car details : ", car);
console.log("propertes : ", Object.keys(car));

//5.get and print the length of object
const objectLength = Object.keys(car).length;
console.log("\nThe length of object is : ", objectLength);




