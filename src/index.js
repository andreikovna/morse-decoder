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
    let i = 0;
    let array = []; //массив, куда сложим разделенную фразу по 10 символов

    while (i < expr.length) { //создаем новый массив
        array.push(expr.substring(i,i+10));
        i +=10;
    }

let a = /00/gi;
let dot = /10/gi;
let slash = /11/gi;

//заменяем все на точки-тире

	for (let i = 0; i < array.length; i++) {
  array[i]= array[i].replace(a,'')
}

for (let i = 0; i < array.length; i++) {
  array[i]= array[i].replace(dot,'.')
}

for (let i = 0; i < array.length; i++) {
  array[i]= array[i].replace(slash,'-')
}

let result =[];
for (let i = 0; i < array.length; i++) {
    result.push(MORSE_TABLE[array[i]])
}
let resultString = '';
for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
        resultString = resultString+' ';
    } else {
        resultString = resultString+result[i];
    }
}
return resultString;
}



module.exports = {
    decode
}