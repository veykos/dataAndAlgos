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
    test('it should return an array of 6 when given arrays that match up to 6', () => {
        const newArr = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
        expect(newArr.length).toBe(6)
    })
    test('it should return properly the updated inventory, without duplicates', () => {
        const newArr = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
        expect(newArr).toStrictEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]])
    })
})