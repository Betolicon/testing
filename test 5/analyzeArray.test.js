const analyzeArray = require('./analyzeArray')

test('It should exist', () => {
    expect(analyzeArray).toBeDefined()
})

test('[4,2,3] to {average: 3, min: 2, max: 4, length: 3}', () =>{
    expect(analyzeArray([4,2,3])).toStrictEqual({average: 3, min: 2, max: 4, length: 3})
})

test('[1,8,3,4,2,6] to {average: 4, min: 1, max: 8, length: 6}', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
})

test('[6] to {average: 6, min: 6, max: 6, length: 1}', () =>{
    expect(analyzeArray([6])).toStrictEqual({average: 6, min: 6, max: 6, length: 1})
})

test('[] to {average: 0, min: 0, max: 0, length: 0}', () =>{
    expect(analyzeArray([])).toStrictEqual({average: 0, min: 0, max: 0, length: 0})
})