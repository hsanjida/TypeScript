//primitive

let fullname: string = "John Doe";
let age: number = 30;
 export let isStudent: boolean = false;

console.log(`Name: ${fullname}, Age: ${age}, Is Student: ${isStudent}`);

//non-primitive 
// array
 let hobbies: string[] = ["Reading", "Traveling", "Gaming"];
console.log(`Hobbies: ${hobbies.join(", ")}`);

hobbies.push("Cooking");
console.log(`Updated Hobbies: ${hobbies.join(", ")}`);

//object
const person : {fullname: string, age: number, isStudent: boolean} = {
    fullname: "John Doe",
    age: 30,
    isStudent: true,
}

//tuples
let address: [string, number] = ["123 Main St", 12345];