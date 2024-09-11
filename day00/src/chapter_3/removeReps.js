// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения.

function removeReps(array) {
	let uniqueValues = [];

	for (let i = 0; i < array.length; i++) {
		let unique = true;

		for (let j = 0; j < uniqueValues.length; j++) {
			if (array[i] === uniqueValues[j]) {
				unique = false;
				break;
			}
		}
		if (unique) {
			uniqueValues.push(array[i]);
		}
	}
	return uniqueValues;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
