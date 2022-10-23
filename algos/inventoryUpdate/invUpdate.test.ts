import updateInventory from "./invUpdate";

describe('updateInventory function should', () => {
    test('be a function', () => {
        expect(typeof updateInventory).toBe('function')
    })
    test('return an array', () => {
        expect(Array.isArray(updateInventory([],[]))).toBe(true)
    })
    test('the array inside the array should contain a number, and a string', () => {
        const newArr = updateInventory([[21,'Bowling ball'],[33,'Puppets']],[[22,'Socks']])
        expect(typeof newArr[0][0]).toBe('number')
        expect(typeof newArr[0][1]).toBe('string')
    })
})