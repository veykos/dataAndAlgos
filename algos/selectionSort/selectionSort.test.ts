import selectionSort from "./selectionSort";

describe('selectionSort should', () => {
    test('be defined and be a function', () => {
        expect(typeof selectionSort).toBe('function')
    })
    test('returns a sorted array', () => {
        const arr1 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
        const arr2 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
        expect(selectionSort(arr1)).toStrictEqual(arr2.sort((a,b) => a-b))
    })
    
})