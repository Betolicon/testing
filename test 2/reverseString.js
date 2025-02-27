const reverseString = (word) =>{
    let reverseWord = '';
    if(typeof word !== 'string')
        return 'Error: Input is not a string.';
    for(let i = word.length-1; i >= 0; i--)
        reverseWord += word[i];
    return reverseWord
}

module.exports = reverseString