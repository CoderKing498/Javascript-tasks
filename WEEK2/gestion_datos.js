const prompt = require("prompt-sync")();
// let funds= 5000
let numbers = [2,4,2,5,1,5,1,5,3,7,1,3,4,8,9,0] // Arrsy of numbers (new Set)

// Array de objetos para crear un nuevo Map
const products = [
    {ID: 1,
    nombre: "Big Mac", 
    precio: "22.900"},
    {ID: 2,
    nombre: "Perro Suizo", 
    precio: "28.000"},
    {ID: 3,
    nombre: "Pizza Quatro Formaggi", 
    precio: "37.700"},
    {ID: 4,
    nombre: "Spaghetti alla Puttanesca", 
    precio: "52.000"},
]
const newProducts = new Map(products.map(product.ID, product.Name)) // Relationates Product ID
    console.log("Numbers")
    for(const number of newNumbers){
        console.log("-", number)
    }

let option // Option as undefined to initialixe while loop that contains menu
