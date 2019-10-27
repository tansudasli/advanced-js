const list = new Array(6000).join('1.1').split('.');

function removeItemsFromList() {
    let item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0); //instead removeItemsFromList(); to eliminate stack overflow
    }
};

console.log(list.length);

removeItemsFromList();

console.log(list.length); //use chrome's javascript console, and run this line again & again