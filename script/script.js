//#1

let numberObject = {
    number: Number(prompt("Введите число от 0 до 999: ")),
    units: 0,
    tens: 0,
    hundreds: 0,
}

let x = numberObject.number

function transform(x) {
    if (numberObject.number <= 9) {
        numberObject.units = `Единицы: ${numberObject.number}`;
        console.log(numberObject.units);
    } else if (numberObject.number >= 10 && numberObject.number <= 99) {
        numberObject.units = `Единицы: ${Math.floor(numberObject.number % 10)}`;
        numberObject.tens = `Десятки: ${Math.floor(numberObject.number / 10)}`;
        console.log(numberObject.units, numberObject.tens);
    } else if (numberObject.number >= 100 && numberObject.number <= 999) {
        numberObject.units = `Единицы: ${Math.floor(numberObject.number % 10)}`;
        numberObject.tens = `Десятки: ${Math.floor(numberObject.number / 10 % 10)}`;
        numberObject.hundreds = `Сотни: ${Math.floor(numberObject.number / 100)}`;
        console.log(numberObject.units, numberObject.tens, numberObject.hundreds);
    } else {
        delete numberObject.number;
        delete numberObject.units;
        delete numberObject.tens;
        delete numberObject.hundreds;
        console.log(`Вы ввели неверное значение ${numberObject}`);
    }

}

transform()


//#2

const cart = [];

for (let i = 0; i <= Math.random() * 100; i += 1) {
    const cartItem = {
        price: Math.ceil(Math.random() * 1000),
        name: `cartItem #${Math.ceil(i)}`,
        quantity: Math.ceil(Math.random() * 10),
    }
    cart.push(cartItem);

}



console.log(cart);

let cartPrice = 0;

for (let i = 0; i < cart.length; i += 1) {
    const item = cart[i];
    item.totalPrice = item.price * item.quantity;
    cartPrice += item.totalPrice;
}

console.log(cartPrice);
