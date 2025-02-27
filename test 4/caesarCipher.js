const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const caesarCipher = (word, factor) =>{
    if (typeof word !== 'string')
        return 'It\'s not a word'
    if(typeof factor !== 'number')
        return 'The factor\'s not a number'

    const cipheredAlphabet = cipher(factor)
    let cipheredWord = ''
    for (let j = 0; j < word.length; j++) {
    for(let i = 0; i < alphabet.length; i++){
        if (word[j] == alphabet[i]){
            cipheredWord += cipheredAlphabet[i]
        }
    }
    }
    return cipheredWord
}

const cipher = (factor) => {
    return alphabet.slice(factor) + alphabet.slice(0, factor)
}

module.exports = caesarCipher