// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения.

function removeString(message, symbol) {
	return message.replaceAll(symbol, '');
}

console.log(removeString('Большое и интересное сообщение', 'о')); // Бльше и интересне сбщение
