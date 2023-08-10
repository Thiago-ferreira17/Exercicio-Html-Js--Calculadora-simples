const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

function finalValue(finalValueWithDiscount) {

    finalValueWithDiscount += value
    
}

cart.forEach(value => {

    if (value > 30) {

        const discount = calculateDiscount(value, 10)

        finalValueWithDiscount += (value - discount)

    }
    else {

        finalValueWithDiscount += value
    }

});

function finalValueDisconted(params) {
    
}

console.log(` O valor final é: R$ ${finalValue}, mas você teve desconto e 
irá pagar apenas: R$ ${finalValueWithDiscount.toFixed(2)},
economizando R$ ${finalValueDisconted}`)

