// Вам надо набор функций который будет симулировать работу калькулятора.
// Для этого вам надо написать 9 функций, которые могут принимать в качестве аргумента другую функцию, если функция передана, то надо вернуть вызов функции с числом n, иначе вернуть число n.
// Например, функция one может принять в качестве аргумента функцию sum, тогда в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые принимают в качестве аргумента первое число, а возвращают функцию, которая принимает в качестве аргумента второе число и возвращает их сумму/разность/частое/произведение.

function number(n) {
    return function(callback) {
        if (typeof callback === 'function') {
            return callback(n);
        }
        return n;
    };
}

const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);

function plus(a) {
    return function(b) {
        return a + b;
    };
}

function minus(a) {
    return function(b) {
        return a - b;
    };
}

function divide(a) {
    return function(b) {
        return a / b;
    };
}

function mult(a) {
    return function(b) {
        return a * b;
    };
}

console.log(one(mult(three(plus(four()))))); // В итоге вернется 7
