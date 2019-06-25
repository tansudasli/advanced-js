const list = new Array(6000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0); //instead removeItemsFromList(); to eliminate stack overflow
    }
};

console.log(list.length);

removeItemsFromList();

console.log(list.length);