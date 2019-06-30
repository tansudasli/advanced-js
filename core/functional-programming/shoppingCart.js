//shopping cart
const user = {
    name: 'Kim',
    active: true,
    basket: [],
    purchases: []
};


//we need at least 4 function. so use rambda or lodash library !!
const compose = (f, g) => (...args) => f(g(...args));

//compose
purchase(
    emptyBasket,
    buy,
    applyTax,
    addToBasket
)(user, {id: '100', name: 'nike air max shoes', price: 300});

//it will go on left2right functions continuously
function purchase(...fns) {
    //do not change user object !be pure
    const pipe = fns.reduce(compose);
    console.log(pipe);

    return pipe;
}

function addToBasket(user, item) {
    //maybe previous items in the basket
    const updatedBasket = user.basket.concat(item);
    const clone = Object.assign({}, user, {basket: updatedBasket});

    console.log('|addToBasket', clone);

    return clone;

}

function applyTax(user) {
    const taxRate = 1.03;

    const updatedBasket = user.basket.map(data => {
        return {
            id: data.id,
            name: data.name,
            price: data.price * taxRate
        }
    });

    const clone = Object.assign({}, user, {basket: updatedBasket});

    console.log('|applyTax ', clone);

    return clone;
}

function buy(user) {
    const updatedPurchases = user.basket;

    const clone = Object.assign({}, user, {purchases: updatedPurchases});

    console.log('|buy ', clone);

    return clone;
}

function emptyBasket(user) {
    const updatedBasket = [];

    const clone = Object.assign({}, user, {basket: updatedBasket});

    console.log('|emptyBasket ', clone);

    return clone;

}

//Implement a cart feature:
// 1. Add items to basket.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

/*
- we need fn, which will change user (should be pure)
- we will apply many functions also (compose)
 */