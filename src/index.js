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
    let res = '';
    for (let i = 0; i < expr.length; i+=10) {
        let letter = expr.substring(i, i + 10);
        if (letter === '**********') {
            res += ' ';
            continue;
        }
        let code = '';
        for (let j = 0; j < 10; j += 2) {
            switch (letter.substring(j,j + 2)) {
                case '11':
                    code += '-';
                    break;
                case '10':
                    code += '.';
                    break;
            }
        }
        res += MORSE_TABLE[code]
    }
    return res;
}

module.exports = {
    decode
}