const MORSE_TABLE = {
	'.-':     'a',
	'-...':   'b',
	'-.-.':   'c',
	'-..':    'd',
	'.':      'e',
	'..-.':   'f',
	'--.':    'g',
	'....':   'h',
	'..':     'i',
	'.---':   'j',
	'-.-':    'k',
	'.-..':   'l',
	'--':     'm',
	'-.':     'n',
	'---':    'o',
	'.--.':   'p',
	'--.-':   'q',
	'.-.':    'r',
	'...':    's',
	'-':      't',
	'..-':    'u',
	'...-':   'v',
	'.--':    'w',
	'-..-':   'x',
	'-.--':   'y',
	'--..':   'z',
	'.----':  '1',
	'..---':  '2',
	'...--':  '3',
	'....-':  '4',
	'.....':  '5',
	'-....':  '6',
	'--...':  '7',
	'---..':  '8',
	'----.':  '9',
	'-----':  '0',
};

function decode(expr) {
	/* console.log (`Длинна входящего массива = ${expr.length}`);  */
	/* console.log (`Входящий масиив: \n${expr}`); */

	let j = 0;
	let l = 0;
	let k = 0;
	let indexZ = 0;
	let morzeLet = [];
	let numStr = [];

	let numLet = [];
	let morzeLetArr = [];

	let morzeWorldStr = '';
	let morzeLetr = '';

	let morzeWord = '';

	let rezult = '';

	for (let i in expr) {                                 // РАБОТАЕТ ИЗВЛЕКАЕТ  Строчный массив 1уровня  1 и 0  со ***
		morzeWorldStr = morzeWorldStr + expr[i];
		j = j + 1;
		if (j === 10) {
			numStr.push(morzeWorldStr).toString();
			morzeWorldStr = '';
			j = 0;
		}
	}
	
/* 	console.log (`Исходящий строчный масиив: \n${numStr}`); */


	for (let i in numStr) {                               // РАБОТАЕТ ИЗВЛЕКАЕТ  Строчный массив 1уровня  1 и 0  со *** но без 0 впереди
		numLet[i] = '';
		for (let j = 0; j < numStr[i].length; j++) {

			if (k === 0) {

				if (numStr[i][j] !== '0') {
					numLet[i] = numLet[i] + numStr[i][j];
					k = 1;
				}

			} else {
				numLet[i] = numLet[i] + numStr[i][j];
			}
		}
		if (numLet[i] === '**********'){numLet[i] = '**'}
		k = 0;
	}

j = 0;
i = 0;

	for (let i in numLet) {                               // РАБОТАЕТ ИЗВЛЕКАЕТ  Строчный массив 1уровня  '.' и '-'  со *** но без 0 впереди
		morzeLet[i] = '';
		for (j = 0; j < numLet[i].length; j++) {
			morzeLetr = morzeLetr + numLet[i][j];
			k = k + 1;
			if (k === 2) {
				if (morzeLetr === '**') {
					morzeLet[i] = morzeLet[i] + ' ';
				}
				if (morzeLetr === '10') {
					morzeLet[i] = morzeLet[i] + '.';
				}
				if (morzeLetr === '11') {
					morzeLet[i] = morzeLet[i] + '-';
				}
				k = 0;
				morzeLetr = '';
			}
		}
	}


	for (let i in morzeLet) {
		if (morzeLet[i] === ' ') {
			rezult = rezult + ' ';	
		} else {
			rezult = rezult + MORSE_TABLE[morzeLet[i]];
		}
	}




	console.log(rezult);




return rezult;
}

module.exports = {
	decode
}