const caesarCipher = require("./caesarCipher");

test('It should exist', () => {
    expect(caesarCipher).toBeDefined()
})

test('It\'s not a word', () => {
    expect(caesarCipher(2, 2)).toBe('It\'s not a word')
})

test('The factor\'s not a number', () => {
    expect(caesarCipher('word', '2')).toBe('The factor\'s not a number')
})

test('xyz to abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('alberto to kvlobdy', () => {
    expect(caesarCipher('alberto', 10)).toBe('kvlobdy')
})

test('gustavo to xljkrmf', () => {
    expect(caesarCipher('gustavo', 17)).toBe('xljkrmf')
})

test('ashley to zrgkdx', () => {
    expect(caesarCipher('ashley', -1)).toBe('zrgkdx')
})

test('alberto to alberto', () => {
    expect(caesarCipher('alberto', 26)).toBe('alberto')
})