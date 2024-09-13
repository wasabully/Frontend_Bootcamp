//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function counter() {
	let count = 0;

	return function () {
		let currentCount = count;
		count += 3;
		return currentCount;
	};
}

const myCounter = counter();

console.log(myCounter()); // Вернет 0
console.log(myCounter()); // Вернет 3
console.log(myCounter()); // Вернет 6
console.log(myCounter()); // Вернет 9
