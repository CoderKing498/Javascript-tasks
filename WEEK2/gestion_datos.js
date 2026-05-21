const prompt = require("prompt-sync")();
// let funds= 100000


// TASK 1: Array of objects
const products = [
    {
        ID: 1,
        name: "Big Mac",
        price: "22.900"
    },
    {
        ID: 2,
        name: "Perro Suizo",
        price: "22.900"
    },
    {
        ID: 3,
        name: "Pizza Quatro Formaggi",
        price: "22.900"
    },
    {
        ID: 4,
        name: "Spaghetti alla Puttanesca",
        price: "22.900"
    }
];

console.log("--- Products object ---");

console.log(products);

const product = products.find(p => p.ID === 3);
console.log(product);

// Task 2: Create Set with numbers list (includes repeated values)

const numbersArray = [2,4,2,5,1,5,1,5,3,7,1,3,4,8,9,0,5,4,5];
const onSet = new Set(numbersArray);
console.log("Set Content (duplicated deleted):", onSet);


// Add new number to the Set with .add()
onSet.add(6);
console.log("Set after adding the 6:", onSet);

// Checks if a specific number exists within the Set with .has().
const numeroUno = onSet.has(1);
console.log("Does the number 1 exist in the SET?:", numeroUno);

// Delete a number from the Set with .delete()
onSet.delete(5);
console.log("Set after removing 5:", onSet);

// Loop through the Set using a for…of to display each value.
console.log("Traversing the Set with for...of");
for(const number of onSet){
    console.log("Value:", number);
    //!number 5 will not appear because it was removed previously
}
/* TASK 3 Maps

// Create a Map that relates the product category (key) to the product name (value).
// Map from array of objects

*/
console.log("--- Operations with Map ---");
const newMap = products.map(product => [product.ID, product.name]);
const neoMap = new Map(products.map(product => [product.ID, product.name]));

console.log("Map Content: ", newMap);
console.log("Another Map Content", neoMap);

console.log("\n--- Iteration over data structures ----")

/*

Task 4:  Iteration over data structures:
//*Use for…in to list properties and values of the object.

*/
for (const product in products); // index of the product
console.log(product);
console.log(products[product]); // Object of products

//*Use for…of to loop through the Set.
for (const number of onSet) { 
console.log("Value:", number);
}
//*Use forEach() to loop through the Map and display keys and values descriptively.
console.log("-----------------");
newMap.forEach((name, id) => { 
console.log(`ID: ${id}, Name: ${name}`);
})
console.log("-----------------");
neoMap.forEach((name, id) => { 
console.log(`ID: ${id}, Name: ${name}`);
})
console.log("----------Task5-------------");


// task 5 Validation and testing:
//Implement validations to ensure that each product has a valid id, name and price.
for (const product of products) { 
if (!product.id || !product.name || product.price <= 0) { 
console.error(`Invalid product: ${JSON.stringify(product)}`); 
}
}

//Complete list of products (object)
console.log("--------------------------");
console.log(products);
//List of unique products (Set)
console.log("--------------------------");
console.log(onSet);
//Categories and product names (Map)
console.log(newMap);
console.log("--------------------------");
//Categories and product names (Map2)
console.log(neoMap);