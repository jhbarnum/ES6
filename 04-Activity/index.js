// 1. const can be used for values which we will not reassign
//const age = 25;

//let age = 25;
//TypeError: Assignment to constant variable.
// age++;
// console.log(age);
// const name = "";

// TypeError: Assignment to constant variable.
// name = "Cherie";

// --------------------------------------------------------------------------

// 2. const doesn't mean `constant value`, instead means `constant reference`

// Unlike primitive data types, objects and arrays are passed by reference, rather than passed by value
const beatles = ["John", "Paul", "Ringo"];
beatles.push("George");

// This works because by updating an array's contents, we aren't changing the reference to the underlying array
console.log(beatles); // Prints `["John", "Paul", "Ringo", "George"]`

console.log(beatles);

const person = { name: "Brianna", age: 11 };
// person.age++;
// person.favoriteMovie = "Spider-Man";
// person.name = "Carla";

// console.log(person); // Prints `{ name: 'Carla', age: 12, favoriteMovie: 'Spider-Man' }`
//person = { name: "jon", age: 11 }; Breaks

console.log(person); 
// // --------------------------------------------------------------------------

// // 3. While we can MODIFY arrays and objects that are using `const`, we can't reassign them

const item = {
  id: 23,
  title: "Underwater Basket-Weaving DVD",
  price: "$17.99"
};

item.price = "$1.99";

console.log(item);

// // This breaks, we can modify `item`, but we can't reassign it all together

// // TypeError: Assignment to constant variable.
// item = {
//   id: 11,
//   title: "Underwater Basket-Weaving Shoes",
//   price: "$101.43"
// };

const ninjaTurtles = [];

// The same rules apply to arrays, we can MODIFY them, but not completely reassign them

// TypeError: Assignment to constant variable.
//ninjaTurtles = ["Michaelangelo", "Leonardo", "Raphael", "Donatello"];

ninjaTurtles.push("Michaelangelo", "Leonardo", "Raphael", "Donatello", "steve", "Tony");

console.log(ninjaTurtles)
