function substractTwo(num) {
    return num - 2;
}

function calculate(total) {
    const  sumTotal = isNaN(total) ? 7 : total + 2;

    return substractTwo(sumTotal);
}



console.log(calculate())
