// Вам нужно написать функция для решения Судоку. Функция принимает один аргумент - строку, в ней на месте пропущенных цифр стоят -.
// Функция должна вернуть строку, в которой все значения будут заполнены.

// Давайте сыграем в настоящую головоломку Судоку, обращая внимание на то, как мы приближаемся к решению поставленной задачи.
// - Какие стратегии мы принимаем и почему?
// - Как мы выбираем, с чего начать?
// - Как мы узнаем, когда действительно следует поставить число в клетку?
// - Что мы делаем, когда мы окончательно не знаем, как заполнить остальные клетки?
// Размышляя о нашей человеческой стратегии, важно понимать, что иногда стратегии, которые работают для людей, будет трудно реализовать на компьютере.
// Однако верно и обратное: стратегии компьютера могут быть не всегда удобны для людей, потому что нам придется писать слишком много текста, использовать слишком много листов бумаги или помнить много информации, которую в состоянии запомнить компьютер, но не человек.
// Обязательно напишите метод `prettyBoard`, который берет доску, записанную в строчку и возвращает отформатированный вариант, более привычный для нашего визуального восприятия. Например:

// ```
// 1 - 5 8 - 2 - - -
// - 9 - - 7 6 4 - 5
// 2 - - 4 - - 8 1 9
// - 1 9 - - 7 3 - 6
// 7 6 2 - 8 3 - 9 -
// - - - - 6 1 - 5 -
// - - 7 6 - - - 3 -
// 4 3 - - 2 - 5 - 1
// 6 - - 3 - 8 9 - -
// ```;

// функция для преобразования строки Судоку в двумерный массив (9x9).
// функция для форматированного вывода доски с разделением на блоки 3x3.
// функция для проверки возможности вставки числа в клетку.
// функция, реализующая логику решения Судоку с помощью метода backtracking.
// основная функция, которая связывает всё вместе, принимает строку и возвращает решённое Судоку или сообщение о том, что решение не найдено.

const GRID_SIZE = 9;
const BOX_SIZE = 3;

function solve(sudokuString) {
	const board = stringToBoard(sudokuString);
	return solveSudoku(board) ? prettyBoard(board) : 'Не удалось решить Судоку';
}

function stringToBoard(sudokuString) {
	const board = [];
	for (let i = 0; i < sudokuString.length; i += GRID_SIZE) {
		board.push(sudokuString.slice(i, i + GRID_SIZE).split(''));
	}
	return board;
}

function prettyBoard(board) {
	let formattedBoard = '';

	formattedBoard += '+----------------------+\n';

	for (let row = 0; row < GRID_SIZE; row++) {
		if (row % BOX_SIZE === 0 && row !== 0) {
			formattedBoard += '+------+-------+-------+\n';
		}
		formattedBoard += '|';
		for (let col = 0; col < GRID_SIZE; col++) {
			if (col % BOX_SIZE === 0 && col !== 0) {
				formattedBoard += '| ';
			}
			formattedBoard += board[row][col] + ' ';
		}
		formattedBoard += '|\n';
	}
	formattedBoard += '+----------------------+\n';

	return formattedBoard;
}

function isNumberValid(board, row, col, num) {
	num = String(num);

	for (let i = 0; i < GRID_SIZE; i++) {
		if (board[row][i] === num) {
			return false;
		}
	}

	for (let i = 0; i < GRID_SIZE; i++) {
		if (board[i][col] === num) {
			return false;
		}
	}

	const startRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
	const startCol = Math.floor(col / BOX_SIZE) * BOX_SIZE;

	for (let i = 0; i < BOX_SIZE; i++) {
		for (let j = 0; j < BOX_SIZE; j++) {
			if (board[startRow + i][startCol + j] === num) {
				return false;
			}
		}
	}
	return true;
}

function solveSudoku(board) {
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (board[row][col] === '-') {
				for (let num = 1; num <= GRID_SIZE; num++) {
					if (isNumberValid(board, row, col, num)) {
						board[row][col] = String(num);

						if (solveSudoku(board)) {
							return true;
						}

						board[row][col] = '-';
					}
				}
				return false;
			}
		}
	}
	return true;
}

const sudokuString =
	'1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
console.log(solve(sudokuString));

// Ниже представленны тестовые данные для вашей функции, они имеют 3 уровня сложности.
// * Пять головоломок могут быть решены с помощью базовой логики.
// * Пять требуют немного более продвинутой логики.
// * Пять требуют от вашего решателя умения угадывать и перерешивать, если зашёл в тупик.

('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3');
('29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9');
('-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-');
('6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--');
('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----');
('-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--');
('-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7');
('----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----');
('3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--');
('3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-');
('-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-');
('--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--');
('----------2-65-------18--4--9----6-4-3---57-------------------73------9----------');
('---------------------------------------------------------------------------------');
