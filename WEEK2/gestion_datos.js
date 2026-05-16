const prompt = require("prompt-sync")();
// let funds= 100000
let numbers = [2,4,2,5,1,5,1,5,3,7,1,3,4,8,9,0] // Array of numbers (new Set)
let newNumbers = [...new Set(numbers)] // New array with unique numbers using Set and spread operator
// Array of objects to create a new Map
const products = [
    {ID: 1,
    Name: "Big Mac", 
    Price: "22.900"},
    {ID: 2,
    Name: "Perro Suizo", 
    Price: "28.000"},
    {ID: 3,
    Name: "Pizza Quatro Formaggi", 
    Price: "37.700"},
    {ID: 4,
    Name: "Spaghetti alla Puttanesca", 
    Price: "52.000"},
]
const newProducts = new Map(products.map(product => [product.ID, product.Name])) // Relationates Product ID
    console.log("Numbers")
    for(const number of newNumbers){
        console.log("-", number)
    }

let options // Option as undefined to ini(tialixe while loop that contains menu
while(options!= 4){
    console.log("\n1) Browse goods \n2) Buy here \n3) Number list \n4) Validation buys \n5) Exit ")
    option= parseInt(prompt(`Choose one `))
    if (option == 1){
        // Iterates array of objets with for.. in
        for (product in products){
            console.log(products(product)) // Shows each element
        }
        // With for.. of, showing keys and value for each object with .entries
        for (const [key, value] of newProducts.entries()) {  // Iterates the Map with .entries to show keys and values
            console.log(`${key}: ${value}`);
        }

        // With forEach, using arrow function to show each element of the array of objects
        products.forEach(product => console.log(`ID: -> ${product.ID} - -> Name: ${product.Name} - -> Price: ${product.Price}`))
        console.log("----------------------------------")
        newProducts.forEach((ID, Name) => console.log(`ID: -> ${ID} - -> Name: ${Name}`)) // Iterates the Map with .forEach to show keys and values
    }
    else if (option == 2){
        toPurchase = prompt("Product ID to buy: ").toLowerCase().trim()
        quantity = parseInt(prompt("Quantity: "))
        for(product of products){
            if(product['Name'] === toPurchase){
                console.log(`You have bought ${quantity} ${product['Name']} for a total of ${quantity * parseInt(product['Price'])}`)
                let total = quantity * parseInt(product['Price'])
                confirm = prompt("Purchase? y/n >>").toLowerCase().trim()
                if (funds >= product['Price'] && confirm === "y"){
                    funds -= total
                    console.log("\nPurchased successfully! Your remaining funds are: ", funds)
                }else if (funds < product['Price']){
                    console.log("\nInsufficient funds. Please add more funds to complete the purchase.")
                }

            }
        else if (option == 3){
            console.log("Numbers")
            for(const number of newNumbers){
                console.log("-", number)
            }

        }
        else if (option == 4){
            console.log("Validation buys")
        }
        else if (option == 5){
            console.log("Exit")
        }
    }
}
}