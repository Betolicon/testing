function capitalize(word) {
    if(typeof word !== 'string')
        return('Not a word')
    return word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase()
}

module.exports = capitalize;