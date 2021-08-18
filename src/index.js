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

    let n=0;

    while (n < array.length) { // заменить пробелы
        if (array[n] === "**********") {
            array[n] = " ";
            array.push(array[n]);
            n +=1;
        } else {
            array.push(array[n]);
            n +=1;
        }
    }

    let n=0;

let array1 =[]; //массив без *****

  while (n < array.length) { // заменить пробелы
        if (array[n] === "**********") {
            array[n] = " ";
            array1.push(array[n]);
            n +=1;
        } else {
            array1.push(array[n]);
            n +=1;
        }

    }

let a = /00/gi;
let dot = /10/gi;
let slash = /11/gi;

//заменяем все на точки-тире

	for (let i = 0; i < array1.length; i++) {
  array1[i]= array1[i].replace(a,'')
}

for (let i = 0; i < array1.length; i++) {
  array1[i]= array1[i].replace(dot,'.')
}

for (let i = 0; i < array1.length; i++) {
  array1[i]= array1[i].replace(slash,'-')
}

let result =[];
for (let i = 0; i < array1.length; i++) {
    result.push(MORSE_TABLE[array1[i]])
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