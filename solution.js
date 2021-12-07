function validISBN10(isbn) {
    let firstNineChar = '';
    let sum = 0;

    if (isbn.length !== 10) {
        return false
    }

    for (let i = 0; i < isbn.length - 1; i++) {
        if (parseInt(isbn[i]) >= 0 && parseInt(isbn[i]) <= 9) {
            sum += parseInt(isbn[i]) * (i+1)
            firstNineChar += isbn[i];
        } else {
            return false;
        }
    }
    
    if (isbn[9] === 'X') {
        sum += 100;
    } else if (parseInt(isbn[9]) >= 0 && parseInt(isbn[9]) <= 9) {
        sum += parseInt(isbn[9]) * 10;
    } else {
        return false
    }

    if (sum % 11 === 0) {
        return true;
    }
    return false
}

console.log(validISBN10('111222333X'))
console.log(validISBN10('1112223339'))
console.log(validISBN10('111222323X'))
console.log(validISBN10('1112X23339'))