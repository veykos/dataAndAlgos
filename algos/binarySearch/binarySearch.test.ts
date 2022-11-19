import binarySearch from "./binarySearch"
const numbersArr = [1,2,3,15,20,22,26,30,45,50,60,100,102,105,107,200]

describe('Binary search should', () => {
    test('Return index of 1 if searched element has index of 1', () => {
        expect(binarySearch(numbersArr,2)).toBe(1)
    })
    test('Return index of 4 if searched element has index of 4', () => {
        expect(binarySearch(numbersArr,20)).toBe(4)
    })
    test('Return index of 8 if searched element has index of 8', () => {
        expect(binarySearch(numbersArr,45)).toBe(8)
    })
    test('Return index of -1 if searched element is not found', () => {
        expect(binarySearch(numbersArr,99)).toBe(-1)
    })
    test('Return index of -1 if searched element is not found 2', () => {
        expect(binarySearch(numbersArr,201)).toBe(-1)
    })
    test('Return index of -1 if searched element is not found 3', () => {
        expect(binarySearch(numbersArr,16)).toBe(-1)
    })
})