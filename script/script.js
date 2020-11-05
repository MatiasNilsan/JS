
//#1
// let a = 1, b = 1, c, d;

// c = ++a; alert(c);  //Префиксная форма возвращает новое значение
// d = b++; alert(d);  //Постфиксная форма возвращает старое значение (до увеличения числа).
// c = (2 + ++a); alert(c);  //a вернула новое значение (3)
// d = (2 + b++); alert(d);  //b в данном случае вернула значение предыдущего инкремента (2)
// alert(a);  //а не изменилась после предыдущего инкремента (3)
// alert(b);  //b вернула значение последнего постфиксного инкремента (3)


//#2
// var a = 2;
// var x = 1 + (a *= 2);
// x будет равен 5, так как вызов с присваиванием переменной а вернул результат 4


//#3
let a = Number((Math.random() * 1000) - 500).toFixed(0);
let b = Number((Math.random() * 1000) - 500).toFixed(0);

function result(a, b) {
    if (a >= 0 && b >= 0) {
        let res = a - b;
        return res;
    } else if (a < 0 && b < 0) {
        res = a * b;
        return res;
    } else {
        res = Number(a) + Number(b);
        return res;
    }
}

alert(result(a, b));


//#4

function getRandom(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

let p = Number(getRandom(0, 16));
switch (p) {
    case 0:
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
        alert("2");
        break;
    case 3:
        alert("3");
        break;
    case 4:
        alert("4");
        break;
    case 5:
        alert("5");
        break;
    case 6:
        alert("6");
        break;
    case 7:
        alert("7");
        break;
    case 8:
        alert("8");
        break;
    case 9:
        alert("9");
        break;
    case 10:
        alert("10");
        break;
    case 11:
        alert("11");
        break;
    case 12:
        alert("12");
        break;
    case 13:
        alert("13");
        break;
    case 14:
        alert("14");
        break;
    case 15:
        alert("15");
        break;

}


//#5

function addit(num1, num2) {
    result = Number(num1) + Number(num2);
}

function subt(num1, num2) {
    result = Number(num1) - Number(num2);
}

function multipl(num1, num2) {
    result = Number(num1) * Number(num2);
}

function divis(num1, num2) {
    result = Number(num1) / Number(num2);
}


//#6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            return arg1 + arg2;
        case "вычитание":
            return arg1 - arg2;
        case "умножение":
            return arg1 * arg2;
        case "деление":
            return arg1 / arg2;
    }

}

//#7 
// null – тип данных null, что означает, что значение не известно. 0 – тип данных number, это число 0.
// null > 0 и null == 0 выдаст false.
// Но если сравнить null >= 0 ты выдаст true. Я так понимаю это ошибка языка.


//#8

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else if (pow <= 0) {
        alert("Введите число большее или равное 1");
    } else {
        return val;
    }
}




