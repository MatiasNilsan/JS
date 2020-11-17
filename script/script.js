//#1

let letters = 8;
let numbers = 9;

const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];


let chessBoard = document.querySelector('.chessBoard');

for (let i = 0; i < numbers; i += 1) {
    let row = chessBoard.appendChild(document.createElement('div'));
    row.classList.add('row');
    row.innerText = `${numbersArr[i]}`;
    for (let j = 0; j < letters; j += 1) {
        let cell = row.appendChild(document.createElement('span'));
        cell.classList.add(`cell`);
        for (let k = 0; k < 8; k += 1) {
            document.getElementsByTagName('span')[j].innerText = `${lettersArr[j]}`;
        }
    }

}



//#2

const cart = [];

const cartGoods = document.querySelector('.cart');

let cartPrice = 0;


for (let i = 0; i <= Math.random() * 100; i += 1) {
    const cartItem = {
        price: Math.ceil(Math.random() * 1000),
        name: `cartItem #${Math.ceil(i)} `,
        quantity: Math.ceil(Math.random() * 10),
        totalPrice: 0,
    }
    cart.push(cartItem);

    good = document.createElement('div');
    const goodName = document.createElement('h3');
    goodName.innerText = `Наименование товара: ${cartItem.name}`;
    const goodPrice = document.createElement('p');
    goodPrice.innerText = `Цена за единицу товара: ${cartItem.price}`;
    const goodQuantity = document.createElement('p');
    goodQuantity.innerText = `Количество товара: ${cartItem.quantity}`;

    cart[i].totalPrice = cart[i].price * cart[i].quantity;
    cartPrice += cart[i].totalPrice;

    const goodTotalPrice = document.createElement('p')
    goodTotalPrice.innerText = `Сумма за товар: ${cart[i].totalPrice}`;

    cartGoods.appendChild(good);
    good.appendChild(goodName);
    good.appendChild(goodPrice);
    good.appendChild(goodQuantity);
    good.appendChild(goodTotalPrice);
}


const totalCartPrice = document.createElement('p');
totalCartPrice.classList.add('total');
totalCartPrice.innerText = `Сумма итого: ${cartPrice}`;
cartGoods.appendChild(totalCartPrice);



