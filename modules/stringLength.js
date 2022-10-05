function stringLength(string) {
    let length = string.length;
    if (length < 1 || length > 5) {
        return 'error: string length should be between 1 and 5';
    } else {
        return length;
    }
}


module.exports = stringLength;