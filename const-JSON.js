
const products = {
    "newlyAdded": [
        { "key": "clothes:100", "id": "100", "category": "clothes", "price": "1000" },
        { "key": "watches:200", "id": "200", "category": "watches", "price": "500" },
        { "key": "clothes:300", "id": "300", "category": "clothes", "price": "100" },
        { "key": "shoes:400", "id": "400", "category": "shoes", "price": "250", "brand": "nike" },
        { "key": "shoes:500", "id": "500", "category": "shoes", "price": "1000", "brand": "adidas" },
        { "key": "shoes:600", "id": "600", "category": "shoes", "price": "1000", "brand": "adidas" }
    ]
};


// console.log(products);
// console.log(products.newlyAdded[0]);

// products.newlyAdded.forEach(product => console.log(product.id));

products.newlyAdded
    .filter(product => product.key.split(":")[1] > 300)
    .forEach(product => console.log(product));

// products.newlyAdded.forEach(product => console.log(product.key.split(":")[1] > 300));