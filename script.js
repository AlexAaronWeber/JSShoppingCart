class Product {
    constructor  (name, price){
        this.name = name;
        this.price = price;
    }
    getProduct(){
        return `${this.name} is $${this.price}`; 
    }
}

// let Products = [
//     {
//         id: 0,
//         name: "Paper Clips",
//         price: 2.99
//     },
//     {
//         id: 1,
//         name: "Box of Pens",
//         price: 3.49
//     },
//     {
//         id:2,
//         name: "Box of Pencils",
//         price: 3.99
//     },
//     {
//         id: 3,
//         name: "Loose Leaf Paper",
//         price: 4.99
//     },
//     {
//         id:4,
//         name: "Notebook",
//         price:4.49
//     },
//     {
//         id:5,
//         name: "Calculator",
//         price : 49.99
//     },
//     {
//         id: 6,
//         name: "3080 TI",
//         price: 749.99
//     }
// ]

ShoppingCart = [];

function addItemToCart(name,price){
    let count = prompt("How many would you like??");
    for(let i = 0; i<count; i++){
        let newProduct = new Product (name, price);
        ShoppingCart.push(newProduct);
        //console.log(ShoppingCart);
    }
}

function displayReceipt(){
    let total = 0;
    ShoppingCart.forEach((p) => {
        console.log(`${p.name}  ${p.price}`)
        total += p.price;
    });
    console.log(`Your total is: ${total.toFixed(2)}`)
    let tax = 0.06;
    let grandTotal = (total +(total*tax)).toFixed(2);
    console.log(`Tax: ${(total*tax).toFixed(2)}`)
    console.log(`Grand Total: ${grandTotal}`)
}