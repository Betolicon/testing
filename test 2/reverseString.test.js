const reverseString = require('./reverseString')

test('It should exist', () => {
    expect(reverseString).toBeDefined()
})

test('alberto to otrebla', () => {
    expect(reverseString('alberto')).toBe('otrebla')
})

test('"123" to "321"', () => {
    expect(reverseString('123')).toBe('321')
})

test('123 to Error', () => {
    expect(reverseString(123)).toBe('Error: Input is not a string.')
})

test('"Hola, soy Alberto" to "otreblA yos ,aloH"', () => {
    expect(reverseString("Hola, soy Alberto")).toBe('otreblA yos ,aloH')
})

test('"Hola, soy Alberto!!!" to "!!!otreblA yos ,aloH"', () => {
    expect(reverseString("Hola, soy Alberto!!!")).toBe('!!!otreblA yos ,aloH')
})