// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате: {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
	const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
	const cashBreakdown = {};
	let totalBanknotes = 0;

	if (sum % 50 !== 0) {
		return 'Incorrect value';
	}

	for (let i = 0; i < banknotes.length; i++) {
		const note = banknotes[i];
		const banknotesCount = Math.floor(sum / note);
		if (banknotesCount > 0) {
			cashBreakdown[note] = banknotesCount;
			totalBanknotes += banknotesCount;
			sum -= banknotesCount * note;
		}
	}

	if (totalBanknotes > 20) {
		return 'Limit exceeded';
	}

	return cashBreakdown;
}

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // Limit exceeded
