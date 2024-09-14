//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

const searchSubString = (puzzle, word) => {
	const totalRows = puzzle.length;
	const totalCols = puzzle[0].length;

	for (let row = 0; row < totalRows; row++) {
		const currentRowString = puzzle[row].join('');
		const reversedRowString = currentRowString.split('').reverse().join('');

		if (currentRowString.includes(word) || reversedRowString.includes(word)) {
			return true;
		}
	}

	for (let col = 0; col < totalCols; col++) {
		let currentColString = '';

		for (let row = 0; row < totalRows; row++) {
			currentColString += puzzle[row][col];
		}

		const reversedColString = currentColString.split('').reverse().join('');

		if (currentColString.includes(word) || reversedColString.includes(word)) {
			return true;
		}
	}

	for (let startRow = 0; startRow < totalRows; startRow++) {
		for (let startCol = 0; startCol < totalCols; startCol++) {
			let diagonalString = '';

			for (
				let i = 0;
				startRow + i < totalRows && startCol + i < totalCols;
				i++
			) {
				diagonalString += puzzle[startRow + i][startCol + i];
			}

			const reversedDiagonalString = diagonalString
				.split('')
				.reverse()
				.join('');

			if (
				diagonalString.includes(word) ||
				reversedDiagonalString.includes(word)
			) {
				return true;
			}
		}
	}

	for (let startRow = totalRows - 1; startRow >= 0; startRow--) {
		for (let startCol = 0; startCol < totalCols; startCol++) {
			let diagonalString = '';

			for (let i = 0; startRow - i >= 0 && startCol + i < totalCols; i++) {
				diagonalString += puzzle[startRow - i][startCol + i];
			}

			const reversedDiagonalString = diagonalString
				.split('')
				.reverse()
				.join('');

			if (
				diagonalString.includes(word) ||
				reversedDiagonalString.includes(word)
			) {
				return true;
			}
		}
	}

	return false;
};

const examplePuzzle = [
	['b', 'l', 'g', 'o', 'l', 'd', 's'],
	['x', 'k', 'q', 'w', 'i', 'j', 'p'],
	['a', 'n', 'w', 'k', 'k', 'p', 'n'],
	['h', 'e', 'e', 'e', 'k', 'i', 'l'],
	['q', 'e', 'k', 'a', 'y', 'q', 'a'],
	['h', 'u', 'h', 'a', 'e', 'a', 'u'],
	['k', 'q', 'j', 'c', 'c', 'm', 'r'],
];

// Level 1
console.log(searchSubString(examplePuzzle, 'like')); // true
console.log(searchSubString(examplePuzzle, 'gold')); // true
console.log(searchSubString(examplePuzzle, 'queen')); // true

// Level 2
console.log(searchSubString(examplePuzzle, 'cake')); // true
